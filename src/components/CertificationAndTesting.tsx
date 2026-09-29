import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, ArrowDown, Building, MapPin, Clock, FlaskConical, CheckCircle2, ChevronRight } from 'lucide-react';
import { StandardCandidate, RequiredTest, AccreditedLaboratory, QcoStatus } from '../types';

interface CertificationAndTestingProps {
  standard: StandardCandidate;
  tests: RequiredTest[];
  laboratories: AccreditedLaboratory[];
}

export const CertificationAndTesting: React.FC<CertificationAndTestingProps> = ({
  standard,
  tests,
  laboratories,
}) => {
  const [selectedLabId, setSelectedLabId] = useState<string | null>(laboratories[0]?.id || null);

  const stages = [
    { label: '01. PRODUCT', sub: 'Technical Specification', status: 'COMPLETE' },
    { label: '02. STANDARD', sub: standard.isNumber, status: 'MATCHED' },
    { label: '03. CERTIFICATION', sub: standard.scheme, status: standard.qcoStatus },
    { label: '04. TESTING', sub: `${tests.length} Mandatory Protocols`, status: 'INSPECTION' },
    { label: '05. LABORATORY', sub: `${laboratories.length} Recognized Facilities`, status: 'SELECTION' },
    { label: '06. ACTION', sub: 'Manakonline License Filing', status: 'NEXT STEP' },
  ];

  return (
    <div id="section-workflow" className="w-full space-y-16 py-12 scroll-mt-24">
      {/* SECTION 07 — CERTIFICATION NAVIGATOR */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="text-xs font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
              07 — CERTIFICATION NAVIGATOR
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-2 font-display">
              WHAT HAPPENS NEXT?
            </h2>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-3">
            <span className="text-xs font-mono-tech text-zinc-400">REGULATORY STATUS:</span>
            <span
              className={`text-xs px-3 py-1 font-mono-tech font-bold rounded-xs tracking-wider ${
                standard.qcoStatus === 'MANDATORY'
                  ? 'bg-amber-500/20 text-[#FF9D1C] border border-[#FF9D1C]/40'
                  : standard.qcoStatus === 'VOLUNTARY'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
              }`}
            >
              {standard.qcoStatus}
            </span>
          </div>
        </div>

        {/* Visual Linear Compliance Path */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#1C1C1C] border border-white/[0.08] hover:border-[#FF9D1C]/40 transition-all rounded-xs relative group"
            >
              <div className="flex items-center justify-between text-[10px] font-mono-tech uppercase text-zinc-500 mb-1">
                <span>STAGE 0{idx + 1}</span>
                <span className="text-[#FF9D1C]">{stage.status}</span>
              </div>
              <div className="text-sm font-bold tracking-tight text-white mt-1">
                {stage.label.split('. ')[1]}
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-light truncate">
                {stage.sub}
              </div>

              {/* Arrow connector on large screens */}
              {idx < stages.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-zinc-600">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Regulatory Reality & Transparency Box */}
        <div className="mt-6 p-4 bg-[#141414] border-l-2 border-[#FF9D1C] rounded-r-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono-tech font-semibold text-white">
              STATUTORY QUALITY CONTROL ORDER (QCO) NOTICE
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
              Under Section 16 of the BIS Act 2016, products covered under mandatory QCOs cannot be manufactured, imported, distributed, or sold without bearing the Standard Mark under a valid BIS license.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] font-mono-tech text-zinc-500 uppercase block">GAZETTE SCHEDULE</span>
            <span className="text-xs font-mono-tech text-[#FF9D1C]">{standard.gazetteNotification}</span>
          </div>
        </div>
      </section>

      {/* SECTION 08 — TESTING + LABORATORY FINDER (SPLIT INTERFACE) */}
      <section>
        <div className="border-b border-white/10 pb-4 mb-6">
          <div className="text-xs font-mono-tech tracking-[0.25em] text-[#FF9D1C] uppercase font-semibold">
            08 — TESTING + LABORATORY FINDER
          </div>
          <h3 className="text-2xl sm:text-3xl font-light text-white mt-1 font-display">
            Laboratory Evaluation Matrix
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Left: Prescribed laboratory test protocols. Right: Recognized facilities with matching testing scope.
          </p>
        </div>

        {/* Split Interface: Left (Tests), Right (Laboratories) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Required Tests */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                MANDATORY TESTING PROTOCOLS ({tests.length})
              </span>
              <span className="text-[11px] font-mono-tech text-zinc-500">SCHEME OF TESTING (STI)</span>
            </div>

            <div className="space-y-3">
              {tests.map((test) => (
                <div
                  key={test.id}
                  className="p-5 bg-[#1A1A1A] border border-white/[0.07] hover:border-white/20 transition-colors rounded-xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono-tech tracking-wider text-[#FF9D1C] uppercase block">
                        {test.standardClause}
                      </span>
                      <h4 className="text-sm font-semibold text-white mt-0.5">
                        {test.testName}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono-tech uppercase text-zinc-400 px-2 py-0.5 bg-white/5 rounded-xs shrink-0">
                      {test.criticality}
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <span className="text-zinc-500 font-mono-tech text-[10px] uppercase block">
                        Pass / Fail Invariant Threshold:
                      </span>
                      <span className="text-zinc-200 font-light">{test.threshold}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 font-mono-tech text-[10px] uppercase block">
                        Test Method & Apparatus:
                      </span>
                      <span className="text-zinc-400 font-light">{test.testMethod}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Matching Accredited Laboratories */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                BIS & NABL ACCREDITED LABORATORIES ({laboratories.length})
              </span>
              <span className="text-[11px] font-mono-tech text-zinc-500">SAMPLE ACCEPTANCE DIRECTORY</span>
            </div>

            <div className="space-y-3">
              {laboratories.map((lab) => {
                const isSelected = selectedLabId === lab.id;
                return (
                  <div
                    key={lab.id}
                    onClick={() => setSelectedLabId(lab.id)}
                    className={`cursor-pointer p-5 rounded-xs border transition-all ${
                      isSelected
                        ? 'bg-[#1F1F1F] border-[#FF9D1C] shadow-md'
                        : 'bg-[#181818] border-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono-tech tracking-wider text-[#FF9D1C] uppercase block">
                          {lab.type}
                        </span>
                        <h4 className="text-sm font-semibold text-white mt-0.5">
                          {lab.name}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono-tech uppercase text-zinc-400 px-2 py-0.5 bg-white/5 rounded-xs shrink-0">
                        ~{lab.sampleTurnaroundDays} DAYS TAT
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{lab.location}, {lab.state}</span>
                      </div>
                      <div className="flex items-center gap-1 font-mono-tech text-[11px]">
                        <span>SCOPE:</span>
                        <span className="text-zinc-300">{lab.recognizedScope.join(', ')}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-zinc-500 font-mono-tech">
                      <span>{lab.address}</span>
                      <span className="text-zinc-400">{lab.contactEmail}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
