import React, { useState } from 'react';
import { Check, Download, Printer, ArrowRight, ShieldCheck, FileCheck, Clock, ExternalLink } from 'lucide-react';
import { ChecklistItem, ProductProfile, StandardCandidate } from '../types';

interface CompliancePlannerAndCtaProps {
  initialChecklist: ChecklistItem[];
  profile: ProductProfile;
  standard: StandardCandidate;
  onStartNewAnalysis: () => void;
}

export const CompliancePlannerAndCta: React.FC<CompliancePlannerAndCtaProps> = ({
  initialChecklist,
  profile,
  standard,
  onStartNewAnalysis,
}) => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);
  const [isExporting, setIsExporting] = useState(false);

  const toggleCheck = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const completedCount = checklist.filter((c) => c.completed).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const handlePrintReport = () => {
    window.print();
  };

  const handleExportBrief = () => {
    setIsExporting(true);
    const content = `=====================================================
BIS COMPLIANCE COPILOT — STATUTORY BRIEFING REPORT
Generated: ${new Date().toLocaleDateString()}
=====================================================

1. PRODUCT IDENTITY
Product: ${profile.productName}
Material: ${profile.material}
Application: ${profile.application}
Category: ${profile.category}
Rating / Spec: ${profile.capacityOrRating}
Regulatory Scheme: ${profile.regulatoryRegime}

2. STATUTORY STANDARD CANDIDATE
IS Number: ${standard.isNumber}
Title: ${standard.title}
Status: ${standard.qcoStatus}
Enforcement Order: ${standard.gazetteNotification}
Ministry: ${standard.ministry}

3. MANDATORY SAFETY INVARIANTS
${standard.keySafetyInvariants.map((inv, i) => `[${i + 1}] ${inv}`).join('\n')}

4. COMPLIANCE CHECKLIST STATUS (${completedCount}/${checklist.length} Completed - ${progressPercent}%)
${checklist.map((item) => `[${item.completed ? 'X' : ' '}] ${item.stepNumber}. ${item.title} (Est: ${item.estimatedTime})`).join('\n')}

=====================================================
Bureau of Indian Standards · Act 2016 Regulatory Track
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BIS_Compliance_Briefing_${standard.isNumber.replace(/[\s:/]/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setIsExporting(false), 1000);
  };

  return (
    <div className="w-full space-y-24 py-12">
      {/* SECTION 09 — COMPLIANCE PLANNER */}
      <section id="section-workflow" className="scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="text-xs font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
              09 — COMPLIANCE PLANNER
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-2 font-display">
              YOUR COMPLIANCE PATH
            </h2>
          </div>

          {/* Progress and Export Actions */}
          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
            <div className="px-3 py-1.5 bg-[#1F1F1F] border border-white/10 rounded-xs flex items-center gap-2 text-xs font-mono-tech">
              <span className="text-zinc-400">PROGRESS:</span>
              <span className="text-[#FF9D1C] font-bold">{progressPercent}%</span>
              <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden ml-1">
                <div
                  className="h-full bg-[#FF9D1C] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <button
              onClick={handleExportBrief}
              disabled={isExporting}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech bg-white/5 hover:bg-white/10 text-white rounded-xs border border-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#FF9D1C]" />
              <span>{isExporting ? 'EXPORTING...' : 'EXPORT BRIEF'}</span>
            </button>

            <button
              onClick={handlePrintReport}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech bg-white/5 hover:bg-white/10 text-white rounded-xs border border-white/10 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>
          </div>
        </div>

        {/* Actionable Checklist with Large Numbered Typography */}
        <div className="space-y-4">
          {checklist.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`cursor-pointer p-6 sm:p-7 rounded-xs border transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                item.completed
                  ? 'bg-[#191919] border-white/10 opacity-80'
                  : 'bg-[#1C1C1C] border-[#FF9D1C]/40 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-5">
                {/* Large Numbered Typography */}
                <div
                  className={`text-3xl sm:text-4xl font-light font-display tracking-tight leading-none ${
                    item.completed ? 'text-zinc-600' : 'text-[#FF9D1C]'
                  }`}
                >
                  {item.stepNumber}
                </div>

                <div className="space-y-1">
                  <h3
                    className={`text-lg sm:text-xl font-medium tracking-tight ${
                      item.completed ? 'text-zinc-400 line-through' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="font-mono-tech text-[11px] text-zinc-400">
                      ESTIMATED: {item.estimatedTime}
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-[11px] text-zinc-400 font-mono-tech">
                      DOSSIER: {item.requiredDocuments.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Tactile Checkbox */}
              <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                <div
                  className={`w-8 h-8 rounded-xs border flex items-center justify-center transition-all ${
                    item.completed
                      ? 'bg-[#FF9D1C] border-[#FF9D1C] text-black shadow-sm'
                      : 'border-white/30 bg-white/5 hover:border-[#FF9D1C]'
                  }`}
                >
                  {item.completed && <Check className="w-5 h-5 stroke-[2.5]" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA (RETURN TO ORANGE/BLACK SPLIT AESTHETIC) */}
      <section className="relative overflow-hidden border border-white/10 rounded-xs">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Orange Half */}
          <div className="p-8 sm:p-12 md:p-16 bg-[#FF9D1C] text-black flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-tech tracking-[0.3em] uppercase text-black/70 font-semibold">
                10 — VERIFIED ROADMAP
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black mt-4 font-display leading-none">
                FROM COMPLEXITY
                <br />
                TO CLARITY.
              </h2>
            </div>
            <div className="pt-8 text-xs font-mono-tech text-black/70">
              NATIONAL REGULATORY INTELLIGENCE · BIS ACT 2016
            </div>
          </div>

          {/* Right Dark Half */}
          <div className="p-8 sm:p-12 md:p-16 bg-[#171717] text-white flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-zinc-200 font-light leading-relaxed">
                Describe your product. Trace the evidence. Know your next step.
              </p>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Empowering manufacturers, importers, design engineers, and testing labs with statutory accuracy. No hallucinated rules, no false certainty.
              </p>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartNewAnalysis}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FF9D1C] hover:bg-[#ffaa3b] text-black text-xs font-bold font-mono-tech tracking-wider uppercase transition-all rounded-xs shadow-lg"
              >
                <span>START A NEW ANALYSIS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.services.bis.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white text-xs font-mono-tech tracking-wider uppercase transition-all rounded-xs border border-white/10"
              >
                <span>PORTAL SEARCH</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
