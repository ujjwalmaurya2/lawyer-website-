import React from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_INSIGHTS } from '../../data/insights';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import {
  BookOpen,
  Landmark,
  ScrollText,
  GitBranch,
  Building2,
  MessageCircle,
  Files,
  Calendar,
  Clock,
  ArrowUpRight,
  FileText,
} from 'lucide-react';

export const InsightsPreview: React.FC = () => {
  const featured = LEGAL_INSIGHTS[0];
  const sideInsights = LEGAL_INSIGHTS.slice(1, 3);

  // Helper for category-specific semantic icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'constitutional law':
        return <Landmark className="w-3 h-3" />;
      case 'writ petitions':
        return <ScrollText className="w-3 h-3" />;
      case 'litigation procedure':
        return <GitBranch className="w-3 h-3" />;
      case 'high court procedure':
        return <Building2 className="w-3 h-3" />;
      case 'consultation preparation':
        return <MessageCircle className="w-3 h-3" />;
      case 'legal documents':
      default:
        return <Files className="w-3 h-3" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-ivory-100 dark:bg-charcoal-900 border-b border-ivory-300 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <SectionHeader
            icon={<BookOpen className="w-3.5 h-3.5" />}
            eyebrow="LEGAL INSIGHTS & PUBLICATIONS"
            eyebrowColor="burgundy"
            title="Publications & Advisory"
            hindiTitle="विधिक आलेख एवं मार्गदर्शिका"
            description="Informational publications and practical procedural guidance concerning litigation before the High Court of Judicature at Allahabad."
            className="mb-0"
          />

          <Link
            to="/insights"
            className="text-xs uppercase tracking-wider text-burgundy-800 dark:text-brass-400 hover:underline font-bold font-mono inline-flex items-center gap-1 shrink-0 text-[11px]"
          >
            <span>Read All Articles</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Editorial Magazine Layout with Distinct Category Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Large Featured Magazine Article (7 Columns) */}
          {featured && (
            <Link
              to={`/insights/${featured.slug}`}
              className="lg:col-span-7 rounded-2xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800/60 dark:hover:border-stone-700 p-5 sm:p-7 md:p-8 flex flex-col justify-between group space-y-4 shadow-card-light dark:shadow-none transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="burgundy">FEATURED ESSAY</Badge>
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded bg-navy-100 dark:bg-navy-950 text-navy-800 dark:text-navy-300 border border-navy-300 dark:border-navy-800 font-bold">
                      {getCategoryIcon(featured.category)}
                      <span>{featured.category}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                    <Clock className="w-3 h-3 text-burgundy-800 dark:text-brass-400" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans font-light leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-ivory-300/80 dark:border-stone-800 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
                <span className="font-mono flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3 text-stone-400" />
                  <span>{featured.date}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-burgundy-800 dark:text-brass-400 font-bold font-mono uppercase tracking-wider text-[11px] group-hover:translate-x-1 transition-transform">
                  <span>Read Complete Publication</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          )}

          {/* Asymmetrical Side Articles Stack (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {sideInsights.map((insight) => (
              <Link
                key={insight.id}
                to={`/insights/${insight.slug}`}
                className="flex-1 p-4 sm:p-5 rounded-2xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800/60 dark:hover:border-stone-700 flex flex-col justify-between group space-y-3 shadow-soft-light dark:shadow-none transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 border border-ivory-300 dark:border-stone-700 text-stone-800 dark:text-stone-300 font-bold">
                      {getCategoryIcon(insight.category)}
                      <span>{insight.category}</span>
                    </span>

                    <div className="flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-400 font-mono">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors leading-snug">
                    {insight.title}
                  </h4>

                  <p className="text-xs text-stone-600 dark:text-stone-400 font-sans font-light line-clamp-2 leading-relaxed">
                    {insight.excerpt}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-ivory-300/80 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-mono text-[10px] flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5" />
                    <span>{insight.date}</span>
                  </span>
                  <span className="text-burgundy-800 dark:text-brass-400 font-bold font-mono text-[10px] uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
