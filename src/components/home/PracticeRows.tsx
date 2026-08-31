import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import { SectionHeader } from '../common/SectionHeader';
import {
  Briefcase,
  ShieldCheck,
  FileText,
  Landmark,
  BriefcaseBusiness,
  UsersRound,
  Lightbulb,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

export const PracticeRows: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Distinct, non-repeated semantic Lucide icons
  const getPracticeIcon = (slug: string) => {
    switch (slug) {
      case 'criminal-law-bail':
        return <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9" />;
      case 'civil-litigation-appeals':
        return <FileText className="w-8 h-8 sm:w-9 sm:h-9" />;
      case 'constitutional-writ-petitions':
        return <Landmark className="w-8 h-8 sm:w-9 sm:h-9" />;
      case 'service-administrative-matters':
        return <BriefcaseBusiness className="w-8 h-8 sm:w-9 sm:h-9" />;
      case 'family-matrimonial-matters':
        return <UsersRound className="w-8 h-8 sm:w-9 sm:h-9" />;
      case 'other-legal-matters-advisory':
      default:
        return <Lightbulb className="w-8 h-8 sm:w-9 sm:h-9" />;
    }
  };

  const toggleActive = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-charcoal-900 border-b border-ivory-300 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header with Prominent Icon Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeader
            icon={<Briefcase className="w-4 h-4" />}
            eyebrow="LEGAL PRACTICE AREAS"
            eyebrowColor="burgundy"
            title="Areas of Practice & Legal Assistance"
            hindiTitle="विधिक कार्यक्षेत्र एवं विशेष अधिकार क्षेत्र"
            description="Core litigation jurisdictions before the High Court of Judicature at Allahabad. Scan categories and procedures below."
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <span className="w-2 h-2 rounded-full bg-burgundy-800 dark:bg-brass-400" />
            <span>Select category to preview procedural scope</span>
          </div>
        </div>

        {/* Large Icon-First Editorial Directory Rows (No Repeated Generic Icons!) */}
        <div className="border-t-2 border-charcoal-800/10 dark:border-stone-800 divide-y divide-ivory-300 dark:divide-stone-800">
          {PRACTICE_AREAS.map((area) => {
            const isActive = activeId === area.id;
            const icon = getPracticeIcon(area.slug);

            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveId(area.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => toggleActive(area.id)}
                className={`group transition-all duration-300 cursor-pointer relative ${
                  isActive
                    ? 'bg-burgundy-800 dark:bg-burgundy-900 text-ivory-50 py-8 sm:py-10 px-5 sm:px-10 shadow-xl rounded-xl my-1'
                    : 'bg-transparent text-charcoal-800 dark:text-ivory-100 py-7 sm:py-9 px-3 sm:px-6 hover:bg-burgundy-800 hover:text-ivory-50'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                  
                  {/* Left: Practice Area Icon + Oversized Number + Large Title */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    
                    {/* Practice Area Icon Box (36–48px visual size) */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'border-brass-400 bg-burgundy-950 text-brass-300 scale-105 shadow-md ring-2 ring-brass-400/30'
                          : 'border-ivory-300 dark:border-stone-700 bg-ivory-150 dark:bg-charcoal-800 text-burgundy-800 dark:text-brass-400 group-hover:border-brass-400 group-hover:bg-burgundy-950 group-hover:text-brass-300 group-hover:scale-105'
                      }`}
                    >
                      {icon}
                    </div>

                    {/* Number */}
                    <span
                      className={`font-mono text-xl sm:text-2xl md:text-3xl font-bold tracking-tight shrink-0 transition-colors ${
                        isActive
                          ? 'text-brass-400'
                          : 'text-stone-400 dark:text-stone-500 group-hover:text-brass-300'
                      }`}
                    >
                      {area.number}
                    </span>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal transition-colors leading-tight">
                        {area.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm font-serif italic mt-0.5 transition-colors ${
                          isActive
                            ? 'text-ivory-200/90'
                            : 'text-stone-600 dark:text-stone-400 group-hover:text-ivory-200/90'
                        }`}
                      >
                        {area.hindiTitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Short Summary & Action Arrow */}
                  <div className="md:max-w-md lg:max-w-xl flex items-center justify-between md:justify-end gap-6 pl-18 sm:pl-22 md:pl-0">
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
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all ${
                          isActive
                            ? 'border-brass-400 bg-brass-500 text-charcoal-950 shadow-lg translate-x-1'
                            : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 group-hover:border-brass-400 group-hover:bg-brass-500 group-hover:text-charcoal-950 group-hover:translate-x-1.5'
                        }`}
                        title="View Full Procedure"
                        aria-label={`View ${area.title} details`}
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
                      <span>Full Procedure & Documents</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-600 dark:text-stone-400 pt-4 gap-3 border-t border-ivory-300 dark:border-stone-800 font-mono">
          <span>* Tap any row to preview procedural scope, or click the arrow to view required documents.</span>
          <Link
            to="/practice-areas"
            className="text-burgundy-800 dark:text-brass-400 hover:underline font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            <span>Explore All 06 Practice Jurisdictions</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
