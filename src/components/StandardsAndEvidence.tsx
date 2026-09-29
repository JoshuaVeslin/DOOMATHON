import React, { useState } from 'react';
import { FileText, Shield, ExternalLink, X, CheckCircle, ChevronRight, Copy, Check, Scale, Bookmark } from 'lucide-react';
import { StandardCandidate, EvidenceClause } from '../types';

interface StandardsAndEvidenceProps {
  candidates: StandardCandidate[];
  selectedStandard: StandardCandidate;
  onSelectStandard: (standard: StandardCandidate) => void;
}

export const StandardsAndEvidence: React.FC<StandardsAndEvidenceProps> = ({
  candidates,
  selectedStandard,
  onSelectStandard,
}) => {
  const [activeEvidenceModal, setActiveEvidenceModal] = useState<StandardCandidate | null>(null);
  const [copiedClause, setCopiedClause] = useState<string | null>(null);

  const handleCopyCitation = (clause: EvidenceClause) => {
    const text = `[BIS Citation] ${activeEvidenceModal?.isNumber} - ${clause.clauseNumber} (${clause.clauseTitle}): "${clause.exactText}"`;
    navigator.clipboard.writeText(text);
    setCopiedClause(clause.clauseNumber);
    setTimeout(() => setCopiedClause(null), 2000);
  };

  return (
    <section id="section-standards" className="scroll-mt-24 py-12">
      {/* SECTION 05 — STANDARD DISCOVERY */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="text-xs font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
            05 — STANDARD DISCOVERY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-2 font-display">
            FIND THE STANDARD.
          </h2>
        </div>
        <p className="text-sm text-zinc-400 mt-2 md:mt-0 font-light max-w-md">
          Candidate Indian Standards evaluated against statutory schedules. Multiple candidates reflect regulatory boundary nuances.
        </p>
      </div>

      {/* Candidate Standards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {candidates.map((cand) => {
          const isPrimary = cand.id === selectedStandard.id;
          return (
            <div
              key={cand.id}
              onClick={() => onSelectStandard(cand)}
              className={`cursor-pointer transition-all duration-300 p-6 sm:p-7 rounded-xs border flex flex-col justify-between ${
                isPrimary
                  ? 'bg-[#1C1C1C] border-[#FF9D1C] shadow-lg ring-1 ring-[#FF9D1C]/50'
                  : 'bg-[#181818] border-white/10 hover:border-white/20 opacity-90 hover:opacity-100'
              }`}
            >
              <div>
                {/* Header with IS Number and Match Signal */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <span className="text-[11px] font-mono-tech tracking-wider text-[#FF9D1C] font-semibold">
                      {cand.relevanceTag}
                    </span>
                    <h3 className="text-xl font-bold font-mono-tech tracking-tight text-white mt-1">
                      {cand.isNumber}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-sm font-semibold font-mono-tech text-white">
                      {cand.matchSignal}%
                    </span>
                    <span className="block text-[10px] uppercase font-mono-tech text-zinc-400">
                      RELEVANCE
                    </span>
                  </div>
                </div>

                {/* Title and Scope */}
                <div className="py-4 space-y-3">
                  <h4 className="text-base font-medium text-[#F2F0EA] leading-snug">
                    {cand.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {cand.scope}
                  </p>
                </div>

                {/* Why This Standard Matches */}
                <div className="pt-3 pb-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono-tech uppercase tracking-wider text-zinc-400 mb-2">
                    Why this standard matches:
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {cand.whyMatches.map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FF9D1C] mt-1 shrink-0">·</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with Evidence Trigger */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono-tech text-zinc-400">
                  {cand.qcoStatus}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveEvidenceModal(cand);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF9D1C] hover:text-[#ffb24d] transition-colors py-1 px-2.5 rounded-xs hover:bg-white/[0.05]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>VIEW EVIDENCE</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* SECTION 06 — EVIDENCE MODAL / DRAWER */}
      {activeEvidenceModal && (
        <div
          id="section-evidence"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-label="Official BIS Regulatory Evidence"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1A1A1A] border border-white/20 rounded-xs shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#1F1F1F]">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>OFFICIAL SOURCE · VERIFIED BIS REGULATORY TEXT</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white mt-1 font-display">
                  {activeEvidenceModal.isNumber}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {activeEvidenceModal.title} · {activeEvidenceModal.revision}
                </p>
              </div>

              <button
                onClick={() => setActiveEvidenceModal(null)}
                className="p-2 text-zinc-400 hover:text-white rounded hover:bg-white/10 transition-colors"
                aria-label="Close Evidence Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Statutory Metadata Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xs font-mono-tech text-xs">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">STATUTORY AUTHORITY</span>
                  <span className="text-zinc-200">{activeEvidenceModal.ministry}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">GAZETTE ORDER</span>
                  <span className="text-[#FF9D1C]">{activeEvidenceModal.gazetteNotification}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">ENFORCEMENT REGIME</span>
                  <span className="text-zinc-200">{activeEvidenceModal.qcoEnforcementDate}</span>
                </div>
              </div>

              {/* Exact Evidence Clauses */}
              <div className="space-y-4">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-zinc-400">
                  STATUTORY EXTRACTS & CLAUSE EVIDENCE:
                </div>

                {activeEvidenceModal.evidenceClauses.map((clause, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#141414] border border-white/[0.08] hover:border-[#FF9D1C]/40 transition-colors rounded-xs relative group"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-tech font-bold text-[#FF9D1C]">
                          {clause.clauseNumber}
                        </span>
                        <span className="text-xs text-zinc-400 font-medium">
                          {clause.clauseTitle}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono-tech uppercase text-zinc-500 px-2 py-0.5 bg-white/5 rounded-xs">
                          {clause.requirementType}
                        </span>
                        <button
                          onClick={() => handleCopyCitation(clause)}
                          className="text-zinc-400 hover:text-white p-1"
                          title="Copy citation"
                        >
                          {copiedClause === clause.clauseNumber ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <blockquote className="text-sm text-zinc-200 italic font-serif leading-relaxed pl-3 border-l-2 border-[#FF9D1C]/60">
                      "{clause.exactText}"
                    </blockquote>
                  </div>
                ))}
              </div>

              {/* Key Safety Invariants */}
              <div className="p-4 bg-[#1F1F1F] border border-white/[0.08] rounded-xs">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#FF9D1C] mb-2 font-semibold">
                  MANDATORY SAFETY INVARIANTS TESTED:
                </div>
                <div className="space-y-2">
                  {activeEvidenceModal.keySafetyInvariants.map((inv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{inv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#161616] flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono-tech">
                EXTRACTED DIRECTLY FROM BUREAU OF INDIAN STANDARDS OFFICIAL TEXTS
              </span>
              <button
                onClick={() => setActiveEvidenceModal(null)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-xs transition-colors"
              >
                CLOSE EVIDENCE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
