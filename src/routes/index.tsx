import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import shellImg from "@/assets/shell-beach.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [tagline, setTagline] = useState(0);
  const taglines = [
    "New podcast coming soon on Spotify",
    "The Fussy Traveller",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTagline((i) => (i + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-3 md:px-5">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] mt-3">
        <img
          src={heroImg}
          alt="Luxury infinity pool overlooking the ocean"
          className="w-full h-[70vh] md:h-[85vh] object-cover"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest text-white border border-white/20">
              <Sparkles className="w-3.5 h-3.5" /> The Fussy Traveller
            </span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 font-display text-5xl md:text-8xl text-white leading-[0.95] max-w-4xl">
              Feel Fabulous<br />as you Travel<br /><em className="text-primary not-italic">in Style</em>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 text-white/90 text-sm md:text-base uppercase tracking-[0.25em] max-w-lg">
              Forget all the fuss, we've got it sussed
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl text-primary leading-tight">
            I have created this to help you to enhance and enjoy your holiday or planned trip to the absolute maximum.
          </h2>
        </Reveal>
        <div className="mt-12 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          <Reveal delay={100}>
            <p>Do you love to travel in comfort and class? If so then you are in the right place! Nothing wrong with having royal standards!</p>
          </Reveal>
          <Reveal delay={200}>
            <p>The Fussy Traveller can take away the stress of planning a trip by using honest reviews to help with luxury travel.</p>
          </Reveal>
          <Reveal delay={300}>
            <p>When away from home, you want to sleep well and have your home comforts or should you take some with you? Here you will get not only reviews, but top tips and plenty of pics to ensure that you choose the right place for you. The attention to detail will help you to make the right decisions.</p>
          </Reveal>
          <Reveal delay={400}>
            <p>Planning a big trip? Read our suggested itineraries and see how to make the most of your time away, with tips of where NOT to go and what to see.</p>
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="max-w-5xl mx-auto px-2 pb-16">
        <Reveal>
          <article className="grid md:grid-cols-2 rounded-[2.5rem] overflow-hidden bg-card border border-border/60">
            <img
              src={shellImg}
              alt="Seashells on a tropical beach"
              className="w-full h-72 md:h-full object-cover"
              loading="lazy"
              width={1400}
              height={1000}
            />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display text-3xl md:text-4xl">Hidden Spanish Secret</h3>
              <p className="mt-2 text-sm text-muted-foreground">by michelle bennett | Jul 26, 2017 | Europe, SPAIN | 0 Comments</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                14 NIGHTS West Coast Fly Drive for Debbie Fireman Arrive San Francisco 2ND SEPT SAT 2 SF AFTERNOON AND EVE – maybe shops in Union Square, and dinner at Cheesecake Factory, this is on top floor of MACYS – go to restaurant and book first as gets very…
              </p>
              <Link to="/" className="mt-6 self-start inline-flex items-center gap-2 text-primary font-medium">
                read more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </Reveal>
      </section>
    </div>
  );
}
