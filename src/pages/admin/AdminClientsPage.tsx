import React, { useState } from 'react';
import { DEMO_CLIENTS } from '../../data/adminMockData';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';
import {
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Search,
  Plus,
  MessageSquare,
} from 'lucide-react';

export const AdminClientsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = DEMO_CLIENTS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-ivory-100 dark:bg-transparent min-h-screen transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-300 dark:border-stone-800 pb-5 sm:pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brass-700 dark:text-brass-400 font-semibold font-mono">
              CLIENTS & LITIGANTS DIRECTORY
            </span>
            <Badge variant="demo">DEMO DIRECTORY</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-charcoal-900 dark:text-ivory-100 font-normal mt-1">
            Chamber Client Directory
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
            Verified client records, active cases, and contact coordinates
          </p>
        </div>

        <Button variant="brass" size="sm" icon={<Plus className="w-3.5 h-3.5" />}>
          + Register Client
        </Button>
      </div>

      {/* Search Input */}
      <div className="p-4 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex items-center gap-3 shadow-soft-light dark:shadow-none">
        <Search className="w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search by client name, mobile phone number, or city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-xs text-charcoal-900 dark:text-ivory-100 placeholder-stone-400 focus:outline-none"
        />
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="p-5 sm:p-6 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 hover:border-brass-500/60 dark:hover:border-stone-700 transition-all flex flex-col justify-between space-y-4 shadow-card-light dark:shadow-none"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif text-charcoal-900 dark:text-ivory-100 font-medium">
                    {client.name}
                  </h3>
                  <div className="flex items-center gap-1 text-stone-500 dark:text-stone-400 text-xs mt-0.5">
                    <MapPin className="w-3 h-3 text-brass-600 dark:text-brass-400" />
                    <span>{client.city}</span>
                  </div>
                </div>
                <Badge variant={client.status === 'Active' ? 'brass' : 'stone'} size="sm">
                  {client.status}
                </Badge>
              </div>

              {/* Coordinates */}
              <div className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brass-600 dark:text-brass-400" />
                  <a href={`tel:${client.phone}`} className="font-mono hover:text-brass-700 dark:hover:text-brass-300">
                    {client.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brass-600 dark:text-brass-400" />
                  <span className="font-mono text-[11px] truncate">{client.email}</span>
                </div>
              </div>

              {/* Active Matters Count */}
              <div className="p-2.5 rounded bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                  <Briefcase className="w-3.5 h-3.5 text-brass-600 dark:text-brass-400" />
                  <span>Active Matters:</span>
                </span>
                <span className="font-bold text-charcoal-900 dark:text-ivory-100 font-mono">
                  {client.activeMattersCount}
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-3 border-t border-ivory-200 dark:border-stone-800 flex items-center gap-2">
              <Button
                variant="whatsapp"
                size="sm"
                as="a"
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-3.5 h-3.5" />}
                className="flex-1 text-[11px]"
              >
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href={`tel:${client.phone}`}
                icon={<Phone className="w-3.5 h-3.5" />}
                className="flex-1 text-[11px]"
              >
                Call
              </Button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
