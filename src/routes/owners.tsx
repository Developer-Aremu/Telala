import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "Owners — Telala";
const DESCRIPTION =
  "Already own a plantation, or building toward one? Operate Assist, Operate For You, paid establishment, or $0 establishment for 35% ownership.";

export const Route = createFileRoute("/owners")({
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
  component: Owners,
});

const GROUPS = [
  {
    heading: "Already own a plantation?",
    options: [
      {
        name: "Operate Assist",
        body: "Telala OS plus operational support on your existing structure.",
      },
      { name: "Operate For You", body: "We run it, fully, on your behalf." },
    ],
  },
  {
    heading: "Want to own one?",
    options: [
      {
        name: "Money and land",
        body: "Paid establishment, then Operate Assist or Operate For You.",
      },
      {
        name: "Land, not capital",
        body: "$0 establishment fee for 35% ownership. We build it. You keep majority.",
      },
    ],
  },
];

function Owners() {
  return (
    <>
      <PageHero thread="This is where you fit." title="Two ways in. Four ways forward." />

      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          {GROUPS.map((group, gi) => (
            <Rise key={group.heading} delay={gi * 0.12}>
              <div>
                <h2 className="beat-md">{group.heading}</h2>
                <div className="mt-8 border-t border-hairline">
                  {group.options.map((o) => (
                    <div key={o.name} className="border-b border-hairline py-7">
                      <p className="label text-signal">{o.name}</p>
                      <p className="quiet mt-3">{o.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Rise>
          ))}
        </div>
        <Rise delay={0.3}>
          <div className="mt-14">
            <ActionLink to="/contact">Join the waitlist</ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}
