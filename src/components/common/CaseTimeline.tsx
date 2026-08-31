import React from 'react';
import type { TimelineEvent, CaseTimelineStage } from '../../types';
import {
  FileText,
  Bell,
  FileCheck,
  Calendar,
  Scale,
  CheckCircle2,
  Clock,
  CircleDot,
  Circle,
} from 'lucide-react';
import { cn } from '../../utils/formatters';

interface CaseTimelineProps {
  events: TimelineEvent[];
  className?: string;
  isCompact?: boolean;
}

const STAGE_ORDER: CaseTimelineStage[] = ['Filed', 'Notice', 'Reply', 'Hearing', 'Order', 'Closed'];

const getStageIcon = (stage: CaseTimelineStage) => {
  switch (stage) {
    case 'Filed':
      return <FileText className="w-3.5 h-3.5" />;
    case 'Notice':
      return <Bell className="w-3.5 h-3.5" />;
    case 'Reply':
      return <FileCheck className="w-3.5 h-3.5" />;
    case 'Hearing':
      return <Calendar className="w-3.5 h-3.5" />;
    case 'Order':
      return <Scale className="w-3.5 h-3.5" />;
    case 'Closed':
    default:
      return <CheckCircle2 className="w-3.5 h-3.5" />;
  }
};

export const CaseTimeline: React.FC<CaseTimelineProps> = ({
  events,
  className = '',
  isCompact = false,
}) => {
  return (
    <div className={cn('w-full py-3', className)}>
      {/* Horizontal Stage Stepper with Icons */}
      <div className="hidden md:block mb-8">
        <div className="grid grid-cols-6 gap-1 relative">
          
          {/* Connector Line: Dominant Burgundy Line */}
          <div className="absolute top-4 left-6 right-6 h-[2px] bg-burgundy-800/30 dark:bg-burgundy-900/60 -z-0" />

          {STAGE_ORDER.map((stage) => {
            const event = events.find((e) => e.stage === stage);
            const isCompleted = event?.completed;
            const isActive = event?.active;
            const icon = getStageIcon(stage);

            return (
              <div key={stage} className="flex flex-col items-center text-center relative z-10">
                <div
                  className={cn(
                    'w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm',
                    isCompleted
                      ? 'border-navy-900 bg-navy-900 text-ivory-50 dark:border-navy-700 dark:bg-navy-800'
                      : isActive
                      ? 'border-burgundy-800 bg-burgundy-800 text-brass-300 ring-4 ring-brass-400/30'
                      : 'border-stone-300 bg-white text-stone-400 dark:border-stone-800 dark:bg-charcoal-900 dark:text-stone-600'
                  )}
                >
                  {icon}
                </div>

                <span
                  className={cn(
                    'mt-2.5 text-[11px] font-mono uppercase tracking-wider font-semibold',
                    isActive
                      ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                      : isCompleted
                      ? 'text-navy-900 dark:text-ivory-200'
                      : 'text-stone-500 dark:text-stone-500'
                  )}
                >
                  {stage}
                </span>

                {event && (
                  <span className="text-[10px] text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                    {event.date}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Chronological Events List with Icons */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-burgundy-800/40 dark:border-burgundy-900 space-y-5">
        {events.map((event, idx) => {
          const icon = getStageIcon(event.stage);

          return (
            <div key={idx} className="relative group">
              {/* Timeline node icon */}
              <div
                className={cn(
                  'absolute -left-[33px] sm:-left-[41px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors shadow-sm',
                  event.completed
                    ? 'border-navy-900 bg-navy-900 text-white dark:border-navy-700 dark:bg-navy-800'
                    : event.active
                    ? 'border-burgundy-800 bg-burgundy-800 text-brass-300 ring-2 ring-brass-400/40'
                    : 'border-stone-300 bg-white text-stone-400 dark:border-stone-700 dark:bg-charcoal-900'
                )}
              >
                {icon}
              </div>

              {/* Event Content */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-burgundy-800 dark:text-brass-400 font-bold">
                    {event.date}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-white dark:bg-charcoal-800 border border-ivory-300 dark:border-stone-700 rounded text-stone-700 dark:text-stone-300 font-mono font-medium">
                    {event.stage}
                  </span>
                  {event.active && (
                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-burgundy-100 dark:bg-burgundy-950/70 border border-burgundy-300 dark:border-burgundy-700 rounded text-burgundy-800 dark:text-burgundy-300 font-bold font-mono">
                      Current Stage
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-serif text-charcoal-800 dark:text-ivory-100 font-medium pt-0.5">
                  {event.title}
                </h4>

                {!isCompact && (
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans font-light leading-relaxed">
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
