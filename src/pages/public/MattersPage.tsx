import React, { useState } from 'react';
import { DEMO_MATTERS } from '../../data/matters';
import { Badge } from '../../components/common/Badge';
import { CaseTimeline } from '../../components/common/CaseTimeline';
import { Button } from '../../components/common/Button';
import { ShieldCheck, ArrowUpRight, ChevronDown, ChevronUp, Lock } from 'lucide-react';

export const MattersPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(DEMO_MATTERS[0]?.id || null);

  const categories = ['All', 'Constitutional & Writ Matters', 'Criminal Law & Bail Matters', 'Service & Administrative Matters', 'Civil Litigation & Appeals'];

  const publicMatters = DEMO_MATTERS.filter((m) => m.isPublic);
  const filteredMatters = activeCategory === 'All'
    ? publicMatters
    : publicMatters.filter((m) => m.matterType === activeCategory);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-2.5">
          <div className="flex items-center gap-2 text-burgundy-800 dark:text-brass-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] font-mono">
            <div className="w-4 h-[1.5px] bg-burgundy-800" />
            <span>LITIGATION REPOSITORY</span>
          </div>
          <h1 className="text-2xl sm:text-3.5xl lg:text-[2.75rem] font-serif text-charcoal-900 dark:text-ivory-100 font-normal leading-tight tracking-tight">
            Selected High Court Matters & Case Trajectories.
          </h1>
          <p className="text-xs sm:text-sm lg:text-base font-serif text-stone-600 dark:text-stone-400 italic">
            चयनित विधिक प्रकरण एवं न्यायालयीन प्रक्रिया
          </p>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans font-light max-w-2xl pt-0.5 leading-relaxed">
            Illustrative proceedings demonstrating procedural milestones from drafting and motion admission to final hearings before the High Court. Private client information is strictly protected.
          </p>
        </div>

        {/* Privacy Notice Strip */}
        <div className="p-4 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-700 dark:text-stone-300 shadow-sm">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-brass-600 dark:text-brass-400 shrink-0" />
            <span>
              <strong>Client Privacy Policy:</strong> All matter numbers and party names shown in this public demo are anonymized illustrative records.
            </span>
          </div>
          <Badge variant="demo">DEMO PROCEEDINGS</Badge>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-ivory-300 dark:border-stone-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded text-xs uppercase tracking-wider font-mono transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brass-500 dark:bg-brass-400 text-white dark:text-charcoal-950 font-bold shadow-sm'
                  : 'bg-white dark:bg-charcoal-850 text-stone-700 dark:text-stone-400 hover:text-charcoal-900 dark:hover:text-ivory-100 border border-ivory-300 dark:border-stone-800'
              }`}
            >
              {cat === 'All' ? 'All Matters' : cat.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Matters List */}
        <div className="space-y-5 sm:space-y-6">
          {filteredMatters.map((matter) => {
            const isExpanded = expandedId === matter.id;

            return (
              <div
                key={matter.id}
                className="rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-brass-500/60 dark:hover:border-stone-700 transition-all overflow-hidden shadow-card-light dark:shadow-none"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggle(matter.id)}
                  className="p-5 sm:p-7 md:p-8 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Badge variant="brass">{matter.matterType}</Badge>
                      <Badge variant="stone">{matter.court}</Badge>
                      <Badge variant="demo">DEMO DATA</Badge>
                    </div>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal">
                      {matter.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans font-light leading-relaxed max-w-3xl">
                      {matter.publicDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2.5 md:pt-0 border-t md:border-t-0 border-ivory-200 dark:border-stone-800">
                    <div className="text-left md:text-right text-xs space-y-0.5">
                      <span className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 block font-mono">
                        Procedural Stage
                      </span>
                      <span className="text-brass-700 dark:text-brass-300 font-semibold font-sans">
                        {matter.status}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded border border-ivory-300 dark:border-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Timeline View */}
                {isExpanded && (
                  <div className="px-5 sm:px-8 pb-7 pt-3 border-t border-ivory-200 dark:border-stone-800/80 bg-ivory-150/70 dark:bg-charcoal-900/70 animate-fade-in space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ivory-300 dark:border-stone-800 pb-2.5">
                      <span className="text-xs uppercase tracking-widest text-brass-700 dark:text-brass-400 font-semibold font-mono">
                        Procedural Stage Progression
                      </span>
                      <span className="text-xs text-stone-600 dark:text-stone-400 font-mono">
                        Filing Date: {matter.filingDate}
                      </span>
                    </div>

                    <CaseTimeline events={matter.timeline} />

                    <div className="pt-3 border-t border-ivory-300 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-600 dark:text-stone-400">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-brass-600 dark:text-brass-400" />
                        <span>Case trajectory maintained under chamber registry standards.</span>
                      </div>

                      <Button
                        variant="brass"
                        size="sm"
                        as="a"
                        href="/consultation"
                        icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                        iconPosition="right"
                      >
                        Request Consultation on Similar Matter
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
