import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import heroDesigned from "@/assets/bgWorld.png";
import coverHovers from "@/assets/Coverhover.jpg";

const TITLE = "The Industry — Telala";

export const Route = createFileRoute("/industry")({
  head: () => ({ meta: [{ title: TITLE }] }),
  component: Industry,
});

const CHAIN = [
  [
    "Land & plantation",
    "It starts with ground that's been assessed and planted with discipline.",
  ],
  [
    "Operations & people",
    "Then it's run — daily, verifiably, by people who are trained and supported to do it well.",
  ],
  [
    "Processing & logistics",
    "What's harvested has to move and become something sellable, without losing value in transit.",
  ],
  [
    "Industry & market",
    "And it has to connect to a market that rewards the discipline behind it.",
  ],
];

function Industry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate w-full pt-44 pb-20 md:pt-20 md:pb-28 min-h-[85vh] flex flex-col justify-center overflow-hidden bg-ink text-white">
        {/* Background Image & Left-to-Right Black Gradient Overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroDesigned}
            alt="Oil palm canopy background"
            className="size-full object-cover object-top"
          />
          {/* Left-to-right gradient overlay (opaque black on left fading out to transparent on right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
        </div>
        
        <div className="mx-auto max-w-[1600px] w-full px-5 md:px-10">
          <Rise>
            <p className="label text-signal">The Industry</p>
            <h1 className="beat-lg mt-6 max-w-[24ch] text-white">
              33% of the world's most suitable oil palm land is in Africa. We produce 4.2% of the world's supply.
            </h1>
            <p className="quiet mt-6 max-w-[75ch] text-neutral-300 text-base md:text-lg leading-relaxed">
              Here's the part that number hides: plantations are expanding across this continent right now. More land is going into palm every year. Processing capacity isn't expanding with it.
            </p>
          </Rise>
        </div>
      </section>

      {/* The Rot, Extraction Gap, and Double Cost Section */}
      <Section>
        <div className="grid gap-14 md:grid-cols-3">
          {[
            [
              "The rot",
              "Fruit is being harvested with nowhere built to receive it.",
              "Palm fruit that isn't processed within hours of harvest doesn't wait for capacity to catch up. It just spoils. That's not a future risk. That's happening on the ground today, on plantations already producing.",
            ],
            [
              "The extraction gap",
              "What doesn't spoil often isn't processed properly either.",
              "Without real refining capacity nearby, fruit ends up in small hand presses and informal local mills never built for industrial output — equipment that recovers a fraction of what the fruit is actually worth. The oil gets extracted. The value doesn't.",
            ],
            [
              "The double cost",
              "Every hectare planted without capacity is a bet that costs twice.",
              "Planting without real processing infrastructure costs you two ways: what rots in the field, and what gets processed for far less than it's worth. Capacity built now protects a harvest that's already growing.",
            ],
          ].map(([k, h, b], i) => (
            <Rise key={k} delay={i * 0.1}>
              <p className="label text-signal">{k}</p>
              <h2 className="beat-md mt-6">{h}</h2>
              <p className="quiet mt-6">{b}</p>
            </Rise>
          ))}
        </div>
      </Section>

      
      {/* Infrastructure Response Section (2-Column: Text Left, Image Right) */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6">
            <Rise>
              <p className="label text-signal">Infrastructure response</p>
              <h2 className="beat-lg mt-6 max-w-[22ch]">
                Mills. Refineries. Processing infrastructure sized to match planting.
              </h2>
              <p className="quiet mt-7 max-w-[60ch]">
                This is the arm of Telala built to close that gap. Processing infrastructure sized to match planting as it happens — not years behind it, and not handed off to equipment that was never built for this scale. The fruit already exists. The demand already exists. What's missing is capacity built to actually capture what's there.
              </p>
            </Rise>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6">
            <Rise delay={0.2}>
              <div className="relative h-[400px] md:h-[480px] w-full overflow-hidden ">
                <img
                  src={coverHovers}
                  alt="Industrial oil palm processing mill"
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/10" />
              </div>
            </Rise>
          </div>
        </div>
        {/* Chain Section with Hover Effects */}
      <div className="py-20 px-20 bg-white">
        <div className="mt-10 grid gap-px border border-hairline bg-border md:grid-cols-4">
          {CHAIN.map(([h, b], i) => (
            <Rise key={h} delay={i * 0.1} className="h-full">
              {/* Added group and transition utility classes here */}
              <div className="h-full bg-card p-7 md:min-h-72 transition-colors duration-300 group hover:bg-signal cursor-pointer">
                <span className="label text-signal transition-colors duration-300 group-hover:text-white">
                  0{i + 1}
                </span>
                <h3 className="beat-sm mt-12 transition-colors duration-300 group-hover:text-white">
                  {h}
                </h3>
                <p className="quiet mt-5 transition-colors duration-300 group-hover:text-white/90">
                  {b}
                </p>
                {i < 3 ? (
                  <div className="mt-8 text-signal transition-colors duration-300 group-hover:text-white">
                    →
                  </div>
                ) : null}
              </div>
            </Rise>
          ))}
        </div>
      </div>
      </Section>
      

      {/* Red Call to Action Banner Section */}
      <div className="mt-2 md:mt-8 pb-0">
        
        <Rise>
          <div className="bg-signal text-white p-8 md:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <h2 className="beat-md max-w-[24ch] text-white">
              Build the industry with us.
            </h2>
            <div className="flex flex-col items-start lg:items-end gap-6 max-w-[45ch]">
              <p className="text-white/80 text-sm leading-relaxed text-right">
                Capacity built now protects a harvest that's already growing and the margin currently being lost to equipment that was never built to maximize the output of this industry.
              </p>
              <div>
                <ActionLink to="/contact">Fund the infrastructure →</ActionLink>
              </div>
            </div>
          </div>
        </Rise>
        
      </div>

      {/* CTA Section */}
      {/*<Section>
        <Rise>
          <h2 className="beat-lg max-w-[20ch]">Build the industry with us.</h2>
          <p className="quiet mt-7 max-w-[75ch]">
            Capacity built now protects a harvest that's already growing and the margin currently being lost to equipment that was never built to maximize the output of this industry.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/contact">Fund the infrastructure →</ActionLink>
          </div>
        </Rise>
      </Section>*/}
    </>
  );
}