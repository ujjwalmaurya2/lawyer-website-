import React from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_INSIGHTS } from '../../data/insights';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { ArrowUpRight, Clock, BookOpen, Sparkles } from 'lucide-react';

export const InsightsPreview: React.FC = () => {
  const featured = LEGAL_INSIGHTS[0];
  const sideInsights = LEGAL_INSIGHTS.slice(1, 3);

  return (
    <section className="py-18 sm:py-28 bg-ivory-100 dark:bg-charcoal-900 border-b border-ivory-300 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
          <SectionHeader
            eyebrow="LEGAL INSIGHTS & PUBLICATIONS"
            eyebrowColor="burgundy"
            title="Publications & Advisory"
            hindiTitle="विधिक आलेख एवं मार्गदर्शिका"
            description="Informational publications and practical procedural guidance concerning litigation before the High Court of Judicature at Allahabad."
            className="mb-0"
          />

          <Link
            to="/insights"
            className="text-xs uppercase tracking-wider text-burgundy-800 dark:text-brass-400 hover:underline font-bold font-mono inline-flex items-center gap-1 shrink-0"
          >
            <span>Read All Articles</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Large Featured Magazine Article (7 Columns) */}
          {featured && (
            <Link
              to={`/insights/${featured.slug}`}
              className="lg:col-span-7 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800/60 dark:hover:border-stone-700 p-6 sm:p-10 flex flex-col justify-between group space-y-6 shadow-card-light dark:shadow-none transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="burgundy">FEATURED ESSAY</Badge>
                    <Badge variant="navy">{featured.category}</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-sans font-light leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                {/* Key Takeaways Callout Box inside featured article */}
                <div className="p-4 rounded-lg bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 space-y-2 text-xs text-stone-700 dark:text-stone-300">
                  <span className="font-mono uppercase tracking-wider text-burgundy-800 dark:text-brass-400 font-bold block">
                    Core Procedural Rule:
                  </span>
                  <p className="font-light leading-relaxed">
                    {featured.keyTakeaways[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-ivory-300/80 dark:border-stone-800 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
                <span className="font-mono">{featured.date}</span>
                <span className="inline-flex items-center gap-1 text-burgundy-800 dark:text-brass-400 font-bold font-mono uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Read Complete Publication</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          )}

          {/* Asymmetrical Side Articles Stack (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {sideInsights.map((insight, idx) => (
              <Link
                key={insight.id}
                to={`/insights/${insight.slug}`}
                className="flex-1 p-6 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800/60 dark:hover:border-stone-700 flex flex-col justify-between group space-y-4 shadow-soft-light dark:shadow-none transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <Badge variant={idx === 0 ? 'terracotta' : 'sage'}>{insight.category}</Badge>
                    <div className="flex items-center gap-1 text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors leading-snug">
                    {insight.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans font-light line-clamp-2 leading-relaxed">
                    {insight.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-ivory-300/80 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-mono text-[11px]">{insight.date}</span>
                  <span className="text-burgundy-800 dark:text-brass-400 font-bold font-mono text-[11px] uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read</span>
                    <ArrowUpRight className="w-3 h-3" />
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
