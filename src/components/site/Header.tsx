import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "What we do", to: "/what-we-do" },
  { label: "Telala OS", to: "/os" },
  { label: "Owners", to: "/owners" },
  //{ label: "Investors", to: "/investors" },
  { label: "Industry", to: "/industry" },
  { label: "About", to: "/about" },
  { label: "Reports", to: "/reports" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(!overHero);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-700",
          scrolled
            ? "border-b border-border bg-background/90 text-foreground backdrop-blur-md"
            : "border-b border-transparent text-ink-foreground",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:px-10">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/TelalaLogo.png"
              alt="Telala Logo"
              className="h-6 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="label opacity-70 transition-opacity duration-300 hover:opacity-100"
                activeProps={{ className: "label opacity-100 text-signal" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={cn(
                "label hidden px-4 py-3 transition-colors duration-300 md:inline-flex",
                light
                  ? "bg-ink-foreground text-ink hover:bg-signal hover:text-signal-foreground"
                  : "bg-foreground text-background hover:bg-signal hover:text-signal-foreground",
              )}
            >
              Join the waitlist
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="label px-2 py-3 lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu Overlay - Extracted outside the header element to completely prevent inheritance bugs */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-background/23 backdrop-blur-2xl px-6 py-8 text-foreground md:hidden">
          
          {/* TOP SECTION: Brand Logo and Close Button */}
          <div className="flex items-center justify-between w-full">
            <span className="font-bold tracking-widest text-foreground">TELALA</span>
            <button 
              onClick={() => setOpen(false)}
              className="label text-foreground uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* MIDDLE SECTION: Navigation Links mapped dynamically from NAV config */}
          <div className="flex flex-col space-y-6 my-auto">
            {NAV.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="beat-md text-foreground hover:text-signal transition-colors uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* BOTTOM SECTION: Call to Action button pinned cleanly at the footer */}
          <div className="w-full pb-4">
            <Link 
              to="/contact" 
              className="block text-center w-full bg-signal py-4 text-signal-foreground font-medium uppercase tracking-wider transition-colors hover:bg-foreground"
              onClick={() => setOpen(false)}
            >
              Join the waitlist
            </Link>
          </div>

        </div>
      )}
    </>
  );
}