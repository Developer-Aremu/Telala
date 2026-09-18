import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { EASE, Rise } from '@/components/site/motion-primitives'

export const Route = createFileRoute('/reports')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-24 overflow-y-auto">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        
        {/* ==================================================================
            LAYOUT GRID: Left Column (Pinterest Style Cards) & Right Column (Featured Report + Sub)
            ================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* ==================================================================
              LEFT & MIDDLE COLUMNS (span 2 columns using a 2-column sub-masonry grid)
              ================================================================== */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* TOP BLOCK: Intro / Headline with Circular Glowing Red Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center justify-between gap-6 py-4"
            >
              <div className="max-w-[600px] z-10">
                <Rise>
                  <h1 className="beat-lg text-foreground mb-4">
                    What’s your next brilliant move?
                  </h1>
                </Rise>
                <Rise delay={0.1}>
                  <p className="text-[15px] leading-[1.6] text-muted-foreground">
                    Game-changing work. People and AI powering growth. At Telala, we help you think bigger, build stronger, and expand opportunity for all.
                  </p>
                </Rise>
              </div>
              
              {/* Circular Glowing Red Arrow Button */}
              <div className="flex-shrink-0 z-10 hidden sm:block">
                <a 
                  href="/contact" 
                  className="w-14 h-14 rounded-full border border-red-500/40 bg-background/50 flex items-center justify-center text-foreground hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] cursor-pointer"
                  aria-label="Next"
                >
                  <span className="text-xl">→</span>
                </a>
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
                  className="rounded-[6px] overflow-hidden relative group shadow-lg w-full aspect-square"
                >
                  <div className="w-full h-full bg-[#1C261E] relative overflow-hidden flex flex-col justify-between p-6">
                    <img 
                      src="/placeholder-video.png" 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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

                {/* CARD 3: Global Farmer Insights / Report (~1.5x taller) */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                  className="rounded-[6px] overflow-hidden relative group shadow-lg w-full h-[450px]"
                >
                  <div className="w-full h-full bg-[#141B26] relative overflow-hidden flex flex-col justify-between p-6">
                    <img 
                      src="/placeholder-farmer.png" 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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

              {/* RIGHT SUB-COLUMN: Conversation (~2x taller) & New Video Card */}
              <div className="flex flex-col gap-6">

                {/* CARD 2: Conversation (~2x taller) */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                  className="rounded-[6px] overflow-hidden relative group shadow-lg w-full h-[600px]"
                >
                  <div className="w-full h-full bg-[#1E222A] relative overflow-hidden flex flex-col justify-between p-8">
                    <img 
                      src="/placeholder-conversation.png" 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

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

                {/* CARD 4: New Video Card (Replacing the old newsletter slot) */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                  className="rounded-[6px] overflow-hidden relative group shadow-lg w-full h-[300px]"
                >
                  <div className="w-full h-full bg-[#18231C] relative overflow-hidden flex flex-col justify-between p-6">
                    <img 
                      src="/placeholder-video-secondary.png" 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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

          {/* ==================================================================
              RIGHT COLUMN: FEATURED REPORT + EMBEDDED VIDEO + NEWSLETTER SUB
              ================================================================== */}
          <div className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-28">

            {/* TOP COMPONENT: Tall Hero Report */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="rounded-[6px] overflow-hidden relative group shadow-lg"
            >
              <div className="w-full h-[520px] bg-[#16202B] relative overflow-hidden flex flex-col justify-between p-8">
                <img 
                  src="/placeholder-report.png" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                {/* Top Meta */}
                <div className="relative z-10">
                  <span className="label text-signal uppercase tracking-wider font-semibold">Report</span>
                </div>

                {/* Bottom Overlaid Text & Actions */}
                <div className="relative z-10 flex flex-col gap-3">
                  <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-white group-hover:text-signal transition-colors">
                    McKinsey Technology Trends Outlook 2026
                  </h2>
                  <p className="text-[13px] text-zinc-300 leading-relaxed">
                    Discover how groundbreaking technology shifts are redefining enterprise capabilities and sustainable long-term growth.
                  </p>
                  <div>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-[4px] text-[12px] font-medium hover:bg-signal hover:text-signal-foreground hover:border-signal transition-colors"
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
              className="rounded-[6px] overflow-hidden relative group shadow-lg"
            >
              <div className="w-full h-[220px] bg-[#1C2026] relative overflow-hidden flex flex-col justify-between p-6">
                <img 
                  src="/placeholder-video.png" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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
              className="bg-card border border-hairline rounded-[6px] p-6 flex flex-col justify-between shadow-lg"
            >
              <div>
                <h3 className="text-[18px] font-semibold leading-tight tracking-tight text-foreground mb-3">
                  Subscribe to the latest Telala Insights on the topics you care about.
                </h3>
              </div>
              <div className="my-2">
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-background border border-hairline rounded-[4px] px-3 py-2 text-[13px] text-foreground placeholder:text-muted-foreground/40 flex-1 focus:outline-none focus:border-signal transition-colors"
                  />
                  <button 
                    type="submit" 
                    className="bg-signal text-background px-3 py-2 rounded-[4px] font-medium hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    →
                  </button>
                </form>
                <div className="text-center my-3">
                  <span className="text-[11px] text-muted-foreground relative px-2 bg-card">Or continue with</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" className="border border-hairline rounded-[4px] py-2 text-[11px] font-medium text-foreground hover:border-signal transition-colors cursor-pointer">
                    Google
                  </button>
                  <button type="button" className="border border-hairline rounded-[4px] py-2 text-[11px] font-medium text-foreground hover:border-signal transition-colors cursor-pointer">
                    LinkedIn
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}