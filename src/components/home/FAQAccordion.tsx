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
    <section className="py-18 sm:py-28 bg-white dark:bg-[#0B0D0E] border-b border-ivory-300 dark:border-stone-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          eyebrowColor="burgundy"
          title="Clarifications & Chamber Procedures"
          hindiTitle="सामान्य प्रश्न एवं विधिक प्रक्रिया"
          description="Straightforward answers regarding High Court consultation scheduling, chamber locations, and document transmission."
          align="center"
        />

        {/* Minimalist Accordion List */}
        <div className="divide-y divide-ivory-300 dark:divide-stone-800 border-y border-ivory-300 dark:border-stone-800 mt-8">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-4 sm:py-5 transition-colors">
                <button
                  onClick={() => toggle(faq.id)}
                  type="button"
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-0.5">
                    <span className="text-base sm:text-lg font-serif text-charcoal-800 dark:text-ivory-100 group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors block">
                      {faq.question}
                    </span>
                    {faq.hindiQuestion && (
                      <span className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-400 italic block">
                        {faq.hindiQuestion}
                      </span>
                    )}
                  </div>

                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? 'border-burgundy-800 bg-burgundy-800 text-ivory-50'
                      : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 group-hover:border-burgundy-800 group-hover:text-burgundy-800'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-6 sm:pr-8 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed animate-fade-in">
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
