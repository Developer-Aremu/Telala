import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import { ShieldCheck, Zap, Award, TrendingUp, Globe } from "lucide-react";

const TITLE = "Careers — Telala";
const DESCRIPTION =
  "We are building the operating infrastructure for Africa's plantation industries. If you believe plantations can run with industrial discipline, we want to hear from you.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Careers,
});

const TRAITS = [
  {
    num: "01",
    title: "Integrity",
    description:
      "Who don't just make claims. Who do big things honestly, and the same way when no one is watching.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Action",
    description: "Who move. Who build. Who finish.",
    icon: Zap,
  },
  {
    num: "03",
    title: "Credibility",
    description:
      "Who care about the weight of what they say, and about who they are. Their team, their clients and everyone who deals with them act on their words and rely on their character. So their words must be true, and so must they, because outcomes depend on both.",
    icon: Award,
  },
  {
    num: "04",
    title: "Expansion",
    description: "Who don't stop at one thing. Who multiply what they build.",
    icon: TrendingUp,
  },
  {
    num: "05",
    title: "Purpose",
    description:
      "Who want to use their work to transform the world around them. Not work that ends when you clock out. Work that changes a community, an industry, a continent.",
    icon: Globe,
  },
];

const PROCESS = [
  [
    "Apply",
    "Tell us who you are and what you have delivered.",
  ],
  [
    "Review",
    "Our team reads every application and measures it against what the role requires: your experience, what you have delivered, and how closely you match the people we are looking for. If you fit, you move to assessment.",
  ],
  [
    "Assess",
    "A practical task and a conversation with the team.",
  ],
  [
    "Offer",
    "A clear offer, then structured onboarding.",
  ],
];

function Careers() {
  return (
    <>
      <PageHero
        thread="Careers · Join Telala"
        title="We are building the operating infrastructure for Africa's plantation industries."
        lead="If you believe plantations can run with industrial discipline, we want to hear from you. This is a standing invitation, not a vacancy posting."
      />

      {/* 1. Who We Are Looking For */}
      <Section>
        <Rise>
          <p className="label text-signal">Who we are looking for</p>
          <h2 className="beat-lg mt-6 max-w-[24ch]">
            We are building the industries that will let Africa feed the world in 50 years.
          </h2>
          <p className="quiet mt-6 max-w-[70ch] text-base md:text-lg leading-relaxed">
            To do that, we need people like you. If that is why you work, this is where you belong.
          </p>
        </Rise>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRAITS.map(({ num, title, description, icon: Icon }, i) => (
            <Rise key={title} delay={i * 0.1}>
              <div className="h-full bg-card p-6 border border-hairline rounded-2xl shadow-sm flex flex-col items-start">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-600 border border-red-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="label text-signal text-xs">Step {num}</span>
                    <h3 className="beat-sm mt-1 text-black text-lg font-medium">{title}</h3>
                  </div>
                </div>
                <p className="quiet mt-5 text-sm md:text-base leading-relaxed">{description}</p>
              </div>
            </Rise>
          ))}
        </div>
      </Section>

      {/* 2. How It Works */}
      <Section className="bg-neutral-50/50 border-y border-hairline py-16 md:py-24">
        <div className="max-w-[80ch]">
          <Rise>
            <p className="label text-signal">How it works</p>
            <h2 className="beat-lg mt-6 text-black">The application process</h2>
          </Rise>
        </div>

        <div className="mt-12 grid gap-px border border-hairline bg-border md:grid-cols-4">
          {PROCESS.map(([step, desc], i) => (
            <Rise key={step} delay={i * 0.1}>
              <div className="h-full bg-card p-7 md:min-h-72 flex flex-col justify-between">
                <div>
                  <span className="label text-signal">0{i + 1}</span>
                  <h3 className="beat-sm mt-8 text-black">{step}</h3>
                  <p className="quiet mt-4 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </Section>

      {/* 3. Apply Section */}
      <Section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl">
          <Rise>
            <p className="label text-signal">Apply</p>
            <h2 className="beat-lg mt-6">Take the first step</h2>
            <p className="quiet mt-6 text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto">
              Takes about five minutes. More detail is requested only if you are shortlisted.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ActionLink to="/contact">Submit application</ActionLink>
            </div>
          </Rise>
        </div>
      </Section>
    </>
  );
}