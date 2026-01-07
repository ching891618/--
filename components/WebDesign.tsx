import React from 'react';
import { Monitor, Smartphone, MousePointer, Command, LayoutGrid } from 'lucide-react';

export const WebDesign: React.FC = () => {
  return (
    <div className="space-y-24">
       {/* Header */}
      <section className="space-y-6 opacity-0 animate-fade-in-up">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Digital Experience</h3>
        <h1 className="font-serif text-7xl md:text-9xl text-black leading-none tracking-tight">
          Interface<br />Design
        </h1>
        <p className="font-sans text-lg text-gray-600 max-w-2xl leading-relaxed mt-8">
          Designing intuitive digital ecosystems. We focus on clarity, interaction, and responsive behavior across all devices.
        </p>
      </section>

      <div className="h-px w-full bg-gray-200 opacity-0 animate-scale-up animate-delay-200" />

      {/* UI Kit Showcase */}
      <section className="opacity-0 animate-fade-in-up animate-delay-200">
        <div className="mb-12">
            <h2 className="font-serif text-4xl text-black mb-4">Component Library</h2>
            <p className="text-gray-500 max-w-lg">A modular system of reusable components ensuring consistency and speed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Buttons & Inputs */}
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 space-y-8">
                <div className="text-xs font-semibold uppercase text-gray-400">Controls</div>
                <div className="space-y-4">
                    <button className="w-full py-3 bg-olive-800 text-white rounded-lg font-medium hover:bg-olive-900 transition">Primary Action</button>
                    <button className="w-full py-3 bg-olive-100 text-olive-900 rounded-lg font-medium hover:bg-olive-200 transition">Secondary Action</button>
                    <div className="relative">
                        <input type="text" placeholder="Search..." className="w-full py-3 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-olive-500" />
                        <Command className="absolute right-3 top-3.5 text-gray-400 w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Card 2: Cards */}
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 space-y-8">
                 <div className="text-xs font-semibold uppercase text-gray-400">Cards</div>
                 <div className="bg-[#f4f7f2] p-4 rounded-lg space-y-3 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-8 h-8 bg-olive-200 rounded-full flex items-center justify-center text-olive-800"><LayoutGrid size={16}/></div>
                    <div className="font-serif text-lg">Dashboard</div>
                    <div className="text-xs text-gray-500">View analytics and reports for your region.</div>
                 </div>
                  <div className="bg-[#f4f7f2] p-4 rounded-lg flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center border border-gray-100"><Monitor size={18} className="text-gray-400"/></div>
                    <div>
                        <div className="font-medium text-sm">System Status</div>
                        <div className="text-xs text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online</div>
                    </div>
                 </div>
            </div>

            {/* Card 3: Toggles & Tags */}
             <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 space-y-8">
                <div className="text-xs font-semibold uppercase text-gray-400">States</div>
                <div className="flex gap-4">
                    <span className="px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-medium border border-olive-200">Active</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">Inactive</span>
                    <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium border border-red-100">Error</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                    <span className="text-sm">Notifications</span>
                    <div className="w-10 h-5 bg-olive-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                    <span className="text-sm">Dark Mode</span>
                    <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Website Project */}
      <section className="bg-black text-white rounded-[2rem] p-8 md:p-16 overflow-hidden relative opacity-0 animate-fade-in-up animate-delay-300">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-olive-300">Case Study</div>
                  <h2 className="font-serif text-4xl md:text-5xl">E-Commerce<br/>Redesign</h2>
                  <p className="text-gray-400 max-w-md">A complete overhaul of the shopping experience, focusing on micro-interactions and seamless checkout flow.</p>
                  <button className="mt-4 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">View Live Site</button>
              </div>
              <div className="flex-1 w-full relative">
                  <div className="aspect-[4/3] bg-gray-800 rounded-xl border border-gray-700 overflow-hidden relative shadow-2xl transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                      {/* Abstract Browser Content */}
                      <div className="h-8 bg-gray-900 flex items-center px-4 gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="p-6 bg-white h-full text-black">
                          <div className="flex justify-between items-center mb-8">
                              <div className="font-serif font-bold text-xl">Shop.</div>
                              <div className="flex gap-4 text-xs font-medium text-gray-500">
                                  <span>Men</span>
                                  <span>Women</span>
                                  <span>Sale</span>
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                              <div className="aspect-[3/4] bg-gray-100 rounded-lg"></div>
                              <div className="space-y-2">
                                  <div className="aspect-square bg-olive-100 rounded-lg"></div>
                                  <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                                  <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          {/* Background decorative blob */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-olive-900/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
      </section>
    </div>
  );
};