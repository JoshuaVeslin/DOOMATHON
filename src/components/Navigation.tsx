import React, { useState } from 'react';
import { LayoutGrid, X, ExternalLink, ShieldCheck, CheckCircle2, FileText, Building2, BookOpen } from 'lucide-react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
  onOpenAbout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  activeSection,
  onOpenAbout,
}) => {
  const [isGridMenuOpen, setIsGridMenuOpen] = useState(false);

  const navLinks = [
    { label: 'DISCOVER', id: 'section-hero' },
    { label: 'INPUT', id: 'section-product' },
    { label: 'STANDARDS', id: 'section-standards' },
    { label: 'WORKFLOW', id: 'section-workflow' },
    { label: 'EVIDENCE', id: 'section-evidence' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#171717]/85 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#section-hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('section-hero');
            }}
            className="group flex items-center gap-2 text-sm font-semibold tracking-[0.25em] text-[#F2F0EA] hover:text-[#FF9D1C] transition-colors"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF9D1C] group-hover:scale-125 transition-transform" />
            <span>BIS / COPILOT</span>
          </a>

          {/* Zone 2: 4-6 clean text links with subtle hover underlines */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.2em] text-[#9A9A9A]">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative py-1 transition-colors hover:text-[#F2F0EA] ${
                  activeSection === item.id ? 'text-[#FF9D1C] font-semibold' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF9D1C]" />
                )}
              </button>
            ))}
            <button
              onClick={onOpenAbout}
              className="py-1 transition-colors hover:text-[#F2F0EA]"
            >
              ABOUT
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('section-product')}
              className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-medium tracking-wider text-black bg-[#FF9D1C] hover:bg-[#ffaa3b] transition-all rounded-xs shadow-sm hover:shadow-orange-500/20 whitespace-nowrap"
            >
              ANALYZE
            </button>
            <button
              onClick={() => setIsGridMenuOpen(!isGridMenuOpen)}
              className="p-2 text-[#9A9A9A] hover:text-[#F2F0EA] hover:bg-white/[0.05] rounded-xs transition-colors"
              aria-label="Toggle BIS Schemes & Directory"
              title="BIS Regulatory Directory"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Quick BIS Directory Drawer */}
      {isGridMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full max-w-md h-full bg-[#1A1A1A] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-label="BIS Regulatory Schemes and Quick Directory"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <div className="text-[10px] tracking-[0.25em] text-[#FF9D1C] uppercase font-mono-tech">
                    Regulatory Directory
                  </div>
                  <h3 className="text-lg font-display text-white mt-1">BIS Certification Frameworks</h3>
                </div>
                <button
                  onClick={() => setIsGridMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white rounded hover:bg-white/5"
                  aria-label="Close directory"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FF9D1C] tracking-wider uppercase font-mono-tech">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Scheme I — ISI Mark</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    Product certification scheme requiring factory quality audits, in-house laboratory equipment, and third-party type testing. Mandatory under QCOs for safety-critical goods (e.g. Pressure Cookers, Helmets, Toys, Steel).
                  </p>
                </div>

                <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FF9D1C] tracking-wider uppercase font-mono-tech">
                    <FileText className="w-4 h-4" />
                    <span>Scheme II — CRS (Compulsory Registration)</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    Self-declaration of conformity based on laboratory test reports for electronics, IT goods, and solar photovoltaics governed under MeitY and MNRE orders.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FF9D1C] tracking-wider uppercase font-mono-tech">
                    <Building2 className="w-4 h-4" />
                    <span>FMCS — Foreign Manufacturers</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    Certification for foreign factories exporting products into India. Requires physical on-site audit by BIS officers and an Authorized Indian Representative (AIR).
                  </p>
                </div>

                <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FF9D1C] tracking-wider uppercase font-mono-tech">
                    <BookOpen className="w-4 h-4" />
                    <span>Quality Control Orders (QCO)</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    Statutory orders issued by Central Ministries under Section 16 of the BIS Act, 2016, prohibiting manufacture, import, or sale of non-certified goods.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="https://www.manakonline.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 text-xs text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xs transition-colors"
              >
                <span>Official Manakonline Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF9D1C]" />
              </a>
              <div className="text-[10px] text-zinc-500 font-mono-tech text-center">
                BUREAU OF INDIAN STANDARDS · ACT 2016
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
