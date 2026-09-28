import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "The Owner Tier — Telala";
const DESCRIPTION = "Four defined paths for plantation owners and landowners.";

export const Route = createFileRoute("/owners")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: Owners,
});


// All four paths structured with their style guide compliant headings
const PATHS = [
  {
    name: "Operate Assist",
    heading: "Keep running it yourself. Just see it clearly.",
    best: "Owners with an existing team who want better information, not a new operator.",
    ctaText: "Explore Telala OS",
    ctaTo: "/os" as const,
  },
  {
    name: "Operate For You",
    heading: "Hand us the work. Keep the return.",
    best: "Owners without the team, time, or systems to operate at scale themselves.",
    ctaText: "Join the waitlist",
    ctaTo: "/contact" as const,
  },
  {
    name: "Money and Land",
    heading: "Fund the build.",
    best: "People who have the capital to deploy and no interest in learning how to grow palm oil to do it.",
    ctaText: "Join the waitlist",
    ctaTo: "/contact" as const,
  },
  {
    name: "Land, Zero Capital",
    heading: "Your land. Our capital. You keep the majority.",
    best: "Landowners sitting on ground with no capital to plant it — and no interest in staying that way.",
    ctaText: "Join the waitlist",
    ctaTo: "/contact" as const,
  },
];

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
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-hairline pb-20 pt-36 text-ink-foreground md:pb-28 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div>
            <Rise>
              <p className="label text-signal">The Owner Tier</p>
            </Rise>
            <Rise delay={0.1}>
              <h1 className="beat-lg mt-8 max-w-[23ch] text-black">
                Four paths. One standard of industrial execution.
              </h1>
            </Rise> 
            <Rise>
               <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-[70ch] leading-relaxed">You're standing at one of two doors. Behind the first: land you already work. We step in exactly where you need us — beside your team, or running the whole floor. Behind the second: land that's still just land; you either already own it, or we find it for you. We assess it, we build it, we run it — your capital or ours, your call. Pick the door you're already at. We'll meet you there.</p>               
            </Rise>
          </div>
        </div>
      
      </section>
        

      {/* All Four Paths Side-by-Side Section with custom oklch background and gapped cards */}
      <div 
        className="border-y border-hairline py-20 md:py-28" 
        style={{ backgroundColor: "oklch(0.955 0.002 250)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Rise>
            <p className="label text-signal">All pathways</p>
            <h2 className="beat-lg mt-4">Choose your route to ownership.</h2>
          </Rise>

          <div className="mt-12 grid gap-0.5 lg:grid-cols-4 md:grid-cols-2">
            {PATHS.map((p, i) => (
              <Rise key={p.name} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col justify-between bg-white dark:bg-card p-6 md:p-8 border border-hairline shadow-sm">
                  <div>
                    <span className="label text-signal">{p.name}</span>
                    <h3 className="beat-md mt-6">{p.heading}</h3>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-hairline">
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                      <span className="label">Best for: </span>
                      {p.best}
                    </p>
                    <ActionLink to={p.ctaTo}>{p.ctaText}</ActionLink>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Section>
        <Rise>
          <p className="label text-signal">Before you reach out</p>
          <h2 className="beat-lg mt-6">Questions worth answering first.</h2>
        </Rise>
        <Accordion items={FAQ} />
      </Section>

      {/* Red Call to Action Banner Section */}
      <Section className="mt-10 md:mt-8">
        <Rise>
          <div className="bg-black text-white rounded-2xl p-8 md:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <h2 className="beat-md max-w-[24ch] text-white">
              Tell us where you're starting from. We'll tell you what's possible.
            </h2>
            <div className="flex flex-col items-start lg:items-end gap-6 max-w-[45ch]">
              <p className="text-white/80 text-sm leading-relaxed">
                Join the waitlist and we'll reach you within 24 hours with the specific path that fits your land, your capital, and your timeline.
              </p>
              <div>
                <ActionLink to={"/contact" as const}>
                  Join the waitlist
                </ActionLink>
              </div>
            </div>
          </div>
        </Rise>
      </Section>
    </>
  );
}