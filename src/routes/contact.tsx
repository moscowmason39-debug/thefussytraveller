import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Fussy Traveller" },
      { name: "description", content: "Get in touch with The Fussy Traveller. Trip ideas, collaborations and questions welcome." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="px-3 md:px-5 py-6">
      <section className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-secondary via-background to-secondary p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Say hello</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1] text-primary">
              Let's plan<br />something<br />wonderful.
            </h1>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md">
              Trip ideas, collaborations or just a good travel story — I'd love to hear from you.
            </p>

            <div className="mt-10 space-y-4">
              <a href="mailto:chat@thefussytraveller.co.uk" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-card border border-border grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-medium">chat@thefussytraveller.co.uk</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-card border border-border grid place-items-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
                  <div className="font-medium">United Kingdom · Wherever the flight lands</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-[2rem] bg-card border border-border/60 p-6 md:p-8 shadow-xl"
          >
            <h2 className="font-display text-2xl mb-6">Send a note</h2>
            <div className="space-y-4">
              <Field label="Name">
                <input required className="w-full rounded-2xl bg-secondary/60 border border-transparent focus:border-primary focus:bg-background outline-none px-4 py-3.5 text-sm transition" placeholder="Your name" />
              </Field>
              <Field label="Email">
                <input required type="email" className="w-full rounded-2xl bg-secondary/60 border border-transparent focus:border-primary focus:bg-background outline-none px-4 py-3.5 text-sm transition" placeholder="you@example.com" />
              </Field>
              <Field label="Message">
                <textarea required rows={5} className="w-full rounded-2xl bg-secondary/60 border border-transparent focus:border-primary focus:bg-background outline-none px-4 py-3.5 text-sm transition resize-none" placeholder="Tell me about your trip…" />
              </Field>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-4 text-sm font-medium hover:opacity-90 transition"
              >
                {sent ? "Thank you — I'll be in touch" : (<>Send message <Send className="w-4 h-4" /></>)}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
