import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 px-5 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-foreground text-background p-10 md:p-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-3xl">The Fussy Traveller</h3>
            <p className="mt-3 text-sm text-background/70 max-w-xs">
              Honest reviews and thoughtful itineraries for travellers who want the very best.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-background/50 mb-3">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/destinations" className="hover:text-primary">Destinations</Link></li>
              <li><Link to="/podcast" className="hover:text-primary">Podcast</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-background/50 mb-3">Say hello</div>
            <a href="mailto:chat@thefussytraveller.co.uk" className="text-sm hover:text-primary">
              chat@thefussytraveller.co.uk
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-background/10 text-xs text-background/50">
          © {new Date().getFullYear()} The Fussy Traveller. Forget all the fuss.
        </div>
      </div>
    </footer>
  );
}
