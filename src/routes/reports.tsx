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
            LAYOUT GRID: Left Column (Intro + Smaller Cards) & Right Column (Tall Hero Report)
            ================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* ==================================================================
              LEFT & MIDDLE COLUMNS (span 2 columns)
              ================================================================== */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* TOP BLOCK: Intro / Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, ease: EASE }}
              className="bg-card border border-hairline rounded-[6px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-lg"
            >
              <div className="max-w-[600px] z-10">
                <Rise>
                  <h1 className="beat-lg text-foreground mb-4">
                    What’s your next brilliant move?
                  </h1>
                </Rise>
                <Rise delay={0.1}>
                  <p className="text-[15px] leading-[1.6] text-muted-foreground mb-8">
                    Game-changing work. People and AI powering growth. At Telala, we help you think bigger, build stronger, and expand opportunity for all.
                  </p>
                </Rise>
              </div>
              
              <div className="z-10">
                <a 
                  href="/contact" 
                  className="w-12 h-12 rounded-full border border-hairline bg-background/50 flex items-center justify-center text-foreground group-hover:border-signal group-hover:text-signal transition-colors"
                  aria-label="Next"
                >
                  →
                </a>
              </div>
            </motion.div>

            {/* SUB-GRID FOR CARDS UNDER THE INTRO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* CARD: Video */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                className="bg-card border border-hairline rounded-[6px] overflow-hidden flex flex-col group shadow-lg"
              >
                <div className="w-full h-[240px] bg-[#1C261E] relative overflow-hidden">
                  <img 
                    src="/placeholder-video.png" 
                    alt="" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="label text-signal block mb-2 uppercase tracking-wider">Video</span>
                    <p className="font-serif text-[19px] font-bold leading-[1.3] text-foreground group-hover:text-signal transition-colors">
                      Winning: What the best athletes, teams, and coaches do differently →
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CARD: Conversation */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                className="bg-card border border-hairline rounded-[6px] overflow-hidden flex flex-col group shadow-lg"
              >
                <div className="w-full h-[240px] bg-[#1E222A] relative overflow-hidden">
                  <img 
                    src="/placeholder-conversation.png" 
                    alt="" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="label text-signal block mb-2 uppercase tracking-wider">Conversation</span>
                    <p className="font-serif text-[19px] font-bold leading-[1.3] text-foreground group-hover:text-signal transition-colors">
                      Brilliant Moves Coffee with Lloyds Banking Group CEO Charlie Nunn →
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CARD: Global Farmer Insights */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                className="bg-card border border-hairline rounded-[6px] overflow-hidden flex flex-col group shadow-lg"
              >
                <div className="w-full h-[200px] bg-[#141B26] relative overflow-hidden">
                  <img 
                    src="/placeholder-farmer.png" 
                    alt="" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6">
                  <span className="label text-signal block mb-2 uppercase tracking-wider">Report</span>
                  <p className="font-serif text-[19px] font-bold leading-[1.3] text-foreground group-hover:text-signal transition-colors">
                    Global Farmer Insights 2026 →
                  </p>
                </div>
              </motion.div>

              {/* CARD: Newsletter Subscribe */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                className="bg-card border border-hairline rounded-[6px] p-6 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <h3 className="font-serif text-[18px] font-bold leading-[1.3] text-foreground mb-3">
                    Subscribe to the latest Telala Insights on the topics you care about.
                  </h3>
                </div>
                <div className="my-3">
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
                  <div className="text-center my-2">
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

          {/* ==================================================================
              RIGHT COLUMN: TALL FEATURED REPORT (Spans full height matching left content)
              ================================================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="lg:col-span-1 bg-card border border-hairline rounded-[6px] flex flex-col justify-between overflow-hidden relative group shadow-lg lg:sticky lg:top-28"
          >
            <div>
              <div className="p-6 pb-2">
                <span className="label text-signal block uppercase tracking-wider font-semibold">Report</span>
              </div>
              {/* Tall Image Placeholder matching reference aspect ratio */}
              <div className="w-full h-[460px] bg-[#16202B] relative overflow-hidden my-2">
                <img 
                  src="/placeholder-report.png" 
                  alt="" 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
            </div>

            <div className="p-8 pt-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="font-serif text-[28px] font-bold leading-[1.2] text-foreground mb-4 group-hover:text-signal transition-colors">
                  McKinsey Technology Trends Outlook 2026
                </h2>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                  Discover how groundbreaking technology shifts are redefining enterprise capabilities, infrastructure, and sustainable long-term growth.
                </p>
              </div>
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-background border border-hairline text-foreground px-5 py-3 rounded-[4px] text-[13px] font-medium hover:border-signal transition-colors"
                >
                  Read the report →
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}