import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { motion } from 'motion/react'
import { EASE, Rise } from '@/components/site/motion-primitives'

export const Route = createFileRoute('/contact')({
  component: WaitlistPage,
})

interface FormData {
  name: string
  email: string
  phone: string
  location: string
  institution: string
  hectares: string
  runToday: string
  capitalInterest: string
  capitalRange: string
  capitalTimeline: string
  message: string
}

export function WaitlistPage() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    institution: '',
    hectares: '',
    runToday: '',
    capitalInterest: '',
    capitalRange: '',
    capitalTimeline: '',
    message: ''
  })

  const audiences: Record<string, { topTag?: string; title: string; description: string; bestFor: string; tagLabel: string }> = {
    owner: {
      title: "I run a plantation already",
      description: "Existing land, existing team, existing harvest.",
      bestFor: "Owners with an existing team who want better information, not a new operator.",
      tagLabel: "Existing owner"
    },
    aspiring: {
      title: "I'm building toward owning one",
      description: "Land, capital, or both — somewhere in progress.",
      bestFor: "Owners without the team, time, or systems to operate at scale themselves.",
      tagLabel: "Aspiring owner"
    },
    capital: {
      title: "I represent capital",
      description: "Institutional or private, looking to fund plantations or processing.",
      bestFor: "Funds, family offices, or private investors seeking high-yield agricultural assets.",
      tagLabel: "Capital"
    },
    other: {
      title: "Something else",
      description: "Press, partnership, or a question before any of the above.",
      bestFor: "Ecosystem partners, journalists, and strategic collaborators.",
      tagLabel: "General inquiry"
    }
  }

  const currentAudienceTag = selectedAudience ? audiences[selectedAudience]?.tagLabel : ''

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 overflow-y-auto">
      
      {/* ==================================================================
          STICKY PROGRESS BAR
          ================================================================== */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm pt-6 pb-4 border-b border-hairline/40">
        <div className="flex items-center gap-3 max-w-[720px] mx-auto px-6">
          {/* Step 1 Node & Line */}
          <div className="flex-1 flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full transition-all ${currentStep >= 1 ? 'bg-signal' : 'bg-[#2A2620]'}`} />
            <div className={`flex-1 h-[1px] transition-all ${currentStep > 1 ? 'bg-signal' : 'bg-hairline'}`} />
          </div>
          
          {/* Step 2 Node & Line */}
          <div className="flex-1 flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full transition-all ${currentStep >= 2 ? 'bg-signal' : 'bg-[#2A2620]'}`} />
            <div className={`flex-1 h-[1px] transition-all ${currentStep > 2 ? 'bg-signal' : 'bg-hairline'}`} />
          </div>

          {/* Step 3 Node */}
          <div className={`w-2 h-2 rounded-full transition-all ${currentStep >= 3 ? 'bg-signal' : 'bg-[#2A2620]'}`} />
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-6 pt-8">
        {/* ------------------------------------------------------------------
            STEP 1: AUDIENCE SELECTION CARDS
            ------------------------------------------------------------------ */}
        {currentStep === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="mb-12 text-left max-w-[640px] mx-auto">
              <Rise>
                <h1 className="beat-md mt-2 text-foreground">
                  Tell us where you’re starting from.
                </h1>
              </Rise>
              <Rise delay={0.1}>
                <p className="text-[14px] leading-[1.6] text-muted-foreground mt-2">
                  We’ll tell you if you’re ready — a real answer within 72 hours, not an autoreply.
                </p>
              </Rise>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto">
              {Object.entries(audiences).map(([key, aud], index) => (
                <motion.button
                  key={key}
                  type="button"
                  onClick={() => { 
                    setSelectedAudience(key); 
                    setCurrentStep(2); 
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: EASE }}
                  className="text-left bg-card border border-hairline border-l-[4px] border-l-border hover:border-l-signal p-8 rounded-[6px] transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {aud.topTag && (
                      <span className="label text-signal block mb-3 font-semibold">
                        {aud.topTag}
                      </span>
                    )}
                    <p className="font-serif text-[22px] md:text-[24px] font-bold leading-[1.2] mb-4 text-foreground group-hover:text-signal transition-colors">
                      {aud.title}
                    </p>
                    <p className="text-[14.5px] leading-[1.6] text-muted-foreground mb-4">
                      {aud.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ------------------------------------------------------------------
            STEP 2: APPLICATION & CONTACT DETAILS FORM
            ------------------------------------------------------------------ */}
        {currentStep === 2 && (
          <motion.div 
            className="max-w-[720px] mx-auto"
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="mb-6">
              <button 
                type="button" 
                onClick={() => setCurrentStep(1)} 
                className="text-[13px] text-muted-foreground hover:text-foreground cursor-pointer bg-transparent border-none p-0 flex items-center gap-1.5 transition-colors"
              >
                ← Back
              </button>
            </div>
            
            <div className="inline-flex items-center gap-2 label text-signal bg-card border border-hairline px-[10px] py-[5px] rounded-[3px] mb-6">
              <span className="w-[6px] h-[6px] bg-signal rounded-[1px]"></span>
              {currentAudienceTag}
            </div>

            <div className="mb-8">
              <h2 className="beat-lg mb-2 text-foreground">
                A few details, and we’ll take it from here.
              </h2>
              <p className="text-[15px] leading-[1.5] text-muted-foreground">
                Everything below goes straight to the team reviewing applications — not a queue.
              </p>
            </div>

            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                setCurrentStep(3); 
              }} 
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[13px] font-medium text-foreground">Full name</label>
                  <input 
                    type="text" 
                    required 
                    className="bg-card border border-hairline rounded-[4px] p-[11px_14px] text-[15px] text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-signal transition-colors" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[13px] font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="bg-card border border-hairline rounded-[4px] p-[11px_14px] text-[15px] text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-signal transition-colors" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[13px] font-medium text-foreground">Phone</label>
                  <input 
                    type="tel" 
                    className="bg-card border border-hairline rounded-[4px] p-[11px_14px] text-[15px] text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-signal transition-colors" 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[13px] font-medium text-foreground">
                    {selectedAudience === 'capital' ? 'Institution (optional)' : 'Location'}
                  </label>
                  <input 
                    type="text" 
                    placeholder={selectedAudience !== 'capital' ? 'e.g. Cross River, Nigeria' : ''} 
                    className="bg-card border border-hairline rounded-[4px] p-[11px_14px] text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-signal transition-colors" 
                    value={selectedAudience === 'capital' ? formData.institution : formData.location} 
                    onChange={e => setFormData(selectedAudience === 'capital' ? {...formData, institution: e.target.value} : {...formData, location: e.target.value})} 
                  />
                </div>
              </div>

              {selectedAudience === 'owner' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-[7px]">
                    <label className="text-[13px] font-medium text-foreground">Plantation size (hectares)</label>
                    <input 
                      type="number" 
                      placeholder="hectares"
                      className="bg-card border border-hairline rounded-[4px] p-[11px_14px] text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-signal transition-colors" 
                      value={formData.hectares} 
                      onChange={e => setFormData({...formData, hectares: e.target.value})} 
                    />
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <label className="text-[13px] font-medium text-foreground">How is it run today?</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Self-managed', 'Third-party managed', 'Mixed'].map(opt => (
                        <button 
                          type="button" 
                          key={opt} 
                          onClick={() => setFormData({...formData, runToday: opt})} 
                          className={`border rounded-[4px] px-3 py-2 text-xs transition-colors cursor-pointer ${formData.runToday === opt ? 'border-signal bg-signal/10 text-foreground' : 'border-hairline bg-card text-muted-foreground'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedAudience === 'capital' && (
                <>
                  <div className="flex flex-col gap-[7px]">
                    <label className="text-[13px] font-medium text-foreground">Where’s the interest?</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Plantation development', 'Processing infrastructure', 'Both', 'Still deciding'].map(opt => (
                        <button 
                          type="button" 
                          key={opt} 
                          onClick={() => setFormData({...formData, capitalInterest: opt})} 
                          className={`border rounded-[4px] px-3 py-2 text-xs transition-colors cursor-pointer ${formData.capitalInterest === opt ? 'border-signal bg-signal/10 text-foreground' : 'border-hairline bg-card text-muted-foreground'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-[7px]">
                    <label className="text-[13px] font-medium text-foreground">Capital range</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Under $250K', '$250K–$1M', '$1M–$10M', '$10M+'].map(opt => (
                        <button 
                          type="button" 
                          key={opt} 
                          onClick={() => setFormData({...formData, capitalRange: opt})} 
                          className={`border rounded-[4px] px-3 py-2 text-xs transition-colors cursor-pointer ${formData.capitalRange === opt ? 'border-signal bg-signal/10 text-foreground' : 'border-hairline bg-card text-muted-foreground'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-[7px]">
                    <label className="text-[13px] font-medium text-foreground">Timeline</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Ready to deploy', 'Evaluating', 'Long-term interest'].map(opt => (
                        <button 
                          type="button" 
                          key={opt} 
                          onClick={() => setFormData({...formData, capitalTimeline: opt})} 
                          className={`border rounded-[4px] px-3 py-2 text-xs transition-colors cursor-pointer ${formData.capitalTimeline === opt ? 'border-signal bg-signal/10 text-foreground' : 'border-hairline bg-card text-muted-foreground'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="flex flex-col gap-[7px]">
                <label className="text-[13px] font-medium text-foreground">
                  Anything else? <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <textarea 
                  className="bg-card border border-hairline rounded-[4px] p-[11px_14px] text-[15px] text-foreground placeholder:text-muted-foreground/30 min-h-[96px] focus:outline-none focus:border-signal transition-colors resize-y" 
                  value={formData.message} 
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-3 pt-2">
                <button 
                  type="submit" 
                  className="bg-signal text-background font-medium text-[15px] px-[24px] py-[13px] rounded-[4px] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Join the waitlist
                </button>
                <span className="text-[12.5px] text-muted-foreground">72-hour response, always from a person.</span>
              </div>
            </form>
          </motion.div>
        )}

        {/* ------------------------------------------------------------------
            STEP 3: SUCCESS CONFIRMATION SCREEN
            ------------------------------------------------------------------ */}
        {currentStep === 3 && (
          <motion.div 
            className="pt-2 max-w-[720px] mx-auto"
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#7FA36D] flex items-center justify-center mb-6 text-[#7FA36D]">
              ✓
            </div>
            <h2 className="beat-lg mb-3 text-foreground">You’re on the list.</h2>
            <p className="text-muted-foreground text-[15.5px] leading-[1.6] max-w-[42ch] mb-7">
              Someone reads every one of these. If it’s a fit, you’ll hear from us directly, within 72 hours.
            </p>
            <div className="label text-muted-foreground border-t border-hairline pt-4">
              Filed as: <span className="text-foreground font-medium">{currentAudienceTag}</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}