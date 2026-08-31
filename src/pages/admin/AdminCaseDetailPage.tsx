import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { DEMO_MATTERS } from '../../data/matters';
import { CaseTimeline } from '../../components/common/CaseTimeline';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  ArrowLeft,
  Calendar,
  FileText,
  Lock,
  Eye,
  EyeOff,
  Upload,
  Plus,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';

export const AdminCaseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const matter = DEMO_MATTERS.find((m) => m.id === id) || DEMO_MATTERS[0];

  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'hearings' | 'documents' | 'notes'>('overview');
  const [isPublic, setIsPublic] = useState(matter?.isPublic ?? true);
  const [notes, setNotes] = useState<string[]>([
    'Internal Note: Verify rejoinder affidavit paragraphs 12 to 16 against municipal gazette notification.',
    'Counsel Reminder: Request urgent listing before Court No. 34 for interim stay.',
    'Client brief conference completed on 20 Aug 2024.',
  ]);
  const [newNote, setNewNote] = useState('');
  const [showAddHearing, setShowAddHearing] = useState(false);
  const [showUploadDoc, setShowUploadDoc] = useState(false);
  const [actionNotice, setActionNotice] = useState('');

  if (!matter) {
    return <Navigate to="/admin/cases" replace />;
  }

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotes([`Internal Note (${new Date().toLocaleDateString('en-IN')}): ${newNote.trim()}`, ...notes]);
    setNewNote('');
    triggerNotice('Internal note saved to private case file.');
  };

  const triggerNotice = (msg: string) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(''), 3000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-ivory-100 dark:bg-transparent min-h-screen transition-colors">
      
      {/* Back Link & Header */}
      <div className="space-y-4 border-b border-ivory-300 dark:border-stone-800 pb-5 sm:pb-6">
        <Link
          to="/admin/cases"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-brass-700 dark:hover:text-brass-300 transition-colors font-mono font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Cases Registry</span>
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brass">{matter.matterType}</Badge>
              <Badge variant="stone">{matter.category}</Badge>
              <Badge variant="demo">DEMO CASE FILE</Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal">
              {matter.title}
            </h1>
            <p className="text-xs text-brass-700 dark:text-brass-400 font-mono font-bold">
              Case No: {matter.matterNumber} · Filing Date: {matter.filingDate}
            </p>
          </div>

          {/* Visibility Toggle & Action */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => {
                setIsPublic(!isPublic);
                triggerNotice(
                  !isPublic
                    ? 'Matter is now marked as PUBLIC on website showcase.'
                    : 'Matter is now PRIVATE (Hidden from website).'
                );
              }}
              className={`px-3 py-1.5 rounded text-xs font-mono flex items-center gap-2 border transition-colors cursor-pointer font-semibold ${
                isPublic
                  ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/50 hover:bg-emerald-200'
                  : 'bg-ivory-200 dark:bg-stone-900 text-stone-700 dark:text-stone-400 border-ivory-300 dark:border-stone-700 hover:text-black dark:hover:text-stone-200'
              }`}
            >
              {isPublic ? <Eye className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{isPublic ? 'Published: Public' : 'Published: Private'}</span>
            </button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAddHearing(true)}
              icon={<Plus className="w-3.5 h-3.5" />}
            >
              Add Hearing
            </Button>
          </div>
        </div>
      </div>

      {actionNotice && (
        <div className="p-3 rounded bg-brass-100 dark:bg-brass-400/10 border border-brass-300 dark:border-brass-400/30 text-xs text-brass-800 dark:text-brass-300 font-sans animate-fade-in flex items-center gap-2 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-brass-700 dark:text-brass-400" />
          <span>{actionNotice}</span>
        </div>
      )}

      {/* Tabs Row */}
      <div className="flex items-center gap-2 border-b border-ivory-300 dark:border-stone-800 pb-1 overflow-x-auto">
        {(['overview', 'timeline', 'hearings', 'documents', 'notes'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-mono font-semibold rounded-t border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? 'border-brass-500 text-brass-800 bg-white dark:border-brass-400 dark:text-brass-300 dark:bg-charcoal-850 shadow-sm'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-charcoal-900 dark:hover:text-ivory-100'
            }`}
          >
            {tab === 'notes' ? 'Internal Notes (Private)' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-8 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-card-light dark:shadow-none">
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-widest text-brass-700 dark:text-brass-400 font-bold font-mono">
                Matter Synopsis & Prayer
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed">
                {matter.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-ivory-200 dark:border-stone-800/80 text-xs">
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5 font-mono">Court & Jurisdiction</span>
                <span className="text-charcoal-900 dark:text-ivory-100 font-semibold">{matter.court}</span>
                <span className="text-stone-500 dark:text-stone-400 block text-[11px] mt-0.5">{matter.bench}</span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5 font-mono">Client Record</span>
                <span className="text-charcoal-900 dark:text-ivory-100 font-semibold">{matter.clientName}</span>
                <span className="text-emerald-700 dark:text-emerald-400 block text-[11px] mt-0.5 font-mono font-bold">Active Client</span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5 font-mono">Current Procedural Status</span>
                <Badge variant="brass" size="sm">{matter.status}</Badge>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5 font-mono">Next Scheduled Hearing</span>
                <span className="font-mono text-brass-800 dark:text-brass-300 font-bold">
                  {matter.nextHearingDate || 'Pending Cause List'}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-ivory-200 dark:border-stone-800/80 space-y-1.5">
              <h3 className="text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 font-mono font-semibold">
                Public Website Summary (Sanitized)
              </h3>
              <p className="text-xs text-stone-700 dark:text-stone-300 font-light leading-relaxed p-3 rounded bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800">
                {matter.publicDescription}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="p-5 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-3.5 shadow-card-light dark:shadow-none">
              <h3 className="text-xs uppercase tracking-widest text-brass-700 dark:text-brass-400 font-bold font-mono">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowUploadDoc(true)}
                  icon={<Upload className="w-3.5 h-3.5" />}
                  className="w-full justify-start text-xs"
                >
                  Upload Case Document
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAddHearing(true)}
                  icon={<Calendar className="w-3.5 h-3.5" />}
                  className="w-full justify-start text-xs"
                >
                  Schedule Next Hearing
                </Button>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5 text-brass-700 dark:text-brass-400 font-bold font-mono">
                <Lock className="w-3.5 h-3.5" />
                <span>Privileged File</span>
              </div>
              <p className="text-[11px] font-light leading-relaxed">
                Accessible solely by the Primary Advocate and authorized chamber associates.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TIMELINE */}
      {activeTab === 'timeline' && (
        <div className="rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-8 space-y-5 shadow-card-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-ivory-200 dark:border-stone-800 pb-3">
            <h2 className="text-base font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
              Case Procedural Trajectory & Bench Progress
            </h2>
            <span className="text-xs font-mono text-stone-500 dark:text-stone-400">Total Milestones: {matter.timeline.length}</span>
          </div>

          <CaseTimeline events={matter.timeline} />
        </div>
      )}

      {/* TAB 3: HEARINGS */}
      {activeTab === 'hearings' && (
        <div className="rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-8 space-y-5 shadow-card-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-ivory-200 dark:border-stone-800 pb-3">
            <div>
              <h2 className="text-base font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
                Court Hearings & Bench Orders Log
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
                Cause list appearances before High Court benches
              </p>
            </div>
            <Button
              variant="brass"
              size="sm"
              onClick={() => setShowAddHearing(true)}
              icon={<Plus className="w-3.5 h-3.5" />}
            >
              Record Hearing
            </Button>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brass-700 dark:text-brass-400 font-bold">
                  {matter.nextHearingDate || 'Upcoming'} · 10:30 AM
                </span>
                <Badge variant="brass" size="sm">Scheduled</Badge>
              </div>
              <h3 className="text-sm font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
                Substantive Arguments before Court No. 34
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
                Bench: Division Bench · Item No. 18 in Daily Cause List.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-ivory-150 dark:bg-charcoal-900 border border-ivory-200 dark:border-stone-800/60 space-y-1 opacity-80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-stone-600 dark:text-stone-400">
                  {matter.filingDate} · 11:00 AM
                </span>
                <Badge variant="stone" size="sm">Completed</Badge>
              </div>
              <h3 className="text-sm font-serif text-charcoal-900 dark:text-ivory-200">
                Fresh Motion Admission Hearing
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
                Order: Notice issued to respondent department; Counter Affidavit summoned in 4 weeks.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: DOCUMENTS */}
      {activeTab === 'documents' && (
        <div className="rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-8 space-y-5 shadow-card-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-ivory-200 dark:border-stone-800 pb-3">
            <div>
              <h2 className="text-base font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
                Case Documents Vault (Confidential)
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
                Petitions, affidavits, stay applications, and certified lower court orders
              </p>
            </div>
            <Button
              variant="brass"
              size="sm"
              onClick={() => setShowUploadDoc(true)}
              icon={<Upload className="w-3.5 h-3.5" />}
            >
              Upload Document
            </Button>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-4 rounded-lg bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-brass-600 dark:text-brass-400" />
                <div>
                  <span className="font-semibold text-charcoal-900 dark:text-ivory-100 block">
                    Verified_Writ_Petition_Stamp_Cleared.pdf
                  </span>
                  <span className="text-stone-500 dark:text-stone-400 text-[11px] font-mono">
                    2.4 MB · Uploaded on {matter.filingDate} · Category: Petition
                  </span>
                </div>
              </div>
              <button
                onClick={() => triggerNotice('Downloading demo case document...')}
                className="text-brass-700 dark:text-brass-400 hover:underline font-bold font-mono"
              >
                Download
              </button>
            </div>

            <div className="p-4 rounded-lg bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-stone-500 dark:text-stone-400" />
                <div>
                  <span className="font-semibold text-charcoal-900 dark:text-ivory-100 block">
                    Counter_Affidavit_State_Reply.pdf
                  </span>
                  <span className="text-stone-500 dark:text-stone-400 text-[11px] font-mono">
                    4.1 MB · Uploaded on 15 May 2024 · Category: Affidavit
                  </span>
                </div>
              </div>
              <button
                onClick={() => triggerNotice('Downloading demo case document...')}
                className="text-brass-700 dark:text-brass-400 hover:underline font-bold font-mono"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: INTERNAL NOTES */}
      {activeTab === 'notes' && (
        <div className="rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-5 sm:p-8 space-y-5 shadow-card-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-ivory-200 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-brass-600 dark:text-brass-400" />
              <h2 className="text-base font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
                Confidential Case Notes & Strategy Reminders
              </h2>
            </div>
            <Badge variant="stone">STRICTLY PRIVATE</Badge>
          </div>

          {/* Add Note Form */}
          <form onSubmit={handleAddNote} className="space-y-3">
            <textarea
              rows={3}
              placeholder="Add internal counsel note or follow-up instruction..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 text-xs focus:border-brass-500 focus:outline-none font-sans"
            />
            <div className="flex justify-end">
              <Button type="submit" variant="brass" size="sm">
                Save Private Note
              </Button>
            </div>
          </form>

          {/* Notes List */}
          <div className="space-y-2 pt-1">
            {notes.map((note, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-ivory-150 dark:bg-charcoal-900/90 border border-ivory-200 dark:border-stone-800 text-xs text-stone-800 dark:text-stone-300 font-light leading-relaxed"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SIMULATED MODALS */}
      {showAddHearing && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-700 rounded-lg p-6 space-y-4 shadow-2xl">
            <h3 className="font-serif text-lg text-charcoal-900 dark:text-ivory-100 font-normal">
              Schedule Next Court Hearing
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              Record date, bench number, and cause list item number for {matter.matterNumber}.
            </p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-stone-700 dark:text-stone-300 block mb-1 font-mono font-semibold">Hearing Date</label>
                <input
                  type="date"
                  defaultValue="2024-09-28"
                  className="w-full p-2 bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 rounded text-charcoal-900 dark:text-ivory-100 font-mono"
                />
              </div>
              <div>
                <label className="text-stone-700 dark:text-stone-300 block mb-1 font-mono font-semibold">Court Room / Bench</label>
                <input
                  type="text"
                  defaultValue="Court No. 34 (Division Bench)"
                  className="w-full p-2 bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 rounded text-charcoal-900 dark:text-ivory-100"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="ghost" size="sm" onClick={() => setShowAddHearing(false)}>
                Cancel
              </Button>
              <Button
                variant="brass"
                size="sm"
                onClick={() => {
                  setShowAddHearing(false);
                  triggerNotice('Hearing date recorded in calendar & cause list docket.');
                }}
              >
                Confirm Hearing
              </Button>
            </div>
          </div>
        </div>
      )}

      {showUploadDoc && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-700 rounded-lg p-6 space-y-4 shadow-2xl">
            <h3 className="font-serif text-lg text-charcoal-900 dark:text-ivory-100 font-normal">
              Upload Case Document
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              Attach certified pleadings, orders, or evidence to {matter.matterNumber}.
            </p>
            <div className="p-8 border-2 border-dashed border-ivory-300 dark:border-stone-700 rounded-lg text-center space-y-2 bg-ivory-150/50 dark:bg-charcoal-850/50">
              <Upload className="w-8 h-8 text-brass-600 dark:text-brass-400 mx-auto" />
              <p className="text-xs text-charcoal-900 dark:text-ivory-200 font-medium">Drag PDF files here or click to select</p>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 block font-mono">Max size 25MB</span>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="ghost" size="sm" onClick={() => setShowUploadDoc(false)}>
                Cancel
              </Button>
              <Button
                variant="brass"
                size="sm"
                onClick={() => {
                  setShowUploadDoc(false);
                  triggerNotice('Document uploaded and indexed in case vault.');
                }}
              >
                Upload File
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
