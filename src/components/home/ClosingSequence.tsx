import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Rise, EASE } from "@/components/site/motion-primitives";
import industryScale from "@/assets/industry-scale.jpg";
import canopyDay from "@/assets/canopy-day.jpg";
import { useState, useEffect } from "react";

/* BEAT 13 — Where you fit. */
const PATHS = [
  { label: "I own a plantation", to: "/owners" as const },
  { label: "I want to own one", to: "/owners" as const },
  { label: "I'm an institution", to: "/investors" as const },
];

const QUESTIONS = [
  "DO YOU ALREADY OWN A PLANTATION?",
  "ARE YOU BUILDING TOWARDS ONE?",
  "ARE YOU DEPLOYING INSTITUTIONAL CAPITAL?",
];

export function BeatWhereYouFit() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0); // forces Rise re-animation on loop

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPaused) {
      // 4-second blank pause after all 3 questions finish
      timer = setTimeout(() => {
        setIsPaused(false);
        setCurrentIndex(0);
        setKey((prev) => prev + 1);
      }, 2000);
    } else {
      // Each question stays visible for 3.5 seconds before moving to the next
      timer = setTimeout(() => {
        if (currentIndex < QUESTIONS.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setKey((prev) => prev + 1); // trigger entrance animation for next question
        } else {
          // Finished the last question, trigger the blank pause before looping
          setIsPaused(true);
        }
      }, 3500);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  return (
    <section className="border-t border-hairline bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        
        {/* Looping sequential H2 container with fixed minimum height to prevent layout jumps */}
        <div className="min-h-[100px] flex flex-col justify-center">
          {!isPaused && (
            <div key={key}>
              <Rise delay={0.2}>
                <h2 className="beat-lg max-w-[24ch]">
                  {QUESTIONS[currentIndex]}
                </h2>
              </Rise>
            </div>
          )}
        </div>

        <Rise delay={0.1}>
          <p className="quiet mt-6 text-[#da2e2b]">However you're entering, there's a defined path in.</p>
        </Rise>

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
                <span className="label text-muted-foreground">0{i + 1}</span>
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
/* BEAT 14 — The industry. */
export function BeatIndustry() {
  return (
    <section className="relative isolate overflow-hidden border-t border-hairline">
      <img
        src={industryScale}
        alt="Aerial view of plantation blocks, an access road and a mill on the horizon"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/65" />
      <div className="mx-auto flex min-h-[92vh] max-w-[1600px] flex-col justify-end gap-6 px-5 py-24 md:px-10 md:py-32">
        <Rise>
          <h2 className="beat-lg max-w-[20ch] text-ink-foreground">
            Africa has some of the best oil-palm growing conditions on earth.
          </h2>
        </Rise>
        <Rise delay={0.15}>
          <p className="beat-md max-w-[24ch] text-ink-foreground/70">
            What it's never had is the operating discipline to match.
          </p>
        </Rise>
        <Rise delay={0.3}>
          <p className="label text-signal">We're building that — plantation by plantation.</p>
        </Rise>
      </div>
    </section>
  );
}

/* BEAT 15 — Close: the hero footage, settled. */
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
          <p className="quiet">Join the waitlist. We'll reach you within 72 hours.</p>
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
