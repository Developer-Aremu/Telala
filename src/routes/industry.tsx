import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "The Opportunity — Telala";

export const Route = createFileRoute("/industry")({
  head: () => ({ meta: [{ title: TITLE }] }),
  component: Industry,
});

const CHAIN = [
  [
    "Land & plantation",
    "It starts with ground that's been assessed and planted with discipline.",
  ],
  [
    "Operations & people",
    "Then it's run — daily, verifiably, by people who are trained and supported to do it well.",
  ],
  [
    "Processing & logistics",
    "What's harvested has to move and become something sellable, without losing value in transit.",
  ],
  [
    "Industry & market",
    "And it has to connect to a market that rewards the discipline behind it.",
  ],
];

function Industry() {
  return (
    <>
      <PageHero
        thread="The Opportunity"
        title="Build the infrastructure for world-class production."
        lead="Africa has 33% of the world's suitable oil-palm growing land and produces only 4.2% of the global palm oil supply. The opportunity was never the land. It's everything that has to be built around it."
      />

      <Section>
        <Rise>
          <div className="grid gap-px border border-hairline bg-border md:grid-cols-2">
            <div className="bg-ink p-10 text-ink-foreground md:p-14">
              <p className="text-6xl font-semibold tracking-tight md:text-8xl">
                33%
              </p>
              <p className="quiet mt-5 text-ink-muted">
                of the world's suitable oil-palm growing land
              </p>
            </div>
            <div className="bg-card p-10 md:p-14">
              <p className="text-6xl font-semibold tracking-tight md:text-8xl">
                4.2%
              </p>
              <p className="quiet mt-5">of global palm oil supply</p>
            </div>
          </div>
        </Rise>
      </Section>

      <Section>
        <div className="grid gap-14 md:grid-cols-3">
          {[
            [
              "The gap",
              "The opportunity is large. The operating infrastructure is not.",
              "Oil palm is rooted in Africa — the land, the climate, and the people required to participate fully in this industry all already exist here. What's missing isn't potential. It's the systems between land and market: establishment done right, field operations run with discipline, processing capacity, and the capital to connect all of it.",
            ],
            [
              "Productive assets",
              "A plantation is a long-life asset. Most aren't treated like one.",
              "Too much planted land in this industry is exactly that — planted, and little else. We build and improve plantations as operating assets meant to produce for decades, not areas of land that happen to have palms on them.",
            ],
            [
              "Operating systems",
              "Performance you can repeat is performance you can plan around.",
              "A good harvest once isn't an operating system. Repeatable performance requires management capability and information infrastructure — the ability to see what's working, fix what isn't, and do it again next season with the same discipline.",
            ],
          ].map(([k, h, b], i) => (
            <Rise key={k} delay={i * 0.1}>
              <p className="label text-signal">{k}</p>
              <h2 className="beat-md mt-6">{h}</h2>
              <p className="quiet mt-6">{b}</p>
            </Rise>
          ))}
        </div>
      </Section>

      <Section>
        <Rise>
          <p className="label text-signal">Connected capacity</p>
          <h2 className="beat-lg mt-6 max-w-[18ch]">
            A plantation is only as valuable as what it connects to.
          </h2>
          <p className="quiet mt-7 max-w-[72ch]">
            Output means little without processing to receive it and a market
            connected to that processing. We build with the full chain in mind —
            plantation, processing, and market — because strength in one link
            doesn't matter if the others are weak.
          </p>
        </Rise>
      </Section>

      <Section>
        <Rise>
          <p className="label text-signal">The connected chain</p>
        </Rise>
        <div className="mt-10 grid gap-px border border-hairline bg-border md:grid-cols-4">
          {CHAIN.map(([h, b], i) => (
            <Rise key={h} delay={i * 0.1}>
              <div className="h-full bg-card p-7 md:min-h-72">
                <span className="label text-signal">0{i + 1}</span>
                <h3 className="beat-sm mt-12">{h}</h3>
                <p className="quiet mt-5">{b}</p>
                {i < 3 ? <div className="mt-8 text-signal">→</div> : null}
              </div>
            </Rise>
          ))}
        </div>
      </Section>

      <Section>
        <Rise>
          <h2 className="beat-lg">Build the industry with us.</h2>
          <p className="quiet mt-7 max-w-[75ch]">
            Telala works at the intersection of plantation operations,
            technology, and industrial development. However you fit — owner,
            operator, investor, or partner — there's a place to start.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/contact">Work with Telala</ActionLink>
            <ActionLink to="/what-we-do" tone="line">
              Explore the value chain
            </ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}