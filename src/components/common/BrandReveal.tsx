import React, { useState, useEffect } from 'react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';

export const BrandReveal: React.FC = () => {
  const [stage, setStage] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already seen the brand reveal in this session
    const hasSeenIntro = sessionStorage.getItem('ashutosh_brand_revealed');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeenIntro) {
      setShouldRender(false);
      return;
    }

    // Set flag in session storage so it only shows once per browser session
    sessionStorage.setItem('ashutosh_brand_revealed', 'true');
    setShouldRender(true);

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 300);
      }, 300);
      return () => clearTimeout(timer);
    }

    // Timed choreography for the luxury editorial brand reveal
    const timers = [
      setTimeout(() => setStage(1), 80),   // Monogram & Frame
      setTimeout(() => setStage(2), 260),  // Hindi Name
      setTimeout(() => setStage(3), 460),  // English Name
      setTimeout(() => setStage(4), 680),  // Professional Designation
      setTimeout(() => setStage(5), 900),  // Sacred Motto
      setTimeout(() => setIsVisible(false), 1380), // Dissolve out
      setTimeout(() => setShouldRender(false), 1850), // Fully unmount
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 300);
  };

  if (!shouldRender) return null;

  const adv = PRIMARY_ADVOCATE;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#641F2B] text-ivory-50 select-none overflow-hidden transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-105'
      }`}
      aria-label="Chamber Opening Sequence"
      role="presentation"
    >
      {/* Background Lighting Depth & Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burgundy-900/60 via-[#641F2B] to-[#45141D] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Discrete Skip Option */}
      <button
        onClick={handleSkip}
        className="absolute top-5 right-5 sm:top-6 sm:right-8 text-[9px] uppercase tracking-[0.25em] text-brass-400/60 hover:text-brass-300 font-mono transition-colors z-20 cursor-pointer p-2"
        aria-label="Skip opening animation"
      >
        Skip Intro ✕
      </button>

      {/* Main Content Reveal Box */}
      <div className="relative z-10 max-w-lg w-full mx-auto px-6 text-center space-y-4 sm:space-y-5">
        
        {/* Stage 1: Monogram in Gold Frame */}
        <div
          className={`transition-all duration-500 ease-out transform ${
            stage >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
          }`}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl border-2 border-brass-400/90 bg-[#4A151F] flex flex-col items-center justify-center shadow-2xl relative group">
            <span className="font-serif text-xl sm:text-2xl text-ivory-50 font-normal tracking-wider">
              AP
            </span>
            <div className="h-[1px] w-5 bg-brass-400/80 mt-0.5" />
            
            {/* Fine Corner Accents */}
            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-brass-300" />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t border-r border-brass-300" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b border-l border-brass-300" />
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-brass-300" />
          </div>
        </div>

        {/* Stage 2 & 3: Names (Hindi & English) */}
        <div className="space-y-1">
          {/* Hindi Name */}
          <div
            className={`transition-all duration-500 ease-out transform ${
              stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <p className="text-sm sm:text-base font-serif text-brass-200/90 italic tracking-wide">
              {adv.hindiName}
            </p>
          </div>

          {/* English Headline Name */}
          <div
            className={`transition-all duration-500 ease-out transform ${
              stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ivory-50 font-normal tracking-[0.14em] uppercase">
              {adv.name}
            </h1>
          </div>
        </div>

        {/* Stage 4: Professional Designation */}
        <div
          className={`transition-all duration-500 ease-out transform ${
            stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 py-1 px-3 rounded-full bg-burgundy-950/80 border border-brass-500/40 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-brass-400 animate-pulse" />
            <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-brass-300 font-mono font-semibold">
              ADVOCATE · HIGH COURT OF JUDICATURE AT ALLAHABAD
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brass-400 animate-pulse" />
          </div>
        </div>

        {/* Stage 5: Sacred Professional Motto */}
        <div
          className={`transition-all duration-500 ease-out transform pt-1 sm:pt-2 ${
            stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-brass-400/60 to-brass-400" />
            <p className="text-base sm:text-lg font-serif text-brass-300 italic font-medium tracking-wider">
              “{adv.motto}”
            </p>
            <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent via-brass-400/60 to-brass-400" />
          </div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-mono mt-1">
            {adv.mottoTranslation}
          </p>
        </div>

      </div>

      {/* Bottom Fine Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brass-400/80 to-transparent pointer-events-none" />
    </div>
  );
};
