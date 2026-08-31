import React from 'react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { MapPin, Navigation, Phone, MessageSquare, Building2, Landmark } from 'lucide-react';
import { Button } from '../common/Button';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const HighCourtSection: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;
  const mapsUrl = "https://maps.google.com/?q=Allahabad+High+Court+New+Building+Prayagraj";

  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-navy-950 text-ivory-50 border-y-2 border-brass-500/30 overflow-hidden shadow-2xl py-16 sm:py-24">
      
      {/* Full-Bleed Architectural Visual Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-navy-950 via-transparent to-burgundy-950/80 pointer-events-none" />

      {/* Massive Editorial Watermark Lettering */}
      <div className="absolute -bottom-10 right-0 text-[140px] sm:text-[220px] lg:text-[280px] font-serif text-white/[0.03] font-bold select-none pointer-events-none leading-none tracking-tighter">
        ALLAHABAD
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-10 sm:space-y-14">
        
        {/* Top Full-Bleed Architectural Banner */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-[2px] bg-brass-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-brass-400 font-bold font-mono">
              THE SEAT OF HIGH COURT ADVOCACY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-ivory-50 font-normal leading-[1.08] tracking-tight">
            High Court of Judicature at Allahabad
          </h2>
          
          <p className="text-base sm:text-xl font-serif text-brass-200/90 italic">
            इलाहाबाद उच्च न्यायालय — चैंबर संख्या ६२, नवीन भवन, प्रयागराज
          </p>

          <p className="text-xs sm:text-sm md:text-base text-ivory-200/90 font-sans font-light leading-relaxed max-w-3xl pt-2">
            Operating from one of the most historic and revered judicial institutions in the Republic of India. The chamber serves as the operational headquarters for High Court appellate briefings, registry filings, and constitutional petitions.
          </p>
        </div>

        {/* Chamber Details & Coordinates Horizontal Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch pt-6 border-t border-white/15">
          
          {/* Chamber 62 Spec */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-xl bg-navy-950/90 border border-navy-800 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brass-400 font-bold font-mono">
                CHAMBER REGISTRY
              </span>
              <Landmark className="w-4 h-4 text-brass-400" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-2xl font-serif text-ivory-50 font-normal">
                Chamber No. 62
              </h3>
              <p className="text-xs text-brass-300 font-mono">
                New Building, High Court Allahabad
              </p>
              <p className="text-xs text-ivory-400 pt-1">
                Prayagraj, Uttar Pradesh – 211001
              </p>
            </div>
          </div>

          {/* Sittings & Consultations */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-xl bg-navy-950/90 border border-navy-800 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brass-400 font-bold font-mono">
                COURT SITTINGS & HOURS
              </span>
              <Building2 className="w-4 h-4 text-brass-400" />
            </div>

            <div className="space-y-2 text-xs text-ivory-200">
              <div>
                <span className="text-ivory-400 block text-[10px] uppercase font-mono">Court Sittings:</span>
                <span className="text-ivory-50 font-medium text-sm">10:00 AM – 04:00 PM (Mon – Fri)</span>
              </div>
              <div>
                <span className="text-ivory-400 block text-[10px] uppercase font-mono">Chamber Consultations:</span>
                <span className="text-brass-300 font-medium text-sm">03:30 PM – 06:30 PM (By Appt.)</span>
              </div>
            </div>
          </div>

          {/* Quick Action Navigation */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-xl bg-navy-950/90 border border-navy-800 flex flex-col justify-between space-y-4 shadow-xl">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-brass-400 font-bold font-mono block mb-1">
                DIRECTIONS & ACCESS
              </span>
              <p className="text-xs text-ivory-300 font-light leading-relaxed">
                Gate No. 3 Advocate & Litigant Access, New Building Complex.
              </p>
            </div>

            <div className="space-y-2">
              <Button
                variant="brass"
                size="sm"
                as="a"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Navigation className="w-3.5 h-3.5" />}
                className="w-full text-xs font-bold"
              >
                Get Directions (Google Maps)
              </Button>

              <Button
                variant="outline"
                size="sm"
                as="a"
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-3.5 h-3.5 text-emerald-400" />}
                className="w-full text-xs text-ivory-100 border-navy-700 hover:border-brass-400 hover:text-brass-300"
              >
                WhatsApp Chamber Desk
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
