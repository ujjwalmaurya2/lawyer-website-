import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEMO_MATTERS } from '../../data/matters';
import type { Matter, MatterStatus, MatterPriority } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  Search,
  Plus,
  Filter,
  Eye,
  EyeOff,
  X,
  CheckCircle2,
} from 'lucide-react';

export const AdminCasesPage: React.FC = () => {
  const [matters, setMatters] = useState<Matter[]>(DEMO_MATTERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state for Add Matter Modal
  const [newMatter, setNewMatter] = useState({
    title: '',
    matterNumber: '',
    clientName: '',
    court: 'High Court of Judicature at Allahabad',
    bench: 'Court No. 34 (Division Bench)',
    matterType: 'Constitutional & Writ Matters',
    category: 'Writ Petition (Civil)',
    filingDate: new Date().toISOString().split('T')[0],
    nextHearingDate: '',
    status: 'Active' as MatterStatus,
    priority: 'Normal' as MatterPriority,
    isPublic: true,
    summary: '',
  });

  const [formSuccess, setFormSuccess] = useState(false);

  // Filter logic
  const filteredMatters = matters.filter((m) => {
    const matchesSearch =
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.matterNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.clientName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || m.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || m.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const togglePublish = (id: string) => {
    setMatters((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isPublic: !m.isPublic } : m))
    );
  };

  const handleAddMatter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMatter.title || !newMatter.matterNumber) return;

    const created: Matter = {
      id: `matter-${Date.now()}`,
      title: newMatter.title,
      matterNumber: newMatter.matterNumber,
      court: newMatter.court,
      bench: newMatter.bench,
      matterType: newMatter.matterType,
      category: newMatter.category,
      filingDate: newMatter.filingDate,
      nextHearingDate: newMatter.nextHearingDate || undefined,
      status: newMatter.status,
      priority: newMatter.priority,
      isPublic: newMatter.isPublic,
      isDemoData: true,
      clientName: newMatter.clientName || 'Private Client (Demo)',
      summary: newMatter.summary || 'Newly registered matter in chamber registry.',
      publicDescription: newMatter.summary || 'Active matter before the High Court of Judicature at Allahabad.',
      documentsCount: 1,
      hearingsCount: 1,
      timeline: [
        {
          stage: 'Filed',
          date: newMatter.filingDate,
          title: 'Matter Registered in Chamber System',
          description: 'Case drafted and submitted to Registry.',
          completed: true,
          active: true,
        },
        {
          stage: 'Notice',
          date: 'Pending',
          title: 'Motion Notice',
          description: 'Pending bench assignment.',
          completed: false,
        },
      ],
    };

    setMatters([created, ...matters]);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsModalOpen(false);
      setNewMatter({
        title: '',
        matterNumber: '',
        clientName: '',
        court: 'High Court of Judicature at Allahabad',
        bench: 'Court No. 34 (Division Bench)',
        matterType: 'Constitutional & Writ Matters',
        category: 'Writ Petition (Civil)',
        filingDate: new Date().toISOString().split('T')[0],
        nextHearingDate: '',
        status: 'Active',
        priority: 'Normal',
        isPublic: true,
        summary: '',
      });
    }, 1200);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-ivory-100 dark:bg-transparent min-h-screen transition-colors">
      
      {/* Header & Add Matter Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-300 dark:border-stone-800 pb-5 sm:pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
              MATTERS REPOSITORY
            </span>
            <Badge variant="demo">DEMO DATA</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal mt-1">
            Case & Matters Management
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
            Search, filter, update hearings, and manage public website visibility
          </p>
        </div>

        <Button
          variant="brass"
          size="md"
          onClick={() => setIsModalOpen(true)}
          icon={<Plus className="w-4 h-4" />}
        >
          + Add New Matter
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 shadow-soft-light dark:shadow-none">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by matter title, case number, or client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 text-xs focus:border-brass-500 focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 font-mono">
            <Filter className="w-3.5 h-3.5 text-brass-600 dark:text-brass-400" />
            <span>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-700 rounded px-2.5 py-1.5 text-xs text-charcoal-900 dark:text-ivory-100 focus:outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Hearing Scheduled">Hearing Scheduled</option>
              <option value="Awaiting Documents">Awaiting Documents</option>
              <option value="Order Reserved">Order Reserved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 font-mono">
            <span>Priority:</span>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-700 rounded px-2.5 py-1.5 text-xs text-charcoal-900 dark:text-ivory-100 focus:outline-none"
            >
              <option value="All">All Priorities</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cases Table */}
      <div className="rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 overflow-hidden shadow-card-light dark:shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-700 dark:text-stone-300">
            <thead>
              <tr className="border-b border-ivory-200 dark:border-stone-800 text-[10px] uppercase tracking-wider text-stone-600 dark:text-stone-400 bg-ivory-150/70 dark:bg-charcoal-900/80 font-mono">
                <th className="py-3 px-4">Case / Matter</th>
                <th className="py-3 px-4">Client Name</th>
                <th className="py-3 px-4">Court & Bench</th>
                <th className="py-3 px-4">Next Hearing</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4 text-center">Public / Private</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-200 dark:divide-stone-800/60 font-sans">
              {filteredMatters.map((matter) => (
                <tr key={matter.id} className="hover:bg-ivory-150/50 dark:hover:bg-charcoal-900/60 transition-colors">
                  {/* Case & Number */}
                  <td className="py-4 px-4 max-w-xs">
                    <Link
                      to={`/admin/cases/${matter.id}`}
                      className="font-medium text-charcoal-900 dark:text-ivory-100 hover:text-brass-700 dark:hover:text-brass-300 font-serif text-sm block"
                    >
                      {matter.title}
                    </Link>
                    <span className="text-[10px] text-brass-700 dark:text-brass-400 font-mono">
                      {matter.matterNumber}
                    </span>
                  </td>

                  {/* Client */}
                  <td className="py-4 px-4 font-light text-stone-700 dark:text-stone-300">
                    {matter.clientName}
                  </td>

                  {/* Court / Bench */}
                  <td className="py-4 px-4 text-stone-600 dark:text-stone-400">
                    <span className="block text-charcoal-900 dark:text-ivory-200">{matter.bench || 'High Court'}</span>
                    <span className="text-[10px] text-stone-500 dark:text-stone-400">{matter.matterType}</span>
                  </td>

                  {/* Next Hearing */}
                  <td className="py-4 px-4 font-mono text-brass-800 dark:text-brass-300 font-bold">
                    {matter.nextHearingDate || (
                      <span className="text-stone-400 italic">Not Scheduled</span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <Badge
                      variant={
                        matter.status === 'Active'
                          ? 'brass'
                          : matter.status === 'Hearing Scheduled'
                          ? 'brass'
                          : 'stone'
                      }
                      size="sm"
                    >
                      {matter.status}
                    </Badge>
                  </td>

                  {/* Priority */}
                  <td className="py-4 px-4">
                    <span
                      className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold ${
                        matter.priority === 'Urgent'
                          ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-700/50'
                          : matter.priority === 'High'
                          ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/50'
                          : 'bg-ivory-200 dark:bg-stone-900 text-stone-700 dark:text-stone-400'
                      }`}
                    >
                      {matter.priority}
                    </span>
                  </td>

                  {/* Public Toggle */}
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => togglePublish(matter.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-colors font-semibold ${
                        matter.isPublic
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/40 hover:bg-emerald-200'
                          : 'bg-ivory-200 dark:bg-stone-900 text-stone-700 dark:text-stone-400 border border-ivory-300 dark:border-stone-700 hover:text-black dark:hover:text-stone-200'
                      }`}
                      title={matter.isPublic ? 'Click to set Private' : 'Click to Publish to Website'}
                    >
                      {matter.isPublic ? (
                        <>
                          <Eye className="w-3 h-3 text-emerald-700 dark:text-emerald-400" />
                          <span>Public ON</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3 text-stone-500 dark:text-stone-400" />
                          <span>Private</span>
                        </>
                      )}
                    </button>
                  </td>

                  {/* Action */}
                  <td className="py-4 px-4 text-right">
                    <Link
                      to={`/admin/cases/${matter.id}`}
                      className="text-brass-700 dark:text-brass-400 hover:text-brass-800 dark:hover:text-brass-300 text-[11px] uppercase tracking-wider font-bold font-mono hover:underline"
                    >
                      View File →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD MATTER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-700 rounded-lg p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-ivory-200 dark:border-stone-800 pb-4">
              <div>
                <h2 className="text-xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal">
                  + Register New Legal Matter
                </h2>
                <span className="text-[10px] uppercase tracking-widest text-brass-700 dark:text-brass-400 font-mono font-bold">
                  Chamber Registry Filing
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h3 className="text-lg font-serif text-charcoal-900 dark:text-ivory-100">
                  Matter Successfully Added to Chamber Registry
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">Updating active case docket...</p>
              </div>
            ) : (
              <form onSubmit={handleAddMatter} className="space-y-4 text-xs font-sans">
                <div className="space-y-1">
                  <label className="text-stone-700 dark:text-stone-300 font-semibold font-mono">Matter Title / Cause Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Writ Petition (Civil) — Commercial Tender Challenge"
                    value={newMatter.title}
                    onChange={(e) => setNewMatter({ ...newMatter, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 focus:border-brass-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-stone-700 dark:text-stone-300 font-semibold font-mono">Case / Petition Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. WRIT-C / 18920 / 2024"
                      value={newMatter.matterNumber}
                      onChange={(e) => setNewMatter({ ...newMatter, matterNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 font-mono focus:border-brass-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-stone-700 dark:text-stone-300 font-semibold font-mono">Client Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Sanjay Verma"
                      value={newMatter.clientName}
                      onChange={(e) => setNewMatter({ ...newMatter, clientName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 focus:border-brass-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-stone-700 dark:text-stone-300 font-semibold font-mono">Matter Category</label>
                    <select
                      value={newMatter.matterType}
                      onChange={(e) => setNewMatter({ ...newMatter, matterType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 focus:border-brass-500 focus:outline-none"
                    >
                      <option value="Constitutional & Writ Matters">Constitutional & Writ Matters</option>
                      <option value="Criminal Law & Bail Matters">Criminal Law & Bail Matters</option>
                      <option value="Service & Administrative Matters">Service & Administrative Matters</option>
                      <option value="Civil Litigation & Appeals">Civil Litigation & Appeals</option>
                      <option value="Family & Matrimonial Matters">Family & Matrimonial Matters</option>
                      <option value="Other Legal Matters / Advisory">Other Legal Matters</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-stone-700 dark:text-stone-300 font-semibold font-mono">Next Hearing Date</label>
                    <input
                      type="date"
                      value={newMatter.nextHearingDate}
                      onChange={(e) => setNewMatter({ ...newMatter, nextHearingDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 font-mono focus:border-brass-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-stone-700 dark:text-stone-300 font-semibold font-mono">Status</label>
                    <select
                      value={newMatter.status}
                      onChange={(e) => setNewMatter({ ...newMatter, status: e.target.value as MatterStatus })}
                      className="w-full px-3.5 py-2.5 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 focus:border-brass-500 focus:outline-none"
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Hearing Scheduled">Hearing Scheduled</option>
                      <option value="Awaiting Documents">Awaiting Documents</option>
                      <option value="Order Reserved">Order Reserved</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-stone-700 dark:text-stone-300 font-semibold font-mono">Priority</label>
                    <select
                      value={newMatter.priority}
                      onChange={(e) => setNewMatter({ ...newMatter, priority: e.target.value as MatterPriority })}
                      className="w-full px-3.5 py-2.5 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 focus:border-brass-500 focus:outline-none"
                    >
                      <option value="Normal">Normal</option>
                      <option value="High">High</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-stone-700 dark:text-stone-300 font-semibold font-mono">Brief Matter Summary</label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of the prayer and legal issues involved..."
                    value={newMatter.summary}
                    onChange={(e) => setNewMatter({ ...newMatter, summary: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-900 dark:text-ivory-100 focus:border-brass-500 focus:outline-none"
                  />
                </div>

                {/* Publish to Website Toggle */}
                <div className="p-3.5 rounded bg-ivory-150 dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-charcoal-900 dark:text-stone-200 font-medium block">Publish to Website</span>
                    <span className="text-[10px] text-stone-500 dark:text-stone-400">
                      If enabled, sanitized matter details will appear in public showcase.
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={newMatter.isPublic}
                    onChange={(e) => setNewMatter({ ...newMatter, isPublic: e.target.checked })}
                    className="w-4 h-4 accent-brass-500 cursor-pointer"
                  />
                </div>

                <div className="pt-4 border-t border-ivory-200 dark:border-stone-800 flex items-center justify-end gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="brass" size="md">
                    Register Matter
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
