import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "The Industry — Telala";

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
        thread="The Industry"
        title="33% of the world's most suitable oil-palm land is in Africa. We produce 4.2% of the world's supply."
        lead="Africa has 33% of the world's suitable oil-palm growing land and produces only 4.2% of the global palm oil supply. But that number hides a critical reality: plantations are expanding, and processing capacity isn't keeping up."
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
              "The rot",
              "Fruit is being harvested with nowhere built to receive it.",
              "Palm fruit that isn't processed within hours of harvest doesn't wait for capacity to catch up. It just spoils. That's not a future risk. That's happening on the ground today, on plantations already producing.",
            ],
            [
              "The extraction gap",
              "What doesn't spoil often isn't processed properly either.",
              "Without real refining capacity nearby, fruit ends up in small hand presses and informal local mills never built for industrial output — equipment that recovers a fraction of what the fruit is actually worth. The oil gets extracted. The value doesn't.",
            ],
            [
              "The double cost",
              "Every hectare planted without capacity is a bet that costs twice.",
              "Planting without real processing infrastructure costs you two ways: what rots in the field, and what gets processed for far less than it's worth. Capacity built now protects a harvest that's already growing.",
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
          <p className="label text-signal">Infrastructure response</p>
          <h2 className="beat-lg mt-6 max-w-[20ch]">
            Mills. Refineries. Capacity sized to match planting.
          </h2>
          <p className="quiet mt-7 max-w-[72ch]">
            This is the arm of Telala built to close that gap. Processing infrastructure sized to match planting as it happens — not years behind it, and not handed off to equipment that was never built for this scale. The fruit already exists. The demand already exists. What's missing is capacity built to actually capture what's there.
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
            Capacity built now protects a harvest that's already growing and the market waiting for it. However you fit — owner, operator, investor, or partner — there's a place to start.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/contact">Talk to us</ActionLink>
            <ActionLink to="/what-we-do" tone="line">
              Explore the value chain
            </ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}