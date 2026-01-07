import React from 'react';
import { Layers, PenTool, Layout, Image as ImageIcon, ArrowRight } from 'lucide-react';

export const BrandDesign: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Header Section */}
      <section className="space-y-6 opacity-0 animate-fade-in-up">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Identity System</h3>
        <h1 className="font-serif text-7xl md:text-9xl text-black leading-none tracking-tight">
          Visual<br />Identity
        </h1>
        <p className="font-sans text-lg text-gray-600 max-w-2xl leading-relaxed mt-8">
          Crafting a cohesive narrative through typography, color, and form. Our brand language speaks to organic growth and structural elegance.
        </p>
      </section>

      <div className="h-px w-full bg-gray-200 opacity-0 animate-scale-up animate-delay-200" />

      {/* Logo System */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 opacity-0 animate-fade-in-up animate-delay-200">
        <div className="md:col-span-4">
           <h3 className="text-xs font-semibold uppercase tracking-wider text-black mb-4">Logo Marks</h3>
           <p className="text-sm text-gray-500">Primary and secondary marks designed for scalability across physical and digital mediums.</p>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 gap-8">
            <div className="aspect-square bg-olive-900 flex items-center justify-center rounded-sm">
                 <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-olive-50 fill-current">
                    <circle cx="50" cy="50" r="40" />
                    <path d="M50 10 V90 M10 50 H90" stroke="currentColor" strokeWidth="2" className="text-olive-900" />
                 </svg>
            </div>
            <div className="aspect-square bg-olive-100 flex items-center justify-center rounded-sm border border-olive-200">
                 <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-olive-900 fill-current">
                    <rect x="20" y="20" width="60" height="60" rx="10" />
                    <circle cx="50" cy="50" r="15" className="text-white" />
                 </svg>
            </div>
        </div>
      </section>

      {/* Brand Applications / Mockups */}
      <section className="space-y-12 opacity-0 animate-fade-in-up animate-delay-300">
         <div className="flex justify-between items-end">
            <h2 className="font-serif text-4xl md:text-5xl text-black">Applications</h2>
            <button className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider hover:opacity-60 transition-opacity">
                View All Assets <ArrowRight size={14} />
            </button>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stationery Mockup */}
            <div className="md:col-span-2 aspect-[16/9] bg-[#e6e4e0] relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center gap-8 transform rotate-6 group-hover:rotate-0 transition-transform duration-700">
                    <div className="w-48 h-64 bg-white shadow-xl p-6 flex flex-col justify-between">
                         <div className="w-8 h-8 rounded-full bg-olive-900"></div>
                         <div className="space-y-2">
                            <div className="w-full h-2 bg-gray-100"></div>
                            <div className="w-2/3 h-2 bg-gray-100"></div>
                         </div>
                    </div>
                    <div className="w-48 h-64 bg-olive-50 shadow-xl p-6 flex flex-col justify-between transform translate-y-12">
                         <div className="w-8 h-8 rounded-full border border-olive-900"></div>
                         <div className="space-y-2">
                            <div className="w-full h-2 bg-gray-200"></div>
                            <div className="w-2/3 h-2 bg-gray-200"></div>
                         </div>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wider opacity-50">Stationery</div>
            </div>

            {/* Packaging Mockup */}
            <div className="md:col-span-1 aspect-[3/4] bg-olive-800 relative overflow-hidden group cursor-pointer">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-48 border border-white/30 rounded-t-full rounded-b-lg p-4 flex flex-col items-center justify-center gap-4 group-hover:scale-110 transition-transform duration-700">
                        <div className="text-white font-serif text-2xl">O.</div>
                        <div className="text-white/60 text-[10px] uppercase tracking-widest text-center">Organic<br/>Collection</div>
                    </div>
                 </div>
                 <div className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wider text-white opacity-50">Packaging</div>
            </div>
         </div>
      </section>

      {/* Typography Inspiration */}
      <section className="bg-white p-8 md:p-16 rounded-2xl border border-dashed border-gray-200 opacity-0 animate-fade-in-up animate-delay-400">
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="w-32 shrink-0">
                 <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Typography</h3>
             </div>
             <div className="flex-1 space-y-12">
                 <div>
                     <span className="block text-[120px] leading-none font-serif text-olive-900 opacity-20 select-none">Aa</span>
                     <h3 className="text-3xl font-serif mt-[-40px] relative z-10">Playfair Display</h3>
                     <p className="text-gray-500 mt-2 max-w-md">Used for headlines and expressive moments. Elegant, classic, yet modern.</p>
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-2">
                         <div className="text-4xl font-serif">Regular</div>
                         <div className="text-sm text-gray-400">The quick brown fox jumps over the lazy dog.</div>
                     </div>
                     <div className="space-y-2">
                         <div className="text-4xl font-serif italic">Italic</div>
                         <div className="text-sm text-gray-400">The quick brown fox jumps over the lazy dog.</div>
                     </div>
                 </div>
             </div>
          </div>
      </section>
    </div>
  );
};