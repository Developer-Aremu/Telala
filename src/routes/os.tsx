import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import { BeatSystemGlimpsed } from "@/components/home/BrightSequence";
import canopyDay from "@/assets/canopy-day.jpg";

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
  const [activeCard, setActiveCard] = useState<"A" | "B">("A");

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-hairline pb-20 pt-36 text-ink-foreground md:pb-28 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div>
            <Rise>
              <p className="label text-signal">Telala OS</p>
            </Rise>
            <Rise delay={0.1}>
              <h1 className="beat-lg mt-8 max-w-[23ch] text-black">
                Something is disappearing from your plantation. You just don't know what, or where, yet.
              </h1>
            </Rise>
          </div>
          
          <Rise delay={0.3}>
            <div className="relative mt-12 h-[450px] w-full overflow-hidden">
              <img
                src={canopyDay}
                alt="Oil palm canopy in full daylight"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>
          </Rise>
        </div>
      </section>

      {/* Feature 1: The Problem This Solves (Two-column layout with 60/40 split and blur image handling) */}
      <Section>
        <div className="w-full">
          {/* Header block spanning full width or matching context */}
          

          {/* Cards Container: 60% / 40% Dynamic Split Layout */}
          <Rise delay={0.15}>
            <div className="mt-12 flex w-full flex-col gap-6 lg:flex-row lg:items-stretch">
              {/* Card A */}
              <div
                key="card-a"
                onClick={() => setActiveCard("A")}
                style={{ flex: activeCard === "A" ? "3 1 0%" : "2 1 0%" }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-hairline p-8 md:p-12 transition-all duration-500 ease-in-out hover:border-signal/50 text-white"
              >
                {/* Background Image with Conditional Blur */}
                <img
                  src={canopyDay}
                  alt="Canopy background"
                  className={`absolute inset-0 size-full object-cover transition-all duration-700 ${
                    activeCard === "A" ? "filter-none scale-100" : "blur-md scale-105"
                  }`}
                />
                <div className={`absolute inset-0 transition-colors duration-500 ${activeCard === "A" ? "bg-ink/60" : "bg-ink/80"}`} />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="label text-signal">A</p>
                    <h3 className="beat-md mt-4 text-white">
                      The manager who was never lying
                    </h3>
                    
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        activeCard === "A" ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-white/90 text-sm leading-relaxed">
                          Every week, the report says the harvest was good. The transport logs check out. The numbers on the page are consistent, tidy, believable. And still, somehow, the plantation is producing less than the land says it should. <br/> <br/> Nobody's lying. That's what makes it dangerous. A field officer under-reports a load by a fraction — not theft, just convenience. A driver takes a longer route and nobody asks why. A ledger gets "cleaned up" before it reaches you. None of it looks like a crime. All of it adds up to one.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 font-mono text-xs text-signal">
                    <span>{activeCard === "A" ? "Expanded view" : "Click to expand"}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>

              {/* Card B */}
              <div
                key="card-b"
                onClick={() => setActiveCard("B")}
                style={{ flex: activeCard === "B" ? "3 1 0%" : "2 1 0%" }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-hairline p-8 md:p-12 transition-all duration-500 ease-in-out hover:border-signal/50 text-white"
              >
                {/* Background Image with Conditional Blur */}
                <img
                  src={canopyDay}
                  alt="Canopy background"
                  className={`absolute inset-0 size-full object-cover transition-all duration-700 ${
                    activeCard === "B" ? "filter-none scale-100" : "blur-md scale-105"
                  }`}
                />
                <div className={`absolute inset-0 transition-colors duration-500 ${activeCard === "B" ? "bg-ink/60" : "bg-ink/80"}`} />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="label text-signal">B</p>
                    <h3 className="beat-md mt-4 text-white">
                      The theft you can't see is the only kind that survives
                    </h3>
                    
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        activeCard === "B" ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-white/90 text-sm leading-relaxed">
                          It looks like a normal Tuesday. A weight that's slightly off. A transfer that took forty extra minutes with no explanation. A block that's harvested but never shows up at the mill in full.<br /><br />
                          Untraceable isn't a description of how much is lost. It's a description of why you'll never know.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 font-mono text-xs text-signal">
                    <span>{activeCard === "B" ? "Expanded view" : "Click to expand"}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </Section>
      
      {/* Interactive Slider Section */}
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
          <div className="relative mt-12 h-[420px] overflow-hidden rounded-2xl border border-hairline bg-card">
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

      {/* Feature 2: Field Activity */}
      <Section>
        <Rise>
          <p className="label text-signal">Field Activity</p>
          <h2 className="beat-lg mt-6 max-w-[22ch]">
            What was planned. What actually happened. Connected.
          </h2>
          <p className="quiet mt-7 max-w-[78ch]">
            Work orders, field completions, the people who did the work, and the outcome that resulted — all tied to the specific place they happened. Not four disconnected records. One thread, from instruction to outcome.
          </p>
        </Rise>
        <Rise delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-card p-7 md:p-10">
            <p className="label text-signal">Work order · Complete</p>
            <div className="mt-8 grid gap-5 font-mono text-sm sm:grid-cols-2 lg:grid-cols-5">
              <div className="bg-background/50 p-4 border border-hairline">Worker · F-0184</div>
              <div className="bg-background/50 p-4 border border-hairline">Task · Harvest & collect FFB</div>
              <div className="bg-background/50 p-4 border border-hairline">Block · C4</div>
              <div className="bg-background/50 p-4 border border-hairline">Time · 06:12</div>
              <div className="bg-background/50 p-4 border border-hairline">Evidence · Photo verified ✓</div>
            </div>
          </div>
        </Rise>
      </Section>

      {/* Feature 3: Reporting */}
      <Section>
        <Rise>
          <p className="label text-signal">Reporting</p>
          <h2 className="beat-lg mt-6 max-w-[20ch]">
            A manager's morning, in one screen.
          </h2>
          <p className="quiet mt-7 max-w-[78ch]">
            Status, exceptions, and progress — surfaced the moment they matter, not compiled the following week. If a block is being mismanaged, you know before it becomes a pattern.
          </p>
        </Rise>
        <Rise delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-card p-7 md:p-10">
            <p className="label text-signal">Exceptions</p>
            <p className="beat-md mt-6">Block A9 · −6% variance</p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-border">
              <div className="bg-background p-6">
                <span className="label">Active</span>
                <p className="mt-2 text-2xl">12</p>
              </div>
              <div className="bg-background p-6">
                <span className="label">Done</span>
                <p className="mt-2 text-2xl">38</p>
              </div>
              <div className="bg-background p-6">
                <span className="label">Flags</span>
                <p className="mt-2 text-2xl">03</p>
              </div>
            </div>
          </div>
        </Rise>
      </Section>

      {/* How it connects */}
      <Section>
        <Rise>
          <p className="label text-signal">How it connects</p>
          <h2 className="beat-lg mt-6 max-w-[25ch]">
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

      {/* FAQ */}
      <Section>
        <Rise>
          <p className="label text-signal">Common questions</p>
          <h2 className="beat-lg mt-6">Before you switch.</h2>
        </Rise>
        <Accordion />
      </Section>

      {/* CTA Section */}
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