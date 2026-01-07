import React from 'react';
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { year: '2021', value: 30, secondary: 20 },
  { year: '2021', value: 45, secondary: 25 },
  { year: '2021', value: 40, secondary: 30 },
  { year: '2022', value: 60, secondary: 45 },
  { year: '2022', value: 55, secondary: 50 },
  { year: '2022', value: 70, secondary: 60 },
  { year: '2023', value: 50, secondary: 45 },
  { year: '2023', value: 65, secondary: 55 },
  { year: '2023', value: 60, secondary: 50 },
  { year: '2024', value: 80, secondary: 70 },
  { year: '2024', value: 75, secondary: 65 },
  { year: '2024', value: 85, secondary: 80 },
];

const ChartContent = () => (
  <div className="w-full h-full bg-gradient-to-b from-slate-400 to-slate-600 relative overflow-hidden text-white flex flex-col">
    {/* Background Image Simulation */}
    <div className="absolute inset-0 z-0">
        <img 
            src="https://picsum.photos/1200/800?grayscale&blur=2" 
            alt="Chart Background" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 to-transparent" />
    </div>

    {/* Header */}
    <div className="relative z-10 p-6 flex justify-between items-start">
        <div>
            <div className="text-[10px] opacity-70 uppercase tracking-widest mb-1">Reports &gt; Overview</div>
            <div className="flex items-baseline gap-3">
                <span className="text-5xl font-serif">78%</span>
                <span className="text-lg font-serif opacity-90">Efficiency Improvements</span>
            </div>
        </div>
        <button className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-medium hover:bg-white/30 transition">
            All Regions (33) ▼
        </button>
    </div>

    {/* Chart */}
    <div className="relative z-10 flex-1 px-2 pb-4">
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
                <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#ffffff" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
                {/* Custom Grid lines */}
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
                <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'rgba(255,255,255,0.6)', fontSize: 10}} 
                    interval={2}
                />
                <YAxis hide />
                <Tooltip 
                    contentStyle={{backgroundColor: '#333', border: 'none', borderRadius: '8px', fontSize: '12px'}}
                    itemStyle={{color: '#fff'}}
                />
                {/* Bars */}
                <Bar 
                    dataKey="value" 
                    barSize={2} 
                    fill="url(#barGradient)" 
                    radius={[2, 2, 0, 0]} 
                />
                 {/* Decorative scatter points simulation */}
                <Line 
                    type="monotone" 
                    dataKey="secondary" 
                    stroke="rgba(255,255,255,0.8)" 
                    strokeWidth={1}
                    dot={{r: 3, fill: 'white', strokeWidth: 0}}
                    activeDot={{r: 5}}
                />
            </ComposedChart>
        </ResponsiveContainer>
    </div>
  </div>
);

export const DeviceShowcase: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center gap-16 py-8">
        
        {/* Decorative Green Backgrounds */}
        <div className="absolute top-20 left-0 w-full h-[400px] bg-olive-500/50 rounded-[3rem] -z-10 transform -rotate-1 scale-105 opacity-20"></div>

        {/* Desktop Mockup */}
        <div className="w-full max-w-5xl relative">
            {/* Green backdrop card for Desktop */}
            <div className="absolute top-1/2 -left-12 w-[110%] h-4/5 bg-olive-400 rounded-3xl -translate-y-1/2 -z-10"></div>
            
            <div className="bg-black p-[2px] rounded-[1.5rem] shadow-2xl mx-auto w-full aspect-[16/10] max-h-[600px] overflow-hidden">
                <div className="bg-gray-800 w-full h-full rounded-[1.4rem] overflow-hidden relative">
                    {/* Window Controls */}
                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <ChartContent />
                </div>
            </div>
        </div>

        {/* Tablet Mockup */}
        <div className="w-full max-w-3xl relative">
             {/* Green backdrop card for Tablet */}
             <div className="absolute top-1/2 -right-8 w-[110%] h-3/5 bg-olive-400 rounded-3xl -translate-y-1/2 -z-10"></div>
             
             <div className="bg-black p-[10px] rounded-[2rem] shadow-2xl mx-auto w-full aspect-[4/3] max-h-[500px]">
                <div className="bg-gray-800 w-full h-full rounded-[1.5rem] overflow-hidden relative border-4 border-black">
                     <ChartContent />
                </div>
             </div>
        </div>

        {/* Mobile Mockup */}
        <div className="w-full max-w-sm relative">
             {/* Green backdrop card for Mobile */}
             <div className="absolute bottom-12 -left-8 w-[140%] h-1/2 bg-olive-400 rounded-3xl -z-10"></div>
             
             <div className="bg-black p-[12px] rounded-[3rem] shadow-2xl mx-auto w-[300px] h-[600px] relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30"></div>
                
                <div className="bg-gray-800 w-full h-full rounded-[2.5rem] overflow-hidden relative border-4 border-black">
                     {/* Mobile Status Bar Simulation */}
                     <div className="absolute top-2 w-full px-6 flex justify-between text-[10px] text-white z-20 font-medium">
                        <span>9:41</span>
                        <div className="flex gap-1">
                            <div className="w-4 h-3 bg-white/20 rounded-sm"></div>
                            <div className="w-4 h-3 bg-white/20 rounded-sm"></div>
                        </div>
                     </div>
                     <ChartContent />
                </div>
             </div>
        </div>

    </div>
  );
};