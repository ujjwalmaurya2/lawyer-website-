import React, { useState } from 'react';
import { DEMO_CALENDAR_EVENTS } from '../../data/adminMockData';
import type { CalendarEvent } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  Calendar as CalendarIcon,
  MapPin,
  Plus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const AdminCalendarPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('week');
  const [events] = useState<CalendarEvent[]>(DEMO_CALENDAR_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(events[0] || null);

  const getAvailabilityColor = (avail: CalendarEvent['availability']) => {
    switch (avail) {
      case 'Court':
        return 'bg-rose-100 border-rose-300 text-rose-800 dark:bg-rose-950/70 dark:border-rose-800/60 dark:text-rose-300';
      case 'Consultation':
        return 'bg-brass-100 border-brass-300 text-brass-800 dark:bg-brass-400/15 dark:border-brass-400/40 dark:text-brass-300';
      case 'Busy':
        return 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-950/70 dark:border-amber-800/60 dark:text-amber-300';
      default:
        return 'bg-ivory-150 border-ivory-300 text-stone-700 dark:bg-charcoal-900 dark:border-stone-800 dark:text-stone-400';
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-ivory-100 dark:bg-transparent min-h-screen transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-300 dark:border-stone-800 pb-5 sm:pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
              SCHEDULE & CAUSE LIST
            </span>
            <Badge variant="demo">DEMO SCHEDULE</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal mt-1">
            Chamber Calendar & Hearing Schedule
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
            High Court appearances, client conferences, and consultation slots
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex rounded bg-white dark:bg-charcoal-850 p-1 border border-ivory-300 dark:border-stone-800 text-xs shadow-sm">
            {(['month', 'week', 'day'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setViewMode(view)}
                className={`px-3 py-1 rounded uppercase tracking-wider font-mono cursor-pointer transition-colors ${
                  viewMode === view
                    ? 'bg-brass-500 dark:bg-brass-400 text-white dark:text-charcoal-950 font-bold shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-charcoal-900 dark:hover:text-ivory-100'
                }`}
              >
                {view}
              </button>
            ))}
          </div>

          <Button variant="brass" size="sm" icon={<Plus className="w-3.5 h-3.5" />}>
            + Add Event
          </Button>
        </div>
      </div>

      {/* Availability Capacity Strip */}
      <div className="p-4 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs shadow-soft-light dark:shadow-none">
        <span className="text-charcoal-900 dark:text-stone-300 font-semibold font-mono">Schedule Availability Indicators:</span>
        
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-[10px] sm:text-[11px]">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800/40 font-semibold">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Court Hearing (Locked)
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-brass-100 dark:bg-brass-400/15 text-brass-800 dark:text-brass-300 border border-brass-300 dark:border-brass-400/30 font-semibold">
            <span className="w-2 h-2 rounded-full bg-brass-600" />
            Consultation Slot
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800/40 font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            Chamber Briefing (Busy)
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/40 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Available for Intake
          </span>
        </div>
      </div>

      {/* Main Calendar Area: Grid on Left, Selected Event Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left: Schedule Events Grid / Agenda View */}
        <div className="lg:col-span-8 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-6 space-y-5 shadow-card-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-ivory-200 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-brass-600 dark:text-brass-400" />
              <h2 className="text-sm sm:text-base font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
                {viewMode === 'day' ? 'Day Agenda' : 'Week Schedule'}: 02 Sep 2024 – 07 Sep 2024
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded border border-ivory-300 dark:border-stone-800 hover:border-brass-500 text-stone-600 dark:text-stone-400">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded border border-ivory-300 dark:border-stone-800 hover:border-brass-500 text-stone-600 dark:text-stone-400">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {events.map((event) => {
              const isSelected = selectedEvent?.id === event.id;

              return (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                    isSelected
                      ? 'bg-ivory-150 dark:bg-charcoal-900 border-brass-500 dark:border-brass-400 ring-1 ring-brass-400/40 shadow-sm'
                      : 'bg-white dark:bg-charcoal-900/60 border-ivory-300 dark:border-stone-800 hover:border-brass-400/60'
                  }`}
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] uppercase font-mono font-semibold px-2 py-0.5 rounded border ${getAvailabilityColor(event.availability)}`}>
                        {event.availability}
                      </span>
                      <span className="text-xs font-mono text-brass-800 dark:text-brass-400 font-bold">
                        {event.date} · {event.startTime} – {event.endTime}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
                      {event.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600 dark:text-stone-400">
                      {event.courtRoom && (
                        <span className="text-charcoal-900 dark:text-stone-300 font-medium">{event.courtRoom}</span>
                      )}
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brass-600 dark:text-brass-400" />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <Badge variant={event.status === 'Urgent' ? 'urgent' : 'stone'} size="sm">
                    {event.status}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Event Card */}
        <div className="lg:col-span-4 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-6 space-y-5 shadow-card-light dark:shadow-none lg:sticky lg:top-28">
          <div className="border-b border-ivory-200 dark:border-stone-800 pb-3">
            <span className="text-[10px] uppercase tracking-widest text-brass-700 dark:text-brass-400 font-mono font-bold">
              EVENT DETAIL
            </span>
            <h3 className="text-base sm:text-lg font-serif text-charcoal-900 dark:text-ivory-100 font-normal mt-0.5">
              {selectedEvent?.title || 'Select an event'}
            </h3>
          </div>

          {selectedEvent && (
            <div className="space-y-3.5 text-xs text-stone-700 dark:text-stone-300">
              <div>
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Event Type:</span>
                <span className="text-charcoal-900 dark:text-ivory-100 font-semibold">{selectedEvent.eventType}</span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Scheduled Time:</span>
                <span className="font-mono text-brass-800 dark:text-brass-300 font-bold">
                  {selectedEvent.date} ({selectedEvent.startTime} to {selectedEvent.endTime})
                </span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Location & Bench:</span>
                <span>{selectedEvent.courtRoom ? `${selectedEvent.courtRoom}, ` : ''}{selectedEvent.location}</span>
              </div>

              {selectedEvent.clientName && (
                <div>
                  <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Associated Client:</span>
                  <span className="text-charcoal-900 dark:text-ivory-100 font-semibold">{selectedEvent.clientName}</span>
                </div>
              )}

              <div className="pt-3.5 border-t border-ivory-200 dark:border-stone-800 space-y-2">
                <Button variant="brass" size="sm" className="w-full text-xs">
                  Edit Event Particulars
                </Button>
                <Button variant="ghost" size="sm" className="w-full text-stone-600 dark:text-stone-400 text-xs">
                  Reschedule Slot
                </Button>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
