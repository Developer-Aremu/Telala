import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import { BeatSystemGlimpsed } from "@/components/home/BrightSequence";

const TITLE = "Telala OS — See the Plantation";

export const Route = createFileRoute("/os")({
  head: () => ({ meta: [{ title: TITLE }] }),
  component: TelalaOS,
});

const FAQ = [
  [
    "Does this replace our existing spreadsheets and field books entirely, or work alongside them?",
    "It's built to replace them — one system instead of five. During onboarding we help migrate what's already in use so nothing gets lost in the switch.",
  ],
  [
    "Who can see the data once it's in the system?",
    "You control access. Field staff see what's relevant to their block and task; managers and owners see the full operating view.",
  ],
  [
    "Does this require new hardware, or does it work on phones people already have?",
    "Works on standard Android handheld devices / smartphones already used in the field.",
  ],
  [
    "What happens if there's no signal in the field?",
    "Activity logs locally and syncs once connectivity returns.",
  ],
  [
    "How do I gain access, and what does it cost?",
    "Access is currently by waitlist, intended for plantation owners, operators, and intending plantation owners. Join the waitlist and we'll be in touch.",
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
          {open === i ? (
            <p className="quiet max-w-[70ch] pb-7">{a}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function TelalaOS() {
  const [split, setSplit] = useState(50);

  return (
    <>
      <section className="border-b border-hairline bg-ink pb-20 pt-36 text-ink-foreground md:pb-28 md:pt-44">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 md:px-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <Rise>
              <p className="label text-signal">Telala OS</p>
            </Rise>
            <Rise delay={0.1}>
              <h1 className="beat-lg mt-8 max-w-[18ch]">
                See the plantation. Run it from anywhere in the world.
              </h1>
            </Rise>
            <Rise delay={0.2}>
              <p className="quiet mt-8 max-w-[62ch] text-ink-muted">
                Telala OS connects you with what's actually happening on the ground — in real time, not in retrospect.
              </p>
            </Rise>
          </div>
          <Rise delay={0.3}>
            <div className="border border-white/15 bg-white/5 p-5">
              <p className="label mb-4 text-signal">Live estate</p>
              {/* @ts-expect-error loop property accepted by underlying component */}
              <BeatSystemGlimpsed loop={true} />
            </div>
          </Rise>
        </div>
      </section>

      <Section>
        <Rise>
          <p className="label text-signal">The problem this solves</p>
          <h2 className="beat-lg mt-6 max-w-[20ch]">
            Right now, your plantation's story is scattered.
          </h2>
          <p className="quiet mt-7 max-w-[78ch]">
            A paper field book here. A WhatsApp photo there. A spreadsheet nobody's updated since last month. Each piece is true in isolation and useless in combination — because nothing connects, nothing's timestamped, and nothing's verified. By the time a report reaches you, it's already history.
          </p>
        </Rise>
        <Rise delay={0.15}>
          <div className="relative mt-12 h-[420px] overflow-hidden border border-hairline bg-card">
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="p-8">
                <p className="label text-signal">Before</p>
                <div className="mt-12 rotate-[-2deg] border border-hairline bg-background p-5 shadow-xl">
                  <p className="font-mono text-sm">FIELD BOOK · C4</p>
                  <p className="quiet mt-4">
                    Harvest: 1,240kg ?<br />
                    Transfer: WhatsApp photo<br />
                    Variance: check spreadsheet
                  </p>
                </div>
              </div>
              <div className="bg-ink p-8 text-ink-foreground">
                <p className="label text-signal">Telala OS</p>
                <div className="mt-10">
                  <BeatSystemGlimpsed />
                </div>
              </div>
            </div>
            <div
              className="absolute inset-y-0 border-l border-signal"
              style={{ left: `${split}%` }}
            />
            <input
              aria-label="Compare scattered records with Telala OS"
              type="range"
              min="20"
              max="80"
              value={split}
              onChange={(e) => setSplit(Number(e.target.value))}
              className="absolute bottom-6 left-[10%] w-[80%]"
            />
          </div>
        </Rise>
      </Section>

      <Section>
        <div className="grid gap-14 md:grid-cols-2">
          <Rise>
            <p className="label text-signal">Field Activity</p>
            <h2 className="beat-lg mt-6 max-w-[17ch]">
              What was planned. What actually happened. Connected.
            </h2>
            <p className="quiet mt-7">
              Work orders, field completions, the people who did the work, and the outcome that resulted — all tied to the specific place they happened. Not four disconnected records. One thread, from instruction to outcome.
            </p>
          </Rise>
          <Rise delay={0.15}>
            <div className="border border-hairline bg-card p-7">
              <p className="label text-signal">Work order · Complete</p>
              <div className="mt-8 space-y-5 font-mono text-sm">
                <p>Worker · F-0184</p>
                <p>Task · Harvest & collect FFB</p>
                <p>Block · C4</p>
                <p>Time · 06:12</p>
                <p>Evidence · Photo verified ✓</p>
              </div>
            </div>
          </Rise>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 md:grid-cols-2">
          <Rise>
            <p className="label text-signal">Reporting</p>
            <h2 className="beat-lg mt-6 max-w-[17ch]">
              A manager's morning, in one screen.
            </h2>
            <p className="quiet mt-7">
              Status, exceptions, and progress — surfaced the moment they matter, not compiled the following week. If a block is being mismanaged, you know before it becomes a pattern.
            </p>
          </Rise>
          <Rise delay={0.15}>
            <div className="border border-hairline bg-card p-7">
              <p className="label text-signal">Exceptions</p>
              <p className="beat-md mt-8">Block A9 · −6% variance</p>
              <div className="mt-8 grid grid-cols-3 gap-px bg-border">
                <div className="bg-background p-4">
                  <span className="label">Active</span>
                  <p className="mt-2 text-2xl">12</p>
                </div>
                <div className="bg-background p-4">
                  <span className="label">Done</span>
                  <p className="mt-2 text-2xl">38</p>
                </div>
                <div className="bg-background p-4">
                  <span className="label">Flags</span>
                  <p className="mt-2 text-2xl">03</p>
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </Section>

      <Section>
        <Rise>
          <p className="label text-signal">How it connects</p>
          <h2 className="beat-lg mt-6">
            From what happens in the field, to what you see on your screen.
          </h2>
        </Rise>
        <div className="mt-12 grid gap-px border border-hairline bg-border md:grid-cols-3">
          {[
            [
              "Structure the work",
              "Tasks get assigned to real places and real people.",
            ],
            [
              "Capture field activity",
              "Work gets logged the moment it's done — not remembered later.",
            ],
            [
              "See the operation",
              "It all resolves into one live view. This is what running a plantation should feel like.",
            ],
          ].map(([h, b], i) => (
            <Rise key={h} delay={i * 0.1}>
              <div className="h-full bg-card p-8">
                <span className="label text-signal">0{i + 1}</span>
                <h3 className="beat-md mt-10">{h}</h3>
                <p className="quiet mt-5">{b}</p>
              </div>
            </Rise>
          ))}
        </div>
      </Section>

      <Section>
        <Rise>
          <p className="label text-signal">Common questions</p>
          <h2 className="beat-lg mt-6">Before you switch.</h2>
        </Rise>
        <Accordion />
      </Section>

      <Section>
        <Rise>
          <h2 className="beat-lg">Switch to Telala OS</h2>
          <p className="quiet mt-7 max-w-[70ch]">
            Access is open to plantation owners, operators, and developers building commercial-scale operations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/contact">Join the waitlist</ActionLink>
            <ActionLink to="/what-we-do" tone="line">
              Explore operations
            </ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}