import React from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_INSIGHTS } from '../../data/insights';
import { Badge } from '../../components/common/Badge';
import { Clock, ArrowUpRight } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Page Header */}
        <div className="max-w-4xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-brass-700 dark:text-brass-400 text-xs font-semibold uppercase tracking-[0.25em] font-mono">
            <div className="w-5 h-[1.5px] bg-brass-500" />
            <span>PUBLICATIONS & ADVISORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal leading-tight tracking-tight">
            Legal Insights & Procedural Guidance.
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-serif text-stone-600 dark:text-stone-400 italic">
            विधिक आलेख एवं उच्च न्यायालयीन प्रक्रिया
          </p>
          <p className="text-xs sm:text-sm md:text-base text-stone-700 dark:text-stone-300 font-sans font-light max-w-3xl pt-1 leading-relaxed">
            Informative articles clarifying High Court jurisdictional rules, writ petition essentials, and practical steps for litigants before the Allahabad High Court.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {LEGAL_INSIGHTS.map((insight) => (
            <Link
              key={insight.id}
              to={`/insights/${insight.slug}`}
              className="p-6 sm:p-8 md:p-10 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-brass-500/60 dark:hover:border-stone-700 transition-all flex flex-col justify-between group space-y-6 shadow-card-light dark:shadow-none"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <Badge variant="brass">{insight.category}</Badge>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal group-hover:text-brass-700 dark:group-hover:text-brass-300 transition-colors leading-snug">
                  {insight.title}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans font-light leading-relaxed">
                  {insight.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-ivory-200 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 group-hover:text-charcoal-900 dark:group-hover:text-ivory-100 transition-colors">
                <span className="font-mono">{insight.date}</span>
                <span className="inline-flex items-center gap-1 text-brass-700 dark:text-brass-400 font-bold uppercase tracking-wider text-xs font-mono">
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
