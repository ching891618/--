import React, { useState } from 'react';
import { StyleGuide } from './components/StyleGuide';
import { DeviceShowcase } from './components/DeviceShowcase';
import { PhotoGrid } from './components/PhotoGrid';
import { BrandDesign } from './components/BrandDesign';
import { WebDesign } from './components/WebDesign';


// Types for Navigation
type Page = 'home' | 'brand' | 'web';

const NavBar = ({ activePage, setPage }: { activePage: Page; setPage: (p: Page) => void }) => {
  const links: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'brand', label: 'Brand Design' },
    { id: 'web', label: 'Web Design' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f4f7f2]/90 backdrop-blur-md border-b border-gray-200/50 mb-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo Removed */}
        <div />

        {/* Links */}
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-sm font-medium transition-colors duration-300 ${activePage === link.id
                ? 'text-olive-800'
                : 'text-gray-500 hover:text-black'
                }`}
            >
              {link.label}
              {activePage === link.id && (
                <div className="h-px w-full bg-olive-800 mt-0.5 animate-scale-up origin-left duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HomeContent = () => (
  <div className="space-y-24">
    <StyleGuide />
    <div className="pt-12 opacity-0 animate-fade-in-up animate-delay-500">
      <div className="text-xs font-semibold uppercase tracking-wider mb-8 text-gray-500">Photo Links</div>
      <div className="p-8 md:p-12 border border-dashed border-gray-300 rounded-3xl bg-[#f4f7f2]">
        <DeviceShowcase />
      </div>
    </div>
    <div className="opacity-0 animate-fade-in-up animate-delay-700">
      <PhotoGrid />
    </div>
  </div>
);

export default function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <div className="min-h-screen w-full bg-[#f4f7f2]">
      <NavBar activePage={page} setPage={setPage} />

      {/* Key prop forces component unmount/remount to trigger entry animations */}
      <main key={page} className="px-6 pb-12 md:px-12 md:pb-16 max-w-[1600px] mx-auto">
        {page === 'home' && <HomeContent />}
        {page === 'brand' && <BrandDesign />}
        {page === 'web' && <WebDesign />}
      </main>
    </div>
  );
}