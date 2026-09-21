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

          {/* RIGHT COLUMN: FEATURED REPORT + EMBEDDED VIDEO + NEWSLETTER SUB */}
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

            {/* BOTTOM COMPONENT: Newsletter Subscribe Form */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="bg-[#20080b] border border-red-900/30 rounded-none p-6 flex flex-col justify-between shadow-lg"
            >
              <div>
                <h3 className="text-[18px] font-semibold leading-tight tracking-tight text-white mb-3">
                  Subscribe to the latest Telala Insights on the topics you care about.
                </h3>
              </div>
              <div className="my-2">
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-[#140507] border border-red-900/40 rounded-none px-3 py-2 text-[13px] text-white placeholder:text-zinc-400 flex-1 focus:outline-none focus:border-signal transition-colors"
                  />
                  <button 
                    type="submit" 
                    className="bg-signal text-background px-3 py-2 rounded-none font-medium hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    →
                  </button>
                </form>
                <div className="text-center my-3">
                  <span className="text-[11px] text-zinc-300 relative px-2 bg-[#20080b]">Or continue with</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" className="border border-red-900/40 rounded-none py-2 text-[11px] font-medium text-white hover:border-signal transition-colors cursor-pointer bg-[#140507]">
                    Google
                  </button>
                  <button type="button" className="border border-red-900/40 rounded-none py-2 text-[11px] font-medium text-white hover:border-signal transition-colors cursor-pointer bg-[#140507]">
                    LinkedIn
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ==================================================================
            FEATURED NEWSLETTER BANNER SECTION (Sharp Corners)
            ================================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="w-full rounded-none overflow-hidden relative shadow-2xl border border-red-900/30"
        >
          <div className="w-full bg-gradient-to-br from-[#30090f] via-[#1a0507] to-[#0f0204] relative overflow-hidden flex flex-col p-8 md:p-14 min-h-[440px] justify-between">
            {/* Background Image with Gradient Overlay */}
            <img 
              src="/placeholder-newsletter-hero.png" 
              alt="Featured Newsletter" 
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140507] via-[#140507]/90 to-transparent" />

            {/* Top Category Header */}
            <div className="relative z-10">
              <span className="text-[12px] tracking-[0.2em] uppercase font-semibold text-signal">
                Featured Newsletter
              </span>
            </div>

            {/* Center Content & Form */}
            <div className="relative z-10 max-w-[620px] my-6 flex flex-col gap-6">
              <h2 className="text-[36px] md:text-[46px] font-semibold leading-[1.1] tracking-tight text-white">
                Insights to navigate what&rsquo;s next <span className="text-signal">&rsaquo;</span>
              </h2>
              <p className="text-[15px] md:text-[16px] text-zinc-200 leading-relaxed">
                Sharper decisions start with The CEO Shortlist, a bimonthly newsletter of our best ideas for the C-suite.
              </p>

              {/* Inline Subscribe Form */}
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 mt-2 max-w-[500px]">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="bg-[#140507]/90 backdrop-blur-md border border-red-900/40 rounded-none px-4 py-3 text-[14px] text-white placeholder:text-zinc-400 flex-1 focus:outline-none focus:border-signal transition-colors shadow-inner"
                />
                <button 
                  type="submit" 
                  className="bg-signal text-signal-foreground px-6 py-3 rounded-none font-semibold text-[14px] hover:opacity-90 transition-opacity cursor-pointer shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Bottom Sub-bar */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/15 text-xs text-zinc-300">
              <span>Bimonthly Executive Briefing</span>
              <span>Telala C-Suite Editorial</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}