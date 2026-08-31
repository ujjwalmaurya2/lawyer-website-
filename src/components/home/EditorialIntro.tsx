import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EditorialIntro: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-ivory-150/60 dark:bg-charcoal-950 border-b border-ivory-300 dark:border-stone-800 relative transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-baseline">
          
          {/* Left Vertical Editorial Label */}
          <div className="lg:col-span-3 space-y-1.5">
            <span className="text-[10px] uppercase tracking-[0.22em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
              THE PRACTICE MANDATE
            </span>
            <h2 className="text-lg sm:text-xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
              Constitutional Precision & Appellate Rigor
            </h2>
          </div>

          {/* Right Large Editorial Typography Statement */}
          <div className="lg:col-span-9 space-y-5">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-[1.38] text-balance">
              Every petition filed before the High Court carries profound consequences for liberty, property, and governance. The chambers of Advocate Ashutosh Pandey approach litigation through <span className="italic text-burgundy-800 dark:text-brass-300 font-serif">exhaustive record analysis</span> and principled advocacy.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3.5 border-t border-ivory-300 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 font-mono">
              <span className="flex items-center gap-2 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-800 dark:bg-brass-400" />
                <span>Allahabad High Court Jurisdiction · Chamber 62</span>
              </span>

              <Link
                to="/about"
                className="text-burgundy-800 dark:text-brass-400 font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1 text-[11px]"
              >
                <span>Read Chambers Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
