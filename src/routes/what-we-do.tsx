import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useReducedMotion } from "motion/react";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { EASE, Rise } from "@/components/site/motion-primitives";
import { BeatSystemGlimpsed } from "@/components/home/BrightSequence";
import revealDevice from "@/assets/reveal-device.jpg";
import darkLand from "@/assets/dark-land.jpg";
import industryScale from "@/assets/industry-scale.jpg";
import heroCanopy from "@/assets/hero-canopy.jpg";
import textureSoil from "@/assets/texture-soil.jpg";

const TITLE = "How Telala Works — Telala";
const DESCRIPTION =
  "Three disciplines. One operating company. Telala establishes plantations, operates them with industrial discipline, and makes every material event visible and traceable.";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatWeDo,
});

function WhatWeDo() {
  return (
    <>
      {/* 1. Page Hero */}
      <section className="w-full bg-white text-black pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="w-full px-5 md:px-10">
          
            <p className="label text-signal">THIS IS HOW TELALA WORKS.</p>
            <h1 className="beat-lg mt-8 max-w-[23ch] text-black">
              WE ESTABLISH PLANTATIONS. WE OPERATE THEM. WE HELP YOU SEE—EVERYTHING.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-[70ch] leading-relaxed">
              Three disciplines. One operating company. Built to run Africa's oil palm industry the way an industry this valuable deserves to be run.
            </p>
          
        </div>
      </section>


      {/* 2. Image Section (Evolution Visual) */}
      <EvolutionVisual />

      <section className="w-full bg-white text-black pt-28 pb-20 md:pt-36 md:pb-8">
        <div className="w-full px-5 md:px-10">
            <h2 className="beat-lg mt-8 max-w-[23ch] text-black">
              PHASES
            </h2>
          
        </div>
      </section>
      {/* 3. Three Disciplines Section - Full width, white background cards with hover states */}
      <section className="w-full bg-white py-24 md:py-2">
        <div className="w-full px-5 md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            
            
            <DisciplineCard
              eyebrow="01 · Establish"
              heading="Right from the dirt. Everything Assessed. Nothing assumed."
              body="Most plantations start with a guess. Soil that looks right. Terrain that seems workable. A local's word that the land is good. Then the yields come in low, three years too late to do anything about it. We test before we plant. Soil composition, drainage, terrain — measured, not eyeballed. If the land doesn't qualify, we don't establish on it. Simple as that. You don't find out your plantation was a bad bet in year four. You find out before we break ground."
              visual={<EstablishVisual />}
            />

            <DisciplineCard
              eyebrow="02 · Operate"
              heading="Operate Assist. Operate Together. Operate For You."
              body="Cultivation. Harvesting. Weighing. Transporting. Maintaining. Nobody notices these until they go wrong — and by then, the money's already gone. Most companies will tell you how to fix that. We don't advise. We work. On the ground, every day, on every plantation we run — whether you need a hand, a partner, or someone to run the whole operation while you sleep. Choose the distance you want from the work. We're there either way."
              visual={<OperateVisual />}
            />

            <DisciplineCard
              eyebrow="03 · See"
              heading="If you can't see it, it isn't happening."
              body="Every harvest. Every transfer. Every hand that touches your land. Somewhere between the field and your phone call, most of that information gets lost — or worse, someone decides what you get to hear. We built the system that ends that. Every action logged the moment it happens, not summarized weeks later by someone with a reason to round the numbers up. We built it because we needed it ourselves, running our own plantations, tired of finding out the truth too late to act on it. This is what your land looks like when nothing gets to hide."
              visual={<SeeVisual />}
            />

          </div>
        </div>
      </section>
      

      {/* 4. Others (Vision Strip & Operating Layer CTA section) */}
      <VisionStrip />

      <Section>
        <Rise>
          <p className="label text-signal">The operating layer</p>
          <h2 className="beat-lg mt-6 max-w-[22ch]">One system. Every plantation we run, runs on it.</h2>
        </Rise>
        <Rise delay={0.12}>
          <p className="quiet mt-8 max-w-[52ch]">
            One system. Every plantation we run, runs on it. Not a client version and a real version. The same one. We don't hand you a dashboard and keep the actual tool for ourselves. What tracks our own plantations, block by block, is what tracks yours. If it's good enough to run our money on, it's good enough to run yours.
          </p>
        </Rise>
        <Rise delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/os">Explore Telala OS</ActionLink>
            <ActionLink to="/owners" tone="line">
              See ownership paths
            </ActionLink>
            <ActionLink to="/investors" tone="line">
              Deploy Capital
            </ActionLink>
          </div>
        </Rise>
      </Section>
    </>
  );
}

function EvolutionVisual() {
  const reduced = useReducedMotion();
  const frames = [
    { src: darkLand, alt: "Plantation land before development" },
    { src: industryScale, alt: "Oil palm plantation developing at block scale" },
    { src: heroCanopy, alt: "Mature oil palm canopy" },
  ];

  return (
    <section className="relative isolate w-full h-[66vh] min-h-[520px] overflow-hidden border-b border-hairline bg-ink">
      {frames.map((frame, i) => {
        const isLast = i === frames.length - 1;
        return (
          <motion.img
            key={frame.src}
            src={frame.src}
            alt={frame.alt}
            width={1920}
            height={1200}
            className="absolute inset-0 size-full object-cover"
            initial={{ opacity: i === 0 ? 1 : 0, scale: reduced ? 1 : 1.06 }}
            animate={
              reduced
                ? { opacity: isLast ? 1 : 0 }
                : i === 0
                  ? { opacity: [1, 1, 0], scale: [1.06, 1.02, 1] }
                  : i === 1
                    ? { opacity: [0, 1, 1, 0], scale: [1.06, 1.04, 1.02, 1] }
                    : { opacity: [0, 1], scale: [1.05, 1] }
            }
            transition={
              reduced
                ? { duration: 0 }
                : i === 0
                  ? { duration: 2.8, delay: 0.2, ease: EASE }
                  : i === 1
                    ? { duration: 3.5, delay: 2, ease: EASE }
                    : { duration: 2.2, delay: 4.8, ease: EASE }
            }
          />
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 mx-auto flex w-full items-end justify-between px-5 pb-7 text-ink-foreground md:px-10">
        <span className="label"></span>
        <span className="label text-ink-muted">One operating company</span>
      </div>
    </section>
  );
}

function DisciplineCard({
  eyebrow,
  heading,
  body,
  visual,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  visual: React.ReactNode;
}) {
  return (
    <Rise amount={0.2}>
      {/* Card wrapper with white background and dark text for high visibility */}
      <div className="group relative flex h-full flex-col justify-between overflow-hidden border border-hairline bg-white p-8 md:p-10 shadow-sm transition-all duration-300">
        
        {/* DEFAULT STATE LAYER (White background, black/neutral-900 text) */}
        <div className="flex h-full flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
          <div>
            <p className="label text-signal">{eyebrow}</p>
            <h3 className="beat-md mt-6 text-neutral-900 font-semibold tracking-tight">{heading}</h3>
          </div>
          <div className="mt-8 overflow-hidden border border-hairline">
            {visual}
          </div>
        </div>

        {/* HOVER STATE LAYER (Reveals body description & expand prompt) */}
        <div className="absolute inset-0 flex flex-col justify-between bg-white p-8 md:p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div>
            <p className="label text-signal">{eyebrow}</p>
            <h3 className="beat-md mt-6 text-neutral-900 font-semibold tracking-tight">{heading}</h3>
            <p className="quiet mt-6 text-sm md:text-base leading-relaxed text-neutral-600">{body}</p>
          </div>
        </div>

      </div>
    </Rise>
  );
}

function EstablishVisual() {
  return (
    <figure className="w-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={textureSoil}
          alt="Oil palm plantation soil being assessed before establishment"
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover"
        />
        <motion.span
          className="absolute left-[8%] top-[58%] block h-px w-[84%] origin-left bg-signal"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
        />
        <span className="absolute left-[8%] top-[calc(58%-4px)] block size-2 bg-signal" />
        <span className="absolute right-[8%] top-[calc(58%-4px)] block size-2 bg-signal" />
      </div>
      
    </figure>
  );
}

function OperateVisual() {
  return (
    <figure className="relative w-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={revealDevice}
          alt="A harvest being logged on a handheld device at the base of an oil palm"
          loading="lazy"
          width={1920}
          height={1200}
          className="size-full object-cover"
        />
        <motion.div
          className="absolute right-3 top-[18%] max-w-[180px] border border-ink-foreground/30 bg-ink/90 px-3 py-2 text-ink-foreground backdrop-blur-sm"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.3, ease: EASE }}
        >
          <span className="label text-signal text-xs">Live record</span>
          <p className="mt-1 text-xs">1,240 kg logged at 06:12</p>
        </motion.div>
      </div>
    </figure>
  );
}

function SeeVisual() {
  return (
    <div className="w-full">
      <div className="overflow-hidden border border-hairline">
        <BeatSystemGlimpsed loop />
      </div>
    </div>
  );
}

function VisionStrip() {
  const metrics = [
    { value: 300000, suffix: "", label: "hectares under active management" },
    { value: 10000000, suffix: "", label: "tonnes harvested and verified through Telala OS" },
    { value: 10, suffix: "", label: "countries of operation" },
  ];

 
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }

    const duration = 800;
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, to]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}