import React from 'react';

export const PositioningStrip: React.FC = () => {
  const items = [
    { label: 'HIGH COURT OF JUDICATURE AT ALLAHABAD', highlight: true },
    { label: 'CHAMBER NO. 62 (NEW BUILDING)', highlight: false },
    { label: 'DISCIPLINED APPELLATE ADVOCACY', highlight: false },
    { label: 'PRAYAGRAJ, UTTAR PRADESH', highlight: true },
  ];

  return (
    <section className="bg-navy-950 dark:bg-[#08090A] border-y border-navy-800/80 dark:border-stone-800 py-3.5 sm:py-4 overflow-hidden select-none transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-2.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brass-500 shrink-0" />
                <span className={item.highlight ? 'text-ivory-100 font-semibold' : 'text-ivory-300/80 font-light'}>
                  {item.label}
                </span>
              </span>
              {idx < items.length - 1 && (
                <span className="hidden md:inline text-navy-700 dark:text-stone-800 font-bold">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
