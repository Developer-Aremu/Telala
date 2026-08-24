import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Rise({
  children,
  delay = 0,
  y = 26,
  className,
  amount = 0.5,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word build-in — deliberate, never letter-by-letter. */
export function WordsIn({
  text,
  className,
  delay = 0,
  stagger = 0.13,
  inView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { opacity: 0, y: "0.42em", filter: "blur(6px)" },
    show: { opacity: 1, y: "0em", filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial={reduced ? "show" : "hidden"}
      {...(inView
        ? { whileInView: "show", viewport: { once: true, amount: 0.6 } }
        : { animate: "show" })}
      style={{ display: "inline-block" }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: "inline-block", overflow: "hidden" }}>
          <motion.span variants={word} style={{ display: "inline-block" }}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export { EASE };
