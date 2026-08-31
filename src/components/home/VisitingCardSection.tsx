import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { VisitingCard } from '../common/VisitingCard';

export const VisitingCardSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-ivory-150 dark:bg-[#08090A] border-b border-ivory-300 dark:border-stone-800 relative transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DIGITAL IDENTITY & CONTACT"
          eyebrowColor="burgundy"
          title="Keep the Chamber Contact"
          hindiTitle="डिजिटल संपर्क पत्रक (Visiting Card)"
          description="Save Advocate Ashutosh Pandey's verified chamber contact details directly to your smartphone or desktop for immediate reference."
          align="center"
        />

        <div className="mt-5 sm:mt-6 flex justify-center">
          <VisitingCard />
        </div>
      </div>
    </section>
  );
};
