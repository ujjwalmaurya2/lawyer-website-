import React, { useState } from 'react';
import { DEMO_CONSULTATION_LEADS } from '../../data/adminMockData';
import type { ConsultationLead } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';
import {
  Phone,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';

export const AdminLeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<ConsultationLead[]>(DEMO_CONSULTATION_LEADS);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedLead, setSelectedLead] = useState<ConsultationLead | null>(leads[0] || null);
  const [notice, setNotice] = useState('');

  const statuses: ConsultationLead['status'][] = ['New', 'Contacted', 'Scheduled', 'Converted', 'Closed'];

  const filteredLeads = statusFilter === 'All'
    ? leads
    : leads.filter((l) => l.status === statusFilter);

  const updateLeadStatus = (id: string, newStatus: ConsultationLead['status']) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
    if (selectedLead?.id === id) {
      setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
    setNotice(`Lead status updated to ${newStatus}`);
    setTimeout(() => setNotice(''), 3000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-ivory-100 dark:bg-transparent min-h-screen transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-300 dark:border-stone-800 pb-5 sm:pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
              CONSULTATION CRM PIPELINE
            </span>
            <Badge variant="demo">DEMO LEADS</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal mt-1">
            Consultation Intake & Requests
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
            Inquiries received from website multi-step intake and direct WhatsApp messages
          </p>
        </div>
      </div>

      {notice && (
        <div className="p-3 rounded bg-brass-100 dark:bg-brass-400/10 border border-brass-300 dark:border-brass-400/30 text-xs text-brass-800 dark:text-brass-300 flex items-center gap-2 animate-fade-in font-semibold font-mono">
          <CheckCircle2 className="w-4 h-4 text-brass-700 dark:text-brass-400" />
          <span>{notice}</span>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-ivory-300 dark:border-stone-800 pb-4">
        <button
          onClick={() => setStatusFilter('All')}
          className={`px-3.5 py-1.5 rounded text-xs uppercase tracking-wider font-mono cursor-pointer transition-colors ${
            statusFilter === 'All'
              ? 'bg-brass-500 dark:bg-brass-400 text-white dark:text-charcoal-950 font-bold shadow-sm'
              : 'bg-white dark:bg-charcoal-850 text-stone-700 dark:text-stone-400 hover:text-charcoal-900 dark:hover:text-ivory-100 border border-ivory-300 dark:border-stone-800'
          }`}
        >
          All Requests ({leads.length})
        </button>
        {statuses.map((st) => (
          <button
            key={st}
            onClick={() => setStatusFilter(st)}
            className={`px-3.5 py-1.5 rounded text-xs uppercase tracking-wider font-mono cursor-pointer transition-colors ${
              statusFilter === st
                ? 'bg-brass-500 dark:bg-brass-400 text-white dark:text-charcoal-950 font-bold shadow-sm'
                : 'bg-white dark:bg-charcoal-850 text-stone-700 dark:text-stone-400 hover:text-charcoal-900 dark:hover:text-ivory-100 border border-ivory-300 dark:border-stone-800'
            }`}
          >
            {st} ({leads.filter((l) => l.status === st).length})
          </button>
        ))}
      </div>

      {/* Main Grid: Leads List on Left, Selected Lead Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left: Leads Table/Cards */}
        <div className="lg:col-span-7 space-y-3">
          {filteredLeads.map((lead) => {
            const isSelected = selectedLead?.id === lead.id;

            return (
              <div
                key={lead.id}
                onClick={() => setSelectedLead(lead)}
                className={`p-4 sm:p-5 rounded-lg border transition-all cursor-pointer space-y-2.5 ${
                  isSelected
                    ? 'bg-white dark:bg-charcoal-850 border-brass-500 dark:border-brass-400 shadow-card-light dark:shadow-md ring-1 ring-brass-400/30'
                    : 'bg-white/80 dark:bg-charcoal-850/60 border-ivory-300 dark:border-stone-800 hover:border-brass-400/60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
                      {lead.fullName}
                    </h3>
                    <span className="text-xs text-brass-800 dark:text-brass-300 font-sans font-medium block">
                      {lead.matterType}
                    </span>
                  </div>
                  <Badge variant={lead.status === 'New' ? 'brass' : 'stone'} size="sm">
                    {lead.status}
                  </Badge>
                </div>

                <p className="text-xs text-stone-700 dark:text-stone-300 font-light line-clamp-2 leading-relaxed">
                  {lead.description}
                </p>

                <div className="pt-2 border-t border-ivory-200 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
                  <span className="font-mono text-[11px]">{lead.date}</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${lead.mobile}`}
                      className="p-1 rounded text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-ivory-100"
                      title="Call"
                    >
                      <Phone className="w-3.5 h-3.5 text-brass-600 dark:text-brass-400" />
                    </a>
                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-[#155E44] dark:text-[#55E6A5]"
                      title="WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Selected Lead Inspector */}
        <div className="lg:col-span-5 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-7 space-y-5 shadow-card-light dark:shadow-none lg:sticky lg:top-28">
          <div className="border-b border-ivory-200 dark:border-stone-800 pb-3">
            <span className="text-[10px] uppercase tracking-widest text-brass-700 dark:text-brass-400 font-mono font-bold">
              INTAKE DOSSIER
            </span>
            <h2 className="text-lg sm:text-xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal mt-0.5">
              {selectedLead?.fullName || 'Select a lead'}
            </h2>
          </div>

          {selectedLead && (
            <div className="space-y-4 text-xs text-stone-700 dark:text-stone-300">
              <div className="space-y-1">
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Matter Category:</span>
                <Badge variant="brass">{selectedLead.matterType}</Badge>
              </div>

              <div className="space-y-0.5">
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Contact Coordinates:</span>
                <p className="font-mono text-charcoal-900 dark:text-ivory-100 font-semibold">{selectedLead.mobile}</p>
                <p className="font-mono text-stone-500 dark:text-stone-400">{selectedLead.email}</p>
              </div>

              <div className="space-y-0.5">
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Preferred Consultation Window:</span>
                <span className="text-charcoal-900 dark:text-ivory-200 font-medium">{selectedLead.preferredTime}</span>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Matter Summary from Form:</span>
                <p className="p-3 rounded bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 text-charcoal-900 dark:text-stone-200 font-light leading-relaxed">
                  {selectedLead.description}
                </p>
              </div>

              {/* Status Updater */}
              <div className="space-y-1.5 pt-2 border-t border-ivory-200 dark:border-stone-800">
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] font-mono">Update Pipeline Status:</span>
                <div className="grid grid-cols-3 gap-1.5">
                  {statuses.map((st) => (
                    <button
                      key={st}
                      onClick={() => updateLeadStatus(selectedLead.id, st)}
                      className={`px-2 py-1.5 rounded text-[10px] uppercase font-mono transition-colors cursor-pointer border ${
                        selectedLead.status === st
                          ? 'bg-brass-500 dark:bg-brass-400 text-white dark:text-charcoal-950 font-bold border-brass-500'
                          : 'bg-ivory-150 dark:bg-charcoal-900 text-stone-700 dark:text-stone-400 border-ivory-300 dark:border-stone-800 hover:border-brass-400'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Communication Actions */}
              <div className="pt-3.5 border-t border-ivory-200 dark:border-stone-800 grid grid-cols-2 gap-2">
                <Button
                  variant="whatsapp"
                  size="sm"
                  as="a"
                  href={getDirectWhatsAppUrl(`नमस्कार ${selectedLead.fullName} जी, मैं एडवोकेट आशुतोष पाण्डेय के चैंबर से संपर्क कर रहा हूँ।`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<MessageSquare className="w-3.5 h-3.5" />}
                  className="w-full text-xs"
                >
                  WhatsApp
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  as="a"
                  href={`tel:${selectedLead.mobile}`}
                  icon={<Phone className="w-3.5 h-3.5" />}
                  className="w-full text-xs"
                >
                  Call
                </Button>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
