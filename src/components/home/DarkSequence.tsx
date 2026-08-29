import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring, useInView } from "motion/react";
import { WordsIn, EASE } from "@/components/site/motion-primitives";
import heroCanopy from "@/assets/hero-canopy.jpg";
import darkLand from "@/assets/dark-land.jpg";
import textureSoil from "@/assets/texture-soil.jpg";

/* BEAT 1 + 2 — Hero canopy that rises off the land into darkness. */
export function BeatHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.32]);
  const brightness = useTransform(scrollYProgress, [0, 0.85], [1, 0.16]);
  const saturate = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const filter = useTransform(
    [brightness, saturate],
    ([b, s]: number[]) => `brightness(${b}) saturate(${s})`,
  );
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <section ref={ref} className="relative h-[210vh] bg-ink">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={heroCanopy}
          alt="Aerial view of an oil palm canopy at first light, mist sitting low between the rows"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
          style={reduced ? {} : { scale, filter }}
        />
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-ink"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.9], [0.28, 0.9]) }}
        />

        <motion.div
          className="relative flex h-full max-w-[1600px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-28"
          style={reduced ? {} : { opacity: titleOpacity, y: titleY }}
        >
          <h1 className="beat-xl max-w-[16ch] text-ink-foreground">
            <WordsIn text="Building Africa's Oil Palm Industry" delay={0.35} stagger={0.16} />
          </h1>
          <motion.div
            className="mt-10 flex items-center gap-3"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1.2 }}
          >
            <span className="label text-ink-muted">Scroll</span>
            <span className="block h-px w-16 bg-ink-muted/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* BEAT 2 + 3 — The leak. */
export function BeatLeak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink">
      <motion.img
        src={darkLand}
        alt="Near-black aerial silhouette of plantation land"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-10 size-full scale-110 object-cover opacity-70 grayscale"
        style={{ y }}
      />
      <div className="mx-auto flex min-h-[screen] max-w-[1600px] flex-col justify-center gap-8 px-5 py-32 md:px-10">
        <motion.h2
          className="beat-lg max-w-[20ch] text-ink-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          Somewhere on your plantation, right now, value is leaking.
        </motion.h2>
        <motion.p
          className="beat-md text-ink-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 1.1, ease: EASE }}
        >
          You don't know where.
        </motion.p>
      </div>
    </section>
  );
}

const TYPEWRITER_PARAGRAPHS = [
  "It's not your land.",
  "It's not your trees.",
  "It's not your people.",
];

export function BeatFlicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaitingCycleEnd, setIsWaitingCycleEnd] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const fullText = TYPEWRITER_PARAGRAPHS[currentParagraphIndex] ?? "";
    const typingSpeed = 32; 
    const pauseTime = 2500; // Pause when a single paragraph is fully shown
    const cyclePauseTime = 4000; // 6-second blank screen pause after all paragraphs finish

    let timer: NodeJS.Timeout;

    if (isWaitingCycleEnd) {
      timer = setTimeout(() => {
        setIsWaitingCycleEnd(false);
        setCurrentParagraphIndex(0);
        setIsDeleting(false);
      }, cyclePauseTime);
    } else if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      if (currentParagraphIndex === TYPEWRITER_PARAGRAPHS.length - 1) {
        setIsWaitingCycleEnd(true);
      } else {
        setIsDeleting(false);
        setCurrentParagraphIndex((prev) => prev + 1);
      }
    } else {
      timer = setTimeout(() => {
        if (isDeleting) {
          setDisplayedText(displayedText.substring(1));
        } else {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [isInView, displayedText, isDeleting, currentParagraphIndex, isWaitingCycleEnd]);

  return (
    <section ref={containerRef} className="relative flex items-center pt-12 pb-6 md:pt-20 md:pb-10 bg-ink ">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
        
        {/* Two-Column Layout: Left (h2 heading) & Right (Typewriter effect) */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Static H2 Heading */}
          <div>
            <h2 className="beat-lg text-ink-foreground max-w-[30ch]">
              Even if you found out today, knowing wouldn't stop tomorrow's leak.
            </h2>
          </div>

          {/* Right Column: Typewriter Paragraphs with Blinking Red Dot */}
          <motion.div
            className="min-h-[140px] border-l border-ink-muted/20 pl-6 flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-xl md:text-3xl beat-md text-ink-muted uppercase leading-relaxed">
              <span className="inline-block w-2.5 h-6 mr-1.5 bg-signal animate-pulse align-middle" />
              {displayedText}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

/* BEAT 5 — Full pause. */
export function BeatPause() {
  return (
    <section className="relative flex min-h-[10vh] items-center bg-ink">
      <div className="sticky top-0 flex h-screen w-full items-center">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <motion.p
            className="label text-ink-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4 }}
          >
            If it isn't the land, the trees, or the people —
          </motion.p>
          <motion.h2
            className="beat-xl mt-8 text-ink-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.6, delay: 0.7, ease: EASE }}
          >
            Where is it?
          </motion.h2>
        </div>
      </div>
    </section>
  );
}

/* BEAT 6 — Lines that never arrive. */
export function BeatRealLeak() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink py-32 md:py-44">
      <img
        src={darkLand}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 size-full object-cover opacity-45 grayscale"
      />
      <BrokenSignal />
      <div className="relative mx-auto grid max-w-[1600px] gap-10 px-5 md:grid-cols-2 md:px-10">
        <motion.h2
          className="beat-lg text-ink-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: EASE }}
        >
          It's in the distance between what happens on your land, and what reaches you.
        </motion.h2>
        <motion.div
          className="flex flex-col justify-end gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
        >
          <p className="beat-md text-ink-foreground/80">
            Your current system doesn't tell you everything.
          </p>
          <p className="beat-md text-signal">It decides what you're allowed to know.</p>
        </motion.div>
      </div>
    </section>
  );
}

function BrokenSignal() {
  const paths = [
    "M40,240 C160,200 240,180 330,170",
    "M60,60 C200,90 280,130 340,158",
    "M700,80 C560,110 440,140 372,160",
    "M720,300 C580,270 450,210 375,182",
    "M380,340 C376,300 372,240 366,196",
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 760 380"
      className="pointer-events-none absolute inset-0 -z-10 size-full opacity-70"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="var(--signal)"
          strokeWidth={0.8}
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: [0, 0.72, 0.62], opacity: [0, 0.9, 0.35] }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 3.2, delay: i * 0.35, repeat: Infinity, repeatDelay: 1.4 }}
        />
      ))}
      <circle cx="366" cy="188" r="3" fill="var(--signal)" opacity="0.6" />
    </svg>
  );
}

/* BEAT 7 — Cursor-follow spotlight. */
export function BeatSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mx = useSpring(0.5, { stiffness: 90, damping: 20 });
  const my = useSpring(0.5, { stiffness: 90, damping: 20 });
  const maskImage = useTransform(
    [mx, my],
    ([x, y]: number[]) =>
      `radial-gradient(circle 26rem at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(0,0,0,1), rgba(0,0,0,0.06) 70%)`,
  );

  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        if (reduced) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width);
        my.set((e.clientY - rect.top) / rect.height);
      }}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <motion.img
        src={textureSoil}
        alt=""
        aria-hidden
        loading="lazy"
        width={1280}
        height={1600}
        className="absolute inset-0 -z-10 size-full object-cover opacity-35 grayscale"
        style={reduced ? {} : { WebkitMaskImage: maskImage, maskImage }}
      />
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <motion.h2
          className="beat-lg max-w-[20ch] text-ink-foreground"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: EASE }}
        >
          What actually happened on your plantation yesterday?
        </motion.h2>
        <motion.p
          className="mt-8 max-w-[42ch] text-lg text-ink-muted md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Who touched what. What was harvested. What was lost.
        </motion.p>
        <motion.p
          className="mt-6 max-w-[46ch] font-mono text-sm text-ink-muted/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          (if you can't answer that, you don't have a plantation — you have a hope.)
        </motion.p>
      </div>
    </section>
  );
}