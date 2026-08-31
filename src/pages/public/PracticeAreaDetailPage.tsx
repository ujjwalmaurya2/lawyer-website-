import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  FileText,
  Landmark,
  BriefcaseBusiness,
  UsersRound,
  MessageCircle,
  MessageSquare,
  Scale,
  ClipboardList,
  CheckCircle2,
  Building,
} from 'lucide-react';

export const PracticeAreaDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    return <Navigate to="/practice-areas" replace />;
  }

  // Get semantic icon matching the directory
  const getHeaderIcon = (s: string) => {
    switch (s) {
      case 'criminal-law-bail':
        return <ShieldCheck className="w-9 h-9 sm:w-10 sm:h-10 text-burgundy-800 dark:text-brass-400" />;
      case 'civil-litigation-appeals':
        return <FileText className="w-9 h-9 sm:w-10 sm:h-10 text-burgundy-800 dark:text-brass-400" />;
      case 'constitutional-writ-petitions':
        return <Landmark className="w-9 h-9 sm:w-10 sm:h-10 text-burgundy-800 dark:text-brass-400" />;
      case 'service-administrative-matters':
        return <BriefcaseBusiness className="w-9 h-9 sm:w-10 sm:h-10 text-burgundy-800 dark:text-brass-400" />;
      case 'family-matrimonial-matters':
        return <UsersRound className="w-9 h-9 sm:w-10 sm:h-10 text-burgundy-800 dark:text-brass-400" />;
      case 'other-legal-matters-advisory':
      default:
        return <MessageCircle className="w-9 h-9 sm:w-10 sm:h-10 text-burgundy-800 dark:text-brass-400" />;
    }
  };

  return (
    <div className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Back Link */}
        <Link
          to="/practice-areas"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-burgundy-800 dark:hover:text-brass-300 transition-colors font-mono font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Practice Jurisdictions</span>
        </Link>

        {/* Header Block with Large 48px Visual Icon */}
        <div className="space-y-4 border-b border-ivory-300 dark:border-stone-800 pb-8 sm:pb-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-charcoal-850 border-2 border-brass-500/50 flex items-center justify-center p-3 shadow-md">
              {getHeaderIcon(area.slug)}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-burgundy-800 dark:text-brass-400 font-bold px-2 py-0.5 border border-burgundy-300 dark:border-brass-400/40 rounded bg-white dark:bg-charcoal-850">
                  JURISDICTION {area.number}
                </span>
                <Badge variant="navy">High Court Allahabad</Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal tracking-tight">
                {area.title}
              </h1>
              <p className="text-sm sm:text-base font-serif text-stone-600 dark:text-stone-400 italic">
                {area.hindiTitle}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed max-w-3xl pt-2">
            {area.shortDescription}
          </p>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* Overview */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                <Scale className="w-4 h-4" />
                <span>Scope of High Court Advocacy</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed">
                {area.detailedOverview}
              </p>
            </div>

            {/* Visual Service Items: Icon + Short Heading + Concise Description */}
            <div className="space-y-4 pt-4 border-t border-ivory-300 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Key Matters & Procedural Representation</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {area.commonMatters.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800/80 flex items-start gap-3 shadow-sm hover:border-burgundy-800/40 transition-colors">
                    <span className="w-7 h-7 rounded-lg bg-burgundy-100 dark:bg-burgundy-950/80 border border-burgundy-300 dark:border-burgundy-800/60 flex items-center justify-center font-mono text-xs font-bold text-burgundy-800 dark:text-brass-400 shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm text-charcoal-800 dark:text-stone-200 font-medium leading-snug">
                        {item}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light mt-0.5">
                        High Court procedural drafting, registry compliance & bench arguments.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chamber Approach */}
            <div className="space-y-4 pt-4 border-t border-ivory-300 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                <ClipboardList className="w-4 h-4" />
                <span>Chamber Approach to Case Preparation</span>
              </div>
              <div className="space-y-3">
                {area.consultationApproach.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex items-start gap-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    <span className="font-mono text-burgundy-800 dark:text-brass-400 font-bold mt-0.5">0{idx + 1}.</span>
                    <span className="leading-relaxed font-light">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="space-y-4 pt-4 border-t border-ivory-300 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                <FileText className="w-4 h-4" />
                <span>Key Documents Required for Consultation</span>
              </div>
              <div className="p-5 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-2.5 shadow-sm">
                {area.documentsToBring.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    <FileText className="w-4 h-4 text-burgundy-800 dark:text-brass-400 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-charcoal-850 border-2 border-brass-500/40 space-y-5 shadow-card-light dark:shadow-none">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
                  CHAMBER CONSULTATION
                </span>
                <h3 className="font-serif text-xl text-charcoal-800 dark:text-ivory-100 font-normal">
                  Discuss Your Matter
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                  Initiate a formal case assessment with Advocate Ashutosh Pandey at Chamber 62 or via WhatsApp.
                </p>
              </div>

              <div className="space-y-2.5">
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href={`/consultation?type=${encodeURIComponent(area.title)}`}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full text-xs font-semibold"
                >
                  Request Consultation Form
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  as="a"
                  href={getDirectWhatsAppUrl(`नमस्कार अधिवक्ता महोदय, मुझे ${area.title} से संबंधित मामले में consultation की आवश्यकता है।`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<MessageSquare className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />}
                  className="w-full text-xs font-semibold"
                >
                  WhatsApp Inquiries
                </Button>
              </div>

              <div className="pt-3.5 border-t border-ivory-300 dark:border-stone-800 text-[11px] text-stone-600 dark:text-stone-400 space-y-1 font-mono">
                <div className="flex items-center gap-2 text-burgundy-800 dark:text-brass-400 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Confidential Assessment</span>
                </div>
                <p className="text-[10px] text-stone-500 dark:text-stone-400">
                  Chamber 62, New Building, High Court Allahabad.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
