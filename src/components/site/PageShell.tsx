import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { WordsIn, Rise } from "@/components/site/motion-primitives";

export function PageHero({
  thread,
  title,
  lead,
}: {
  thread: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-hairline bg-ink pb-20 pt-36 text-ink-foreground md:pb-28 md:pt-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Rise y={12}>
          <p className="label text-signal">{thread}</p>
        </Rise>
        <h1 className="beat-lg mt-8 max-w-[20ch]">
          <WordsIn text={title} stagger={0.1} delay={0.15} />
        </h1>
        {lead ? (
          <Rise delay={0.5}>
            <p className="quiet mt-8 text-ink-muted">{lead}</p>
          </Rise>
        ) : null}
      </div>
    </section>
  );
}

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="border-b border-hairline bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">{children}</div>
    </section>
  );
}

type Dest = "/contact" | "/os" | "/owners" | "/investors" | "/what-we-do" | "/industry" | "/about";

export function ActionLink({
  to,
  children,
  tone = "solid",
}: {
  to: Dest;
  children: ReactNode;
  tone?: "solid" | "line";
}) {
  return (
    <Link
      to={to}
      className={
        tone === "solid"
          ? "label group inline-flex items-center gap-3 bg-foreground px-6 py-4 text-background transition-colors duration-300 hover:bg-signal"
          : "label group inline-flex items-center gap-3 border border-foreground px-6 py-4 transition-colors duration-300 hover:border-signal hover:text-signal"
      }
    >
      {children}
      <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
    </Link>
  );
}
