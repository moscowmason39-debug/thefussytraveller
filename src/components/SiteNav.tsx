import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 md:px-5 pt-3">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[1.75rem] md:rounded-[2rem] shadow-lg shadow-foreground/5">
        <div className="bg-primary text-primary-foreground text-xs tracking-wide">
          <div className="px-6 py-2 flex items-center justify-center gap-2">
            <Mail className="w-3.5 h-3.5" />
            <a href="mailto:chat@thefussytraveller.co.uk" className="hover:underline">
              chat@thefussytraveller.co.uk
            </a>
          </div>
        </div>

        <div className="bg-navy/95 backdrop-blur-xl text-navy-foreground">
          <nav className="px-5 md:px-8 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="The Fussy Traveller" className="h-12 md:h-14 w-auto" width={1152} height={576} />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <NavLink to="/">Home</NavLink>
              <div
                className="relative"
                onMouseEnter={() => setPagesOpen(true)}
                onMouseLeave={() => setPagesOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-white/10 hover:text-primary transition-colors flex items-center gap-1">
                  Pages <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {pagesOpen && (
                  <div className="absolute right-0 top-full pt-3 w-56">
                    <div className="rounded-3xl bg-card text-card-foreground shadow-2xl border border-border/60 p-2">
                      <DropItem to="/podcast">Podcast</DropItem>
                      <DropItem to="/destinations">Destinations</DropItem>
                      <DropItem to="/contact">Contact</DropItem>
                    </div>
                  </div>
                )}
              </div>
              <NavLink to="/destinations">Destinations</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            <button
              className="md:hidden p-2 rounded-full hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden px-5 pb-6 space-y-1">
              <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
              <div className="pt-3 pb-1 px-4 text-xs uppercase tracking-widest text-navy-foreground/50">Pages</div>
              <MobileLink to="/podcast" onClick={() => setOpen(false)}>Podcast</MobileLink>
              <MobileLink to="/destinations" onClick={() => setOpen(false)}>Destinations</MobileLink>
              <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-white/10 hover:text-primary transition-colors"
      activeProps={{ className: "px-4 py-2 text-sm font-semibold rounded-full text-primary bg-white/10" }}
      activeOptions={{ exact: true }}
    >
      {children}
    </Link>
  );
}

function DropItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2.5 text-sm font-medium rounded-2xl hover:bg-secondary transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-3 rounded-2xl text-base font-medium hover:bg-white/10"
    >
      {children}
    </Link>
  );
}
