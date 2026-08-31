import React from 'react';
import { Hero } from '../../components/home/Hero';
import { PositioningStrip } from '../../components/home/PositioningStrip';
import { EditorialIntro } from '../../components/home/EditorialIntro';
import { StatsStrip } from '../../components/home/StatsStrip';
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

      {/* 04 STATS STRIP: Icon-First Practice Velocity & DEMO Metrics */}
      <StatsStrip />

      {/* 05 PRACTICE AREAS: Large Numbered Interactive Icon Directory (01–06) */}
      <PracticeRows />

      {/* 06 FULL-BLEED HIGH COURT: Major Visual Interruption (65-75vh) */}
      <HighCourtSection />

      {/* 07 ABOUT / ADVOCATE: Asymmetric Statement + Typographic Roster */}
      <AboutSection />

      {/* 08 SELECTED MATTERS: Procedural Legal Journey Timeline with Icons */}
      <SelectedMattersSection />

      {/* 09 CONSULTATION: Deep Navy Conversion with Overlapping Ivory Surface */}
      <ConsultationTeaser />

      {/* 10 INSIGHTS: Editorial Magazine Composition with Category Icons */}
      <InsightsPreview />

      {/* 11 CONTACT: Split Deep Burgundy & Warm Ivory */}
      <HomeContactSection />

      {/* 12 VISITING CARD & FAQS */}
      <VisitingCardSection />
      <FAQAccordion />
    </div>
  );
};
