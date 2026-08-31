import React, { useState, useEffect } from 'react';
import { DEMO_CALENDAR_EVENTS } from '../../data/adminMockData';
import { DEMO_MATTERS } from '../../data/matters';
import type { CalendarEvent } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  Calendar as CalendarIcon,
  MapPin,
  Plus,
  ChevronLeft,
  ChevronRight,
  Landmark,
  MessageCircle,
  Building2,
  Calendar,
  X,
  Trash2,
  CheckCircle2,
  Clock,
  AlertCircle,
  Edit3,
} from 'lucide-react';

export const AdminCalendarPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('week');
  const [events, setEvents] = useState<CalendarEvent[]>(DEMO_CALENDAR_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(DEMO_CALENDAR_EVENTS[0] || null);

  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State for Add / Edit
  const [formData, setFormData] = useState<{
    id?: string;
    title: string;
    eventType: 'Court Hearing' | 'Client Consultation' | 'Chamber Meeting' | 'Other';
    matterNumber?: string;
    clientName?: string;
    date: string;
    startTime: string;
    endTime: string;
    courtRoom?: string;
    location: string;
    status: 'Scheduled' | 'Urgent' | 'Completed' | 'Cancelled';
    notes?: string;
  }>({
    title: '',
    eventType: 'Court Hearing',
    matterNumber: DEMO_MATTERS[0]?.matterNumber || '',
    clientName: '',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:30',
    endTime: '12:00',
    courtRoom: 'Court No. 04',
    location: 'High Court Allahabad',
    status: 'Scheduled',
    notes: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  // Toast auto-hide
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setDeleteConfirmId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Semantic Icon Mapping for Event Types
  const getEventIcon = (eventType: CalendarEvent['eventType']) => {
    switch (eventType) {
      case 'Court Hearing':
        return <Landmark className="w-4 h-4 text-burgundy-800 dark:text-brass-300" />;
      case 'Client Consultation':
        return <MessageCircle className="w-4 h-4 text-navy-800 dark:text-navy-300" />;
      case 'Chamber Meeting':
        return <Building2 className="w-4 h-4 text-terracotta-700 dark:text-terracotta-300" />;
      case 'Other':
      default:
        return <Calendar className="w-4 h-4 text-sage-800 dark:text-sage-300" />;
    }
  };

  // Semantic Color Styling for Event Cards & Badges
  const getEventCardStyle = (eventType: CalendarEvent['eventType'], isSelected: boolean) => {
    if (isSelected) {
      return 'bg-ivory-150 dark:bg-charcoal-900 border-brass-500 dark:border-brass-400 ring-2 ring-brass-400/40 shadow-md';
    }

    switch (eventType) {
      case 'Court Hearing':
        return 'bg-burgundy-50/40 dark:bg-burgundy-950/20 border-burgundy-200 dark:border-burgundy-900/50 hover:border-burgundy-700';
      case 'Client Consultation':
        return 'bg-navy-50/40 dark:bg-navy-950/20 border-navy-200 dark:border-navy-900/50 hover:border-navy-700';
      case 'Chamber Meeting':
        return 'bg-terracotta-50/40 dark:bg-terracotta-950/20 border-terracotta-200 dark:border-terracotta-900/50 hover:border-terracotta-700';
      case 'Other':
      default:
        return 'bg-sage-50/40 dark:bg-sage-950/20 border-sage-200 dark:border-sage-900/50 hover:border-sage-700';
    }
  };

  // Open Add Modal
  const handleOpenAddModal = () => {
    setFormData({
      title: '',
      eventType: 'Court Hearing',
      matterNumber: DEMO_MATTERS[0]?.matterNumber || '',
      clientName: '',
      date: new Date().toISOString().split('T')[0],
      startTime: '10:30',
      endTime: '12:00',
      courtRoom: 'Court No. 04',
      location: 'High Court Allahabad',
      status: 'Scheduled',
      notes: '',
    });
    setFormError(null);
    setIsAddModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEditModal = (event: CalendarEvent) => {
    let normalizedType: 'Court Hearing' | 'Client Consultation' | 'Chamber Meeting' | 'Other' = 'Other';
    if (event.eventType === 'Court Hearing') normalizedType = 'Court Hearing';
    else if (event.eventType === 'Client Consultation' || event.eventType === 'Consultation') normalizedType = 'Client Consultation';
    else if (event.eventType === 'Chamber Meeting') normalizedType = 'Chamber Meeting';

    let normalizedStatus: 'Scheduled' | 'Urgent' | 'Completed' | 'Cancelled' = 'Scheduled';
    if (event.status === 'Urgent') normalizedStatus = 'Urgent';
    else if (event.status === 'Completed') normalizedStatus = 'Completed';
    else if (event.status === 'Cancelled') normalizedStatus = 'Cancelled';

    setFormData({
      id: event.id,
      title: event.title,
      eventType: normalizedType,
      matterNumber: event.matterNumber || '',
      clientName: event.clientName || '',
      date: event.date,
      startTime: event.startTime,
      endTime: event.endTime,
      courtRoom: event.courtRoom || '',
      location: event.location,
      status: normalizedStatus,
      notes: event.notes || '',
    });
    setFormError(null);
    setIsEditModalOpen(true);
  };

  // Validation Logic (Checks required + startTime < endTime)
  const validateForm = (): boolean => {
    if (!formData.title.trim()) {
      setFormError('Please enter an event or hearing title.');
      return false;
    }
    if (!formData.date) {
      setFormError('Please select a valid date.');
      return false;
    }
    if (!formData.startTime || !formData.endTime) {
      setFormError('Please specify both start and end times.');
      return false;
    }

    // Time comparison (HH:mm format)
    if (formData.startTime >= formData.endTime) {
      setFormError('Please select an end time after the start time.');
      return false;
    }

    setFormError(null);
    return true;
  };

  // Save New Event
  const handleSaveNewEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const availabilityMap: Record<string, CalendarEvent['availability']> = {
      'Court Hearing': 'Court',
      'Client Consultation': 'Consultation',
      'Chamber Meeting': 'Busy',
      'Other': 'Busy',
    };

    const newEvent: CalendarEvent = {
      id: `evt-${Date.now()}`,
      title: formData.title,
      eventType: formData.eventType,
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      availability: availabilityMap[formData.eventType] || 'Busy',
      location: formData.location || 'High Court Allahabad',
      courtRoom: formData.courtRoom || undefined,
      clientName: formData.clientName || undefined,
      matterNumber: formData.matterNumber || undefined,
      status: formData.status,
      notes: formData.notes || undefined,
      isDemoData: true,
    };

    const updated = [newEvent, ...events];
    setEvents(updated);
    setSelectedEvent(newEvent);
    setIsAddModalOpen(false);
    showToast(formData.eventType === 'Court Hearing' ? 'Hearing scheduled successfully.' : 'Event added to calendar.');
  };

  // Save Changes to Existing Event
  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !formData.id) return;

    const availabilityMap: Record<string, CalendarEvent['availability']> = {
      'Court Hearing': 'Court',
      'Client Consultation': 'Consultation',
      'Chamber Meeting': 'Busy',
      'Other': 'Busy',
    };

    const updatedEvents = events.map((ev) => {
      if (ev.id === formData.id) {
        return {
          ...ev,
          title: formData.title,
          eventType: formData.eventType,
          date: formData.date,
          startTime: formData.startTime,
          endTime: formData.endTime,
          availability: availabilityMap[formData.eventType] || 'Busy',
          location: formData.location,
          courtRoom: formData.courtRoom || undefined,
          clientName: formData.clientName || undefined,
          matterNumber: formData.matterNumber || undefined,
          status: formData.status,
          notes: formData.notes || undefined,
        };
      }
      return ev;
    });

    setEvents(updatedEvents);
    const updatedSelected = updatedEvents.find((e) => e.id === formData.id) || null;
    setSelectedEvent(updatedSelected);
    setIsEditModalOpen(false);
    showToast('Changes saved successfully.');
  };

  // Delete Event
  const handleDeleteEvent = (id: string) => {
    const remaining = events.filter((e) => e.id !== id);
    setEvents(remaining);
    setSelectedEvent(remaining[0] || null);
    setDeleteConfirmId(null);
    setIsEditModalOpen(false);
    showToast('Event deleted from schedule.');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-ivory-100 dark:bg-transparent min-h-screen transition-colors relative">
      
      {/* Non-blocking Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-xl bg-emerald-900 text-white border border-emerald-500/50 shadow-2xl flex items-center gap-3 animate-fade-in font-sans text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
          <span className="font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="p-1 hover:text-stone-300">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-300 dark:border-stone-800 pb-5 sm:pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
              SCHEDULE & CAUSE LIST
            </span>
            <Badge variant="demo">DEMO SCHEDULE</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal mt-1">
            Chamber Calendar & Hearing Schedule
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
            High Court appearances, client conferences, and consultation slots
          </p>
        </div>

        {/* View Switcher & Action Buttons */}
        <div className="flex items-center gap-2.5">
          <div className="flex rounded-lg bg-white dark:bg-charcoal-850 p-1 border border-ivory-300 dark:border-stone-800 text-xs shadow-sm">
            {(['month', 'week', 'day'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setViewMode(view)}
                className={`px-3 py-1 rounded uppercase tracking-wider font-mono cursor-pointer transition-colors ${
                  viewMode === view
                    ? 'bg-burgundy-800 text-ivory-50 dark:bg-brass-400 dark:text-charcoal-950 font-bold shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-charcoal-900 dark:hover:text-ivory-100'
                }`}
              >
                {view}
              </button>
            ))}
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={handleOpenAddModal}
            icon={<Plus className="w-3.5 h-3.5" />}
            className="font-semibold shadow-sm"
          >
            + Add Hearing / Event
          </Button>
        </div>
      </div>

      {/* Availability Capacity Strip with Semantic Colors */}
      <div className="p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs shadow-soft-light dark:shadow-none">
        <span className="text-charcoal-800 dark:text-stone-300 font-semibold font-mono">Event Type Visual Coding:</span>
        
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-[10px] sm:text-[11px]">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-burgundy-100 dark:bg-burgundy-950/70 text-burgundy-800 dark:text-burgundy-300 border border-burgundy-300 dark:border-burgundy-800/40 font-bold">
            <Landmark className="w-3 h-3 text-burgundy-800" />
            Court Hearing
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-navy-100 dark:bg-navy-950/70 text-navy-800 dark:text-navy-300 border border-navy-300 dark:border-navy-800/30 font-bold">
            <MessageCircle className="w-3 h-3 text-navy-800" />
            Client Consultation
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-terracotta-100 dark:bg-terracotta-950/70 text-terracotta-800 dark:text-terracotta-300 border border-terracotta-300 dark:border-terracotta-800/40 font-bold">
            <Building2 className="w-3 h-3 text-terracotta-700" />
            Chamber Meeting
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-sage-100 dark:bg-sage-950/70 text-sage-800 dark:text-sage-300 border border-sage-300 dark:border-sage-800/40 font-bold">
            <Calendar className="w-3 h-3 text-sage-700" />
            Other Legal Event
          </span>
        </div>
      </div>

      {/* Main Calendar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left: Schedule Events Agenda View (8 Cols) */}
        <div className="lg:col-span-8 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-6 space-y-5 shadow-card-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-ivory-200 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
              <h2 className="text-sm sm:text-base font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                {viewMode === 'day' ? 'Day Agenda' : viewMode === 'month' ? 'Month Overview' : 'Weekly Cause Schedule'} ({events.length} Events)
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800 text-stone-600 dark:text-stone-400">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded border border-ivory-300 dark:border-stone-800 hover:border-burgundy-800 text-stone-600 dark:text-stone-400">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* List of Events or Empty State */}
          {events.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-ivory-200 dark:bg-charcoal-800 flex items-center justify-center mx-auto text-stone-500">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base text-charcoal-800 dark:text-ivory-100">No scheduled events</h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Add a hearing, consultation or chamber meeting to begin building the schedule.
              </p>
              <Button variant="primary" size="sm" onClick={handleOpenAddModal}>
                + Add Event
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {events.map((event) => {
                const isSelected = selectedEvent?.id === event.id;
                const icon = getEventIcon(event.eventType);

                return (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${getEventCardStyle(
                      event.eventType,
                      isSelected
                    )}`}
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-1 text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-charcoal-800 border border-ivory-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 shadow-xs">
                          {icon}
                          <span>{event.eventType}</span>
                        </span>

                        <span className="text-xs font-mono text-burgundy-800 dark:text-brass-400 font-bold">
                          {event.date} · {event.startTime} – {event.endTime}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                        {event.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600 dark:text-stone-400">
                        {event.courtRoom && (
                          <span className="text-charcoal-800 dark:text-stone-300 font-medium">{event.courtRoom}</span>
                        )}
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-burgundy-800 dark:text-brass-400" />
                          {event.location}
                        </span>
                        {event.clientName && (
                          <span className="text-stone-500 font-sans">Client: {event.clientName}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant={event.status === 'Urgent' ? 'urgent' : event.status === 'Completed' ? 'sage' : 'navy'} size="sm">
                        {event.status}
                      </Badge>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenEditModal(event);
                        }}
                        className="p-1.5 rounded-lg border border-ivory-300 dark:border-stone-700 hover:border-burgundy-800 text-stone-600 dark:text-stone-300 hover:text-burgundy-800 transition-colors"
                        title="Edit Event"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: Selected Event Detail Card (4 Cols) */}
        <div className="lg:col-span-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-6 space-y-5 shadow-card-light dark:shadow-none lg:sticky lg:top-28">
          <div className="border-b border-ivory-200 dark:border-stone-800 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-burgundy-800 dark:text-brass-400 font-mono font-bold block">
                SELECTED EVENT PARTICULAR
              </span>
              <h3 className="text-base sm:text-lg font-serif text-charcoal-800 dark:text-ivory-100 font-normal mt-0.5">
                {selectedEvent?.title || 'No event selected'}
              </h3>
            </div>
            {selectedEvent && (
              <Badge variant={selectedEvent.status === 'Urgent' ? 'urgent' : 'navy'} size="sm">
                {selectedEvent.status}
              </Badge>
            )}
          </div>

          {selectedEvent ? (
            <div className="space-y-3.5 text-xs text-stone-700 dark:text-stone-300">
              <div className="p-3 rounded-lg bg-ivory-150/70 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-mono text-[11px]">Event Type:</span>
                  <span className="font-bold text-charcoal-800 dark:text-ivory-100 flex items-center gap-1">
                    {getEventIcon(selectedEvent.eventType)}
                    <span>{selectedEvent.eventType}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-mono text-[11px]">Time Window:</span>
                  <span className="font-mono text-burgundy-800 dark:text-brass-400 font-bold">
                    {selectedEvent.startTime} – {selectedEvent.endTime}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-mono text-[11px]">Scheduled Date:</span>
                  <span className="font-mono font-bold text-charcoal-800 dark:text-ivory-100">
                    {selectedEvent.date}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Location & Bench:</span>
                <span className="text-charcoal-800 dark:text-ivory-100 font-medium">
                  {selectedEvent.courtRoom ? `${selectedEvent.courtRoom}, ` : ''}{selectedEvent.location}
                </span>
              </div>

              {selectedEvent.matterNumber && (
                <div>
                  <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Associated Case File:</span>
                  <span className="font-mono text-burgundy-800 dark:text-brass-400 font-bold">
                    {selectedEvent.matterNumber}
                  </span>
                </div>
              )}

              {selectedEvent.clientName && (
                <div>
                  <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Client Name:</span>
                  <span className="text-charcoal-800 dark:text-ivory-100 font-semibold">{selectedEvent.clientName}</span>
                </div>
              )}

              {selectedEvent.notes && (
                <div>
                  <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Chamber Notes:</span>
                  <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed pt-0.5">
                    {selectedEvent.notes}
                  </p>
                </div>
              )}

              <div className="pt-3.5 border-t border-ivory-200 dark:border-stone-800 space-y-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleOpenEditModal(selectedEvent)}
                  icon={<Edit3 className="w-3.5 h-3.5" />}
                  className="w-full text-xs font-semibold"
                >
                  Edit Hearing / Event Particulars
                </Button>

                {deleteConfirmId === selectedEvent.id ? (
                  <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800 text-xs text-rose-900 dark:text-rose-200 space-y-2">
                    <p className="font-medium">Permanently delete this event from the calendar?</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDeleteEvent(selectedEvent.id)}
                        className="px-3 py-1 bg-rose-800 text-white rounded text-xs font-bold"
                      >
                        Yes, Delete
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(null)}
                        className="px-3 py-1 bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded text-xs font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDeleteConfirmId(selectedEvent.id)}
                    icon={<Trash2 className="w-3.5 h-3.5 text-rose-600" />}
                    className="w-full text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-xs"
                  >
                    Delete Event
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <p className="text-xs text-stone-500">Select any event from the schedule to inspect particulars.</p>
          )}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* ADD EVENT MODAL / DRAWER */}
      {/* ========================================================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-xl bg-[#FFFDF8] dark:bg-charcoal-900 border-2 border-brass-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-ivory-300 dark:border-stone-800 pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-burgundy-800 dark:text-brass-400 font-mono font-bold block">
                  SCHEDULE WORKFLOW
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-800 dark:text-ivory-100 font-normal">
                  Add Hearing or Event
                </h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg border border-ivory-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formError && (
              <div className="p-3 rounded-lg bg-rose-100 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSaveNewEvent} className="space-y-4 text-xs">
              
              {/* Event Type & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-sans"
                  >
                    <option value="Court Hearing">Court Hearing</option>
                    <option value="Client Consultation">Client Consultation</option>
                    <option value="Chamber Meeting">Chamber Meeting</option>
                    <option value="Other">Other Legal Matter</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-sans"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Urgent">Urgent / Priority</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                  Title / Cause Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Writ Petition (Civil) No. 4192 of 2024 — Admission Hearing"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                />
              </div>

              {/* Matter File Selection */}
              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                  Associated Matter (Optional)
                </label>
                <select
                  value={formData.matterNumber}
                  onChange={(e) => setFormData({ ...formData, matterNumber: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-mono text-xs"
                >
                  <option value="">-- No matter selected --</option>
                  {DEMO_MATTERS.map((m) => (
                    <option key={m.id} value={m.matterNumber}>
                      {m.matterNumber} — {m.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Times */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    End Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-mono text-xs"
                  />
                </div>
              </div>

              {/* Court Room & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Court / Bench / Room
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Court No. 04 / Chamber 62"
                    value={formData.courtRoom}
                    onChange={(e) => setFormData({ ...formData, courtRoom: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Location / Venue
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. High Court Allahabad"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                  />
                </div>
              </div>

              {/* Client Name & Notes */}
              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                  Client / Representative Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                  Private Chamber Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Counter affidavit served. Prepare rejoinder compilation for bench hearing."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-ivory-300 dark:border-stone-800 flex items-center justify-end gap-2.5">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="font-semibold shadow-sm"
                >
                  Save Event to Schedule
                </Button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT EVENT MODAL */}
      {/* ========================================================================= */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-xl bg-[#FFFDF8] dark:bg-charcoal-900 border-2 border-brass-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-ivory-300 dark:border-stone-800 pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-burgundy-800 dark:text-brass-400 font-mono font-bold block">
                  MODIFY SCHEDULE RECORD
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-800 dark:text-ivory-100 font-normal">
                  Edit Event Particulars
                </h3>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1.5 rounded-lg border border-ivory-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formError && (
              <div className="p-3 rounded-lg bg-rose-100 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSaveChanges} className="space-y-4 text-xs">
              
              {/* Event Type & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-sans"
                  >
                    <option value="Court Hearing">Court Hearing</option>
                    <option value="Client Consultation">Client Consultation</option>
                    <option value="Chamber Meeting">Chamber Meeting</option>
                    <option value="Other">Other Legal Matter</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-sans"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Urgent">Urgent / Priority</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                  Title / Cause Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                />
              </div>

              {/* Date & Times */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    End Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 font-mono text-xs"
                  />
                </div>
              </div>

              {/* Court Room & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Court / Bench / Room
                  </label>
                  <input
                    type="text"
                    value={formData.courtRoom}
                    onChange={(e) => setFormData({ ...formData, courtRoom: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                    Location / Venue
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                  />
                </div>
              </div>

              {/* Client Name & Notes */}
              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                  Client / Representative Name
                </label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                  Private Chamber Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-xs"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-ivory-300 dark:border-stone-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => formData.id && handleDeleteEvent(formData.id)}
                  className="text-rose-700 dark:text-rose-400 hover:underline font-mono uppercase font-bold text-[11px]"
                >
                  Delete Event
                </button>

                <div className="flex items-center gap-2.5">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="font-semibold shadow-sm"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
