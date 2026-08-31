import React from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_ADVOCATE, INSTITUTIONAL_INFO } from '../../data/advocate';
import { Phone, Mail, MapPin, ArrowUpRight, Shield } from 'lucide-react';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;

  return (
    <footer className="bg-burgundy-950 text-ivory-100 font-sans pb-24 md:pb-12 pt-14 sm:pt-16 border-t-2 border-brass-500/40 relative overflow-hidden transition-colors shadow-2xl">
      
      {/* Background Architectural Noise & Line Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      
      {/* Large Decorative Monogram Watermark */}
      <div className="absolute -bottom-10 -left-6 text-[140px] sm:text-[180px] font-serif text-white/[0.03] font-bold select-none pointer-events-none leading-none">
        AP
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Section: Name, Hindi Maxim & Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-burgundy-800/80">
          
          {/* Left: Main Chamber Identity */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-brass-400 font-bold font-mono">
                CHAMBER OF ADVOCATE
              </span>
              <div className="h-[1.5px] w-6 bg-brass-400/60" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-serif text-ivory-50 font-normal tracking-tight">
                {adv.name} <span className="text-brass-300 text-xl sm:text-2xl font-serif">({adv.alias})</span>
              </h2>
              <p className="text-sm sm:text-base font-serif text-ivory-300 italic mt-0.5">
                {adv.hindiName}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-brass-400 mt-1 font-bold font-mono">
                Advocate · {adv.court}
              </p>
            </div>

            {/* Motto */}
            <div className="pt-1">
              <p className="font-serif text-xl sm:text-2xl text-brass-300 tracking-wide font-normal">
                “{adv.motto}”
              </p>
              <p className="text-[11px] text-ivory-300 uppercase tracking-widest mt-0.5 font-mono">
                {adv.mottoTranslation}
              </p>
            </div>
          </div>

          {/* Center: Editorial Navigation Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-xs uppercase tracking-[0.22em] text-brass-400 font-bold font-mono">
              Chambers Index
            </h3>
            <ul className="space-y-2 text-xs text-ivory-200">
              <li>
                <Link to="/about" className="hover:text-brass-300 transition-colors inline-flex items-center gap-1">
                  Chambers Profile
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-brass-300 transition-colors inline-flex items-center gap-1">
                  Practice Jurisdictions
                </Link>
              </li>
              <li>
                <Link to="/matters" className="hover:text-brass-300 transition-colors inline-flex items-center gap-1">
                  Selected Matters & Timelines
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-brass-300 transition-colors inline-flex items-center gap-1">
                  Legal Insights & Publications
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="hover:text-white transition-colors inline-flex items-center gap-1 text-brass-400 font-bold">
                  Request Consultation <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brass-300 transition-colors inline-flex items-center gap-1">
                  Chamber Coordinates
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Verified Coordinates */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-xs uppercase tracking-[0.22em] text-brass-400 font-bold font-mono">
              Chamber Contact
            </h3>
            
            <div className="space-y-2.5 text-xs text-ivory-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brass-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-ivory-50 font-medium block">
                    {adv.chamber.number}, {adv.chamber.building}
                  </span>
                  <span className="text-ivory-400 text-[11px]">
                    High Court of Judicature at Allahabad, UP – {adv.chamber.pincode}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brass-400 shrink-0" />
                <a href={`tel:${adv.phone}`} className="hover:text-brass-300 transition-colors font-mono font-bold text-ivory-50">
                  {adv.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brass-400 shrink-0" />
                <a href={`mailto:${adv.email}`} className="hover:text-brass-300 transition-colors text-xs truncate">
                  {adv.email}
                </a>
              </div>

              <div className="pt-1.5">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-bold font-mono uppercase tracking-wider text-[11px]"
                >
                  <span>Chat directly on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statutory Legal Disclaimer */}
        <div className="py-5 sm:py-6 border-b border-burgundy-800/80 text-[10px] sm:text-[11px] leading-relaxed text-ivory-300/80 text-balance">
          <p className="font-semibold text-brass-400 mb-1 uppercase tracking-wider font-mono">
            Bar Council of India Statutory Disclaimer
          </p>
          <p>
            {INSTITUTIONAL_INFO.disclaimer}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Admin Gateway */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-400 gap-2.5">
          <p className="text-[11px]">
            © {new Date().getFullYear()} Chambers of Ashutosh Pandey (Jayesh), Advocate High Court Allahabad.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/admin" className="hover:text-brass-300 transition-colors flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono font-semibold">
              <Shield className="w-3 h-3 text-brass-400" />
              <span>Chamber Admin Portal Demo</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
