import { createFileRoute } from "@tanstack/react-router";
import { Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import canopyDay from "@/assets/canopy-day.jpg";

const TITLE = "Telala OS — See the Plantation";

export const Route = createFileRoute("/os")({
  head: () => ({ meta: [{ title: TITLE }] }),
  component: TelalaOS,
});

function TelalaOS() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="pb-20 pt-26 text-ink-foreground bg-white">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div>
            <Rise>
              <p className="label text-signal">Telala OS</p>
            </Rise>
            <Rise delay={0.1}>
              <h1 className="beat-lg mt-6 max-w-[26ch] text-black">
                Something is going missing from your plantation. You don't know what. You don't know where. Not yet.
              </h1>
            </Rise>
          </div>
          
          <Rise delay={0.3}>
            <div className="relative mt-12 h-[450px] w-full overflow-hidden    -hairline shadow-sm">
              <img
                src={canopyDay}
                alt="Oil palm canopy in full daylight"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>
          </Rise>
        </div>
      </section>

      {/* 2. The Report That Was Probably Right */}
      <Section className="py-10 md:py-14">
        <Rise delay={0.1}>
          <p className="label text-signal">The invisible gap</p>
          <h2 className="beat-lg mt-6 max-w-[22ch] text-black">
            The Report That Was Probably Right
          </h2>
        </Rise>

        <div className="mt-8 mb-10 max-w-[100ch]">
          <Rise delay={0.15}>
            <p className=" max-w-[200ch] text-base leading-relaxed">
              Every week, the numbers look fine. The harvest looks good. The logs match up. Nothing seems wrong. And still, somehow, the plantation makes less than it should. <br /> <br />
              That's the hard part. Nothing here is clearly wrong. A load weighed a little less than it should. A truck took longer than it should. A number got rounded before it reached you.
              Each one means nothing on its own. Add them up, and the plantation is quietly losing more than it should — with no single moment you can point to and say: that's where it went.
            </p> 
          </Rise>
        </div>

        <div className="w-full max-w-[100ch] py-10 md:py-4">
          <Rise>
            <h2 className="beat-lg mt-6 text-black max-w-[200ch]">What you can't see is what costs you</h2>
          </Rise>

          <Rise delay={0.15}>
            <p className="quiet mt-6 text-base leading-relaxed max-w-[200ch]">
              Loss on a plantation rarely shows itself. It looks like a normal Tuesday. A weight that's a bit off. A truck that took too long, with no reason why. A block that doesn't add up once it reaches the mill.
              <br /><br />
              It's not about blame. It's that no one — not you, not your managers — has a way to know, one way or the other.
            </p>
          </Rise>
        </div>
      </Section>


      {/* 4. What Telala OS Does & LiveEstate Stream */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Rise>
            <p className="label text-signal">What Telala OS does</p>
            <h2 className="beat-lg mt-6">
              A record made while it's still happening.
            </h2>
            <p className="quiet mt-7 leading-relaxed">
              It closes that gap. Every harvest, every truck, every hand that touches your land — logged the second it happens. Tied to the person who did it. Checked against what shows up at the other end.
            </p>
            <p className="quiet mt-4 font-medium text-black">
              Not a report of what happened. A record of it, made while it's still happening.
            </p>
          </Rise>

          <Rise delay={0.15}>
            <div className="overflow-hidden rounded-2xl     bg-card p-6 md:p-8 shadow-sm">
              <p className="label text-signal">Telala OS · LiveEstate</p>
              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="bg-white p-3.5     rounded-lg flex items-center justify-between">
                  <span>06:12 — Harvest logged · Block C4</span>
                  <span className="font-semibold text-black">1,240 kg</span>
                </div>
                <div className="bg-white p-3.5     rounded-lg flex items-center justify-between">
                  <span>06:31 — Truck logged</span>
                  <span className="text-neutral-500">C4 → Ramp 2</span>
                </div>
                <div className="bg-white p-3.5     rounded-lg flex items-center justify-between text-emerald-600 bg-emerald-50/50">
                  <span>07:04 — Checked.</span>
                  <span className="font-semibold">It matches.</span>
                </div>
                <div className="bg-white p-3.5     rounded-lg flex items-center justify-between text-signal bg-signal/5">
                  <span>07:19 — Block A9 doesn't match</span>
                  <span className="font-semibold">6% short</span>
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </Section>

      {/* 5. The Gap Closes Section with Faded Ash Photo Placeholder */}
      <Section className="">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Rise delay={0.15}>
            <div className="relative h-[320px] w-full overflow-hidden bg-neutral-200/60 shadow-inner flex items-center justify-center">
              <span className="font-mono text-xs text-neutral-400 tracking-wider uppercase">
                [Field Operations Placeholder]
              </span>
            </div>
          </Rise>
          <Rise>
            <p className="label text-signal">The Stakes</p>
            <h2 className="beat-lg mt-6">The gap closes, or it stays open. There's no in-between.</h2>
            <p className="quiet mt-6 text-base md:text-lg leading-relaxed">
              A plantation either has a system that catches a 6% problem the same day it happens. Or it finds out later — once thousands in unaccounted crop have already quietly vanished.
            </p>
          </Rise>
        </div>
      </Section>

      {/* 6. CTA Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
          <Rise>
            <h2 className="beat-lg max-w-[24ch]  mx-auto text-signal">This is what running a plantation should feel like</h2>
            <p className="quiet mt-6 max-w-[60ch] mx-auto text-base md:text-lg">
              Not hoping the reports are true. Knowing — because every number is checked the second it's made.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ActionLink to="/contact">Join the waitlist</ActionLink>
              <ActionLink to="/what-we-do" tone="line">
                Explore operations
              </ActionLink>
            </div>
          </Rise>
        </div>
      </section>
    </>
  );
}