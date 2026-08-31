import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Calendar as CalendarIcon,
  Inbox,
  Clock,
  ArrowUpRight,
  FileText,
  Plus,
  Phone,
  MessageSquare,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { ADMIN_STATS_DEMO, DEMO_CONSULTATION_LEADS, DEMO_CALENDAR_EVENTS } from '../../data/adminMockData';
import { DEMO_MATTERS } from '../../data/matters';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const AdminDashboardPage: React.FC = () => {
  const stats = ADMIN_STATS_DEMO;
  const upcomingHearings = DEMO_CALENDAR_EVENTS.filter((e) => e.eventType === 'Court Hearing');

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-ivory-100 dark:bg-transparent min-h-screen transition-colors">
      
      {/* Top Welcome & Demo Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-ivory-300 dark:border-stone-800 pb-5 sm:pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
              CHAMBER EXECUTIVE PORTAL
            </span>
            <Badge variant="demo">DEMO ENVIRONMENT</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal mt-1">
            Chamber Administration & Matters Control
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans font-light">
            High Court Allahabad Chamber 62 · Live Operational Overview
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <Button
            variant="primary"
            size="sm"
            as="a"
            href="/admin/cases"
            icon={<Plus className="w-3.5 h-3.5" />}
          >
            + Add New Matter
          </Button>
          <Link
            to="/"
            className="text-xs uppercase tracking-wider text-stone-700 dark:text-stone-400 hover:text-burgundy-800 dark:hover:text-ivory-100 px-3 py-2 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 font-bold font-mono shadow-sm"
          >
            Public Site
          </Link>
        </div>
      </div>

      {/* Metric Cards with Distinct Visual Identities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Active Matters — Burgundy Accent */}
        <Link
          to="/admin/cases"
          className="p-5 rounded-xl bg-white dark:bg-charcoal-850 border-t-4 border-t-burgundy-800 border-x border-b border-ivory-300 dark:border-stone-800 hover:border-burgundy-800/80 transition-all space-y-3 group shadow-card-light dark:shadow-none"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-burgundy-800 dark:text-burgundy-300 font-bold font-mono">
              Active Matters
            </span>
            <Briefcase className="w-4 h-4 text-burgundy-800 dark:text-burgundy-400" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-burgundy-800 transition-colors">
              {stats.activeMattersCount}
            </span>
            <Badge variant="demo">DEMO</Badge>
          </div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light">High Court active proceedings</p>
        </Link>

        {/* Upcoming Hearings — Navy Accent */}
        <Link
          to="/admin/calendar"
          className="p-5 rounded-xl bg-white dark:bg-charcoal-850 border-t-4 border-t-navy-900 border-x border-b border-ivory-300 dark:border-stone-800 hover:border-navy-700 transition-all space-y-3 group shadow-card-light dark:shadow-none"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-navy-900 dark:text-navy-300 font-bold font-mono">
              Upcoming Hearings
            </span>
            <CalendarIcon className="w-4 h-4 text-navy-800 dark:text-navy-400" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-navy-800 transition-colors">
              {stats.upcomingHearingsCount}
            </span>
            <span className="text-[10px] text-navy-900 dark:text-navy-300 font-mono font-bold">This Week</span>
          </div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light">Scheduled bench appearances</p>
        </Link>

        {/* New Consultations — Terracotta Accent */}
        <Link
          to="/admin/leads"
          className="p-5 rounded-xl bg-white dark:bg-charcoal-850 border-t-4 border-t-terracotta-600 border-x border-b border-ivory-300 dark:border-stone-800 hover:border-terracotta-700 transition-all space-y-3 group shadow-card-light dark:shadow-none"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-terracotta-700 dark:text-terracotta-300 font-bold font-mono">
              New Consultations
            </span>
            <Inbox className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-terracotta-700 transition-colors">
              {stats.newConsultationRequestsCount}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-terracotta-100 dark:bg-terracotta-950 text-terracotta-800 dark:text-terracotta-300 font-mono font-bold">
              Action Required
            </span>
          </div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light">Intake form & WhatsApp inquiries</p>
        </Link>

        {/* Documents Vault — Sage Accent */}
        <Link
          to="/admin/documents"
          className="p-5 rounded-xl bg-white dark:bg-charcoal-850 border-t-4 border-t-sage-600 border-x border-b border-ivory-300 dark:border-stone-800 hover:border-sage-700 transition-all space-y-3 group shadow-card-light dark:shadow-none"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-sage-700 dark:text-sage-300 font-bold font-mono">
              Documents Vault
            </span>
            <FileText className="w-4 h-4 text-sage-600 dark:text-sage-400" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-sage-700 transition-colors">
              {stats.documentsManagedCount}
            </span>
            <Badge variant="demo">DEMO</Badge>
          </div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light">Petitions, orders & affidavits</p>
        </Link>
      </div>

      {/* Two Columns: Upcoming Court Hearings (Left) & New Consultation Leads (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        
        {/* Left: Upcoming Court Hearings */}
        <div className="lg:col-span-7 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-7 space-y-4 sm:space-y-5 shadow-soft-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-ivory-300 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
              <h2 className="text-base font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                Upcoming Court Hearings & Bench Appearances
              </h2>
            </div>
            <Link
              to="/admin/calendar"
              className="text-xs uppercase tracking-wider text-burgundy-800 dark:text-brass-400 hover:underline inline-flex items-center gap-1 font-mono font-bold"
            >
              <span>Full Schedule</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {upcomingHearings.map((hearing) => (
              <div
                key={hearing.id}
                className="p-4 rounded-lg bg-ivory-150/70 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-burgundy-800/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-burgundy-800 dark:text-brass-400 font-bold">
                      {hearing.date} · {hearing.startTime}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white dark:bg-charcoal-800 border border-ivory-300 dark:border-stone-700 text-stone-800 dark:text-stone-300 font-mono font-semibold">
                      {hearing.courtRoom}
                    </span>
                  </div>
                  <h3 className="text-sm font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                    {hearing.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
                    Client: {hearing.clientName} · {hearing.location}
                  </p>
                </div>

                <Badge variant={hearing.status === 'Urgent' ? 'urgent' : 'navy'} size="sm">
                  {hearing.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Right: New Consultation Leads */}
        <div className="lg:col-span-5 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-7 space-y-4 sm:space-y-5 shadow-soft-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-ivory-300 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <Inbox className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
              <h2 className="text-base font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                Recent Consultation Requests
              </h2>
            </div>
            <Link
              to="/admin/leads"
              className="text-xs uppercase tracking-wider text-terracotta-700 dark:text-terracotta-400 hover:underline inline-flex items-center gap-1 font-mono font-bold"
            >
              <span>View All ({DEMO_CONSULTATION_LEADS.length})</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {DEMO_CONSULTATION_LEADS.slice(0, 3).map((lead) => (
              <div
                key={lead.id}
                className="p-4 rounded-lg bg-ivory-150/70 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800/80 space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                      {lead.fullName}
                    </h3>
                    <span className="text-[11px] text-terracotta-700 dark:text-terracotta-300 font-sans block font-medium">
                      {lead.matterType}
                    </span>
                  </div>
                  <Badge variant={lead.status === 'New' ? 'terracotta' : 'stone'} size="sm">
                    {lead.status}
                  </Badge>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 font-light line-clamp-2">
                  {lead.description}
                </p>

                <div className="pt-2 border-t border-ivory-200 dark:border-stone-800/60 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-stone-500 dark:text-stone-400 font-mono">{lead.date}</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${lead.mobile}`}
                      className="p-1 rounded text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-ivory-100"
                      title="Call Client"
                    >
                      <Phone className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
                    </a>
                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-[#155E44] dark:text-[#55E6A5]"
                      title="WhatsApp Client"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Selected Matters Registry Table */}
      <div className="rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-7 space-y-4 shadow-card-light dark:shadow-none">
        <div className="flex items-center justify-between border-b border-ivory-300 dark:border-stone-800 pb-3">
          <div>
            <h2 className="text-base font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
              Chamber Matters Registry Overview
            </h2>
            <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
              Current active and pending proceedings before the High Court
            </p>
          </div>
          <Link
            to="/admin/cases"
            className="text-xs uppercase tracking-wider text-burgundy-800 dark:text-brass-400 hover:underline inline-flex items-center gap-1 font-mono font-bold"
          >
            <span>Manage All Cases</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-700 dark:text-stone-300">
            <thead>
              <tr className="border-b border-ivory-300 dark:border-stone-800 text-[10px] uppercase tracking-wider text-stone-600 dark:text-stone-400 bg-ivory-150/70 dark:bg-charcoal-900/80 font-mono font-bold">
                <th className="py-3 px-3">Matter / Case No.</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Court / Bench</th>
                <th className="py-3 px-3">Next Hearing</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Visibility</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-200 dark:divide-stone-800/60 font-sans">
              {DEMO_MATTERS.map((matter) => (
                <tr key={matter.id} className="hover:bg-ivory-150/50 dark:hover:bg-charcoal-900/60 transition-colors">
                  <td className="py-3.5 px-3">
                    <Link
                      to={`/admin/cases/${matter.id}`}
                      className="font-medium text-charcoal-800 dark:text-ivory-100 hover:text-burgundy-800 dark:hover:text-brass-300 font-serif text-sm block"
                    >
                      {matter.title}
                    </Link>
                    <span className="text-[10px] text-burgundy-800 dark:text-brass-400 font-mono font-bold">
                      {matter.matterNumber}
                    </span>
                  </td>
                  <td className="py-3.5 px-3">{matter.matterType}</td>
                  <td className="py-3.5 px-3 text-stone-600 dark:text-stone-400">{matter.bench || matter.court}</td>
                  <td className="py-3.5 px-3 font-mono text-navy-900 dark:text-navy-300 font-bold">
                    {matter.nextHearingDate || 'Pending'}
                  </td>
                  <td className="py-3.5 px-3">
                    <Badge variant={matter.status === 'Active' ? 'burgundy' : 'navy'} size="sm">
                      {matter.status}
                    </Badge>
                  </td>
                  <td className="py-3.5 px-3">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                        matter.isPublic
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/40'
                          : 'bg-ivory-200 dark:bg-stone-900 text-stone-700 dark:text-stone-400 border border-ivory-300 dark:border-stone-700'
                      }`}
                    >
                      {matter.isPublic ? 'Public Web' : 'Private File'}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <Link
                      to={`/admin/cases/${matter.id}`}
                      className="text-burgundy-800 dark:text-brass-400 hover:underline text-[11px] uppercase tracking-wider font-bold font-mono"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
