import { createFileRoute } from "@tanstack/react-router";
import { Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import { ShieldCheck, Zap, Award, TrendingUp, Globe } from "lucide-react";
import teamImage from "@/assets/people-office-work-day.jpg";

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
      {/* Hero Section */}
      <section className="relative w-full text-white pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={teamImage}
            alt="Telala team collaborating in office"
            className="size-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
          <Rise delay={0.1}>
            <p className="label text-red-500 font-mono text-xs uppercase tracking-wider">Careers · Join Telala</p>
            <h1 className="beat-lg mt-4 max-w-[24ch] text-white">
              We are building the operating infrastructure for Africa's plantation industries.
            </h1>
            <p className="mt-6 max-w-[65ch] text-base md:text-lg leading-relaxed text-neutral-200 font-normal">
              If you believe plantations can run with industrial discipline, we want to hear from you. This is a standing invitation, not a vacancy posting.
            </p>
          </Rise>

          <Rise delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4 mb-0">
              <ActionLink to="#application-form">Apply to Telala</ActionLink>
            </div>
          </Rise>
        </div>
      </section>

      {/* 1. Who We Are Looking For */}
      <div className="w-full bg-black py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Rise>
            <p className="label text-signal">Who we are looking for</p>
            <h2 className="beat-lg mt-6 max-w-[24ch] text-white">
              We are building the industries that will let Africa feed the world in 50 years.
            </h2>
            <p className="mt-6 max-w-[70ch] text-base md:text-lg leading-relaxed text-neutral-200 ">
              To do that, we need people like you. If that is why you work, this is where you belong.
            </p>
          </Rise>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TRAITS.map(({ num, title, description, icon: Icon }, i) => (
              <Rise key={title} delay={i * 0.1}>
                <div className="h-full bg-card p-6 shadow-sm flex flex-col items-start border border-neutral-100 ">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-x bg-red-500/10 text-red-600 border border-red-500/20">
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
        </div>
      </div>

      {/* 2. How It Works */}
      <div className="w-full bg-neutral-50/50 py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="max-w-[80ch] py-4 md:py-8">
            <Rise>
              <p className="label text-signal">How it works</p>
              <h2 className="beat-lg mt-6 text-black">The application process</h2>
            </Rise>
          </div>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
            {PROCESS.map(([step, desc], i) => (
              <Rise key={step} delay={i * 0.1}>
                <div className="h-full bg-white p-7 md:min-h-72 flex flex-col justify-between">
                  <div>
                    <span className="label text-signal">0{i + 1}</span>
                    <h3 className="beat-sm mt-8 text-black">{step}</h3>
                    <p className="quiet mt-4 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Application Form Segment */}
      <div id="application-form" className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <Rise>
            <div className="text-center">
              <h2 className="beat-lg mt-6 text-black">Take the first step</h2>
              <p className="quiet mt-2 text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto">
                Takes about five minutes. More detail is requested only if you are shortlisted.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-12 space-y-6 text-left">
              {/* Full Name & Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Chioma Kenneth"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-black placeholder:text-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., chioma@example.com"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-black placeholder:text-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* Phone & Role of Interest */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 ..."
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-black placeholder:text-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Role of Interest</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Operations / Engineering"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-black placeholder:text-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* CV or LinkedIn Link */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">CV or LinkedIn Link</label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/username or CV link"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-black placeholder:text-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>

              {/* Most Difficult Thing Delivered */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  What is the most difficult thing you have delivered, and how do you know it worked?
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the challenge, your action, and quantifiable outcome..."
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-black placeholder:text-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>

              {/* Why Telala */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">Why Telala?</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what draws you to our mission..."
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-black placeholder:text-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div className="text-sm text-neutral-500">
                <h2 className="block text-sm font-medium text-black mb-2 mt-14 text-signal">More detail is requested only if you are shortlisted.</h2>
              </div>
            

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </Rise>
        </div>
      </div>
    </>
  );
}