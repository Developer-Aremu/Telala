import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "What we do", to: "/what-we-do" },
  { label: "Telala OS", to: "/os" },
  { label: "Owners", to: "/owners" },
  { label: "Investors", to: "/investors" },
  { label: "Industry", to: "/industry" },
  { label: "About", to: "/about" },
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
        src="src/assets/Telala-Logo-2.svg"
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

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink text-ink-foreground">
          <div className="flex h-16 items-center justify-between px-5 md:px-10">
            <span className="font-display text-base font-extrabold uppercase tracking-[-0.05em]">
              Telala
            </span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="label px-2 py-3">
              Close
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-4 px-5 md:px-10">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="beat-md text-ink-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="beat-md text-signal">
              Join the waitlist
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
