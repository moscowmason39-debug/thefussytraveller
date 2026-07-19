import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Compass, Heart } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import amalfiImg from "@/assets/dest-amalfi.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest text-white border border-white/20">
            <Sparkles className="w-3.5 h-3.5" /> Luxury travel, sussed
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-8xl text-white leading-[0.95] max-w-4xl">
            Feel Fabulous<br />as you Travel<br /><em className="text-primary not-italic">in Style</em>
          </h1>
          <p className="mt-5 text-white/85 text-base md:text-lg tracking-wide max-w-lg">
            Forget all the fuss — we've got it sussed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/destinations" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition">
              Explore destinations <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/podcast" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3.5 text-sm font-medium hover:bg-white/20 transition">
              Listen to the podcast
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">A note from Michelle</p>
        <h2 className="font-display text-4xl md:text-6xl text-primary leading-tight">
          I've created this to help you enhance and enjoy your holiday to the absolute maximum.
        </h2>
        <div className="mt-10 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          <p>Do you love to travel in comfort and class? If so, you are in the right place. Nothing wrong with having royal standards.</p>
          <p>The Fussy Traveller takes away the stress of planning a trip using honest reviews to help with luxury travel — the sort of detail that only comes from actually being there.</p>
          <p>Planning a big trip? Read our suggested itineraries and see how to make the most of your time away, with tips of where NOT to go and what to see.</p>
        </div>
      </section>

      {/* Feature cards */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 px-2 pb-12">
        {[
          { icon: Compass, title: "Curated itineraries", body: "Day-by-day plans built from real trips — hotels, tables, and neighbourhoods worth the detour." },
          { icon: Heart, title: "Honest reviews", body: "No fluff. What's actually worth the spend and what to skip, from someone with high standards." },
          { icon: Sparkles, title: "Little luxuries", body: "The comforts that turn a good trip into an unforgettable one. Details matter." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-[2rem] bg-card border border-border/60 p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="mt-5 font-display text-2xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </section>

      {/* Featured post */}
      <section className="max-w-7xl mx-auto px-2 py-16">
        <div className="flex items-end justify-between mb-6 px-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Latest</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">From the journal</h2>
          </div>
          <Link to="/destinations" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary">
            All stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <article className="grid md:grid-cols-2 rounded-[2.5rem] overflow-hidden bg-card border border-border/60">
          <img src={amalfiImg} alt="Amalfi coast" className="w-full h-72 md:h-full object-cover" loading="lazy" width={1200} height={1400} />
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Europe · Italy</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">Hidden Spanish Secret</h3>
            <p className="mt-2 text-sm text-muted-foreground">by Michelle Bennett · Jul 26 · 0 Comments</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              14 nights, west-coast fly-drive. Arrive San Francisco, afternoon and evening in Union Square, dinner at Cheesecake Factory on top floor of Macy's — go to restaurant and book first, it gets very busy…
            </p>
            <button className="mt-6 self-start inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">
              Read more <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}
