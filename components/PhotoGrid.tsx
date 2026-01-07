import React from 'react';

const PhotoItem = ({ src, label, large = false }: { src: string; label: string; large?: boolean }) => (
  <div className={`group cursor-pointer ${large ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
    <div className={`overflow-hidden rounded-sm bg-gray-200 ${large ? 'aspect-[16/9]' : 'aspect-square'}`}>
      <img 
        src={src} 
        alt={label} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide border-b border-black inline-block pb-0.5 group-hover:opacity-70 transition-opacity">
      {label}
    </div>
  </div>
);

export const PhotoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PhotoItem 
            src="https://picsum.photos/id/1018/800/800" 
            label="Link" 
        />
        <PhotoItem 
            src="https://picsum.photos/id/1039/800/800" 
            label="Link" 
        />
        <PhotoItem 
            src="https://picsum.photos/id/10/800/800" 
            label="Link" 
        />
        <div className="col-span-1 md:col-span-3">
             <div className="group cursor-pointer w-full">
                <div className="overflow-hidden rounded-sm bg-[#eaddcf] aspect-[21/9] flex items-center justify-center relative">
                  {/* Using an abstract composition similar to the reference since picsum is random */}
                   <img 
                        src="https://picsum.photos/id/24/1600/900" 
                        alt="Abstract Composition" 
                        className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    />
                    {/* Simulated 3D Podium overlay */}
                    <div className="absolute inset-0 flex items-end justify-center pb-12 gap-4">
                        <div className="w-32 h-32 bg-[#f0e6da] rounded-full shadow-lg transform translate-y-8"></div>
                        <div className="w-40 h-56 bg-[#f0e6da] rounded-t-full shadow-lg"></div>
                        <div className="w-32 h-24 bg-[#f0e6da] rounded-t-full shadow-lg transform translate-y-4"></div>
                    </div>
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide border-b border-black inline-block pb-0.5 group-hover:opacity-70 transition-opacity">
                    Link
                </div>
            </div>
        </div>
    </div>
  );
};