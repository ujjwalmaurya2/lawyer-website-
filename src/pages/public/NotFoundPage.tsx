import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { ArrowLeft, Landmark, ShieldCheck } from 'lucide-react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-xl w-full text-center space-y-6 sm:space-y-8 p-8 sm:p-12 rounded-2xl bg-white dark:bg-charcoal-850 border border-brass-500/30 shadow-card-light dark:shadow-2xl">
        
        {/* Monogram Seal */}
        <div className="w-16 h-16 rounded-2xl bg-burgundy-800 border-2 border-brass-500/60 flex items-center justify-center font-serif text-2xl text-ivory-50 font-bold mx-auto shadow-md">
          404
        </div>

        <div className="space-y-2">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
            RECORD NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-tight">
            This page is not part of the present record.
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans font-light max-w-md mx-auto leading-relaxed pt-1">
            The requested document or procedural index does not exist at this address. Please return to the main chambers index.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            as="a"
            href="/"
            icon={<ArrowLeft className="w-4 h-4" />}
            className="w-full sm:w-auto font-semibold"
          >
            Return to Chambers
          </Button>

          <Button
            variant="outline"
            size="md"
            as="a"
            href="/consultation"
            className="w-full sm:w-auto font-semibold"
          >
            Request Consultation
          </Button>
        </div>

        <div className="pt-4 border-t border-ivory-300 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 font-mono">
          <span>High Court of Judicature at Allahabad · Chamber 62</span>
        </div>

      </div>
    </div>
  );
};
