import React from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_INSIGHTS } from '../../data/insights';
import { Badge } from '../../components/common/Badge';
import {
  BookOpen,
  Landmark,
  ScrollText,
  GitBranch,
  Building2,
  MessageCircle,
  Files,
  Clock,
  ArrowUpRight,
  Calendar,
} from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'constitutional law':
        return <Landmark className="w-3.5 h-3.5" />;
      case 'writ petitions':
        return <ScrollText className="w-3.5 h-3.5" />;
      case 'litigation procedure':
        return <GitBranch className="w-3.5 h-3.5" />;
      case 'high court procedure':
        return <Building2 className="w-3.5 h-3.5" />;
      case 'consultation preparation':
        return <MessageCircle className="w-3.5 h-3.5" />;
      case 'legal documents':
      default:
        return <Files className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-2.5">
          <div className="flex items-center gap-2 text-burgundy-800 dark:text-brass-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PUBLICATIONS & ADVISORY</span>
          </div>
          <h1 className="text-2xl sm:text-3.5xl lg:text-[2.75rem] font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-tight tracking-tight">
            Legal Insights & Procedural Guidance.
          </h1>
          <p className="text-xs sm:text-sm lg:text-base font-serif text-stone-600 dark:text-stone-400 italic">
            विधिक आलेख एवं उच्च न्यायालयीन प्रक्रिया
          </p>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans font-light max-w-2xl pt-0.5 leading-relaxed">
            Informative publications clarifying High Court jurisdictional rules, writ petition essentials, and practical steps for litigants before the Allahabad High Court.
          </p>
        </div>

        {/* Articles Grid with Distinct Category Visual Markers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {LEGAL_INSIGHTS.map((insight) => (
            <Link
              key={insight.id}
              to={`/insights/${insight.slug}`}
              className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800/60 dark:hover:border-stone-700 transition-all flex flex-col justify-between group space-y-6 shadow-card-light dark:shadow-none"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded bg-ivory-200 dark:bg-charcoal-800 border border-ivory-300 dark:border-stone-700 text-burgundy-800 dark:text-brass-300 font-bold">
                    {getCategoryIcon(insight.category)}
                    <span>{insight.category}</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors leading-snug">
                  {insight.title}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans font-light leading-relaxed">
                  {insight.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-ivory-200 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 group-hover:text-charcoal-800 dark:group-hover:text-ivory-100 transition-colors">
                <span className="font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{insight.date}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-burgundy-800 dark:text-brass-400 font-bold uppercase tracking-wider text-xs font-mono group-hover:translate-x-1 transition-transform">
                  <span>Read Full Publication</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
