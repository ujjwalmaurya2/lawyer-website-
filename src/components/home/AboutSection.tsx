import React, { useState } from 'react';
import { PRIMARY_ADVOCATE, ASSOCIATED_ADVOCATES } from '../../data/advocate';
import { SectionHeader } from '../common/SectionHeader';
import { Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-ivory-100 dark:bg-[#0B0D0E] border-b border-ivory-300 dark:border-stone-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Large Editorial Statement & Identity */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
                THE PRACTICE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                Chambers Profile & Philosophy
              </h2>
            </div>

            {/* Large Statement with 1 Thin Burgundy Vertical Line */}
            <div className="border-l-2 border-burgundy-800 dark:border-burgundy-400 pl-5 sm:pl-6 py-2 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-mono">
                Institutional Creed
              </span>
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 dark:text-ivory-100 font-normal leading-tight">
                “{adv.motto}”
              </blockquote>
              <p className="text-xs text-stone-600 dark:text-stone-400 uppercase tracking-widest font-mono pt-1">
                — {adv.mottoTranslation}
              </p>
            </div>

            {/* Advocate Biography Block (No Generic Card) */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                {adv.name} ({adv.alias})
              </h3>
              <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-400 italic">
                {adv.hindiName} · {adv.title}, {adv.court}
              </p>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed pt-1">
                Leading an institutional legal practice before the High Court of Judicature at Allahabad, grounded in disciplined case preparation, meticulous trial record analysis, and principled constitutional advocacy.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Typographic Roster */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            
            {/* Primary Narrative */}
            <div className="space-y-4 text-stone-700 dark:text-stone-300 font-sans font-light text-sm sm:text-base leading-relaxed">
              <p>
                The chambers of <strong className="text-charcoal-800 dark:text-ivory-100 font-semibold">{adv.name}</strong> operate under a fundamental commitment to the administration of justice. Every brief accepted is evaluated through binding Allahabad High Court and Supreme Court precedents before formulation of strategy.
              </p>
              <p>
                Whether challenging executive arbitrariness via Article 226 writ petitions or defending liberty in complex criminal and bail applications, the chamber provides thorough, transparent counsel without unrealistic promises.
              </p>
            </div>

            {/* ASSOCIATED ADVOCATES: Typographic Roster (No standard cards) */}
            <div className="pt-8 border-t border-ivory-300 dark:border-stone-800 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
                    CHAMBERS ROSTER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal mt-0.5">
                    Associated Advocates
                  </h3>
                </div>
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-wider text-burgundy-800 dark:text-brass-400 hover:underline font-bold transition-colors inline-flex items-center gap-1 font-mono"
                >
                  <span>Chamber Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Typographic Roster List */}
              <div className="border-t border-ivory-300 dark:border-stone-800 divide-y divide-ivory-300 dark:divide-stone-800 font-sans">
                {ASSOCIATED_ADVOCATES.map((assoc, idx) => {
                  const isHovered = hoveredIndex === idx;

                  return (
                    <div
                      key={assoc.id}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer transition-all duration-200"
                    >
                      <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                        {/* Number that changes to Brass */}
                        <span className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                          isHovered ? 'text-brass-600 dark:text-brass-400' : 'text-stone-400 dark:text-stone-500'
                        }`}>
                          0{idx + 1}
                        </span>

                        {/* Name that shifts slightly on hover */}
                        <div className="space-y-0.5 transition-transform duration-200 group-hover:translate-x-1.5">
                          <h4 className="font-serif text-lg sm:text-xl text-charcoal-800 dark:text-ivory-100 font-medium group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors">
                            {assoc.englishName}
                          </h4>
                          <p className="text-xs font-serif text-stone-600 dark:text-stone-400 italic">
                            {assoc.hindiName} · {assoc.title}, High Court
                          </p>
                        </div>
                      </div>

                      {/* Phone & Direct Line */}
                      <div className="flex items-center gap-4 pl-8 sm:pl-0">
                        <a
                          href={`tel:${assoc.phone}`}
                          className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-brass-300 inline-flex items-center gap-1.5"
                        >
                          <Phone className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
                          <span>{assoc.phone}</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
