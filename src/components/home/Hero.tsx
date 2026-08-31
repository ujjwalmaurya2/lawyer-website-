import React from 'react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { Button } from '../common/Button';
import { MessageSquare, ArrowDown, ChevronRight } from 'lucide-react';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const Hero: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;

  return (
    <section className="relative min-h-[calc(100vh-4.75rem)] flex items-center pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-18 overflow-hidden bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      
      {/* Background Lighting Gradients — Layer 1 (Depth) */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-burgundy-100/40 dark:bg-burgundy-950/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-terracotta-100/30 dark:bg-terracotta-950/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Floating Editorial Vertical Label */}
      <div className="hidden 2xl:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20 pointer-events-none select-none opacity-40">
        <div className="w-[1.5px] h-8 bg-burgundy-800 dark:bg-burgundy-400" />
        <span className="[writing-mode:vertical-lr] text-[8.5px] uppercase tracking-[0.3em] text-burgundy-800 dark:text-burgundy-300 font-mono font-bold">
          CHAMBER 62 · ALLAHABAD HC
        </span>
        <div className="w-[1.5px] h-8 bg-burgundy-800 dark:bg-burgundy-400" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: 58% Typography & Actions — Controlled Hierarchy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            
            {/* Eyebrow Label with Burgundy & Terracotta Accents */}
            <div className="inline-flex items-center gap-2">
              <div className="w-4 sm:w-5 h-[1.5px] bg-burgundy-800 dark:bg-burgundy-400" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-burgundy-800 dark:text-burgundy-400 font-bold font-mono">
                HIGH COURT OF JUDICATURE AT ALLAHABAD
              </span>
            </div>

            {/* Main Display Headline — Controlled Line Length & Scale */}
            <div className="space-y-1">
              <h1 className="max-w-lg lg:max-w-xl text-3xl sm:text-4xl md:text-4.5xl lg:text-[2.85rem] xl:text-[3.25rem] font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-[1.12] sm:leading-[1.10] tracking-tight text-balance">
                Advocacy with <br className="hidden xs:inline" />
                <span className="italic font-serif text-burgundy-800 dark:text-brass-300">clarity</span>, conviction <br />
                and purpose.
              </h1>
            </div>

            {/* Advocate Identity, Hindi Maxim & Motto */}
            <div className="border-l-2 border-burgundy-800/80 dark:border-burgundy-400/80 pl-4 sm:pl-5 space-y-1 py-0.5">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-lg sm:text-xl md:text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                  {adv.name}
                </span>
                <span className="text-stone-500 dark:text-stone-400 text-sm font-serif">
                  ({adv.alias})
                </span>
              </div>
              
              <p className="text-xs sm:text-sm md:text-base font-serif text-stone-700 dark:text-stone-300 italic">
                {adv.hindiName}
              </p>
              
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-stone-600 dark:text-stone-400 font-mono font-medium">
                Advocate · High Court of Judicature at Allahabad
              </p>
              
              {/* Professional Motto */}
              <div className="pt-1.5 flex flex-wrap items-center gap-2 border-t border-ivory-300/80 dark:border-stone-800 mt-1.5">
                <span className="text-sm sm:text-base md:text-lg font-serif text-burgundy-800 dark:text-brass-300 font-bold tracking-wide">
                  “{adv.motto}”
                </span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-mono">
                  ({adv.mottoTranslation})
                </span>
              </div>
            </div>

            {/* Action CTAs: Deep Burgundy Primary + Restrained Outline Secondary */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <Button
                variant="primary"
                size="md"
                as="a"
                href="/consultation"
                icon={<ChevronRight className="w-4 h-4" />}
                iconPosition="right"
                className="text-xs sm:text-sm font-semibold tracking-wider justify-center shadow-md"
              >
                Request a Consultation
              </Button>

              <Button
                variant="outline"
                size="md"
                as="a"
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />}
                className="text-xs sm:text-sm font-semibold tracking-wider justify-center"
              >
                WhatsApp Chamber
              </Button>
            </div>

            {/* Micro Anchor Coordinates Strip */}
            <div className="pt-2 flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-widest text-stone-600 dark:text-stone-400 border-t border-ivory-300 dark:border-stone-800/80 font-mono">
              <span className="inline-flex items-center gap-1 text-burgundy-800 dark:text-brass-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-800 dark:bg-brass-400" />
                CHAMBER 62
              </span>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <span>NEW BUILDING HC</span>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <span className="text-terracotta-700 dark:text-terracotta-400 font-semibold">PRAYAGRAJ</span>
            </div>
          </div>

          {/* RIGHT COLUMN: 42% Editorial Imagery Area (Controlled 360px Container) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-2 lg:mt-0 relative">
            
            {/* Offset Thin Gold Frame (Depth Effect) */}
            <div className="absolute -top-2.5 -right-2.5 w-full h-full border border-brass-500/40 dark:border-brass-400/30 rounded-xl pointer-events-none transform translate-x-2.5 translate-y-2.5 hidden sm:block -z-0" />

            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-[360px] z-10">
              
              {/* Main Portrait Frame with Architectural Styling */}
              <div className="relative rounded-xl p-2 bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 shadow-card-light dark:shadow-2xl overflow-hidden group transition-all">
                
                {/* Editorial Portrait Area */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-lg bg-gradient-to-b from-[#F6F1E8] via-[#ECE4D5] to-[#DFD4C0] dark:from-[#181E24] dark:via-[#11161B] dark:to-[#0B0F13] flex flex-col justify-between p-4 sm:p-5 overflow-hidden border border-ivory-300 dark:border-stone-800 transition-colors">
                  
                  {/* Architectural Overlay & Grid Lines */}
                  <div className="absolute inset-0 bg-burgundy-900/5 dark:bg-burgundy-950/30 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-36 h-36 border-b border-l border-brass-500/20 dark:border-brass-400/20 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-t border-r border-brass-500/20 dark:border-brass-400/20 pointer-events-none" />

                  {/* Top Bar: Chamber Micro-Label & Vertical Accent */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[8.5px] uppercase tracking-[0.22em] text-burgundy-800 dark:text-brass-300 font-bold px-2 py-0.5 bg-white/95 dark:bg-charcoal-950/90 border border-burgundy-800/30 dark:border-burgundy-700/50 rounded shadow-xs font-mono">
                      CHAMBER 62
                    </span>
                    
                    <span className="text-[8.5px] uppercase tracking-widest text-stone-600 dark:text-stone-400 font-mono">
                      ALLAHABAD HC · UP
                    </span>
                  </div>

                  {/* Center Monogram / Portrait Composition Area */}
                  <div className="relative z-10 my-auto text-center space-y-2">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-brass-500/70 dark:border-brass-400/50 bg-white/95 dark:bg-charcoal-900/90 flex flex-col items-center justify-center shadow-md group-hover:border-burgundy-800 transition-colors">
                      <span className="font-serif text-lg sm:text-xl text-burgundy-800 dark:text-brass-400 font-normal">AP</span>
                      <div className="h-[1px] w-4 sm:w-5 bg-brass-500/70 dark:bg-brass-400/60 mt-0.5" />
                    </div>
                    
                    <div className="space-y-0.5">
                      <h3 className="font-serif text-base sm:text-lg text-charcoal-800 dark:text-ivory-100 font-normal tracking-wide">
                        Ashutosh Pandey
                      </h3>
                      <p className="text-[9.5px] sm:text-[10px] text-stone-600 dark:text-stone-400 uppercase tracking-widest font-mono">
                        Advocate · High Court Allahabad
                      </p>
                    </div>

                    <div className="inline-block px-2 py-0.5 rounded bg-ivory-200/80 dark:bg-charcoal-800/80 border border-ivory-300 dark:border-stone-700">
                      <span className="text-[7.5px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-mono font-semibold">
                        [ ADVOCATE PORTRAIT / EDITORIAL IMAGE ]
                      </span>
                    </div>
                  </div>

                  {/* Bottom Strip: Chamber Institutional Metadata */}
                  <div className="relative z-10 pt-2 sm:pt-2.5 border-t border-ivory-300 dark:border-stone-800/80 text-center space-y-0.5">
                    <p className="text-[10.5px] font-serif text-burgundy-800 dark:text-brass-300 italic font-semibold">
                      “न्याय ममः धर्म”
                    </p>
                    <p className="text-[8.5px] text-stone-600 dark:text-stone-400 uppercase tracking-widest font-mono">
                      New Building · High Court Allahabad
                    </p>
                  </div>
                </div>

                {/* Fine Gold Corner Details */}
                <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-brass-500/80 dark:border-brass-400/70" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-brass-500/80 dark:border-brass-400/70" />
                <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-brass-500/80 dark:border-brass-400/70" />
                <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-brass-500/80 dark:border-brass-400/70" />
              </div>

              {/* Side Floating Tag: Chamber Coordinates */}
              <div className="hidden sm:flex absolute -bottom-2.5 -left-2.5 items-center gap-1.5 p-1.5 px-3 bg-navy-950 text-ivory-50 rounded-lg border border-navy-800 shadow-xl font-mono text-[8.5px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brass-400 animate-pulse" />
                <span>CHAMBER 62 · NEW BUILDING</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Minimal Bottom Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[8.5px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-mono">
        <span>Scroll to Explore</span>
        <ArrowDown className="w-3 h-3 text-burgundy-800 dark:text-brass-400 animate-bounce" />
      </div>
    </section>
  );
};
