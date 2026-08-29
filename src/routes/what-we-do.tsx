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
      <PageHero
        thread="How Telala works."
        title="We establish. We operate. We see."
        lead="Three disciplines. One operating company. Built to run Africa's oil palm industry the way an industry this valuable deserves to be run."
      />

      <EvolutionVisual />

      <DisciplineSection
        eyebrow="01 · Establish"
        heading="Right from the dirt. Assessed. Not assumed."
        body="Every plantation starts the same way. We survey the land before we touch it — soil, drainage, access, climate — and plant it block by block, with the same discipline whether it's ten hectares or ten thousand. Nothing gets planted on a guess."
        visual={<EstablishVisual />}
      />

      <DisciplineSection
        eyebrow="02 · Operate"
        heading="Operate Assist. Operate Together. Operate For You."
        body="Harvesting. Weighing. Transporting. Maintaining. The thousand small actions that quietly decide whether a plantation makes money or slowly loses it. We don't advise on this work. We do it — on the ground, every day, on every plantation we run."
        visual={<OperateVisual />}
        tone="secondary"
      />

      <DisciplineSection
        eyebrow="03 · See"
        heading="If you can't see it, it isn't happening."
        body="Every harvest. Every transfer. Every hand that touches your land — logged the moment it happens, not summarized weeks later in a phone call. Most plantations in Africa have never had this layer. We built it because we needed it ourselves."
        visual={<BeatSystemGlimpsed loop />}
      />

      <VisionStrip />

      <Section>
        <Rise>
          <p className="label text-signal">The operating layer</p>
          <h2 className="beat-lg mt-6 max-w-[22ch]">One system. Every plantation we run, runs on it.</h2>
        </Rise>
        <Rise delay={0.12}>
          <p className="quiet mt-8 max-w-[52ch]">
            The same operating layer we use ourselves is the one you'd get. Nothing held back.
          </p>
        </Rise>
        <Rise delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/os">Explore Telala OS</ActionLink>
            <ActionLink to="/owners" tone="line">
              See ownership paths
            </ActionLink>
            <ActionLink to="/investors" tone="line">
              Talk to us about capital
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
    <section className="relative isolate h-[66vh] min-h-[520px] overflow-hidden border-b border-hairline bg-ink">
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
      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1600px] items-end justify-between px-5 pb-7 text-ink-foreground md:px-10">
        <span className="label">Land → establishment → mature canopy</span>
        <span className="label text-ink-muted">One operating discipline</span>
      </div>
    </section>
  );
}

function DisciplineSection({
  eyebrow,
  heading,
  body,
  visual,
  tone = "background",
}: {
  eyebrow: string;
  heading: string;
  body: string;
  visual: React.ReactNode;
  tone?: "background" | "secondary";
}) {
  return (
    <section
      className={`border-b border-hairline py-24 md:py-32 ${tone === "secondary" ? "bg-secondary" : "bg-background"}`}
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-10">
        <div>
          <Rise>
            <p className="label text-signal">{eyebrow}</p>
          </Rise>
          <Rise delay={0.08}>
            <h2 className="beat-lg mt-6 max-w-[19ch]">{heading}</h2>
          </Rise>
          <Rise delay={0.16}>
            <p className="quiet mt-8 max-w-[52ch]">{body}</p>
          </Rise>
        </div>
        <Rise delay={0.12} amount={0.25}>
          {visual}
        </Rise>
      </div>
    </section>
  );
}

function EstablishVisual() {
  return (
    <figure>
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
      <figcaption className="label mt-3 text-muted-foreground">Block C4, week one.</figcaption>
    </figure>
  );
}

function OperateVisual() {
  return (
    <figure className="relative">
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
          className="absolute right-4 top-[18%] max-w-[230px] border border-ink-foreground/30 bg-ink/90 px-4 py-3 text-ink-foreground backdrop-blur-sm md:right-7"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.3, ease: EASE }}
        >
          <span className="label text-signal">Live record</span>
          <p className="mt-2 text-sm">1,240 kg logged at 06:12</p>
          <span className="absolute -left-20 bottom-4 h-px w-20 origin-right bg-signal" />
          <span className="absolute -left-[84px] bottom-[13px] size-2 bg-signal" />
        </motion.div>
      </div>
    </figure>
  );
}

function VisionStrip() {
  const metrics = [
    { value: 300000, suffix: "", label: "hectares under active management" },
    { value: 10000000, suffix: "", label: "tonnes harvested and verified through Telala OS" },
    { value: 10, suffix: "", label: "countries of operation" },
  ];

  return (
    <section className="border-b border-hairline bg-ink py-10 text-ink-foreground md:py-14">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-8 flex items-center gap-4">
          <span className="label text-signal">By 2030</span>
          <span className="h-px flex-1 bg-ink-foreground/15" />
        </div>
        <div className="grid gap-px bg-ink-foreground/10 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-ink px-0 py-5 md:px-7 md:py-3 first:md:pl-0">
              <div className="beat-md tabular-nums">
                <CountUp to={metric.value} />
                {metric.suffix}
              </div>
              <p className="label mt-2 max-w-[28ch] text-ink-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
