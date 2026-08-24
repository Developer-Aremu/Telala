import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "Telala OS — The System of Record";
const DESCRIPTION =
  "Every event logged where it happens. A verified chain of custody. Discrepancies surfaced immediately — not discovered.";

export const Route = createFileRoute("/os")({
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
  component: TelalaOS,
});

const POINTS = [
  "Every event, logged where it happens.",
  "A verified chain of custody.",
  "Discrepancies surfaced immediately — not discovered.",
];

function TelalaOS() {
  return (
    <>
      <PageHero
        thread="This is what sees it."
        title="The system of record underneath every plantation we touch."
      />

      <Section>
        <div className="grid gap-px border border-hairline bg-border md:grid-cols-3">
          {POINTS.map((p, i) => (
            <Rise key={p} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between gap-14 bg-card p-8 md:p-10">
                <span className="label text-signal">0{i + 1}</span>
                <p className="beat-md max-w-[14ch]">{p}</p>
              </div>
            </Rise>
          ))}
        </div>

        <Rise delay={0.3}>
          <p className="quiet mt-14">
            Free for the first 50 qualifying plantations, paired with our management service.
          </p>
        </Rise>
        <Rise delay={0.4}>
          <div className="mt-8">
            <ActionLink to="/contact">See if you qualify</ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}
