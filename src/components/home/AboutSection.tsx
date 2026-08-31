import React, { useState } from 'react';
import { PRIMARY_ADVOCATE, ASSOCIATED_ADVOCATES } from '../../data/advocate';
import { SectionHeader } from '../common/SectionHeader';
import {
  User,
  Users,
  Building,
  Landmark,
  MapPin,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Scale,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  const adv = PRIMARY_ADVOCATE;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="chamber" className="py-20 sm:py-28 bg-ivory-100 dark:bg-[#0B0D0E] border-b border-ivory-300 dark:border-stone-800 relative transition-colors scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Large Editorial Statement & Identity */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <SectionHeader
              icon={<User className="w-4 h-4" />}
              eyebrow="THE PRACTICE & COUNSEL"
              eyebrowColor="burgundy"
              title="Chambers Profile & Philosophy"
              hindiTitle="विधिक परंपरा एवं कार्यप्रणाली"
              description="Law requires more than formal appearance. It demands deep record analysis and unwavering constitutional conviction."
              className="mb-0"
            />

            {/* Large Statement with 1 Thin Burgundy Vertical Line */}
            <div className="border-l-2 border-burgundy-800 dark:border-burgundy-400 pl-5 sm:pl-6 py-2 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-mono">
                Professional Motto
              </span>
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 dark:text-ivory-100 font-normal leading-tight">
                “{adv.motto}”
              </blockquote>
              <p className="text-xs text-stone-600 dark:text-stone-400 uppercase tracking-widest font-mono pt-1">
                — {adv.mottoTranslation}
              </p>
            </div>

            {/* Icon-Led Key Credentials Ribbon */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex items-start gap-2.5 shadow-sm">
                <Landmark className="w-4 h-4 text-burgundy-800 dark:text-brass-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block font-bold">Court Seat</span>
                  <span className="text-xs font-serif text-charcoal-800 dark:text-ivory-100 font-medium">Allahabad High Court</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 flex items-start gap-2.5 shadow-sm">
                <Building className="w-4 h-4 text-burgundy-800 dark:text-brass-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block font-bold">Chamber</span>
                  <span className="text-xs font-serif text-charcoal-800 dark:text-ivory-100 font-medium">Chamber No. 62</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Typographic Roster */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            
            {/* Primary Narrative */}
            <div className="space-y-4 text-stone-700 dark:text-stone-300 font-sans font-light text-sm sm:text-base leading-relaxed">
              <p>
                The chambers of <strong className="text-charcoal-800 dark:text-ivory-100 font-semibold">{adv.name} ({adv.alias})</strong> reflect a disciplined institutional approach to High Court advocacy in Allahabad. Grounded in thorough research and structured pleadings, every matter is scrutinized against trial records and binding judicial precedents.
              </p>
              <p>
                Whether challenging administrative decisions through writ petitions or formulating substantial questions of law in appellate litigation, the chamber delivers clear, transparent representation.
              </p>
            </div>

            {/* ASSOCIATED ADVOCATES: Typographic Roster with Section Anchor */}
            <div id="associates" className="pt-8 border-t border-ivory-300 dark:border-stone-800 space-y-6 scroll-mt-24">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-terracotta-100 dark:bg-terracotta-950/70 border border-terracotta-300 dark:border-terracotta-800/60 flex items-center justify-center p-1 text-terracotta-700 dark:text-terracotta-300">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta-700 dark:text-terracotta-400 font-bold font-mono block">
                      CHAMBERS TEAM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal mt-0.5">
                      Associated Advocates
                    </h3>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="text-xs uppercase tracking-wider text-burgundy-800 dark:text-brass-400 hover:underline font-bold transition-colors inline-flex items-center gap-1 font-mono"
                >
                  <span>Chamber Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Typographic Roster List */}
              <div className="border-t border-ivory-300 dark:border-stone-800 divide-y divide-ivory-300 dark:divide-stone-800 font-sans">
                {ASSOCIATED_ADVOCATES.map((assoc, idx) => {
                  const isHovered = hoveredIndex === idx;

                  return (
                    <div
                      key={assoc.id}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer transition-all duration-200"
                    >
                      <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                        {/* Number that changes to Brass */}
                        <span className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                          isHovered ? 'text-brass-600 dark:text-brass-400' : 'text-stone-400 dark:text-stone-500'
                        }`}>
                          0{idx + 1}
                        </span>

                        {/* Name that shifts slightly on hover */}
                        <div className="space-y-0.5 transition-transform duration-200 group-hover:translate-x-1.5">
                          <h4 className="font-serif text-lg sm:text-xl text-charcoal-800 dark:text-ivory-100 font-medium group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors">
                            {assoc.englishName}
                          </h4>
                          <p className="text-xs font-serif text-stone-600 dark:text-stone-400 italic">
                            {assoc.hindiName} · {assoc.title}, High Court
                          </p>
                        </div>
                      </div>

                      {/* Phone & Direct Line */}
                      <div className="flex items-center gap-4 pl-8 sm:pl-0">
                        <a
                          href={`tel:${assoc.phone}`}
                          className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-brass-300 inline-flex items-center gap-1.5"
                        >
                          <Phone className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
                          <span>{assoc.phone}</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
