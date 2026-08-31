import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileText, MessageSquare, ShieldCheck } from 'lucide-react';

export const PracticeAreaDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    return <Navigate to="/practice-areas" replace />;
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Back Link */}
        <Link
          to="/practice-areas"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-brass-700 dark:hover:text-brass-300 transition-colors font-mono font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Practice Jurisdictions</span>
        </Link>

        {/* Header Block */}
        <div className="space-y-3 sm:space-y-4 border-b border-ivory-300 dark:border-stone-800/80 pb-8 sm:pb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base text-brass-700 dark:text-brass-400 font-bold px-2 py-0.5 border border-brass-400/40 rounded bg-white dark:bg-charcoal-850">
              JURISDICTION {area.number}
            </span>
            <Badge variant="stone">High Court of Judicature at Allahabad</Badge>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal tracking-tight">
            {area.title}
          </h1>
          <p className="text-base sm:text-lg font-serif text-stone-600 dark:text-stone-400 italic">
            {area.hindiTitle}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed max-w-3xl pt-1">
            {area.shortDescription}
          </p>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
                Detailed Scope of Advocacy
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed">
                {area.detailedOverview}
              </p>
            </div>

            {/* Common Matters */}
            <div className="space-y-3 pt-3 border-t border-ivory-300 dark:border-stone-800">
              <h2 className="text-xs uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
                Specific Matter Types Handled
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {area.commonMatters.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800/80 flex items-start gap-2.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brass-600 dark:text-brass-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 dark:text-stone-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Approach */}
            <div className="space-y-3 pt-3 border-t border-ivory-300 dark:border-stone-800">
              <h2 className="text-xs uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
                Chamber Approach to Case Preparation
              </h2>
              <div className="space-y-2.5">
                {area.consultationApproach.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    <span className="font-mono text-brass-700 dark:text-brass-400 text-xs font-bold mt-0.5">0{idx + 1}.</span>
                    <span className="leading-relaxed font-light">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents to Bring */}
            <div className="space-y-3 pt-3 border-t border-ivory-300 dark:border-stone-800">
              <h2 className="text-xs uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
                Key Documents Required for Consultation
              </h2>
              <div className="p-5 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-2.5 shadow-sm">
                {area.documentsToBring.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    <FileText className="w-4 h-4 text-brass-600 dark:text-brass-400 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <div className="p-6 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-5 shadow-card-light dark:shadow-none">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brass-700 dark:text-brass-400 font-bold font-mono block">
                  CHAMBER CONSULTATION
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-charcoal-900 dark:text-ivory-100 font-normal">
                  Discuss Your Matter
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                  Initiate a formal case assessment with Advocate Ashutosh Pandey at Chamber 62 or via WhatsApp.
                </p>
              </div>

              <div className="space-y-2.5">
                <Button
                  variant="brass"
                  size="md"
                  as="a"
                  href={`/consultation?type=${encodeURIComponent(area.title)}`}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full text-xs"
                >
                  Request Consultation Form
                </Button>

                <Button
                  variant="whatsapp"
                  size="md"
                  as="a"
                  href={getDirectWhatsAppUrl(`नमस्कार अधिवक्ता महोदय, मुझे ${area.title} से संबंधित मामले में consultation की आवश्यकता है।`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<MessageSquare className="w-4 h-4" />}
                  className="w-full text-xs"
                >
                  WhatsApp Inquiries
                </Button>
              </div>

              <div className="pt-3.5 border-t border-ivory-200 dark:border-stone-800 text-[11px] text-stone-600 dark:text-stone-400 space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brass-600 dark:text-brass-400" />
                  <span className="font-medium">Confidential Assessment</span>
                </div>
                <p className="text-[10px] text-stone-500 dark:text-stone-400">
                  Chamber No. 62, New Building, High Court Allahabad.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
