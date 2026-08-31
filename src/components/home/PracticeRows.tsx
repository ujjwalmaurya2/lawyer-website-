import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import { SectionHeader } from '../common/SectionHeader';
import { ArrowUpRight, ChevronRight, FileText } from 'lucide-react';

export const PracticeRows: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleActive = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-charcoal-900 border-b border-ivory-300 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeader
            eyebrow="JURISDICTION DIRECTORY"
            eyebrowColor="burgundy"
            title="Legal Practice Areas"
            hindiTitle="विधिक कार्यक्षेत्र एवं विशेष अधिकार क्षेत्र"
            description="Core litigation jurisdictions before the High Court of Judicature at Allahabad. Explore specific matters and procedures below."
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <span className="w-2 h-2 rounded-full bg-burgundy-800 dark:bg-brass-400" />
            <span>Hover row to preview procedural scope</span>
          </div>
        </div>

        {/* Large Editorial Directory Rows (No Generic Cards) */}
        <div className="border-t-2 border-charcoal-800/10 dark:border-stone-800 divide-y divide-ivory-300 dark:divide-stone-800">
          {PRACTICE_AREAS.map((area) => {
            const isActive = activeId === area.id;

            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveId(area.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => toggleActive(area.id)}
                className={`group transition-all duration-300 cursor-pointer relative ${
                  isActive
                    ? 'bg-burgundy-800 dark:bg-burgundy-900 text-ivory-50 py-8 sm:py-10 px-5 sm:px-10 shadow-xl rounded-lg my-1'
                    : 'bg-transparent text-charcoal-800 dark:text-ivory-100 py-7 sm:py-9 px-3 sm:px-6 hover:bg-burgundy-800 hover:text-ivory-50'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                  
                  {/* Left: Oversized Editorial Number & Large Title */}
                  <div className="flex items-start sm:items-center gap-5 sm:gap-8">
                    <span
                      className={`font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight shrink-0 transition-colors ${
                        isActive
                          ? 'text-brass-400'
                          : 'text-burgundy-800 dark:text-brass-400 group-hover:text-brass-300'
                      }`}
                    >
                      {area.number}
                    </span>

                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal transition-colors leading-tight">
                        {area.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm font-serif italic mt-1 transition-colors ${
                          isActive
                            ? 'text-ivory-200/90'
                            : 'text-stone-600 dark:text-stone-400 group-hover:text-ivory-200/90'
                        }`}
                      >
                        {area.hindiTitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Short Description, CTA & Arrow */}
                  <div className="md:max-w-md lg:max-w-xl flex items-center justify-between md:justify-end gap-6 pl-10 sm:pl-16 md:pl-0">
                    <p
                      className={`text-xs sm:text-sm font-sans font-light leading-relaxed transition-all ${
                        isActive
                          ? 'text-ivory-100/90 line-clamp-none'
                          : 'text-stone-600 dark:text-stone-400 group-hover:text-ivory-100/90 line-clamp-2'
                      }`}
                    >
                      {area.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        to={`/practice-areas/${area.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all ${
                          isActive
                            ? 'border-brass-400 bg-brass-500 text-charcoal-950 shadow-lg scale-105'
                            : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 group-hover:border-brass-400 group-hover:bg-brass-500 group-hover:text-charcoal-950'
                        }`}
                        title="View Detailed Procedure"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Expanded Micro-List on Active / Tap */}
                {isActive && (
                  <div className="mt-5 pt-5 border-t border-burgundy-700/60 dark:border-burgundy-800 flex flex-wrap items-center justify-between gap-3 text-xs animate-fade-in">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-ivory-200">
                      <span className="text-brass-300 font-mono uppercase tracking-wider font-bold">Key Matter Types:</span>
                      {area.commonMatters.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded bg-burgundy-950/60 border border-burgundy-700/50">
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/practice-areas/${area.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-brass-300 hover:text-white font-mono uppercase tracking-widest text-xs font-bold inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Full Jurisdiction Protocol</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-600 dark:text-stone-400 pt-4 gap-3 border-t border-ivory-300 dark:border-stone-800">
          <span className="font-sans font-light">
            * Tap any row to preview procedural scope, or click the arrow to view required documents.
          </span>
          <Link
            to="/practice-areas"
            className="text-burgundy-800 dark:text-brass-400 hover:underline font-bold uppercase tracking-wider inline-flex items-center gap-1.5 font-mono text-xs"
          >
            <span>Explore All 06 Practice Jurisdictions</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
