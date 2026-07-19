import { createFileRoute } from "@tanstack/react-router";
import santoriniImg from "@/assets/dest-santorini.jpg";
import kyotoImg from "@/assets/dest-kyoto.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import amalfiImg from "@/assets/dest-amalfi.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — The Fussy Traveller" },
      { name: "description", content: "Curated luxury destinations from Santorini to the Maldives — honest reviews and thoughtful itineraries." },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  { img: santoriniImg, name: "Santorini", region: "Greece", tag: "Cliffside escapes", blurb: "Whitewashed villages, blue-domed churches and sunsets that stop conversation." },
  { img: maldivesImg, name: "Maldives", region: "Indian Ocean", tag: "Overwater luxury", blurb: "Turquoise lagoons, private villas and the sound of nothing but water." },
  { img: kyotoImg, name: "Kyoto", region: "Japan", tag: "Quiet culture", blurb: "Bamboo groves at dawn, ryokan mornings and tea ceremonies worth flying for." },
  { img: amalfiImg, name: "Amalfi Coast", region: "Italy", tag: "La dolce vita", blurb: "Lemon groves, pastel cliffs and long lunches with a sea view." },
];

function DestinationsPage() {
  return (
    <div className="px-3 md:px-5 py-6">
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center px-6 pt-16 pb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Destinations</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1] text-primary">
          Where to next?
        </h1>
        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          A hand-picked collection of places worth the fuss — because the details are everything.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 md:gap-5 px-2">
        {destinations.map((d, i) => (
          <a
            key={d.name}
            href="#"
            className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-card border border-border/60 ${i % 3 === 0 ? "md:row-span-1" : ""}`}
          >
            <div className="relative overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                width={1200}
                height={1400}
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-block rounded-full bg-white/15 backdrop-blur-md text-white text-xs uppercase tracking-widest px-3 py-1.5 border border-white/25">
                  {d.tag}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70">{d.region}</div>
                  <h3 className="font-display text-4xl md:text-5xl mt-1">{d.name}</h3>
                  <p className="mt-2 text-sm text-white/85 max-w-xs">{d.blurb}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/25 grid place-items-center shrink-0 group-hover:bg-white group-hover:text-foreground transition">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
