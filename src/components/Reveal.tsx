import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

type Props = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Reveal({ children, className = "", delay = 0, ...rest }: Props) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(6px)",
      }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
