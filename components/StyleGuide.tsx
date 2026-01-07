import React, { useState } from 'react';
import { Eye, Check, X, Activity, User, Globe, Trash2, Layers, Menu as MenuIcon, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const SectionLabel = ({ children }: { children?: React.ReactNode }) => (
  <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-black w-32 shrink-0 opacity-0 animate-fade-in-up">{children}</h3>
);

const Section = ({ label, children, delay = "" }: { label: string, children?: React.ReactNode, delay?: string }) => (
  <div className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-12 pb-16 ${delay}`}>
    <SectionLabel>{label}</SectionLabel>
    <div className="flex-1 space-y-8 opacity-0 animate-fade-in-up animate-delay-100">{children}</div>
  </div>
);

export const StyleGuide: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="space-y-12">
      {/* Typography Section */}
      <Section label="Text Styles">
        <div className="space-y-6">
          <h1 className="font-serif text-8xl md:text-9xl text-black leading-none tracking-tight">Header</h1>
          <h2 className="font-serif text-4xl md:text-5xl text-black leading-tight max-w-2xl">
            This Product feature is the most important
          </h2>
          <h3 className="font-serif text-3xl text-black leading-tight max-w-2xl">
            This Product feature is the most important
          </h3>
          <p className="font-sans text-base font-medium text-black">Key point here</p>
          <p className="font-sans text-sm text-gray-500 max-w-md leading-relaxed">
            Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.
          </p>
        </div>
      </Section>

      <div className="h-px w-full bg-gray-200 opacity-0 animate-scale-up animate-delay-200" />

      {/* Labels & UI Text - Placeholder for structure, merging into flow */}
      <div className="flex flex-col md:flex-row gap-12 pb-8 opacity-0 animate-fade-in-up animate-delay-200">
        <div className="w-32 shrink-0 space-y-12">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Labels</h3>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-black">UI Text</h3>
        </div>
      </div>

      {/* Colors Section */}
      <Section label="Color" delay="animate-delay-200">
        <div className="flex flex-wrap gap-4">
          <div className="w-20 h-20 rounded-full bg-black shadow-sm" title="Black" />
          <div className="w-20 h-20 rounded-full bg-gray-400 shadow-sm" title="Grey" />
          <div className="w-20 h-20 rounded-full bg-gray-100 shadow-sm" title="Light Grey" />
          <div className="w-20 h-20 rounded-full bg-white border border-gray-200 shadow-sm" title="White" />
          <div className="w-20 h-20 rounded-full bg-olive-200 shadow-sm" title="Light Green" />
          <div className="w-20 h-20 rounded-full bg-olive-400 shadow-sm" title="Sage Green" />
          <div className="w-20 h-20 rounded-full bg-olive-800 shadow-sm" title="Dark Green" />
        </div>
      </Section>

      {/* Icons Section */}
      <Section label="Icons" delay="animate-delay-300">
        <div className="flex gap-8 text-black opacity-80">
          <Layers size={20} />
          <Check size={20} />
          <X size={20} />
          <Activity size={20} />
          <User size={20} />
          <Globe size={20} />
          <Trash2 size={20} />
          <Eye size={20} />
        </div>
      </Section>

      {/* Logo Section */}
      <Section label="Logo" delay="animate-delay-300">
        <div className="w-12 h-16 relative">
          <svg viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black">
             <circle cx="12" cy="6" r="4" fill="currentColor"/>
             <path d="M12 10V22M12 22L6 32M12 22L18 32M12 13L6 18M12 13L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </Section>

      {/* Buttons Section */}
      <Section label="Buttons" delay="animate-delay-400">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-full bg-olive-200 text-olive-900 font-semibold text-sm hover:bg-olive-300 transition-colors">
              Learn More
            </button>
             <button className="px-8 py-3 rounded-full bg-gray-500 text-white font-semibold text-sm hover:bg-gray-600 transition-colors">
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="pl-6 pr-4 py-3 rounded-full bg-olive-800 text-white font-semibold text-sm flex items-center gap-2 hover:bg-olive-900 transition-colors group">
              Learn More <span className="bg-white/20 rounded-full p-0.5 group-hover:translate-x-0.5 transition-transform"><ArrowRight size={12}/></span>
            </button>
            <button className="pl-6 pr-4 py-3 rounded-full bg-gray-400 text-white font-semibold text-sm flex items-center gap-2 hover:bg-gray-500 transition-colors group">
              Learn More <span className="bg-white/20 rounded-full p-0.5 group-hover:translate-x-0.5 transition-transform"><ArrowRight size={12}/></span>
            </button>
          </div>

          <div className="flex gap-4">
             <button className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <ChevronRight size={16} />
             </button>
             <button className="w-10 h-10 rounded-lg bg-olive-200 flex items-center justify-center hover:bg-olive-300 transition-colors">
                <ChevronRight size={16} />
             </button>
          </div>

          <div className="flex gap-4">
            <button className="w-10 h-10 bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <ChevronLeft size={16} />
             </button>
             <button className="w-10 h-10 bg-olive-200 flex items-center justify-center hover:bg-olive-300 transition-colors">
                <ChevronLeft size={16} />
             </button>
          </div>
        </div>
      </Section>

      {/* Area / Menu Section */}
      <div className="border border-dashed border-purple-200 rounded-2xl p-6 md:p-12 space-y-8 bg-gray-50/50 opacity-0 animate-fade-in-up animate-delay-500">
        
        {/* Simple Area Bars */}
        <div className="bg-[#eff5f0] p-6 rounded-lg flex justify-between items-center">
            <h3 className="text-2xl font-serif text-black">Area</h3>
            <button className="pl-6 pr-4 py-2 rounded-full bg-olive-800 text-white text-xs font-semibold flex items-center gap-2 hover:bg-olive-900 transition-colors">
                Learn More <ArrowRight size={10} className="opacity-70"/>
            </button>
        </div>

        <div className="bg-[#eff5f0] p-6 rounded-lg flex justify-between items-center w-full md:w-2/3">
            <h3 className="text-2xl font-serif text-black">Area</h3>
            <button className="pl-6 pr-4 py-2 rounded-full bg-olive-800 text-white text-xs font-semibold flex items-center gap-2 hover:bg-olive-900 transition-colors">
                Learn More <ArrowRight size={10} className="opacity-70"/>
            </button>
        </div>

        <div className="pt-8">
            <p className="text-xs text-black mb-4 flex items-center gap-2"><Check size={12}/> Ultra-fast browsing</p>
        </div>

        {/* Interactive Menu Mockup */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Collapsed State */}
            <div className="w-full md:w-80 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <span className="text-xl font-serif">Area</span>
                <MenuIcon size={20} className="text-black cursor-pointer" />
            </div>

            {/* Expanded State */}
            <div className="w-full md:w-80 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 flex justify-between items-center border-b border-gray-100">
                    <span className="text-xl font-serif">Area</span>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 hover:bg-gray-50 rounded">
                         {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
                    </button>
                </div>
                
                <div className="py-2">
                    {['Benefits', 'Specifications', 'How-to', 'Contact Us'].map((item, idx) => (
                        <div key={idx} className="px-4 py-3 text-sm font-medium text-black hover:bg-gray-50 cursor-pointer flex justify-between items-center border-b border-gray-50 last:border-0">
                            {item}
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-white">
                    <button className="w-full py-3 rounded-full bg-olive-800 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-olive-900 transition-colors">
                        Learn More <span className="bg-white/20 rounded-full p-0.5"><ArrowRight size={10}/></span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};