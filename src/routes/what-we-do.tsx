import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import revealDevice from "@/assets/reveal-device.jpg";

const TITLE = "What We Do — Telala";
const DESCRIPTION =
  "Telala establishes plantations, operates them with industrial discipline, and built the system that makes both visible, verified and traceable.";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatWeDo,
});

function WhatWeDo() {
  return (
    <>
      <PageHero
        thread="This is how."
        title="We establish. We operate. We see."
        lead="We establish plantations. We operate them with industrial discipline. We built the system that makes both visible, verified, and traceable — for anyone, anywhere."
      />

      <section className="relative isolate h-[60vh] overflow-hidden border-b border-hairline">
        <img
          src={revealDevice}
          alt="A harvest being logged on a handheld device at the base of an oil palm"
          loading="lazy"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/45" />
      </section>

      <Section>
        <Rise>
          <h2 className="beat-lg max-w-[22ch]">
            Every plantation we run, runs on the same system available to you.
          </h2>
        </Rise>
        <Rise delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/os">Explore Telala OS</ActionLink>
            <ActionLink to="/owners" tone="line">
              See ownership paths
            </ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}
