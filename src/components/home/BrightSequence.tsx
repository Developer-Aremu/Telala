import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { WordsIn, EASE, Rise } from "@/components/site/motion-primitives";
import revealDevice from "@/assets/reveal-device.jpg";

/* BEAT 8 — Hard cut from dark to full brightness. */
export function BeatReveal() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between bg-background pt-28">
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-5 md:px-10">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
        </motion.div>

        <h2 className="beat-xl mt-10 max-w-[14ch]">
          <WordsIn text="Telala gives you control." inView stagger={0.17} delay={0.4} />
        </h2>
      </div>

      <div className="relative mt-16 h-[52vh] w-full overflow-hidden md:h-[50vh]">
        <motion.img
          src={revealDevice}
          alt="A worker logging a harvest on a rugged handheld device at the base of an oil palm"
          loading="lazy"
          width={1920}
          height={1200}
          className="size-full object-cover"
          initial={{ scale: 1.12, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease: EASE }}
        />
      </div>
    </section>
  );
}

/* BEAT 9 — Three disciplines drawn into one system. */
const NODES = [
  { label: "Establish", x: 50, y: 12 },
  { label: "Operate", x: 88, y: 82 },
  { label: "See", x: 12, y: 82 },
];

export function BeatWhatTelalaIs() {
  return (
    <section className="border-t border-hairline bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] items-center gap-16 px-5 md:grid-cols-2 md:px-10">
        <div>
          <Rise>
            <p className="label text-signal">What Telala is</p>
          </Rise>
          <Rise delay={0.1}>
            <h2 className="beat-lg mt-6 max-w-[16ch]">
              One operating company. Three disciplines, running as one system.
            </h2>
          </Rise>
          <Rise delay={0.2}>
            <p className="quiet mt-8">
              We establish plantations. We operate them. We built the system that sees them.
            </p>
          </Rise>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
            <motion.path
              d="M50,16 L84,78 L16,78 Z"
              fill="none"
              stroke="var(--signal)"
              strokeWidth={0.5}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2.2, ease: EASE, delay: 0.4 }}
            />
          </svg>
          {NODES.map((n, i) => (
            <motion.div
              key={n.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.35, ease: EASE }}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="block size-3 bg-foreground" />
                <span className="label whitespace-nowrap">{n.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* BEAT 10 — The system, glimpsed. */
const FEED = [
  { time: "06:12", text: "FFB harvested · Block C4 · 1,240 kg" },
  { time: "06:31", text: "Transfer logged · C4 → Ramp 2" },
  { time: "07:04", text: "Chain of custody verified" },
  { time: "07:19", text: "Variance flagged · Block A9 · −6%" },
];

export function BeatSystemGlimpsed() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="border-t border-hairline bg-secondary py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 md:grid-cols-[1fr_1.1fr] md:px-10">
        <div className="flex flex-col justify-center gap-8">
          <Rise>
            <p className="label text-signal">The system</p>
          </Rise>
          <Rise delay={0.1}>
            <h2 className="beat-lg max-w-[18ch]">
              Every harvest. Every transfer. Every hand that touches your land.
            </h2>
          </Rise>
          <Rise delay={0.2}>
            <p className="quiet">
              Logged the moment it happens — not summarized days later. A verified chain of custody
              confirms what's reported is what's real. Discrepancies surface immediately.
            </p>
          </Rise>
          <Rise delay={0.3}>
            <p className="beat-md">Reporting looks back. Telala looks forward.</p>
          </Rise>
        </div>

        <motion.div style={{ y }} className="relative">
          <div className="border border-hairline bg-card shadow-[0_40px_120px_-60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
              <span className="label">Telala OS · Live</span>
              <span className="flex items-center gap-2">
                <span
                  className="block size-1.5 rounded-full bg-signal"
                  style={{ animation: "signal-pulse 2.4s ease-out infinite" }}
                />
                <span className="label text-muted-foreground">Estate 04</span>
              </span>
            </div>

            <div className="relative h-52 border-b border-hairline bg-background">
              <PulseMap />
            </div>

            <ul className="divide-y divide-border">
              {FEED.map((row, i) => (
                <motion.li
                  key={row.time}
                  className="flex items-center justify-between gap-6 px-5 py-4"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.35, ease: EASE }}
                >
                  <span className="label text-muted-foreground">{row.time}</span>
                  <span className="flex-1 text-sm">{row.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PulseMap() {
  const dots = [
    [18, 30],
    [34, 62],
    [52, 24],
    [61, 71],
    [78, 44],
    [88, 66],
    [26, 80],
    [70, 18],
  ];
  return (
    <svg viewBox="0 0 100 60" className="absolute inset-0 size-full" aria-hidden>
      <g stroke="var(--border)" strokeWidth={0.2}>
        {[12, 24, 36, 48].map((yy) => (
          <line key={yy} x1="0" y1={yy} x2="100" y2={yy} />
        ))}
        {[20, 40, 60, 80].map((xx) => (
          <line key={xx} x1={xx} y1="0" x2={xx} y2="60" />
        ))}
      </g>
      {dots.map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={1}
          fill="var(--signal)"
          initial={{ opacity: 0.15, scale: 1 }}
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

/* BEAT 11 — Before / After, the split line moving. */
export function BeatBeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const split = useTransform(scrollYProgress, [0, 1], ["62%", "0%"]);

  return (
    <section ref={ref} className="relative h-[160vh] border-t border-hairline bg-background">
      <div className="sticky top-0 flex h-screen items-stretch overflow-hidden">
        <motion.div
          className="relative flex flex-col justify-center bg-ink px-5 py-16 text-ink-muted md:px-10"
          style={{ width: split }}
        >
          <p className="label text-ink-muted">Before</p>
          <p className="beat-md mt-6 max-w-[16ch] text-ink-foreground/70">
            A phone call, days later, once it's too late to matter.
          </p>
        </motion.div>

        <div className="relative flex flex-1 flex-col justify-center bg-background px-5 py-16 md:px-10">
          <p className="label text-signal">After</p>
          <p className="beat-md mt-6 max-w-[18ch]">
            You already knew — often before it became a problem at all.
          </p>
          <motion.span
            className="mt-10 block size-2 bg-signal"
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}

/* BEAT 12 — Proof, not promises: an ambient loop. */
const LOOP = ["Audit", "Baseline", "Deploy control", "Measure", "Audit again"];

export function BeatProof() {
  return (
    <section className="border-t border-hairline bg-secondary py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] items-center gap-16 px-5 md:grid-cols-2 md:px-10">
        <div>
          <Rise>
            <p className="label text-signal">Proof, not promises</p>
          </Rise>
          <Rise delay={0.1}>
            <h2 className="beat-lg mt-6 max-w-[14ch]">
              We don't project your returns. We measure them.
            </h2>
          </Rise>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
          {LOOP.map((step, i) => {
            const angle = (i / LOOP.length) * Math.PI * 2 - Math.PI / 2;
            const left = 50 + Math.cos(angle) * 40;
            const top = 50 + Math.sin(angle) * 40;
            return (
              <div
                key={step}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <span
                  className="block size-2.5 bg-signal"
                  style={{
                    animation: `node-loop ${LOOP.length * 1.1}s linear ${i * 1.1}s infinite`,
                  }}
                />
                <span className="label whitespace-nowrap text-muted-foreground">{step}</span>
              </div>
            );
          })}
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden>
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border)" strokeWidth={0.4} />
          </svg>
        </div>
      </div>
    </section>
  );
}
