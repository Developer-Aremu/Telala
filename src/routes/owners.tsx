import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import heroImage2 from "@/assets/boy.png";

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
    best: "People who do not already own a plantation but have acquired the right land and have set aside the financial resources to begin. We’ll come in, develop for you, and manage till fruition.",
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

// Split Accordion component for side-by-side layout matching the reference style
function SplitAccordion({ items }: { items: string[][] }) {
  const [open, setOpen] = useState<number | null>(0); // First item open by default like the screenshot

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mx-20 my-0">
      {/* Left Column: Heading, Description, and Link */}
      <div className="lg:col-span-5 mt-0">
        <Rise>
          
          <h2 className="beat-lg mt-4 text-black">
            Any questions?<br />We got you.
          </h2>
          <p className="quiet mt-6 text-base md:text-lg leading-relaxed max-w-[45ch]">
            Everything you need to know about partnering with Telala, our operational paths, and what happens when we step onto your land.
          </p>
          <div className="mt-8">
            <ActionLink to="/contact">More FAQs</ActionLink>
          </div>
        </Rise>
      </div>

      {/* Right Column: Accordion List */}
      <div className="lg:col-span-7">
        <Rise delay={0.1}>
          <div className="border-t border-hairline">
            {items.map(([q, a], i) => (
              <div key={q} className="border-b border-hairline">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-8 py-6 text-left group"
                >
                  <span className="beat-sm group-hover:text-signal transition-colors">{q}</span>
                  <span className="text-signal text-xl font-medium shrink-0">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i ? (
                  <p className="quiet max-w-[65ch] pb-7 text-sm md:text-base leading-relaxed animate-fadeIn">
                    {a}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Rise>
      </div>
    </div>
  );
}

// Main page component for the Owners tier
function Owners() {
  return (
    <>
      {/* Hero Section */}
      {/* 1. Page Hero with Background Image, Increased Height, and Red-to-Transparent Gradient Overlay */}
      <section className="relative isolate w-full pt-44 pb-36 md:pt-60 md:pb-48 min-h-[75vh] flex flex-col justify-center overflow-hidden bg-ink ">
        {/* Background Image & Left-to-Right Red Gradient Overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage2}
            alt="Oil palm canopy background"
            className="size-full object-cover object-top"
          />
          {/* Left-to-right gradient overlay (opaque red on left fading out to transparent on right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/80 to-transparent" />
        </div>
       <div className="w-full px-5 md:px-10">
        <Rise>
          <h2 className="beat-lg mt-8 max-w-[23ch] text-white">
            EVERY AFRICAN <span className="text-signal">OF MEANS</span> SHOULD OWN A PLANTATION.
          </h2>
        </Rise>

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

      {/* FAQ Section (Adopted Two-Column Split Layout) */}
      <Section >
       <div className="py-20 md:py-12">
            <SplitAccordion items={FAQ} />
        </div> 
      </Section>

      {/* Red Call to Action Banner Section */}
      <div className="mt-2 md:mt-8 pb-0">
        
        <Rise>
          <div className="bg-signal text-white p-8 md:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <h2 className="beat-md max-w-[24ch] text-white">
              Tell us where you're starting from. We'll tell you what's possible.
            </h2>
            <div className="flex flex-col items-start lg:items-end gap-6 max-w-[45ch]">
              <p className="text-white/80 text-sm leading-relaxed text-right">
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
        
      </div>

    </>
  );
}