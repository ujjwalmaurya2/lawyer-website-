import React from 'react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { Button } from '../common/Button';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';
import { Phone, Mail, MapPin, Navigation, MessageSquare, Clock, Building2 } from 'lucide-react';

export const HomeContactSection: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;
  const mapsUrl = "https://maps.google.com/?q=Allahabad+High+Court+New+Building+Prayagraj";

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-ivory-100 dark:bg-[#08090A] border-b border-ivory-300 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl border-2 border-brass-500/40 overflow-hidden shadow-2xl">
          
          {/* Left Split: Deep Burgundy Chamber Anchor */}
          <div className="lg:col-span-5 bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950 text-ivory-50 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Background Decorative Lines */}
            <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-brass-400/20 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-brass-400 font-bold px-2.5 py-0.5 bg-burgundy-950 border border-brass-500/40 rounded font-mono">
                  HIGH COURT CHAMBERS
                </span>
                <Building2 className="w-4 h-4 text-brass-400" />
              </div>

              <div>
                <span className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-ivory-50 font-normal tracking-tight block">
                  Chamber 62
                </span>
                <span className="text-xs uppercase tracking-widest text-brass-300 font-mono font-bold block mt-1">
                  New Building · High Court Allahabad
                </span>
              </div>

              <div className="h-[1px] w-full bg-brass-400/30" />

              <p className="text-xs sm:text-sm text-ivory-200/90 font-light leading-relaxed">
                Consultations, brief conferences, and court filing coordination take place at Chamber 62. Prior appointment is recommended during judicial sitting hours.
              </p>
            </div>

            {/* Direct Line */}
            <div className="pt-3 border-t border-burgundy-800 relative z-10 space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-brass-400 font-bold tracking-wider block">
                Direct Chamber Line:
              </span>
              <a href={`tel:${adv.phone}`} className="text-lg sm:text-xl font-serif font-bold text-ivory-50 hover:text-brass-300 transition-colors font-mono">
                {adv.phone}
              </a>
            </div>
          </div>

          {/* Right Split: Coordinates & Actions */}
          <div className="lg:col-span-7 bg-white dark:bg-charcoal-850 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.22em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
                  COORDINATES & CONSULTATION
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                  Chamber Coordinates & Sittings
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-burgundy-800 dark:text-brass-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-charcoal-800 dark:text-ivory-100 font-bold block text-xs sm:text-sm">
                      {adv.chamber.number}, {adv.chamber.building}
                    </span>
                    <span className="text-stone-600 dark:text-stone-400 text-xs">
                      {adv.court}, Prayagraj (Allahabad), UP – {adv.chamber.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-burgundy-800 dark:text-brass-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-charcoal-800 dark:text-ivory-100 font-bold block text-xs sm:text-sm">
                      Consultation Hours
                    </span>
                    <span className="text-stone-600 dark:text-stone-400 text-xs">
                      03:30 PM to 06:30 PM (Working Court Days, by prior appointment)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-burgundy-800 dark:text-brass-400 shrink-0" />
                  <div>
                    <span className="text-stone-500 dark:text-stone-400 text-[11px] block">Official Email:</span>
                    <a href={`mailto:${adv.email}`} className="font-mono text-charcoal-800 dark:text-ivory-100 hover:text-burgundy-800 text-xs sm:text-sm">
                      {adv.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-ivory-300 dark:border-stone-800 space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Navigation className="w-3.5 h-3.5" />}
                  className="w-full text-xs font-semibold"
                >
                  Get Directions (Maps)
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  as="a"
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<MessageSquare className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />}
                  className="w-full text-xs font-semibold"
                >
                  WhatsApp Chamber
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
