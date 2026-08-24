import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "About — Telala";
const DESCRIPTION =
  "The biggest losses on a plantation are rarely hidden on purpose. They're just never seen. Telala exists to make sure they are.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        thread="This is why."
        title="The biggest losses on a plantation are rarely hidden on purpose."
      />
      <Section>
        <Rise>
          <h2 className="beat-lg max-w-[18ch]">They're just never seen.</h2>
        </Rise>
        <Rise delay={0.15}>
          <p className="quiet mt-8">Telala exists to make sure they are.</p>
        </Rise>
        <Rise delay={0.25}>
          <div className="mt-12">
            <ActionLink to="/contact">Start with an honest look</ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}
