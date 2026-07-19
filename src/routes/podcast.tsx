import { createFileRoute } from "@tanstack/react-router";
import { AudioLines } from "lucide-react";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast — The Fussy Traveller" },
      { name: "description", content: "The Fussy Traveller podcast — coming soon on Spotify." },
    ],
  }),
  component: PodcastPage,
});

function PodcastPage() {
  return (
    <div className="px-3 md:px-5 py-6">
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[oklch(0.25_0.05_260)] via-[oklch(0.35_0.12_150)] to-[oklch(0.5_0.18_145)] min-h-[80vh] flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px, 40px 40px",
        }} />

        <div className="relative text-center max-w-2xl">
          <div className="flex items-center justify-center gap-6 mb-10">
            {/* Spotify logo */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#1DB954] grid place-items-center shadow-2xl">
              <svg viewBox="0 0 168 168" className="w-14 h-14 md:w-16 md:h-16" fill="black" aria-label="Spotify">
                <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"/>
              </svg>
            </div>

            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 grid place-items-center shadow-2xl">
              <AudioLines className="w-12 h-12 md:w-14 md:h-14 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <span className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white">
            The Podcast
          </span>
          <h1 className="mt-6 font-display text-6xl md:text-8xl text-white leading-[0.95]">
            Coming soon
          </h1>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-md mx-auto">
            Honest travel conversations, straight from the source. Follow along and be the first to listen.
          </p>
        </div>
      </section>
    </div>
  );
}
