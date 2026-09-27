import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroScrollSectionProps {
  bgImage: string;
  title: string;
  subtitle: string;
  tagline?: string;
  ctaText?: string;
  ctaAction?: () => void;
}

export function HeroScrollSection({
  bgImage,
  title,
  subtitle,
  tagline,
}: HeroScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1: Quick background scale-in early
  const bgScale = useTransform(scrollYProgress, [0, 0.4], [1.12, 1]);

  // Stage 2: Text fades AND slides up smoothly into place
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.15, 0.45], [30, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="relative flex h-full w-full items-center">
          <motion.div
            style={{ 
              scale: bgScale,
              backgroundImage: `url(${bgImage})`
            }}
            className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat"
          />
          <div className="absolute inset-0 -z-10 bg-ink/65" />

          <div className="mx-auto flex min-h-[92vh] w-full max-w-[1600px] flex-col justify-end gap-6 px-5 py-24 md:px-10 md:py-32">
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="flex flex-col gap-6"
            >
              <h2 className="beat-lg max-w-[20ch] text-ink-foreground">
                {title}
              </h2>
              <p className="beat-md max-w-[24ch] text-ink-foreground/70">
                {subtitle}
              </p>
              {tagline && (
                <p className="label text-signal">{tagline}</p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}