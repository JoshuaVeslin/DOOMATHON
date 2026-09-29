import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, HelpCircle, RefreshCw, Cpu, Layers } from 'lucide-react';
import { ProductPreset, ProductProfile, ClarificationOption } from '../types';
import { PRODUCT_PRESETS, findStandardByQuery } from '../data/bisDatabase';

interface ProductAnalysisFlowProps {
  onProfileUpdated: (preset: ProductPreset, updatedProfile: ProductProfile) => void;
  currentPreset: ProductPreset;
  currentProfile: ProductProfile;
}

export const ProductAnalysisFlow: React.FC<ProductAnalysisFlowProps> = ({
  onProfileUpdated,
  currentPreset,
  currentProfile,
}) => {
  const [inputText, setInputText] = useState(currentPreset.description);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('PRODUCT PROFILE READY');
  const [selectedClarificationId, setSelectedClarificationId] = useState<string | null>(
    currentPreset.clarification.options[0]?.id || null
  );

  const handlePresetSelect = (preset: ProductPreset) => {
    setInputText(preset.description);
    setIsAnalyzing(true);
    setStatusMessage('EXTRACTING TECHNICAL ATTRIBUTES...');

    setTimeout(() => {
      setStatusMessage('CROSS-REFERENCING BIS MANDATES...');
      setTimeout(() => {
        setIsAnalyzing(false);
        setStatusMessage('PRODUCT PROFILE READY');
        setSelectedClarificationId(preset.clarification.options[0]?.id || null);
        onProfileUpdated(preset, preset.defaultProfile);
      }, 350);
    }, 350);
  };

  const handleAnalyzeCustom = () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    setStatusMessage('PARSING NATURAL LANGUAGE DESCRIPTION...');

    setTimeout(() => {
      const matched = findStandardByQuery(inputText);
      setStatusMessage('MAPPING MATERIAL & OPERATING PARAMETERS...');
      setTimeout(() => {
        setIsAnalyzing(false);
        setStatusMessage('PRODUCT PROFILE READY');
        const customProfile: ProductProfile = {
          ...matched.defaultProfile,
          rawInput: inputText,
        };
        setSelectedClarificationId(matched.clarification.options[0]?.id || null);
        onProfileUpdated(matched, customProfile);
      }, 400);
    }, 450);
  };

  const handleClarificationSelect = (opt: ClarificationOption) => {
    setSelectedClarificationId(opt.id);
    const updated = {
      ...currentProfile,
      ...opt.attributeChanges,
    };
    onProfileUpdated(currentPreset, updated);
  };

  return (
    <div className="w-full space-y-16 py-12">
      {/* SECTION 02 — PRODUCT INTRODUCTION */}
      <section id="section-product" className="scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="text-xs font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
              02 — PRODUCT SPECIFICATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-2 font-display">
              DESCRIBE YOUR PRODUCT.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 mt-2 md:mt-0 font-light max-w-sm">
            You don't need to know the IS number first. Describe the item, material, and operating purpose.
          </p>
        </div>

        {/* Large Editorial Input Area */}
        <div className="relative bg-[#1A1A1A] border border-white/[0.08] hover:border-[#FF9D1C]/50 transition-colors p-6 sm:p-8 rounded-xs">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono-tech mb-3">
            <span>NATURAL LANGUAGE QUERY</span>
            <span className="text-[11px] text-zinc-500">PRESS ANALYZE TO EVALUATE</span>
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            className="w-full bg-transparent text-white text-base sm:text-xl font-light placeholder:text-zinc-600 focus:outline-none resize-none leading-relaxed"
            placeholder="e.g. I manufacture stainless steel pressure cookers for domestic kitchen use..."
          />

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06] mt-4">
            {/* Quick Industry Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-500 font-mono-tech mr-1">PRESETS:</span>
              {PRODUCT_PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handlePresetSelect(p)}
                  className={`text-xs px-3 py-1.5 rounded-xs transition-colors font-medium ${
                    currentPreset.id === p.id
                      ? 'bg-[#FF9D1C] text-black font-semibold shadow-sm'
                      : 'bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Analyze Action */}
            <button
              onClick={handleAnalyzeCustom}
              disabled={isAnalyzing}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF9D1C] hover:bg-[#ffaa3b] text-black font-semibold text-xs tracking-wider uppercase transition-all rounded-xs shadow-md disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>ANALYZING...</span>
                </>
              ) : (
                <>
                  <span>ANALYZE PRODUCT</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 03 — PRODUCT UNDERSTANDING / ATTRIBUTES */}
      <section className="scroll-mt-24">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="text-xs font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
              03 — EXTRACTED TECHNICAL ATTRIBUTES
            </div>
          </div>
          {/* AI Status Indicator */}
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-xs text-[#FF9D1C]">
            <span className="w-2 h-2 rounded-full bg-[#FF9D1C] animate-pulse" />
            <span>{statusMessage}</span>
          </div>
        </div>

        {/* Elegant Floating Attribute Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 bg-[#1C1C1C] border border-white/[0.07] rounded-xs hover:border-white/20 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono-tech text-zinc-400">
              PRODUCT IDENTITY
            </span>
            <div className="text-lg font-medium text-white mt-1">
              {currentProfile.productName}
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-light">
              Primary entity extracted from input query.
            </p>
          </div>

          <div className="p-5 bg-[#1C1C1C] border border-white/[0.07] rounded-xs hover:border-white/20 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono-tech text-zinc-400">
              MATERIAL COMPOSITION
            </span>
            <div className="text-lg font-medium text-white mt-1">
              {currentProfile.material}
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-light">
              Base metallurgy and constituent materials.
            </p>
          </div>

          <div className="p-5 bg-[#1C1C1C] border border-white/[0.07] rounded-xs hover:border-white/20 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono-tech text-zinc-400">
              OPERATING APPLICATION
            </span>
            <div className="text-lg font-medium text-white mt-1">
              {currentProfile.application}
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-light">
              Use-case environment determining safety classification.
            </p>
          </div>

          <div className="p-5 bg-[#1C1C1C] border border-white/[0.07] rounded-xs hover:border-white/20 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono-tech text-zinc-400">
              REGULATORY CATEGORY
            </span>
            <div className="text-lg font-medium text-white mt-1">
              {currentProfile.category}
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-light">
              Ministry technical schedule mapping.
            </p>
          </div>

          <div className="p-5 bg-[#1C1C1C] border border-white/[0.07] rounded-xs hover:border-white/20 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono-tech text-zinc-400">
              CAPACITY / RATING
            </span>
            <div className="text-lg font-medium text-white mt-1">
              {currentProfile.capacityOrRating}
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-light">
              Dimensional / electrical operating parameters.
            </p>
          </div>

          <div className="p-5 bg-[#1C1C1C] border border-white/[0.07] rounded-xs hover:border-white/20 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono-tech text-zinc-400">
              REGULATORY REGIME
            </span>
            <div className="text-lg font-medium text-[#FF9D1C] mt-1">
              {currentProfile.regulatoryRegime}
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-light">
              Conformity assessment schema under BIS Act 2016.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04 — INTELLIGENT CLARIFICATION */}
      <section className="scroll-mt-24 p-6 sm:p-8 bg-[#1A1A1A] border border-[#FF9D1C]/30 rounded-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>04 — INTELLIGENT REGULATORY CLARIFICATION</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-light text-white mt-2 font-display">
            To narrow the applicable standard, we need one more detail.
          </h3>

          <p className="text-sm text-zinc-300 mt-2 font-light">
            {currentPreset.clarification.question}
          </p>

          <p className="text-xs text-zinc-400 mt-2 italic font-light">
            Why this matters: {currentPreset.clarification.whyWeAsk}
          </p>

          {/* Large Editorial Selection Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {currentPreset.clarification.options.map((opt) => {
              const isSelected = selectedClarificationId === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleClarificationSelect(opt)}
                  className={`text-left p-4 rounded-xs border transition-all ${
                    isSelected
                      ? 'bg-white/[0.08] border-[#FF9D1C] text-white shadow-sm'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 text-zinc-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#F2F0EA]">{opt.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#FF9D1C] shrink-0 ml-2" />}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                    {opt.subtext}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-4 text-[11px] text-zinc-500 font-mono-tech">
            NO GUESSWORK · REAL-TIME TECHNICAL SPECIFICATION COUPLING
          </div>
        </div>
      </section>
    </div>
  );
};
