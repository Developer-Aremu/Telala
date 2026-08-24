import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "Investors & Partners — Telala";
const DESCRIPTION =
  "Bring capital for refining and milling infrastructure, built on operations you can actually see — audited, measured, verified.";

export const Route = createFileRoute("/investors")({
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
  component: Investors,
});

function Investors() {
  return (
    <>
      <PageHero
        thread="This is how you deploy into it."
        title="Capital into infrastructure you can see."
        lead="Bring capital for refining and milling infrastructure, built on operations you can actually see — audited, measured, verified."
      />
      <Section>
        <Rise>
          <h2 className="beat-lg max-w-[14ch]">Not blind trust. Visibility.</h2>
        </Rise>
        <Rise delay={0.15}>
          <div className="mt-12">
            <ActionLink to="/contact">Start a conversation</ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}
