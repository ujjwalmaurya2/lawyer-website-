import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { SectionHeader } from '../common/SectionHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white dark:bg-[#0B0D0E] border-b border-ivory-300 dark:border-stone-800 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          eyebrowColor="burgundy"
          title="Clarifications & Chamber Procedures"
          hindiTitle="सामान्य प्रश्न एवं विधिक प्रक्रिया"
          description="Straightforward answers regarding High Court consultation scheduling, chamber locations, and document transmission."
          align="center"
        />

        {/* Minimalist Accordion List */}
        <div className="divide-y divide-ivory-300 dark:divide-stone-800 border-y border-ivory-300 dark:border-stone-800 mt-6">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-3.5 sm:py-4 transition-colors">
                <button
                  onClick={() => toggle(faq.id)}
                  type="button"
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-0.5">
                    <span className="text-sm sm:text-base font-serif text-charcoal-800 dark:text-ivory-100 group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors block">
                      {faq.question}
                    </span>
                    {faq.hindiQuestion && (
                      <span className="text-xs font-serif text-stone-600 dark:text-stone-400 italic block">
                        {faq.hindiQuestion}
                      </span>
                    )}
                  </div>

                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? 'border-burgundy-800 bg-burgundy-800 text-ivory-50'
                      : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 group-hover:border-burgundy-800 group-hover:text-burgundy-800'
                  }`}>
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2.5 pr-4 sm:pr-6 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
