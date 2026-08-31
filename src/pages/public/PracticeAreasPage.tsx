import React from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  ArrowUpRight,
  FileText,
  ShieldCheck,
  Landmark,
  BriefcaseBusiness,
  UsersRound,
  MessageCircle,
} from 'lucide-react';

export const PracticeAreasPage: React.FC = () => {
  // Six clearly distinct semantic icons
  const getPracticeIcon = (slug: string) => {
    switch (slug) {
      case 'criminal-law-bail':
        return <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-burgundy-800 dark:text-brass-400" />;
      case 'civil-litigation-appeals':
        return <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-burgundy-800 dark:text-brass-400" />;
      case 'constitutional-writ-petitions':
        return <Landmark className="w-7 h-7 sm:w-8 sm:h-8 text-burgundy-800 dark:text-brass-400" />;
      case 'service-administrative-matters':
        return <BriefcaseBusiness className="w-7 h-7 sm:w-8 sm:h-8 text-burgundy-800 dark:text-brass-400" />;
      case 'family-matrimonial-matters':
        return <UsersRound className="w-7 h-7 sm:w-8 sm:h-8 text-burgundy-800 dark:text-brass-400" />;
      case 'other-legal-matters-advisory':
      default:
        return <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-burgundy-800 dark:text-brass-400" />;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-2.5">
          <div className="flex items-center gap-2 text-burgundy-800 dark:text-brass-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] font-mono">
            <div className="w-4 h-[1.5px] bg-burgundy-800" />
            <span>PRACTICE JURISDICTIONS</span>
          </div>
          <h1 className="text-2xl sm:text-3.5xl lg:text-[2.75rem] font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-tight tracking-tight">
            Comprehensive legal advocacy before the Allahabad High Court.
          </h1>
          <p className="text-xs sm:text-sm lg:text-base font-serif text-stone-600 dark:text-stone-400 italic">
            विधिक कार्यक्षेत्र एवं विशेष अधिकार क्षेत्र
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="space-y-6 sm:space-y-8">
          {PRACTICE_AREAS.map((area, idx) => (
            <div
              key={area.id}
              className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800/60 dark:hover:border-stone-700 transition-all space-y-6 sm:space-y-8 shadow-card-light dark:shadow-none"
            >
              {/* Header Row with Distinct Practice Icon */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-ivory-300/80 dark:border-stone-800/80 pb-5">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border border-ivory-300 dark:border-stone-700 bg-ivory-150 dark:bg-charcoal-800 flex items-center justify-center shrink-0 shadow-sm">
                    {getPracticeIcon(area.slug)}
                  </div>
                  
                  <span className="font-mono text-2xl sm:text-3xl md:text-4xl text-burgundy-800 dark:text-brass-400 font-bold">
                    {area.number}
                  </span>

                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                      {area.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-400 italic mt-0.5">
                      {area.hindiTitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant={idx % 2 === 0 ? 'burgundy' : 'navy'}>High Court Jurisdiction</Badge>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="p-2 sm:p-2.5 rounded-full border border-stone-300 dark:border-stone-700 hover:border-burgundy-800 hover:bg-burgundy-800 hover:text-white transition-all text-stone-600 dark:text-stone-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Detailed Content & Common Matters */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="text-xs uppercase tracking-widest text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                    Jurisdiction Overview
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed">
                    {area.detailedOverview}
                  </p>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <h3 className="text-xs uppercase tracking-widest text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                    Common Matters & Petitions
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    {area.commonMatters.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy-800 dark:bg-brass-400 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions for each Practice Area */}
              <div className="pt-5 border-t border-ivory-300/80 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="text-xs uppercase tracking-wider text-stone-700 dark:text-stone-400 hover:text-burgundy-800 dark:hover:text-ivory-100 font-bold inline-flex items-center gap-1.5 font-mono"
                >
                  <FileText className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
                  <span>View Full Procedure & Required Documents</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Button
                  variant="primary"
                  size="sm"
                  as="a"
                  href={`/consultation?type=${encodeURIComponent(area.title)}`}
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  iconPosition="right"
                >
                  Discuss {area.title.split(' ')[0]} Matter
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
