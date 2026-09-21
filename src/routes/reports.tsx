import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { EASE, Rise } from '@/components/site/motion-primitives'

export const Route = createFileRoute('/reports')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2d070d] via-[#140507] to-background text-foreground pt-28 pb-24 overflow-y-auto">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex flex-col gap-16">
        
        {/* ==================================================================
            MAIN CONTENT SECTION
            ================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* LEFT & MIDDLE COLUMNS (span 2 columns using a 2-column sub-masonry grid) */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* TOP BLOCK: Intro / Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center justify-between gap-6 py-4"
            >
              <div className="max-w-[700px] z-10">
                <Rise>
                  <h1 className="beat-md text-white mb-4">
                    Insights into plantations around the world and global solutions from TELALA
                  </h1>
                </Rise>
                <Rise delay={0.1}>
                  <p className="text-[15px] leading-[1.6] text-zinc-200">
                    Game-changing work. People and AI powering growth. At Telala, we help you think bigger, build stronger, <br />and expand opportunity for all.
                  </p>
                </Rise>
              </div>
            </motion.div>

            {/* PINTEREST-STYLE ASYMMETRIC MASONRY SUB-GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

              {/* LEFT SUB-COLUMN: Video (Square) & Report (~1.5x taller) */}
              <div className="flex flex-col gap-6">

                {/* CARD 1: Video (Square aspect ratio) */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                  className="rounded-none overflow-hidden relative group shadow-lg w-full aspect-square border border-red-900/30"
                >
                  <div className="w-full h-full bg-[#2a0e12] relative overflow-hidden flex flex-col justify-between p-6">
                    <img 
                      src="/placeholder-video.png" 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                    <div className="relative z-10">
                      <span className="label text-signal uppercase tracking-wider font-semibold">Video</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[20px] font-semibold leading-tight tracking-tight text-white group-hover:text-signal transition-colors">
                        Winning: What the best athletes, teams, and coaches do differently →
                      </h3>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 3: Global Farmer Insights / Report */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                  className="rounded-none overflow-hidden relative group shadow-lg w-full h-[450px] border border-red-900/30"
                >
                  <div className="w-full h-full bg-[#240a0e] relative overflow-hidden flex flex-col justify-between p-6">
                    <img 
                      src="/placeholder-farmer.png" 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                    <div className="relative z-10">
                      <span className="label text-signal uppercase tracking-wider font-semibold">Report</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[20px] font-semibold leading-tight tracking-tight text-white group-hover:text-signal transition-colors">
                        Global Farmer Insights 2026 →
                      </h3>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* RIGHT SUB-COLUMN: Conversation & New Video Card */}
              <div className="flex flex-col gap-6">

                {/* CARD 2: Conversation */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                  className="rounded-none overflow-hidden relative group shadow-lg w-full h-[600px] border border-red-900/30"
                >
                  <div className="w-full h-full bg-[#320f14] relative overflow-hidden flex flex-col justify-between p-8">
                    <img 
                      src="/placeholder-conversation.png" 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                    <div className="relative z-10">
                      <span className="label text-signal uppercase tracking-wider font-semibold">Conversation</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[24px] font-semibold leading-tight tracking-tight text-white group-hover:text-signal transition-colors">
                        Brilliant Moves Coffee with Lloyds Banking Group CEO Charlie Nunn →
                      </h3>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 4: New Video Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                  className="rounded-none overflow-hidden relative group shadow-lg w-full h-[300px] border border-red-900/30"
                >
                  <div className="w-full h-full bg-[#260b0f] relative overflow-hidden flex flex-col justify-between p-6">
                    <img 
                      src="/placeholder-video-secondary.png" 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                    <div className="relative z-10">
                      <span className="label text-signal uppercase tracking-wider font-semibold">Video Briefing</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[18px] font-semibold leading-tight tracking-tight text-white group-hover:text-signal transition-colors">
                        Tech Trends Outlook: Executive Summary Panel →
                      </h3>
                    </div>
                  </div>
                </motion.div>
                
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: FEATURED REPORT + EMBEDDED VIDEO + NEW REPORT CARD */}
          <div className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-28">

            {/* TOP COMPONENT: Tall Hero Report */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="rounded-none overflow-hidden relative group shadow-lg border border-red-900/30"
            >
              <div className="w-full h-[520px] bg-[#2d0d12] relative overflow-hidden flex flex-col justify-between p-8">
                <img 
                  src="/placeholder-report.png" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

                <div className="relative z-10">
                  <span className="label text-signal uppercase tracking-wider font-semibold">Report</span>
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                  <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-white group-hover:text-signal transition-colors">
                    McKinsey Technology Trends Outlook 2026
                  </h2>
                  <p className="text-[13px] text-zinc-200 leading-relaxed">
                    Discover how groundbreaking technology shifts are redefining enterprise capabilities and sustainable long-term growth.
                  </p>
                  <div>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-none text-[12px] font-medium hover:bg-signal hover:text-signal-foreground hover:border-signal transition-colors"
                    >
                      Read the report →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MIDDLE COMPONENT: Embedded Video Companion */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="rounded-none overflow-hidden relative group shadow-lg border border-red-900/30"
            >
              <div className="w-full h-[220px] bg-[#290c10] relative overflow-hidden flex flex-col justify-between p-6">
                <img 
                  src="/placeholder-video.png" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                <div className="relative z-10">
                  <span className="label text-signal uppercase tracking-wider font-semibold">Video</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-[16px] font-semibold leading-tight tracking-tight text-white group-hover:text-signal transition-colors">
                    Future Horizons: Leadership in Action →
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* NEW REPLACEMENT COMPONENT: Additional Report Card */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="rounded-none overflow-hidden relative group shadow-lg border border-red-900/30"
            >
              <div className="w-full h-[320px] bg-[#22070b] relative overflow-hidden flex flex-col justify-between p-6">
                <img 
                  src="/placeholder-report.png" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

                <div className="relative z-10">
                  <span className="label text-signal uppercase tracking-wider font-semibold">Special Report</span>
                </div>

                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-[20px] font-semibold leading-tight tracking-tight text-white group-hover:text-signal transition-colors">
                    Global Supply Chain Resilience 2026 →
                  </h3>
                  <p className="text-[12.5px] text-zinc-300 leading-relaxed">
                    Analyzing sustainable networks and predictive logistics frameworks across international markets.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ==================================================================
            SEE MORE REPORTS TRIGGER BUTTON
            ================================================================== */}
        <div className="flex justify-center -mt-6">
          <button 
            type="button"
            onClick={() => {
              // Add handler to load more reports here
            }}
            className="group inline-flex items-center gap-3 bg-transparent border border-red-900/40 text-white px-8 py-4 rounded-none text-[14px] font-medium hover:border-signal hover:bg-signal/10 transition-all cursor-pointer shadow-lg"
          >
            <span>See more reports</span>
            <span className="text-signal group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
          </button>
        </div>

        {/* ==================================================================
            FULL-WIDTH NEWSLETTER SUBSCRIPTION BANNER
            ================================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="w-full bg-[#20080b] border border-red-900/30 rounded-none p-8 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-[560px]">
            <span className="text-[12px] tracking-[0.2em] uppercase font-semibold text-signal block mb-3">
              Stay Informed
            </span>
            <h3 className="text-[32px] md:text-[40px] font-semibold leading-[1.1] tracking-tight text-white mb-3">
              Insights to navigate what&rsquo;s next
            </h3>
            <p className="text-[15px] md:text-[16px] text-zinc-300 leading-relaxed">
              Sharper decisions start with our bimonthly newsletter of top ideas for leaders and operators.
            </p>
          </div>

          <div className="w-full md:w-auto flex-1 max-w-[520px]">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#140507] border border-red-900/40 rounded-none px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-400 flex-1 focus:outline-none focus:border-signal transition-colors shadow-inner"
              />
              <button 
                type="submit" 
                className="bg-signal text-signal-foreground px-8 py-3.5 rounded-none font-semibold text-[14px] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center justify-between mt-3 text-[12px] text-zinc-400 px-1">
              <span>Bimonthly Briefing</span>
              <span>Zero Spam</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}