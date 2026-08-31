import React from 'react';
import { Hero } from '../../components/home/Hero';
import { PositioningStrip } from '../../components/home/PositioningStrip';
import { EditorialIntro } from '../../components/home/EditorialIntro';
import { PracticeRows } from '../../components/home/PracticeRows';
import { HighCourtSection } from '../../components/home/HighCourtSection';
import { AboutSection } from '../../components/home/AboutSection';
import { SelectedMattersSection } from '../../components/home/SelectedMattersSection';
import { ConsultationTeaser } from '../../components/home/ConsultationTeaser';
import { InsightsPreview } from '../../components/home/InsightsPreview';
import { HomeContactSection } from '../../components/home/HomeContactSection';
import { VisitingCardSection } from '../../components/home/VisitingCardSection';
import { FAQAccordion } from '../../components/home/FAQAccordion';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 01 HERO: Large Asymmetric Composition */}
      <Hero />

      {/* 02 INSTITUTIONAL STRIP: Very Compact Ribbon */}
      <PositioningStrip />

      {/* 03 EDITORIAL INTRO: Typography-Led Statement */}
      <EditorialIntro />

      {/* 04 PRACTICE AREAS: Large Numbered Interactive Rows */}
      <PracticeRows />

      {/* 05 FULL-BLEED HIGH COURT: Major Visual Interruption (65-75vh) */}
      <HighCourtSection />

      {/* 06 ABOUT / ADVOCATE: Asymmetric Statement + Typographic Roster */}
      <AboutSection />

      {/* 07 SELECTED MATTERS: Procedural Legal Journey Timeline */}
      <SelectedMattersSection />

      {/* 08 CONSULTATION: Deep Navy Conversion with Overlapping Ivory Surface */}
      <ConsultationTeaser />

      {/* 09 INSIGHTS: Editorial Magazine Composition */}
      <InsightsPreview />

      {/* 10 CONTACT: Split Deep Burgundy & Warm Ivory */}
      <HomeContactSection />

      {/* 11 VISITING CARD & FAQS */}
      <VisitingCardSection />
      <FAQAccordion />
    </div>
  );
};
