import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { WordsIn, Rise, EASE } from "@/components/site/motion-primitives";
import industryScale from "@/assets/industry-scale.jpg";
import canopyDay from "@/assets/canopy-day.jpg";
import { useState, useEffect } from "react";
import { HeroScrollSection } from "@/components/site/HeroScrollSection";

/* BEAT 13 — Where you fit. */

const PATHS = [
  { label: "I own a plantation", to: "/owners" as const },
  { label: "I want to own one", to: "/owners" as const },
  { label: "I'm an institution", to: "/industry" as const },
];

const QUESTIONS = [
  "DO YOU ALREADY OWN A PLANTATION?",
  "ARE YOU BUILDING TOWARDS ONE?",
  "ARE YOU DEPLOYING INSTITUTIONAL CAPITAL?",
];

export function BeatWhereYouFit() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % QUESTIONS.length);
      setKey((prev) => prev + 1);
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="border-t border-hairline bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="min-h-[140px] flex flex-col justify-center">
          <div key={key}>
            <h2 className="beat-lg max-w-[24ch]">
              <WordsIn text={QUESTIONS[currentIndex]} delay={0.2} stagger={0.08} />
            </h2>
          </div>
        </div>

        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <span className="label text-[#da2e2b]">However you're entering, there's a defined path in.</span>
          <span className="block h-px w-16 bg-[#da2e2b]/50" />
        </motion.div>

        <div className="mt-14 grid gap-px border border-hairline bg-border md:grid-cols-3">
          {PATHS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
            >
              <Link
                to={p.to}
                className="group flex h-full flex-col justify-between gap-16 bg-card p-8 transition-[transform,background-color] duration-500 hover:-translate-y-1.5 hover:bg-secondary md:p-10"
              >
                <span className="beat-md max-w-[10ch]">{p.label}</span>
                <span className="label flex items-center gap-3 text-signal">
                  Continue
                  <span className="transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* BEAT 14 — The industry (Scroll Animation Section) */
export function BeatIndustry() {
  return (
    <HeroScrollSection
      bgImage={industryScale}
      tagline="We're building that — plantation by plantation."
      title="Africa has some of the best oil-palm growing conditions on earth."
      subtitle="What it's never had is the operating discipline to match."
    />
  );
}

/* BEAT 15 — Close: Settled hero footage with waitlist CTA */
export function BeatClose() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={canopyDay}
        alt="The same oil palm canopy in full daylight, camera settled"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/72" />
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center gap-8 px-5 py-28 md:px-10">
        <Rise>
          <h2 className="beat-lg max-w-[22ch]">
            If your plantation is losing value somewhere you can't see, the first step isn't a sales
            call.
          </h2>
        </Rise>
        <Rise delay={0.15}>
          <p className="beat-md max-w-[20ch]">It's an honest look at where you stand.</p>
        </Rise>
        <Rise delay={0.3}>
          <p className="quiet">Join the waitlist. We'll reach you within 48 hours.</p>
        </Rise>
        <Rise delay={0.4}>
          <Link
            to="/contact"
            className="label mt-4 inline-flex bg-signal px-8 py-5 text-signal-foreground transition-colors duration-300 hover:bg-foreground"
            style={{ animation: "signal-pulse 3s ease-out infinite" }}
          >
            Join the waitlist
          </Link>
        </Rise>
      </div>
    </section>
  );
}