import React from 'react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { VisitingCard } from '../../components/common/VisitingCard';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';
import { Phone, Mail, MapPin, Navigation, MessageSquare, Clock, ShieldCheck, Building2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;
  const mapsUrl = "https://maps.google.com/?q=Allahabad+High+Court+New+Building+Prayagraj";

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Page Header */}
        <div className="max-w-4xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-burgundy-800 dark:text-brass-400 text-xs font-bold uppercase tracking-[0.25em] font-mono">
            <div className="w-5 h-[1.5px] bg-burgundy-800" />
            <span>CHAMBER COORDINATES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-tight tracking-tight">
            Connect with the Chambers of Advocate Ashutosh Pandey.
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-serif text-stone-600 dark:text-stone-400 italic">
            इलाहाबाद उच्च न्यायालय — चैंबर संपर्क एवं विधिक परामर्श
          </p>
        </div>

        {/* Split Layout: Burgundy Panel on Left + Information on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Burgundy Chamber Panel */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950 text-ivory-50 p-6 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Background Lines */}
            <div className="absolute top-0 right-0 w-44 h-44 border-b border-l border-brass-400/20 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brass-400 font-bold px-3 py-1 bg-burgundy-950 border border-brass-500/40 rounded font-mono shadow-sm">
                  OFFICIAL HIGH COURT CHAMBER
                </span>
                <Building2 className="w-5 h-5 text-brass-400" />
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-serif text-ivory-50 font-normal block">
                  Chamber 62
                </span>
                <span className="text-xs uppercase tracking-widest text-brass-300 font-mono font-bold block mt-1">
                  New Building Precinct · High Court Allahabad
                </span>
              </div>

              <div className="h-[1.5px] w-full bg-brass-400/30" />

              <div className="space-y-3 text-xs sm:text-sm text-ivory-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-ivory-50 font-semibold block text-base">
                      {adv.chamber.number}, {adv.chamber.building}
                    </span>
                    <span className="text-ivory-300 text-xs block">
                      {adv.court}, Prayagraj, Uttar Pradesh – {adv.chamber.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                  <div>
                    <span className="text-ivory-400 text-xs block">Chamber Desk / WhatsApp:</span>
                    <a href={`tel:${adv.phone}`} className="font-mono text-ivory-50 hover:text-brass-300 font-bold text-sm">
                      {adv.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                  <div>
                    <span className="text-ivory-400 text-xs block">Official Email:</span>
                    <a href={`mailto:${adv.email}`} className="text-ivory-50 hover:text-brass-300 font-mono text-xs">
                      {adv.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons on Burgundy Panel */}
            <div className="pt-6 border-t border-burgundy-800 space-y-3 relative z-10">
              <Button
                variant="brass"
                size="md"
                as="a"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Navigation className="w-4 h-4" />}
                className="w-full text-xs"
              >
                Get Directions (Google Maps)
              </Button>

              <Button
                variant="outline"
                size="md"
                as="a"
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
                className="w-full text-xs text-ivory-100 border-burgundy-700 hover:border-brass-400 hover:text-brass-300"
              >
                Direct WhatsApp Message
              </Button>
            </div>
          </div>

          {/* Right Information & Location Context Card */}
          <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 p-6 sm:p-10 flex flex-col justify-between space-y-6 shadow-card-light dark:shadow-none transition-all">
            
            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
                  CONSULTATION & ACCESS PROTOCOL
                </span>
                <h3 className="text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                  Chamber Consultation Hours
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <div className="p-4 rounded-xl bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 space-y-1">
                  <div className="flex items-center gap-2 text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                    <Clock className="w-4 h-4" />
                    <span>Working Court Days (Mon – Fri)</span>
                  </div>
                  <p className="text-charcoal-800 dark:text-ivory-100 font-medium">
                    03:30 PM to 06:30 PM (Prior Appointment Advised)
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400">
                    Court sittings take place from 10:00 AM to 04:00 PM.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 space-y-1">
                  <div className="flex items-center gap-2 text-navy-900 dark:text-navy-300 font-bold font-mono">
                    <ShieldCheck className="w-4 h-4 text-brass-500" />
                    <span>High Court Security & Entry</span>
                  </div>
                  <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed font-light">
                    Clients and litigants require a valid High Court Entry Pass issued at Gate No. 3. Please share your arriving details in advance for seamless security clearance.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 border-t border-ivory-300 dark:border-stone-800 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
              <span>Advocate Desk Direct Line:</span>
              <a href={`tel:${adv.phone}`} className="font-mono text-burgundy-800 dark:text-brass-400 font-bold hover:underline">
                {adv.phone}
              </a>
            </div>

          </div>

        </div>

        {/* Digital Visiting Card Embed */}
        <div className="pt-8 border-t border-ivory-300 dark:border-stone-800">
          <SectionHeader
            eyebrow="DIGITAL CONTACT CARD"
            eyebrowColor="burgundy"
            title="Save Contact to Smartphone"
            hindiTitle="डिजिटल संपर्क पत्रक"
            description="Download the verified vCard (.vcf) directly into your contacts."
            align="center"
          />

          <div className="mt-6 sm:mt-8 flex justify-center">
            <VisitingCard />
          </div>
        </div>

      </div>
    </div>
  );
};
