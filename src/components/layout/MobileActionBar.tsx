import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const MobileActionBar: React.FC = () => {
  const location = useLocation();

  // Hide on admin portal routes to avoid obstructing admin tables
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ivory-50/95 dark:bg-[#0B0D0E]/95 backdrop-blur-lg border-t border-ivory-300 dark:border-stone-800 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_-10px_25px_rgba(0,0,0,0.7)] transition-colors">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Chamber */}
        <a
          href={`tel:${PRIMARY_ADVOCATE.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white dark:bg-charcoal-800 border border-ivory-300 dark:border-stone-700/60 text-charcoal-800 dark:text-ivory-200 active:bg-ivory-200 dark:active:bg-charcoal-700 transition-colors shadow-sm"
        >
          <Phone className="w-4 h-4 text-burgundy-800 dark:text-brass-400 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-semibold font-mono">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getDirectWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white dark:bg-charcoal-800 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-400 active:bg-emerald-50 shadow-sm transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-700 dark:text-emerald-400 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-bold font-mono">WhatsApp</span>
        </a>

        {/* Consultation Form: Deep Burgundy */}
        <Link
          to="/consultation"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-burgundy-800 dark:bg-burgundy-700 text-ivory-50 active:bg-burgundy-900 font-bold transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4 text-ivory-50 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-mono">Consult</span>
        </Link>
      </div>
    </div>
  );
};
