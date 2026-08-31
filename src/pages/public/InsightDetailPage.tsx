import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LEGAL_INSIGHTS } from '../../data/insights';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { ArrowLeft, Clock, Calendar, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = LEGAL_INSIGHTS.find((i) => i.slug === slug);

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Back Link */}
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-brass-700 dark:hover:text-brass-300 transition-colors font-mono font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Legal Insights</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4 sm:space-y-6 border-b border-ivory-300 dark:border-stone-800/80 pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="brass">{insight.category}</Badge>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{insight.date}</span>
            </div>
            <span className="text-stone-400 dark:text-stone-700">•</span>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{insight.readTime}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal leading-tight tracking-tight">
            {insight.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-stone-700 dark:text-stone-300 font-serif italic leading-relaxed">
            {insight.excerpt}
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="p-5 sm:p-7 rounded-lg bg-white dark:bg-charcoal-850 border border-brass-400/50 space-y-3.5 shadow-card-light dark:shadow-none">
          <div className="flex items-center gap-2 text-brass-700 dark:text-brass-400 text-xs font-bold uppercase tracking-widest font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Key Procedural Takeaways</span>
          </div>

          <ul className="space-y-2.5">
            {insight.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-brass-600 dark:text-brass-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="space-y-5 text-stone-800 dark:text-stone-300 font-sans font-light text-sm sm:text-base md:text-lg leading-relaxed">
          {insight.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Informational Disclaimer Box */}
        <div className="p-4 sm:p-5 rounded-lg bg-ivory-200 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
          <strong>Informational Note:</strong> This article is authored for general academic and procedural awareness regarding High Court litigation and does not constitute legal counsel for specific individual disputes.
        </div>

        {/* Bottom Consultation Banner */}
        <div className="p-6 sm:p-8 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-card-light dark:shadow-none">
          <div className="space-y-1 text-left">
            <h3 className="text-lg sm:text-xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal">
              Have a question regarding your High Court matter?
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
              Connect directly with Advocate Ashutosh Pandey for chamber advice.
            </p>
          </div>

          <Button
            variant="brass"
            size="md"
            as="a"
            href="/consultation"
            icon={<ArrowUpRight className="w-4 h-4" />}
            iconPosition="right"
            className="shrink-0 text-xs"
          >
            Request Consultation
          </Button>
        </div>

      </div>
    </div>
  );
};
