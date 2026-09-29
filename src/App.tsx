/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProductAnalysisFlow } from './components/ProductAnalysisFlow';
import { StandardsAndEvidence } from './components/StandardsAndEvidence';
import { CertificationAndTesting } from './components/CertificationAndTesting';
import { CompliancePlannerAndCta } from './components/CompliancePlannerAndCta';
import { AboutModal } from './components/AboutModal';
import { PRODUCT_PRESETS } from './data/bisDatabase';
import { ProductPreset, ProductProfile, StandardCandidate } from './types';
import { ArrowUp, Shield } from 'lucide-react';

export default function App() {
  const [currentPreset, setCurrentPreset] = useState<ProductPreset>(PRODUCT_PRESETS[0]);
  const [currentProfile, setCurrentProfile] = useState<ProductProfile>(PRODUCT_PRESETS[0].defaultProfile);
  const [selectedStandard, setSelectedStandard] = useState<StandardCandidate>(
    PRODUCT_PRESETS[0].candidateStandards[0]
  );
  const [activeSection, setActiveSection] = useState<string>('section-hero');
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  // When preset updates, update current standard accordingly
  const handleProfileUpdated = (newPreset: ProductPreset, updatedProfile: ProductProfile) => {
    setCurrentPreset(newPreset);
    setCurrentProfile(updatedProfile);
    setSelectedStandard(newPreset.candidateStandards[0]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartAnalysis = () => {
    handleNavigate('section-product');
  };

  const handleStartNewAnalysis = () => {
    handleNavigate('section-product');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section-hero', 'section-product', 'section-standards', 'section-workflow'];
      const scrollY = window.scrollY;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#171717] text-[#F2F0EA] font-sans selection:bg-[#FF9D1C] selection:text-black">
      {/* Top Navigation */}
      <Navigation
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* 01 — Full Viewport Cinematic Split Hero */}
      <HeroSection onStartAnalysis={handleStartAnalysis} />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* 02, 03, 04 — Product Introduction, Attributes, Intelligent Clarification */}
        <ProductAnalysisFlow
          onProfileUpdated={handleProfileUpdated}
          currentPreset={currentPreset}
          currentProfile={currentProfile}
        />

        {/* 05, 06 — Standards Discovery & Evidence Mode */}
        <StandardsAndEvidence
          candidates={currentPreset.candidateStandards}
          selectedStandard={selectedStandard}
          onSelectStandard={(cand) => setSelectedStandard(cand)}
        />

        {/* 07, 08 — Certification Navigator & Testing + Laboratory Finder */}
        <CertificationAndTesting
          standard={selectedStandard}
          tests={currentPreset.requiredTests}
          laboratories={currentPreset.accreditedLabs}
        />

        {/* 09, 10 — Compliance Planner & Final CTA */}
        <CompliancePlannerAndCta
          initialChecklist={currentPreset.checklist}
          profile={currentProfile}
          standard={selectedStandard}
          onStartNewAnalysis={handleStartNewAnalysis}
        />
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/[0.08] bg-[#141414] py-12 text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9D1C]" />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#F2F0EA]">
              BIS COMPLIANCE COPILOT
            </span>
          </div>

          <div className="text-center md:text-left text-xs font-light text-zinc-400">
            Official Conformity Assessment Engine · Grounded in BIS Act 2016 & Central Quality Control Orders
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAboutOpen(true)}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Methodology
            </button>
            <span className="text-zinc-600">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#FF9D1C] transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* About Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}
