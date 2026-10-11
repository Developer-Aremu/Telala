import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import heroImage from "@/assets/bgWorld.png";
import coverHovers from "@/assets/Coverhover.jpg";

const TITLE = "Telala OS — Your Plantation. Under Control.";
const DESCRIPTION = "Know what's happening. Know what needs to happen next.";

export const Route = createFileRoute("/oshomepage")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: OsHomepage,
});

function OsHomepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate w-full pt-32 pb-24 md:pt-40 md:pb-32 min-h-[85vh] flex flex-col justify-center bg-ink text-white overflow-hidden">
        {/* Subtle background ambient overlay */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <img
            src={heroImage}
            alt="Background texture"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/80" />
        </div>

        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headings, Supporting Text & CTAs */}
            <div className="lg:col-span-5">
              <Rise>
                <p className="label text-signal">Telala OS</p>
                
                {/* Main Heading */}
                <h1 className="beat-lg mt-6 max-w-[18ch] text-white">
                  Your Plantation. <br />
                  <span className="text-signal">Under Control.</span>
                </h1>

                {/* Supporting Text */}
                <p className="quiet mt-6 max-w-[45ch] text-neutral-300 text-lg md:text-xl leading-relaxed">
                  Know what's happening. Know what needs to happen next.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <ActionLink to="/contact">Request OS Demo</ActionLink>
                  <a
                    href="#features"
                    className="px-6 py-3 border border-white/20 text-white rounded-md hover:bg-white/10 transition-colors text-sm font-medium"
                  >
                    Explore Capabilities
                  </a>
                </div>

                {/* Quick Highlights */}
                <div className="mt-14 grid grid-cols-2 gap-6 pt-8 border-t border-white/15">
                  <div className="space-y-2">
                    <div className="size-10 rounded-lg bg-signal/20 border border-signal/40 flex items-center justify-center text-signal font-bold text-sm">
                      OS
                    </div>
                    <h3 className="beat-sm text-white text-base">Field Control</h3>
                    <p className="quiet text-xs text-neutral-400 leading-normal">
                      Track yields, truck movements, and harvest records live from the field.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="size-10 rounded-lg bg-signal/20 border border-signal/40 flex items-center justify-center text-signal font-bold text-sm">
                      HQ
                    </div>
                    <h3 className="beat-sm text-white text-base">Owner Visibility</h3>
                    <p className="quiet text-xs text-neutral-400 leading-normal">
                      One operational record accessible anywhere, even with offline field sync.
                    </p>
                  </div>
                </div>
              </Rise>
            </div>

            {/* Right Column: Dynamic Media & Dashboard Mockup Collage */}
            <div className="lg:col-span-7 relative flex justify-center items-center">
              <Rise delay={0.2} className="w-full">
                <div className="relative w-full max-w-[680px] mx-auto h-[480px] md:h-[560px] flex items-center justify-center">
                  
                  {/* Gallery Cards Stack */}
                  <div className="absolute top-0 inset-x-0 grid grid-cols-4 gap-3 md:gap-4 px-4 z-10">
                    <div className="h-32 md:h-44 rounded-2xl overflow-hidden border border-white/20 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                      <img src={coverHovers} alt="Harvest tracking" className="size-full object-cover" />
                    </div>
                    <div className="h-36 md:h-48 rounded-2xl overflow-hidden border border-white/20 shadow-xl transform translate-y-2 hover:translate-y-0 transition-transform duration-300">
                      <img src={heroImage} alt="Plantation map" className="size-full object-cover" />
                    </div>
                    <div className="h-36 md:h-48 rounded-2xl overflow-hidden border border-white/20 shadow-xl transform -translate-y-2 hover:translate-y-0 transition-transform duration-300">
                      <img src={coverHovers} alt="Mill activity" className="size-full object-cover" />
                    </div>
                    <div className="h-32 md:h-44 rounded-2xl overflow-hidden border border-white/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <img src={heroImage} alt="Equipment status" className="size-full object-cover" />
                    </div>
                  </div>

                  {/* Main Dashboard Mockup Layer */}
                  <div className="absolute bottom-2 inset-x-4 md:inset-x-8 bg-neutral-900 border border-white/20 rounded-2xl shadow-2xl overflow-hidden p-4 md:p-6 z-20 backdrop-blur-md">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <div className="flex gap-2">
                        <span className="size-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="size-3 rounded-full bg-green-500/80 inline-block" />
                      </div>
                      <span className="text-xs text-neutral-400 font-mono">Telala OS — Live Operations</span>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-8 bg-ink/90 rounded-xl p-4 border border-white/10">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs text-signal font-semibold uppercase tracking-wider">Field Map & Block Status</span>
                          <span className="text-xs text-green-400">● Live Sync</span>
                        </div>
                        <div className="h-28 md:h-36 bg-neutral-800/80 rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden">
                          <img src={heroImage} alt="Live map" className="size-full object-cover opacity-60" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                            <p className="text-xs text-white">Block B4 — Harvest Completed (14.2 Tons)</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-4 space-y-3">
                        <div className="bg-ink/90 rounded-xl p-3 border border-white/10">
                          <span className="text-[10px] text-neutral-400 block">Today's Harvest</span>
                          <span className="text-lg font-bold text-white">48.6 Tons</span>
                        </div>
                        <div className="bg-ink/90 rounded-xl p-3 border border-white/10">
                          <span className="text-[10px] text-neutral-400 block">Mill Delivery</span>
                          <span className="text-lg font-bold text-signal">On Schedule</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Rise>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Breakdown Section */}
      <div id="features">
        <Section>
          <Rise>
            <p className="label text-signal">Capabilities</p>
            <h2 className="beat-lg mt-4 max-w-[20ch]">
              Built specifically for oil palm operations at scale.
            </h2>
          </Rise>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              [
                "Traceable Activity",
                "Every truck weight, every block harvested, and every worker activity recorded in real time.",
              ],
              [
                "Offline Field Sync",
                "Works uninterrupted in remote plantations where connectivity is poor and syncs automatically when reconnected.",
              ],
              [
                "One Operational Record",
                "No conflicting reports. Owners, managers, and mill operators see the exact same truth.",
              ],
            ].map(([title, desc], i) => (
              <Rise key={title} delay={i * 0.1}>
                <div className="p-8 bg-card border border-hairline rounded-xl h-full">
                  <span className="label text-signal">0{i + 1}</span>
                  <h3 className="beat-sm mt-6">{title}</h3>
                  <p className="quiet mt-4 text-sm leading-relaxed">{desc}</p>
                </div>
              </Rise>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}