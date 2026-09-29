import React from 'react';
import { X, ShieldCheck, Scale, Compass, CheckCircle } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-label="About BIS Compliance Copilot"
    >
      <div className="relative w-full max-w-3xl bg-[#1A1A1A] border border-white/20 rounded-xs shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[85vh]">
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <div className="text-[10px] font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
              PRODUCT ARCHITECTURE & PHILOSOPHY
            </div>
            <h3 className="text-2xl font-light text-white mt-1 font-display">
              About BIS Compliance Copilot
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm text-zinc-300 font-light leading-relaxed">
          <p>
            <strong className="text-white font-medium">BIS Compliance Copilot</strong> bridges the chasm between natural language product concepts and the statutory compliance mandates enforced by the <strong className="text-white font-medium">Bureau of Indian Standards (BIS)</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xs">
              <div className="text-xs font-mono-tech font-bold text-[#FF9D1C] uppercase mb-1">
                Zero Regulatory Slop
              </div>
              <p className="text-xs text-zinc-400">
                AI does not invent standards, hallucinate QCOs, or generate false 100% certainty. Every match is bound to official Gazette notifications and clause-level proofs.
              </p>
            </div>

            <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xs">
              <div className="text-xs font-mono-tech font-bold text-[#FF9D1C] uppercase mb-1">
                Linear Traceability
              </div>
              <p className="text-xs text-zinc-400">
                Traces the full statutory chain from PRODUCT → STANDARD → CERTIFICATION REQUIREMENT → TESTING PROTOCOLS → ACCREDITED LAB → ACTION CHECKLIST.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-white font-semibold">
              The BIS Regulatory Ecosystem at a Glance:
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#FF9D1C] mt-0.5">·</span>
                <span><strong className="text-zinc-200">Scheme I (ISI Mark):</strong> Requires factory audit, sample collection, and in-house testing capability. Governs safety-critical goods like pressure cookers, cement, and toys.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9D1C] mt-0.5">·</span>
                <span><strong className="text-zinc-200">Scheme II (CRS):</strong> Self-declaration of conformity based on test reports from recognized labs. Mandatory for electronics, IT goods, and solar modules under MeitY and MNRE.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9D1C] mt-0.5">·</span>
                <span><strong className="text-zinc-200">Quality Control Orders (QCOs):</strong> Statutory orders issued under Section 16 of the BIS Act, 2016 making compliance non-negotiable for domestic makers and foreign importers alike.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-zinc-500 font-mono-tech">
            AESTHETIC & REGULATORY EXPERIMENT · 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#FF9D1C] hover:bg-[#ffaa3b] text-black font-semibold text-xs tracking-wider uppercase rounded-xs transition-colors"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
