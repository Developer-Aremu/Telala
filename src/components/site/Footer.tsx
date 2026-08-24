import { Link } from "@tanstack/react-router";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "What we do", to: "/what-we-do" as const },
      { label: "About", to: "/about" as const },
      { label: "Industry", to: "/industry" as const },
    ],
  },
  {
    title: "Work with us",
    links: [
      { label: "Owners", to: "/owners" as const },
      { label: "Investors & partners", to: "/investors" as const },
      { label: "Telala OS", to: "/os" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline-dim bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10 md:py-20">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="block size-2.5 bg-signal" />
            <span className="font-display text-base font-extrabold uppercase tracking-[-0.05em]">
              Telala
            </span>
          </div>
          <p className="quiet mt-4 text-ink-muted">
            One operating company. We establish plantations, operate them, and built the system that
            sees them.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="label text-ink-muted">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm uppercase tracking-wide text-ink-foreground/80 transition-colors hover:text-signal"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="label text-ink-muted">Start</p>
          <Link
            to="/contact"
            className="label mt-5 inline-flex bg-signal px-5 py-4 text-signal-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
      <div className="border-t border-hairline-dim">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 py-6 md:px-10">
          <p className="label text-ink-muted">© {new Date().getFullYear()} Telala</p>
          <p className="label text-ink-muted">Building Africa's oil palm industry</p>
        </div>
      </div>
    </footer>
  );
}
