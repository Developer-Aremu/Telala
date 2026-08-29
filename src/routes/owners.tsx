import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "The Owner Tier — Telala";
const DESCRIPTION = "Two ways in and four defined paths for plantation owners and landowners.";

export const Route = createFileRoute("/owners")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: Owners,
});

type Start = "existing" | "bare";

// Data configuration for the different ownership paths based on starting point
const PATHS = {
  existing: [
    {
      name: "Operate Assist",
      heading: "Keep running it yourself. Just see it clearly.",
      body: "You keep full control of your plantation. We give you Telala OS and operational support layered on top of what already exists — so you get the visibility and the guardrails, without handing over the keys.",
      best: "Owners with an existing team who want better information, not a new operator.",
    },
    {
      name: "Operate For You",
      heading: "Hand us the work. Keep the return.",
      body: "We run your plantation, fully — harvest, logistics, maintenance, reporting — while you give your attention to your other businesses. You get an operator with industrial discipline and a system that shows you exactly what that discipline is producing, without doing the day-to-day yourself.",
      best: "Owners without the team, time, or systems to operate at scale themselves.",
    },
  ],
  bare: [
    {
      name: "Money and Land",
      heading: "Fund the build. We do the rest.",
      body: "You bring the capital for establishment. We plant, build, and hand you a producing plantation — then continue as your operator under Operate Assist or Operate For You, your choice, once it's live.",
      best: "People with capital to deploy with land they haven't developed.",
    },
    {
      name: "Land, Zero Capital",
      heading: "Your land. Our capital. You keep the majority of the plantation.",
      body: "We cover the full cost of establishing your plantation — land prep, planting, the years before first harvest — in exchange for [35]% ownership. You keep the majority stake in a plantation you didn't have to fund yourself. Once it's producing, we continue operating it under the same discipline as every other plantation we run.",
      best: "Landowners with no capital to establish a plantation from scratch.",
    },
  ],
};

// FAQ items detailing partnership terms and agreements
const FAQ = [
  [
    "What happens if I'm not happy with Operate For You after we've started?",
    "Contract exit and review terms are being finalised.",
  ],
  [
    "Who owns the harvest data once Telala is operating my plantation?",
    "You do. Telala OS gives you full visibility into your own plantation's data at all times, regardless of which path you're on.",
  ],
  [
    "How long is the typical agreement for Operate For You or Land, Zero Capital?",
    "Agreement terms are being finalised.",
  ],
  [
    "Can I switch between paths later — for example, from Operate Assist to Operate For You?",
    "This transition policy is being finalised.",
  ],
  [
    "How is the [35]% ownership figure decided, and is it ever negotiable?",
    "The ownership structure and negotiation parameters are being finalised.",
  ],
];

// Accordion component for rendering FAQ items interactively
function Accordion({ items }: { items: string[][] }) {
  const [open, setOpen] = useState<number | null>(null);
  
  return (
    <div className="mt-10 border-t border-hairline">
      {items.map(([q, a], i) => (
        <div key={q} className="border-b border-hairline">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-8 py-6 text-left"
          >
            <span className="beat-sm">{q}</span>
            <span className="text-signal">{open === i ? "−" : "+"}</span>
          </button>
          {open === i ? <p className="quiet max-w-[70ch] pb-7">{a}</p> : null}
        </div>
      ))}
    </div>
  );
}

// Main page component for the Owners tier
function Owners() {
  const [start, setStart] = useState<Start>("existing");

  return (
    <>
      {/* Hero Section */}
      <PageHero
        thread="The Owner Tier"
        title="Two ways in. Four ways forward."
        lead="Whether you already own a plantation or are starting with your bare land, there's a defined path."
      />

      {/* Interactive Path Selection Section */}
      <Section>
        <Rise>
          <p className="label text-signal">Where are you starting?</p>
          <div className="mt-6 inline-flex border border-hairline p-1">
            {(
              [
                ["existing", "I already own a plantation"],
                ["bare", "I'm starting with bare land"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setStart(k)}
                className={`label px-5 py-4 transition ${
                  start === k
                    ? "bg-foreground text-background"
                    : "hover:text-signal"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Rise>

        <div className="mt-14 grid gap-px border border-hairline bg-border md:grid-cols-2">
          {PATHS[start].map((p, i) => (
            <Rise key={p.name} delay={i * 0.1}>
              <article className="h-full bg-card p-8 md:p-10">
                <p className="label text-signal">{p.name}</p>
                <h2 className="beat-md mt-8 max-w-[15ch]">{p.heading}</h2>
                <p className="quiet mt-7 max-w-[58ch]">{p.body}</p>
                <p className="mt-10 border-t border-hairline pt-5 text-sm">
                  <span className="label">Best for: </span>
                  {p.best}
                </p>
              </article>
            </Rise>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Rise>
          <p className="label text-signal">Before you reach out</p>
          <h2 className="beat-lg mt-6">Questions worth answering first.</h2>
        </Rise>
        <Accordion items={FAQ} />
      </Section>

      {/* Call to Action Section */}
      <Section>
        <Rise>
          <h2 className="beat-lg max-w-[20ch]">
            Tell us where you're starting from. We'll tell you what's possible.
          </h2>
          <p className="quiet mt-7 max-w-[68ch]">
            Join the waitlist and we'll reach you within 72 hours with the specific path that fits your land, your capital, and your timeline.
          </p>
          <div className="mt-10">
            <ActionLink to="/contact">Join the waitlist</ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}