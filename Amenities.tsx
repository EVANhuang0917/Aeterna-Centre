
import React from 'react';
import { AMENITIES } from '../constants';
import * as Icons from 'lucide-react';

export const Amenities: React.FC = () => (
  <div className="container mx-auto px-8">
    <div className="flex flex-col lg:flex-row gap-20 items-center">
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">全方位的商務配套，<br/>只為專注您的核心。</h2>
        <p className="text-slate-500 mb-12 text-lg">除了頂級硬體，我們更提供細緻入微的行政支援與優雅的工作氛圍。</p>
        <div className="grid grid-cols-2 gap-y-12 gap-x-8">
          {AMENITIES.map(a => {
            const IconComponent = (Icons as any)[a.icon];
            return (
              <div key={a.id} className="flex flex-col">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl shadow-sm mb-4">
                  <IconComponent className="text-slate-900" size={24} />
                </div>
                <h4 className="font-bold mb-2">{a.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{a.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="absolute -inset-4 border border-slate-200 -z-10 translate-x-8 translate-y-8"></div>
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" alt="恆序設施" />
      </div>
    </div>
  </div>
);
