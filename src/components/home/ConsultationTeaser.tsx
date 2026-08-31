import React from 'react';
import { Button } from '../common/Button';
import { MessageSquare, Calendar, Phone, ArrowUpRight } from 'lucide-react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const ConsultationTeaser: React.FC = () => {
  return (
    <section className="relative bg-navy-950 text-ivory-50 pt-16 sm:pt-20 pb-14 sm:pb-18 border-y border-navy-800 shadow-2xl transition-colors">
      
      {/* Background Accent Gradients */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-burgundy-900/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brass-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Top Headings in Warm Ivory Typography */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded bg-navy-900 border border-brass-500/40 text-brass-400 text-[10px] uppercase tracking-[0.22em] font-mono shadow-md">
            <Calendar className="w-3 h-3" />
            <span>DIRECT INTAKE</span>
          </div>

          <h2 className="text-2xl sm:text-3.5xl md:text-4xl lg:text-[2.65rem] font-serif text-ivory-50 font-normal tracking-tight text-balance leading-tight">
            Let’s discuss your matter.
          </h2>

          <p className="text-sm sm:text-base font-serif text-brass-300/90 italic">
            A clear first conversation helps identify the next legal step.
          </p>
        </div>

        {/* Floating Overlapping Warm Ivory Consultation Surface */}
        <div className="rounded-2xl bg-ivory-50 dark:bg-charcoal-900 text-charcoal-800 dark:text-ivory-100 border-2 border-brass-500/30 p-5 sm:p-7 md:p-8 shadow-2xl space-y-6 max-w-3xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left border-b border-ivory-300 dark:border-stone-800 pb-5">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-burgundy-800 dark:text-brass-400 font-bold block">
                01 · Confidential
              </span>
              <h4 className="font-serif text-sm sm:text-base text-charcoal-800 dark:text-ivory-100 font-medium">Privileged Review</h4>
              <p className="text-[11px] text-stone-600 dark:text-stone-400 font-light">All submitted case facts remain strictly confidential.</p>
            </div>

            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-burgundy-800 dark:text-brass-400 font-bold block">
                02 · Direct Line
              </span>
              <h4 className="font-serif text-sm sm:text-base text-charcoal-800 dark:text-ivory-100 font-medium">Advocate Response</h4>
              <p className="text-[11px] text-stone-600 dark:text-stone-400 font-light">Direct communication with Advocate Ashutosh Pandey.</p>
            </div>

            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-burgundy-800 dark:text-brass-400 font-bold block">
                03 · In-Chamber
              </span>
              <h4 className="font-serif text-sm sm:text-base text-charcoal-800 dark:text-ivory-100 font-medium">Chamber 62 Access</h4>
              <p className="text-[11px] text-stone-600 dark:text-stone-400 font-light">Convenient in-person briefings at High Court New Building.</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="text-xs font-semibold text-charcoal-800 dark:text-ivory-100">Ready to initiate consultation?</span>
              <p className="text-[10px] text-stone-500 dark:text-stone-400">Takes less than 2 minutes to generate your case brief.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <Button
                variant="primary"
                size="md"
                as="a"
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-3.5 h-3.5" />}
                className="shadow-md text-xs font-semibold justify-center"
              >
                Continue on WhatsApp
              </Button>

              <Button
                variant="outline"
                size="md"
                as="a"
                href="/consultation"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                iconPosition="right"
                className="text-xs font-semibold justify-center"
              >
                Intake Form
              </Button>
            </div>
          </div>

        </div>

        {/* Quick Contact Footer */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] text-ivory-300/80 font-sans">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-brass-400" />
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
