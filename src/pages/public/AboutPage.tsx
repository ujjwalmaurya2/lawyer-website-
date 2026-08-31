import React from 'react';
import { PRIMARY_ADVOCATE, ASSOCIATED_ADVOCATES } from '../../data/advocate';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import {
  User,
  Users,
  Building,
  Landmark,
  MapPin,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Scale,
  BookOpen,
  Compass,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const AboutPage: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-ivory-100 dark:bg-[#0B0D0E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Page Header */}
        <div className="max-w-4xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-burgundy-800 dark:text-brass-400 text-xs font-bold uppercase tracking-[0.25em] font-mono">
            <User className="w-4 h-4" />
            <span>CHAMBERS PROFILE & LEGACY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal leading-tight tracking-tight">
            Advocacy anchored in discipline, clarity and constitutional fidelity.
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-serif text-stone-600 dark:text-stone-400 italic">
            इलाहाबाद उच्च न्यायालय में विधिक परंपरा एवं प्रतिबद्धता
          </p>
        </div>

        {/* Advocate Profile Section with Chamber Anchor */}
        <div id="chamber" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start border-y border-ivory-300 dark:border-stone-800 py-12 sm:py-16 scroll-mt-28">
          
          {/* Left: Monogram Frame with Burgundy Accent */}
          <div className="lg:col-span-5">
            <div className="p-3 rounded-2xl bg-white dark:bg-charcoal-850 border border-brass-500/40 dark:border-brass-400/30 shadow-card-light dark:shadow-2xl relative">
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-b from-[#F7F2EB] via-[#ECE3D4] to-[#DFD3BF] dark:from-[#14181D] dark:to-[#0A0C0E] border border-ivory-300 dark:border-stone-800 p-6 sm:p-8 flex flex-col justify-between text-center relative overflow-hidden">
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-burgundy-800 dark:text-brass-300 px-2.5 py-0.5 border border-burgundy-800/30 dark:border-stone-800 rounded bg-white/90 dark:bg-charcoal-900 font-mono font-bold">
                    Chamber 62
                  </span>
                </div>

                <div className="my-auto space-y-3 sm:space-y-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-2 border-brass-500/70 dark:border-brass-400/50 bg-burgundy-800 flex flex-col items-center justify-center shadow-lg">
                    <span className="font-serif text-2xl sm:text-3xl text-ivory-50 font-bold">AP</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800 dark:text-ivory-100 font-normal">
                      {adv.name}
                    </h2>
                    <p className="text-xs text-stone-600 dark:text-stone-400 uppercase tracking-widest font-mono mt-0.5 font-medium">
                      ({adv.alias})
                    </p>
                    <p className="text-sm font-serif text-burgundy-800 dark:text-brass-300 italic mt-1 font-semibold">
                      {adv.hindiName}
                    </p>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-ivory-300 dark:border-stone-800/80">
                  <p className="text-xs font-serif text-burgundy-800 dark:text-brass-300 font-bold">“{adv.motto}”</p>
                  <p className="text-[10px] text-stone-600 dark:text-stone-400 uppercase tracking-widest mt-0.5 font-mono">
                    Advocate · {adv.court}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Practice Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-burgundy-800 dark:text-brass-400 font-bold font-mono block">
                PRIMARY ADVOCATE & COUNSEL
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                Ashutosh Pandey (Jayesh)
              </h2>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-600 dark:text-stone-400 font-mono">
                Advocate, High Court of Judicature at Allahabad
              </p>
            </div>

            <div className="space-y-4 text-stone-700 dark:text-stone-300 font-sans font-light text-sm sm:text-base leading-relaxed">
              <p>
                Advocate <strong className="text-charcoal-800 dark:text-ivory-100 font-semibold">{adv.name} ({adv.alias})</strong> leads a dedicated legal practice before the High Court of Judicature at Allahabad. His advocacy is founded upon meticulous case preparation, rigorous factual analysis of lower court records, and precise statutory interpretation.
              </p>
              <p>
                The chambers operate under the core philosophical motto <span className="text-burgundy-800 dark:text-brass-300 font-serif font-bold">“न्याय ममः धर्म”</span> (Justice is My Duty & Faith), reflecting a profound commitment to the administration of justice and the protection of constitutional rights.
              </p>
              <p>
                The practice primarily handles extraordinary writ petitions under Article 226/227, complex criminal defense, statutory bail matters, appellate civil litigation, and service disputes affecting government personnel across Uttar Pradesh.
              </p>
            </div>

            {/* Chamber Core Values Grid with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-1.5 shadow-sm">
                <Scale className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
                <h3 className="text-xs uppercase tracking-wider text-charcoal-800 dark:text-ivory-100 font-bold font-mono">
                  Legal Precision
                </h3>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  Exhaustive review of trial records, documentary exhibits, and statutory precedents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-1.5 shadow-sm">
                <BookOpen className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
                <h3 className="text-xs uppercase tracking-wider text-charcoal-800 dark:text-ivory-100 font-bold font-mono">
                  Disciplined Research
                </h3>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  Deep alignment with binding High Court and Supreme Court judicial precedents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-1.5 shadow-sm">
                <Compass className="w-4 h-4 text-navy-800 dark:text-navy-300" />
                <h3 className="text-xs uppercase tracking-wider text-charcoal-800 dark:text-ivory-100 font-bold font-mono">
                  Ethical Counsel
                </h3>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  Direct, transparent legal evaluation without unrealistic assurances or hyperbole.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* High Court Section Anchor */}
        <div id="high-court" className="scroll-mt-28 space-y-6">
          <SectionHeader
            icon={<Landmark className="w-4 h-4" />}
            eyebrow="HIGH COURT OF ALLAHABAD"
            eyebrowColor="navy"
            title="Institutional Seat & Jurisdictional Reach"
            hindiTitle="इलाहाबाद उच्च न्यायालय — न्यायपीठ"
            description="Established under the Letters Patent of 1866, the High Court of Judicature at Allahabad stands as one of India's most historic appellate institutions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-1">
              <Building className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
              <span className="font-bold text-charcoal-800 dark:text-ivory-100 font-mono block">Chamber 62</span>
              <p className="text-stone-600 dark:text-stone-400 font-light">New Building Complex, High Court Prayagraj.</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-1">
              <Landmark className="w-4 h-4 text-navy-800 dark:text-navy-300" />
              <span className="font-bold text-charcoal-800 dark:text-ivory-100 font-mono block">Daily Sittings</span>
              <p className="text-stone-600 dark:text-stone-400 font-light">10:00 AM – 04:00 PM (Monday through Friday).</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-1">
              <MapPin className="w-4 h-4 text-terracotta-700 dark:text-terracotta-400" />
              <span className="font-bold text-charcoal-800 dark:text-ivory-100 font-mono block">Prayagraj UP</span>
              <p className="text-stone-600 dark:text-stone-400 font-light">Pin code 211001, Uttar Pradesh.</p>
            </div>
          </div>
        </div>

        {/* Associated Advocates with Anchor */}
        <div id="associates" className="space-y-8 scroll-mt-28">
          <SectionHeader
            icon={<Users className="w-4 h-4" />}
            eyebrow="CHAMBERS TEAM & ASSOCIATES"
            eyebrowColor="burgundy"
            title="Associated Advocates"
            hindiTitle="सहयोगी अधिवक्ता"
            description="Collaborating advocates contributing to research, registry compliance, and case coordination at the Allahabad High Court."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ASSOCIATED_ADVOCATES.map((assoc, idx) => (
              <div
                key={assoc.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all space-y-5 shadow-soft-light dark:shadow-none ${
                  idx === 0
                    ? 'bg-white dark:bg-charcoal-850 border-terracotta-200 dark:border-stone-800 hover:border-terracotta-400'
                    : 'bg-ivory-150/70 dark:bg-charcoal-850 border-sage-200 dark:border-stone-800 hover:border-sage-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-brass-500/40 bg-burgundy-800 flex items-center justify-center font-serif text-lg sm:text-xl text-ivory-50 font-bold shadow-sm">
                    {assoc.englishName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-charcoal-800 dark:text-ivory-100 font-medium">
                      {assoc.englishName}
                    </h3>
                    <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-400 italic">
                      {assoc.hindiName}
                    </p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-burgundy-800 dark:text-brass-400 font-mono mt-0.5 font-bold">
                      {assoc.title}, High Court
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-ivory-300 dark:border-stone-800 space-y-2 text-xs text-stone-700 dark:text-stone-300">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 dark:text-stone-400">Court Practice:</span>
                    <span className="text-charcoal-800 dark:text-ivory-100 font-medium">{assoc.court}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 dark:text-stone-400">Direct Line:</span>
                    <a href={`tel:${assoc.phone}`} className="text-burgundy-800 dark:text-brass-300 font-mono hover:underline inline-flex items-center gap-1 font-bold">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{assoc.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation Banner in Deep Navy */}
        <div className="p-8 sm:p-12 rounded-2xl bg-navy-950 text-ivory-50 border border-navy-800 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ivory-50 font-normal">
            Request an In-Chamber or Telephonic Consultation
          </h2>
          <p className="text-xs sm:text-sm text-ivory-200/90 max-w-xl mx-auto font-light leading-relaxed">
            Share the particulars of your High Court matter for a disciplined legal assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
            <Button
              variant="primary"
              size="md"
              as="a"
              href="/consultation"
              icon={<ArrowUpRight className="w-4 h-4" />}
              iconPosition="right"
              className="font-semibold shadow-burgundy-glow"
            >
              Start Consultation Request
            </Button>
            <Button
              variant="outline"
              size="md"
              as="a"
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
              className="text-ivory-100 border-navy-700 hover:border-brass-400"
            >
              WhatsApp Chamber
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
