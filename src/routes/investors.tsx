import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import { BeatSystemGlimpsed } from "@/components/home/BrightSequence";

const TITLE = "Invest in the Industry — Telala";

export const Route = createFileRoute("/investors")({
  head: () => ({ meta: [{ title: TITLE }] }),
  component: Investors,
});

const STEPS = ["Audit", "Baseline", "Deploy control", "Measure", "Audit again"];
const FAQ = [
  [
    "What stage are you raising at, and what's the minimum commitment?",
    "This is still to be confirmed with the Telala team.",
  ],
  [
    "How is the audit conducted, and by whom?",
    "Reputable auditing firms alongside our internal auditors.",
  ],
  [
    "What happens if a plantation underperforms its baseline?",
    "The response framework is still being finalised.",
  ],
  [
    "Can I visit an operating plantation before committing capital?",
    "Yes, most certainly. Get in touch with us to arrange it.",
  ],
];

function Accordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-10 border-t border-hairline">
      {FAQ.map(([q, a], i) => (
        <div className="border-b border-hairline" key={q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full justify-between gap-8 py-6 text-left"
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

function Investors() {
  return (
    <>
      <PageHero
        thread="Invest in the Industry"
        title="Capital into infrastructure you can see."
        lead="Not blind trust. Visibility — into the operations your capital is funding."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Rise>
            <p className="label text-signal">What visible actually means</p>
            <h2 className="beat-lg mt-6 max-w-[17ch]">
              See the operation your return depends on — continuously, not annually.
            </h2>
            <p className="quiet mt-7">
              Every harvest, transfer, and verification event that happens on a Telala plantation is
              logged the moment it happens and available to see. This isn't a quarterly report you
              have to trust. It's an operating record you can check yourself, whenever you want.
            </p>
          </Rise>
          <Rise delay={0.15}>
            <div className="border border-hairline bg-card p-5">
              <p className="label mb-5 text-signal">What you'd be able to see, starting day one.</p>
              {/* @ts-expect-error loop property accepted by underlying component */}
              <BeatSystemGlimpsed loop={true} />
            </div>
          </Rise>
        </div>
      </Section>
      <Section>
        <Rise>
          <p className="label text-signal">The audit cycle</p>
          <h2 className="beat-lg mt-6">
            Audit. Baseline. Deploy control. Measure. Audit again.
          </h2>
          <p className="quiet mt-7 max-w-[75ch]">
            We don't project your returns and ask you to wait and see. We audit
            the plantation before capital moves, establish a measured baseline,
            deploy the operating controls that Telala OS enforces, measure the
            result against that baseline, and audit again. It's a loop, not a
            one-time promise.
          </p>
        </Rise>
        <div className="mt-12 grid gap-px border border-hairline bg-border md:grid-cols-5">
          {STEPS.map((s, i) => (
            <Rise key={s} delay={i * 0.08}>
              <div className="h-full bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-card/90">
                <span className="label text-signal">0{i + 1}</span>
                <p className="beat-sm mt-10">{s}</p>
                {i === 4 ? (
                  <p className="label mt-8 text-muted-foreground">↺ Repeat</p>
                ) : (
                  <p className="mt-8 text-signal transition-transform duration-300 hover:translate-x-1">
                    →
                  </p>
                )}
              </div>
            </Rise>
          ))}
        </div>
      </Section>
      <Section>
        <Rise>
          <p className="label text-signal">What capital funds</p>
          <h2 className="beat-lg mt-6 max-w-[19ch]">
            Refining and milling infrastructure. Built on operations already proven to work.
          </h2>
          <p className="quiet mt-7 max-w-[72ch]">
            Capital deployed through Telala goes toward processing and milling infrastructure — the
            layer between a productive plantation and a sellable product. It's built on top of
            plantations already operating under Telala's own discipline, not speculative land.
          </p>
        </Rise>
      </Section>
      <Section>
        <Rise>
          <p className="label text-signal">Who's accountable</p>
          <h2 className="beat-lg mt-6">Know who you're funding.</h2>
          <p className="quiet mt-7">Meet the people building and operating Telala.</p>
          <div className="mt-8">
            <ActionLink to="/about" tone="line">
              Meet the leadership
            </ActionLink>
          </div>
        </Rise>
      </Section>
      <Section>
        <Rise>
          <p className="label text-signal">Questions before you talk to us</p>
          <h2 className="beat-lg mt-6">The due-diligence questions.</h2>
        </Rise>
        <Accordion />
      </Section>
      <Section>
        <Rise>
          <h2 className="beat-lg">Start a conversation, or request the overview document.</h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/contact">Start a conversation</ActionLink>
            <ActionLink to="/contact" tone="line">
              Request the overview
            </ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}