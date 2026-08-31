import React, { useState } from 'react';
import { DEMO_MATTERS } from '../../data/matters';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { CaseTimeline } from '../common/CaseTimeline';
import { Button } from '../common/Button';
import { ArrowUpRight, ShieldAlert, ChevronDown, ChevronUp, FolderOpen, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SelectedMattersSection: React.FC = () => {
  const [expandedMatterId, setExpandedMatterId] = useState<string | null>(DEMO_MATTERS[0]?.id || null);
  const publicMatters = DEMO_MATTERS.filter((m) => m.isPublic);

  const toggleExpand = (id: string) => {
    setExpandedMatterId(expandedMatterId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-ivory-200 dark:bg-charcoal-900 border-b border-ivory-300 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
          <SectionHeader
            icon={<FolderOpen className="w-4 h-4" />}
            eyebrow="HIGH COURT LITIGATION REPOSITORY"
            eyebrowColor="burgundy"
            title="Selected Matters & Case Trajectories"
            hindiTitle="चयनित विधिक प्रकरण एवं प्रक्रिया"
            description="Representative legal proceedings illustrating litigation milestones before the High Court. Client identities and sensitive particulars are anonymized."
            className="mb-0"
          />

          <div className="flex items-center gap-3 shrink-0">
            <Badge variant="demo">DEMO MATTERS</Badge>
            <Link
              to="/matters"
              className="text-xs uppercase tracking-wider text-burgundy-800 dark:text-brass-400 hover:underline font-bold font-mono inline-flex items-center gap-1"
            >
              <span>View All Matters</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Matters Cards with Case Timelines */}
        <div className="space-y-4 sm:space-y-5">
          {publicMatters.slice(0, 3).map((matter) => {
            const isExpanded = expandedMatterId === matter.id;

            return (
              <div
                key={matter.id}
                className="rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800/40 dark:hover:border-stone-700 transition-all overflow-hidden shadow-soft-light dark:shadow-none"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(matter.id)}
                  className="p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Badge variant="burgundy">{matter.matterType}</Badge>
                      <Badge variant="navy">{matter.category}</Badge>
                      
                      {/* Public/Private Indicator with Icon */}
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 font-bold">
                        <Eye className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Public Record</span>
                      </span>

                      <Badge variant="demo">DEMO DATA</Badge>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                      {matter.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans font-light max-w-2xl">
                      {matter.publicDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-ivory-300/80 dark:border-stone-800">
                    <div className="text-left md:text-right text-xs">
                      <span className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 block font-mono">
                        Procedural Stage
                      </span>
                      <span className="text-burgundy-800 dark:text-brass-300 font-bold font-sans">
                        {matter.status}
                      </span>
                    </div>

                    <button
                      className="p-2 rounded border border-ivory-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors"
                      aria-label="Toggle matter details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Timeline View */}
                {isExpanded && (
                  <div className="px-5 sm:px-8 pb-7 pt-3 border-t border-ivory-300/80 dark:border-stone-800/80 bg-ivory-100/80 dark:bg-charcoal-900/80 animate-fade-in space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                        Case Procedural Milestones
                      </span>
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 font-mono">
                        Court: {matter.court}
                      </span>
                    </div>

                    {/* Timeline Component with Icons on every stage */}
                    <CaseTimeline events={matter.timeline} />

                    <div className="pt-3 border-t border-ivory-300 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-600 dark:text-stone-400 font-mono">
                      <div className="flex items-center gap-1.5 font-sans">
                        <ShieldAlert className="w-3.5 h-3.5 text-terracotta-600 dark:text-terracotta-400" />
                        <span>All representative case documents and parties are strictly illustrative.</span>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        as="a"
                        href="/consultation"
                        icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                        iconPosition="right"
                        className="text-[11px]"
                      >
                        Discuss Similar Matter
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
