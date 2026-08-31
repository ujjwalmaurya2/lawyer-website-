import React from 'react';
import { Button } from '../common/Button';
import { MessageSquare, Calendar, Phone, ArrowUpRight, ShieldCheck, FileCheck } from 'lucide-react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const ConsultationTeaser: React.FC = () => {
  return (
    <section className="relative bg-navy-950 text-ivory-50 pt-20 sm:pt-28 pb-16 sm:pb-24 border-y border-navy-800 shadow-2xl transition-colors">
      
      {/* Background Accent Gradients */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-burgundy-900/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brass-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Headings in Large Warm Ivory Typography */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-navy-900 border border-brass-500/40 text-brass-400 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono shadow-md">
            <Calendar className="w-3.5 h-3.5" />
            <span>DIRECT INTAKE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-ivory-50 font-normal tracking-tight text-balance leading-tight">
            Let’s discuss your matter.
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-serif text-brass-300/90 italic">
            A clear first conversation can help identify the next legal step.
          </p>

          <p className="text-xs sm:text-sm text-ivory-200/90 font-sans font-light max-w-xl mx-auto text-balance leading-relaxed pt-1">
            Share the essentials of your High Court matter for a confidential, structured assessment with Advocate Ashutosh Pandey.
          </p>
        </div>

        {/* Floating Overlapping Warm Ivory Consultation Surface (Creating Layer Depth) */}
        <div className="rounded-2xl bg-ivory-50 dark:bg-charcoal-900 text-charcoal-800 dark:text-ivory-100 border-2 border-brass-500/30 p-6 sm:p-10 md:p-12 shadow-2xl space-y-8 max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left border-b border-ivory-300 dark:border-stone-800 pb-8">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-burgundy-800 dark:text-brass-400 font-bold block">
                01 · Confidential
              </span>
              <h4 className="font-serif text-base text-charcoal-800 dark:text-ivory-100 font-medium">Privileged Review</h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light">All submitted case facts remain strictly confidential.</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-burgundy-800 dark:text-brass-400 font-bold block">
                02 · Direct Line
              </span>
              <h4 className="font-serif text-base text-charcoal-800 dark:text-ivory-100 font-medium">Advocate Response</h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light">Direct communication with Advocate Ashutosh Pandey.</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-burgundy-800 dark:text-brass-400 font-bold block">
                03 · In-Chamber
              </span>
              <h4 className="font-serif text-base text-charcoal-800 dark:text-ivory-100 font-medium">Chamber 62 Access</h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light">Convenient in-person briefings at High Court New Building.</p>
            </div>
          </div>

          {/* Action Row with Deep Burgundy Primary CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="text-xs font-semibold text-charcoal-800 dark:text-ivory-100">Ready to initiate consultation?</span>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">Takes less than 2 minutes to generate your case brief.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                as="a"
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-4 h-4" />}
                className="shadow-burgundy-glow text-xs sm:text-sm font-semibold justify-center"
              >
                Continue on WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                as="a"
                href="/consultation"
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
                className="text-xs sm:text-sm font-semibold justify-center"
              >
                Intake Form
              </Button>
            </div>
          </div>

        </div>

        {/* Quick Contact Footer */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-ivory-300/80 font-sans">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brass-400" />
            <a href={`tel:${PRIMARY_ADVOCATE.phone}`} className="hover:text-brass-300 font-mono font-bold text-ivory-50">
              {PRIMARY_ADVOCATE.phone}
            </a>
          </span>
          <span className="hidden sm:inline text-navy-600">•</span>
          <span>Chamber 62, New Building, High Court of Judicature at Allahabad</span>
        </div>

      </div>
    </section>
  );
};
