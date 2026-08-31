import React, { useState } from 'react';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  FileText,
  Upload,
  Download,
  Lock,
  Search,
  CheckCircle2,
} from 'lucide-react';

interface MockDoc {
  id: string;
  name: string;
  category: 'Petition' | 'Affidavit' | 'Court Order' | 'Vakalatnama' | 'Evidence';
  matterNumber: string;
  size: string;
  date: string;
  confidential: boolean;
}

export const AdminDocumentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notice, setNotice] = useState('');

  const [docs] = useState<MockDoc[]>([
    {
      id: 'doc-1',
      name: 'Writ_Petition_Civil_Stamp_Cleared.pdf',
      category: 'Petition',
      matterNumber: 'WRIT-C / 14202 / 2024',
      size: '3.2 MB',
      date: '2024-08-20',
      confidential: true,
    },
    {
      id: 'doc-2',
      name: 'Counter_Affidavit_State_Reply.pdf',
      category: 'Affidavit',
      matterNumber: 'WRIT-A / 8931 / 2024',
      size: '4.8 MB',
      date: '2024-07-15',
      confidential: true,
    },
    {
      id: 'doc-3',
      name: 'Interim_Stay_Order_High_Court.pdf',
      category: 'Court Order',
      matterNumber: 'WRIT-C / 14202 / 2024',
      size: '1.1 MB',
      date: '2024-08-22',
      confidential: true,
    },
    {
      id: 'doc-4',
      name: 'Executed_Vakalatnama_Ashutosh_Pandey.pdf',
      category: 'Vakalatnama',
      matterNumber: 'BAIL-A / 3109 / 2024',
      size: '850 KB',
      date: '2024-08-01',
      confidential: true,
    },
    {
      id: 'doc-5',
      name: 'Certified_Copy_Sessions_Court_Rejection.pdf',
      category: 'Evidence',
      matterNumber: 'BAIL-A / 3109 / 2024',
      size: '5.4 MB',
      date: '2024-07-28',
      confidential: true,
    },
  ]);

  const filteredDocs = docs.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.matterNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (name: string) => {
    setNotice(`Downloading simulated case document: ${name}`);
    setTimeout(() => setNotice(''), 3000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-ivory-100 dark:bg-transparent min-h-screen transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-300 dark:border-stone-800 pb-5 sm:pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
              CONFIDENTIAL DOCUMENT VAULT
            </span>
            <Badge variant="demo">DEMO VAULT</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal mt-1">
            Chamber Documents & Briefs Vault
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
            Encrypted repository of petitions, counter affidavits, Vakalatnamas, and court orders
          </p>
        </div>

        <Button variant="brass" size="sm" icon={<Upload className="w-3.5 h-3.5" />}>
          + Upload Document
        </Button>
      </div>

      {notice && (
        <div className="p-3 rounded bg-brass-100 dark:bg-brass-400/10 border border-brass-300 dark:border-brass-400/30 text-xs text-brass-800 dark:text-brass-300 flex items-center gap-2 animate-fade-in font-semibold font-mono">
          <CheckCircle2 className="w-4 h-4 text-brass-700 dark:text-brass-400" />
          <span>{notice}</span>
        </div>
      )}

      {/* Search Bar */}
      <div className="p-4 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex items-center gap-3 shadow-soft-light dark:shadow-none">
        <Search className="w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search by file name, category, or case number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-xs text-charcoal-900 dark:text-ivory-100 placeholder-stone-400 focus:outline-none"
        />
      </div>

      {/* Documents Table */}
      <div className="rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 overflow-hidden shadow-card-light dark:shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-700 dark:text-stone-300">
            <thead>
              <tr className="border-b border-ivory-200 dark:border-stone-800 text-[10px] uppercase tracking-wider text-stone-600 dark:text-stone-400 bg-ivory-150/70 dark:bg-charcoal-900/80 font-mono">
                <th className="py-3 px-4">Document Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Matter Number</th>
                <th className="py-3 px-4">Upload Date</th>
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Security Level</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-200 dark:divide-stone-800/60 font-sans">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-ivory-150/50 dark:hover:bg-charcoal-900/60 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-charcoal-900 dark:text-ivory-100 flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-brass-600 dark:text-brass-400 shrink-0" />
                    <span>{doc.name}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <Badge variant="stone" size="sm">{doc.category}</Badge>
                  </td>

                  <td className="py-3.5 px-4 font-mono text-brass-800 dark:text-brass-400 font-bold">
                    {doc.matterNumber}
                  </td>

                  <td className="py-3.5 px-4 font-mono text-stone-500 dark:text-stone-400">{doc.date}</td>
                  <td className="py-3.5 px-4 font-mono text-stone-500 dark:text-stone-400">{doc.size}</td>

                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-stone-900 text-stone-700 dark:text-stone-300 font-mono font-semibold">
                      <Lock className="w-2.5 h-2.5 text-brass-600 dark:text-brass-400" />
                      Encrypted
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleDownload(doc.name)}
                      className="p-1.5 rounded hover:bg-ivory-200 dark:hover:bg-charcoal-800 text-brass-700 dark:text-brass-400 transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
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
