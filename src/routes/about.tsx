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
        title="We Collaborate."
        body="If you want to work with us, and you can see we automatically want to work with you."
      />
      <Section>
        <Rise>
          <h2 className="quiet mt-8">If you want to work with us, and we can see we
automatically want to work with you.
</h2>
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
