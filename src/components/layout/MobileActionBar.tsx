import React from 'react';
import { House, Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const MobileActionBar: React.FC = () => {
  const location = useLocation();

  // Hide on admin portal routes to avoid obstructing admin tables
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const isHome = location.pathname === '/';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#641F2B]/98 dark:bg-[#0B0D0E]/98 backdrop-blur-lg border-t border-[#B9965B] px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.25)] dark:shadow-[0_-10px_25px_rgba(0,0,0,0.7)] transition-colors">
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
        
        {/* 01. Home (House Icon — First Item) */}
        <Link
          to="/"
          aria-label="Go to Home"
          className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg border transition-colors shadow-sm ${
            isHome
              ? 'bg-[#4A151F] text-brass-300 border-brass-400 font-bold'
              : 'bg-[#531923] dark:bg-charcoal-800 border-brass-500/30 text-ivory-100 dark:text-ivory-200 hover:text-brass-300'
          }`}
        >
          <House className={`w-4 h-4 mb-0.5 ${isHome ? 'text-brass-300' : 'text-brass-400'}`} />
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold font-mono">Home</span>
        </Link>

        {/* 02. Call Chamber */}
        <a
          href={`tel:${PRIMARY_ADVOCATE.phone}`}
          aria-label="Call Advocate Chamber"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#531923] dark:bg-charcoal-800 border border-brass-500/30 text-ivory-100 dark:text-ivory-200 active:bg-[#4A151F] transition-colors shadow-sm"
        >
          <Phone className="w-4 h-4 text-brass-400 mb-0.5" />
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold font-mono">Call</span>
        </a>

        {/* 03. WhatsApp */}
        <a
          href={getDirectWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp Consultation"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#0D3B2E] dark:bg-charcoal-800 border border-emerald-500/40 text-emerald-300 active:bg-[#08281F] shadow-sm transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold font-mono">WhatsApp</span>
        </a>

        {/* 04. Consultation */}
        <Link
          to="/consultation"
          aria-label="Request Legal Consultation"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brass-500 text-charcoal-950 border border-brass-400 active:bg-brass-600 font-bold transition-colors shadow-sm"
        >
          <CalendarCheck className="w-4 h-4 text-charcoal-950 mb-0.5" />
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-mono">Consult</span>
        </Link>

      </div>
    </div>
  );
};
