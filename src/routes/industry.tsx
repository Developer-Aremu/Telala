import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import industryScale from "@/assets/industry-scale.jpg";

const TITLE = "Industry — Telala";
const DESCRIPTION =
  "Africa has the growing conditions. It's never had the operating discipline. Telala is building that discipline into the industry itself.";

export const Route = createFileRoute("/industry")({
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
  component: Industry,
});

function Industry() {
  return (
    <>
      <PageHero
        thread="This is the industry we're building."
        title="Africa has the growing conditions. It's never had the operating discipline."
      />
      <section className="relative isolate h-[62vh] overflow-hidden border-b border-hairline">
        <img
          src={industryScale}
          alt="Plantation blocks, an access road and a mill on the horizon"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
      </section>
      <Section>
        <Rise>
          <h2 className="beat-lg max-w-[24ch]">
            Telala is building that discipline into the industry itself — one plantation, one
            verified operation at a time.
          </h2>
        </Rise>
      </Section>
    </>
  );
}
