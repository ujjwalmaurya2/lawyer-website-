import React from 'react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { Button } from '../common/Button';
import { MessageSquare, ArrowDown, ChevronRight, Scale } from 'lucide-react';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const Hero: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;

  return (
    <section className="relative min-h-[90vh] lg:min-h-[96vh] flex items-center pt-24 sm:pt-28 pb-14 sm:pb-20 lg:py-0 overflow-hidden bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      
      {/* Background Lighting Gradients — Layer 1 (Depth) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-burgundy-100/50 dark:bg-burgundy-950/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-terracotta-100/40 dark:bg-terracotta-950/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Floating Editorial Vertical Label (Magazine feel) */}
      <div className="hidden 2xl:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20 pointer-events-none select-none opacity-60">
        <div className="w-[1.5px] h-12 bg-burgundy-800 dark:bg-burgundy-400" />
        <span className="[writing-mode:vertical-lr] text-[9px] uppercase tracking-[0.3em] text-burgundy-800 dark:text-burgundy-300 font-mono font-bold">
          CHAMBER 62 · ALLAHABAD HC
        </span>
        <div className="w-[1.5px] h-12 bg-burgundy-800 dark:bg-burgundy-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: 45% Typography & Actions — Layer 2 */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-5 sm:space-y-7 text-left">
            
            {/* Eyebrow Label with Burgundy & Terracotta Accents */}
            <div className="inline-flex items-center gap-2.5">
              <div className="w-5 sm:w-6 h-[1.5px] bg-burgundy-800 dark:bg-burgundy-400" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-burgundy-800 dark:text-burgundy-400 font-bold font-mono">
                HIGH COURT OF JUDICATURE AT ALLAHABAD
              </span>
            </div>

            {/* Main Display Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-[1.12] sm:leading-[1.08] tracking-tight text-balance">
                Advocacy with <br className="hidden xs:inline" />
                <span className="italic font-serif text-burgundy-800 dark:text-burgundy-300">clarity</span>, conviction <br />
                and purpose.
              </h1>
            </div>

            {/* Advocate Identity, Hindi Maxim & Motto */}
            <div className="border-l-2 border-burgundy-800/80 dark:border-burgundy-400/80 pl-4 sm:pl-5 space-y-1.5 py-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                  {adv.name}
                </span>
                <span className="text-stone-500 dark:text-stone-400 text-sm sm:text-base font-serif">
                  ({adv.alias})
                </span>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg font-serif text-stone-700 dark:text-stone-300 italic">
                {adv.hindiName}
              </p>
              
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400 font-mono font-medium">
                Advocate · High Court of Judicature at Allahabad
              </p>
              
              {/* Professional Motto */}
              <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-ivory-300/80 dark:border-stone-800 mt-2">
                <span className="text-base sm:text-lg md:text-xl font-serif text-burgundy-800 dark:text-brass-300 font-bold tracking-wide">
                  “{adv.motto}”
                </span>
                <span className="text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-mono">
                  ({adv.mottoTranslation})
                </span>
              </div>
            </div>

            {/* Action CTAs: Deep Burgundy Primary + Restrained Outline Secondary */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                as="a"
                href="/consultation"
                icon={<ChevronRight className="w-4 h-4" />}
                iconPosition="right"
                className="text-xs sm:text-sm font-semibold tracking-wider justify-center shadow-burgundy-glow"
              >
                Request a Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
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
            <div className="pt-3 flex items-center gap-3 sm:gap-5 text-[10px] sm:text-[11px] uppercase tracking-widest text-stone-600 dark:text-stone-400 border-t border-ivory-300 dark:border-stone-800/80 font-mono">
              <span className="inline-flex items-center gap-1 text-burgundy-800 dark:text-burgundy-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-800 dark:bg-burgundy-400" />
                CHAMBER 62
              </span>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <span>NEW BUILDING HC</span>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <span className="text-terracotta-700 dark:text-terracotta-400 font-semibold">PRAYAGRAJ</span>
            </div>
          </div>

          {/* RIGHT COLUMN: 55% Large Editorial Imagery Area (Extending towards edge) — Layer 3 */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end mt-4 lg:mt-0 relative">
            
            {/* Offset Thin Gold Frame (Depth Effect) */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-brass-500/50 dark:border-brass-400/40 rounded-xl pointer-events-none transform translate-x-3 translate-y-3 hidden sm:block -z-0" />

            <div className="relative w-full max-w-md lg:max-w-lg z-10">
              
              {/* Main Portrait Frame with Architectural Styling */}
              <div className="relative rounded-xl p-2.5 bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 shadow-card-light dark:shadow-2xl overflow-hidden group transition-all">
                
                {/* Large Editorial Portrait Area */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-lg bg-gradient-to-b from-[#F6F1E8] via-[#ECE4D5] to-[#DFD4C0] dark:from-[#181E24] dark:via-[#11161B] dark:to-[#0B0F13] flex flex-col justify-between p-6 sm:p-8 overflow-hidden border border-ivory-300 dark:border-stone-800 transition-colors">
                  
                  {/* Subtle Architectural Overlay & Grid Lines */}
                  <div className="absolute inset-0 bg-burgundy-900/5 dark:bg-burgundy-950/30 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-48 sm:w-56 h-48 sm:h-56 border-b border-l border-brass-500/20 dark:border-brass-400/20 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-36 h-36 border-t border-r border-brass-500/20 dark:border-brass-400/20 pointer-events-none" />

                  {/* Top Bar: Chamber Micro-Label & Vertical Accent */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-burgundy-800 dark:text-burgundy-300 font-bold px-3 py-1 bg-white/95 dark:bg-charcoal-950/90 border border-burgundy-800/30 dark:border-burgundy-700/50 rounded shadow-sm font-mono">
                      CHAMBER 62
                    </span>
                    
                    {/* Vertical Micro Tag */}
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-600 dark:text-stone-400 font-mono">
                      ALLAHABAD HC · UP
                    </span>
                  </div>

                  {/* Center Monogram / Portrait Composition Area */}
                  <div className="relative z-10 my-auto text-center space-y-3 sm:space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-2 border-brass-500/70 dark:border-brass-400/50 bg-white/95 dark:bg-charcoal-900/90 flex flex-col items-center justify-center shadow-lg group-hover:border-burgundy-800 transition-colors">
                      <span className="font-serif text-2xl sm:text-3xl text-burgundy-800 dark:text-brass-400 font-normal">AP</span>
                      <div className="h-[1.5px] w-6 sm:w-8 bg-brass-500/70 dark:bg-brass-400/60 mt-1" />
                    </div>
                    
                    <div className="space-y-0.5">
                      <h3 className="font-serif text-xl sm:text-2xl text-charcoal-800 dark:text-ivory-100 font-normal tracking-wide">
                        Ashutosh Pandey
                      </h3>
                      <p className="text-[10px] sm:text-xs text-stone-600 dark:text-stone-400 uppercase tracking-widest font-mono">
                        Advocate · High Court Allahabad
                      </p>
                    </div>

                    <div className="inline-block px-3 py-0.5 rounded bg-ivory-200/80 dark:bg-charcoal-800/80 border border-ivory-300 dark:border-stone-700">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-mono font-semibold">
                        [ ADVOCATE PORTRAIT / EDITORIAL IMAGE ]
                      </span>
                    </div>
                  </div>

                  {/* Bottom Strip: Chamber Institutional Metadata */}
                  <div className="relative z-10 pt-3 sm:pt-4 border-t border-ivory-300 dark:border-stone-800/80 text-center space-y-0.5">
                    <p className="text-xs font-serif text-burgundy-800 dark:text-burgundy-300 italic font-semibold">
                      “न्याय ममः धर्म”
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-stone-600 dark:text-stone-400 uppercase tracking-widest font-mono">
                      New Building · High Court Allahabad
                    </p>
                  </div>
                </div>

                {/* Fine Gold Corner Details */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brass-500/80 dark:border-brass-400/70" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brass-500/80 dark:border-brass-400/70" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brass-500/80 dark:border-brass-400/70" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brass-500/80 dark:border-brass-400/70" />
              </div>

              {/* Side Floating Tag: Chamber Coordinates */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 p-2.5 px-4 bg-navy-950 text-ivory-50 rounded-lg border border-navy-800 shadow-xl font-mono text-[10px] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brass-400 animate-pulse" />
                <span>CHAMBER 62 · NEW BUILDING</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Minimal Bottom Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-mono">
        <span>Scroll to Explore</span>
        <ArrowDown className="w-3 h-3 text-burgundy-800 dark:text-brass-400 animate-bounce" />
      </div>
    </section>
  );
};
