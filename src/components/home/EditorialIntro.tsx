import React from 'react';
import { Scale, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EditorialIntro: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-ivory-150/60 dark:bg-charcoal-950 border-b border-ivory-300 dark:border-stone-800 relative transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-baseline">
          
          {/* Left Vertical Editorial Label */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
              THE PRACTICE MANDATE
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
              Constitutional Precision & Appellate Rigor
            </h2>
          </div>

          {/* Right Large Editorial Typography Statement */}
          <div className="lg:col-span-9 space-y-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-[1.3] text-balance">
              Every petition filed before the High Court carries profound consequences for liberty, property, and governance. The chambers of Advocate Ashutosh Pandey approach litigation through <span className="italic text-burgundy-800 dark:text-brass-300 font-serif">exhaustive record analysis</span> and principled advocacy.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ivory-300 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-burgundy-800 dark:bg-brass-400" />
                <span>Allahabad High Court Jurisdiction · Chamber 62</span>
              </span>

              <Link
                to="/about"
                className="text-burgundy-800 dark:text-brass-400 font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1"
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
