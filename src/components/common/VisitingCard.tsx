import React, { useState } from 'react';
import { RotateCw, Download, MessageSquare, Phone, Mail, MapPin, Building, ShieldCheck } from 'lucide-react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { downloadVCard } from '../../utils/vcard';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';
import { Button } from './Button';
import { Badge } from './Badge';

export const VisitingCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const adv = PRIMARY_ADVOCATE;

  const handleSaveContact = () => {
    downloadVCard();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Badge variant="burgundy" size="sm">Digital Chamber Card</Badge>
          <span className="text-xs text-stone-muted dark:text-stone-400 hidden sm:inline font-sans">
            Tap card to flip front/back
          </span>
        </div>
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          type="button"
          className="inline-flex items-center gap-1.5 text-xs text-burgundy-800 dark:text-brass-400 hover:text-burgundy-900 dark:hover:text-brass-300 transition-colors uppercase tracking-widest font-mono font-bold cursor-pointer"
        >
          <RotateCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
          <span>{isFlipped ? 'View Front' : 'View Back'}</span>
        </button>
      </div>

      {/* 3D Card Container */}
      <div
        className="relative w-full aspect-[1.75/1] min-h-[260px] sm:min-h-[300px] cursor-pointer group perspective-1000 select-none"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`w-full h-full duration-700 transform-style-3d relative transition-transform ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-[#FCFBF9] via-[#F8F5EF] to-[#EDE7DA] dark:from-[#0F1215] dark:to-[#080A0C] border-2 border-brass-500/50 dark:border-brass-400/40 p-5 sm:p-7 flex flex-col justify-between shadow-card-light dark:shadow-card-dark overflow-hidden transition-colors">
            
            {/* Top Row: Monogram & Court Micro-label */}
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border-2 border-brass-500/60 dark:border-brass-400/50 bg-burgundy-800 dark:bg-charcoal-900 flex items-center justify-center font-serif text-lg sm:text-xl text-ivory-50 dark:text-brass-400 font-bold shadow-md">
                  AP
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                    Advocate
                  </span>
                  <span className="block text-[9px] sm:text-[10px] text-stone-600 dark:text-stone-400 font-light tracking-wider">
                    High Court Allahabad
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block text-[9px] uppercase tracking-[0.2em] text-burgundy-900 dark:text-stone-300 px-2 py-0.5 border border-burgundy-800/30 dark:border-stone-700 bg-white/90 dark:bg-charcoal-900/60 rounded font-mono font-bold">
                  Chamber 62
                </span>
              </div>
            </div>

            {/* Middle: Advocate Name & Hindi Maxim */}
            <div className="my-auto relative z-10 py-1.5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal tracking-tight">
                {adv.name} <span className="text-stone-500 dark:text-stone-400 text-base sm:text-lg font-serif">({adv.alias})</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif italic mt-0.5">
                {adv.hindiName}
              </p>
              
              <div className="mt-2.5 flex items-center gap-2">
                <div className="h-[1.5px] w-6 bg-burgundy-800/80 dark:bg-brass-400/60" />
                <p className="text-xs sm:text-sm font-serif text-burgundy-800 dark:text-brass-300 font-bold tracking-wide">
                  “{adv.motto}”
                </p>
              </div>
            </div>

            {/* Bottom: Contact Coordinates */}
            <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-ivory-300 dark:border-stone-800 text-[11px] sm:text-xs text-stone-700 dark:text-stone-300 relative z-10 font-sans">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Phone className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400 shrink-0" />
                <span className="font-mono text-[10px] sm:text-xs">{adv.phone}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400 shrink-0" />
                <span className="truncate text-[10px] sm:text-xs">{adv.email}</span>
              </div>
            </div>

            {/* Decorative Gold Corner Borders */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brass-500/60 dark:border-brass-400/40 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brass-500/60 dark:border-brass-400/40 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brass-500/60 dark:border-brass-400/40 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brass-500/60 dark:border-brass-400/40 pointer-events-none" />
          </div>

          {/* BACK SIDE */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-[#FCFBF9] via-[#F8F5EF] to-[#EDE7DA] dark:bg-[#0F1215] border-2 border-brass-500/50 dark:border-brass-400/40 p-5 sm:p-7 flex flex-col justify-between shadow-card-light dark:shadow-card-dark overflow-hidden transition-colors">
            {/* Top Back: Institutional Court Header */}
            <div className="flex items-start justify-between border-b border-ivory-300 dark:border-stone-800 pb-2.5">
              <div>
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                  Chambers Location
                </span>
                <h4 className="text-xs sm:text-sm font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                  {adv.chamber.court} of Judicature at Allahabad
                </h4>
              </div>
              <Building className="w-5 h-5 text-burgundy-800/70 dark:text-brass-400/70" />
            </div>

            {/* Middle Back: Chamber & Office Address */}
            <div className="space-y-2.5 py-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-burgundy-800 dark:text-brass-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-charcoal-800 dark:text-ivory-100 font-medium block">
                    {adv.chamber.number}, {adv.chamber.building}
                  </span>
                  <span className="text-stone-500 dark:text-stone-400 text-xs">
                    High Court, Allahabad, Uttar Pradesh – {adv.chamber.pincode}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-burgundy-800 dark:text-brass-400 shrink-0 mt-0.5" />
                <span className="text-stone-600 dark:text-stone-400 text-[11px] sm:text-xs leading-relaxed">
                  Practice Focus: Constitutional Writs, Criminal Defense, Civil Litigation, Service Disputes & High Court Appeals.
                </span>
              </div>
            </div>

            {/* Bottom Back: Digital Sync Note */}
            <div className="pt-2 border-t border-ivory-300 dark:border-stone-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400">
              <span>Scan or save digitally for address book</span>
              <span className="text-burgundy-800 dark:text-brass-400 uppercase tracking-widest text-[9px] font-mono font-bold">Verified Chamber</span>
            </div>

            {/* Corner Borders */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brass-500/60 dark:border-brass-400/40 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brass-500/60 dark:border-brass-400/40 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brass-500/60 dark:border-brass-400/40 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brass-500/60 dark:border-brass-400/40 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        <Button
          variant="primary"
          size="md"
          icon={<Download className="w-4 h-4" />}
          onClick={handleSaveContact}
          className="w-full text-xs"
        >
          {savedSuccess ? 'Contact Saved (.vcf) ✓' : 'Save Contact (.vcf)'}
        </Button>

        <Button
          variant="outline"
          size="md"
          as="a"
          href={getDirectWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          icon={<MessageSquare className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />}
          className="w-full text-xs"
        >
          Message on WhatsApp
        </Button>
      </div>
      
      {savedSuccess && (
        <p className="mt-2 text-center text-xs text-emerald-700 dark:text-emerald-400 font-sans animate-fade-in">
          vCard downloaded. Open the file on your device to add Advocate Ashutosh Pandey directly to your contacts.
        </p>
      )}
    </div>
  );
};
