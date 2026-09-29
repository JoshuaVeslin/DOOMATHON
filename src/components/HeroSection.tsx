import React, { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ComplianceCore3D } from './ComplianceCore3D';

interface HeroSectionProps {
  onStartAnalysis: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartAnalysis }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="section-hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-16"
    >
      {/* 
        SPLIT-SCREEN CINEMATIC CANVAS:
        LEFT: Warm Industrial Orange (#FF9D1C)
        RIGHT: Deep Technical Charcoal (#171717)
      */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 pointer-events-none">
        {/* Left World: Orange (Human / Product / Industry) */}
        <div className="relative bg-[#FF9D1C] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFAE38] to-[#F28B00] opacity-90" />
          {/* Subtle architectural grid lines */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
          {/* Left ambient label */}
          <div className="absolute top-8 left-8 hidden lg:block">
            <span className="text-[11px] font-mono-tech tracking-[0.3em] uppercase text-black/60 font-medium">
              HUMAN / INDUSTRY / PRODUCT
            </span>
          </div>
          <div className="absolute bottom-10 left-8 hidden lg:block text-black/50 text-xs font-mono-tech">
            01 — PHYSICAL ORIGIN
          </div>
        </div>

        {/* Right World: Charcoal (AI / Standards / Evidence) */}
        <div className="relative bg-[#171717] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#1f1f1f] to-[#121212] opacity-95" />
          {/* Subtle technical matrix dots */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          {/* Right ambient label */}
          <div className="absolute top-8 right-8 hidden lg:block text-right">
            <span className="text-[11px] font-mono-tech tracking-[0.3em] uppercase text-white/50 font-medium">
              MACHINE / STANDARDS / INTELLIGENCE
            </span>
          </div>
          <div className="absolute bottom-10 right-8 hidden lg:block text-zinc-600 text-xs font-mono-tech text-right">
            02 — STATUTORY PROOF
          </div>
        </div>

        {/* Vertical Boundary Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/20 -translate-x-1/2 z-10" />
      </div>

      {/* 3D "COMPLIANCE INTELLIGENCE CORE" Crossing the exact boundary */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-20">
        <ComplianceCore3D onObjectClick={onStartAnalysis} className="w-full h-full max-h-[85vh]" />
      </div>

      {/* HERO TYPOGRAPHY & DOM OVERLAY */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 py-8 flex flex-col justify-between flex-1 pointer-events-none">
        {/* Subtle sub-header */}
        <div className="pt-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono-tech tracking-[0.35em] uppercase px-3 py-1 bg-black/40 backdrop-blur-md rounded-xs border border-white/10 text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9D1C] animate-pulse" />
            NATIONAL REGULATORY ENGINE · INDIA
          </div>
        </div>

        {/* Massive Central Title across the split */}
        <div className="my-auto py-12 text-center select-none">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.18em] uppercase text-white drop-shadow-md font-display leading-none">
            <span className="inline-block transition-transform duration-700 hover:scale-[1.01]">
              BIS COMPLIANCE
            </span>
            <br />
            <span className="inline-block font-extralight tracking-[0.24em] text-white/95 mt-1 sm:mt-3">
              COPILOT
            </span>
          </h1>

          {/* Restrained Supporting Statement */}
          <div className="mt-6 md:mt-8 max-w-xl mx-auto space-y-2">
            <p className="text-sm md:text-base text-white/90 font-light tracking-wide [text-wrap:balance]">
              From product description to compliance action.
            </p>
            <p className="text-xs md:text-sm text-white/60 tracking-wider font-mono-tech">
              Understand standards · Verify requirements · Find the path forward
            </p>
          </div>
        </div>

        {/* CENTRAL ACTION BUTTON AT THE VERTICAL BOUNDARY */}
        <div className="pb-8 flex flex-col items-center justify-center pointer-events-auto">
          <div className="relative group">
            {/* Magnetic Expanding Circular Button */}
            <button
              onClick={onStartAnalysis}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300 transform ${
                isHovered
                  ? 'scale-110 shadow-2xl shadow-orange-500/30 brightness-110'
                  : 'scale-100 shadow-xl'
              } bg-[#171717] border-2 border-[#FF9D1C] text-white`}
              aria-label="Start Compliance Analysis"
            >
              {/* Outer tactile subtle ring */}
              <div
                className={`absolute inset-[-4px] rounded-full border border-[#FF9D1C]/40 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100 scale-105' : 'opacity-0'
                }`}
              />

              <span className="text-[10px] sm:text-[11px] font-mono-tech font-bold tracking-[0.2em] text-[#FF9D1C] text-center leading-tight">
                START
                <br />
                ANALYSIS
              </span>

              <ArrowDown className="w-3.5 h-3.5 text-[#FF9D1C] mt-1 transition-transform group-hover:translate-y-1" />
            </button>

            {/* Subtle pulsing background ripple */}
            <div className="absolute inset-0 rounded-full bg-[#FF9D1C]/20 blur-md -z-10 group-hover:scale-125 transition-transform duration-500" />
          </div>

          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-white/50 font-mono-tech">
            PRESS TO TRACE PRODUCT TO EVIDENCE
          </div>
        </div>
      </div>
    </section>
  );
};
