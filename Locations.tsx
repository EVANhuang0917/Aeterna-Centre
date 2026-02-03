
import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin } from 'lucide-react';

export const Locations: React.FC = () => (
  <div className="container mx-auto px-8">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
      <h2 className="text-4xl font-serif font-bold">卓越據點</h2>
      <p className="text-slate-500 max-w-sm">我們精心選址於台北最重要的商務廊道，確保您的企業始終與成功同步。</p>
    </div>
    <div className="grid md:grid-cols-2 gap-12">
      {LOCATIONS.map(loc => (
        <div key={loc.id} className="group cursor-pointer">
          <div className="overflow-hidden mb-6">
            <img src={loc.image} className="w-full h-80 object-cover group-hover:scale-105 transition-all duration-700" alt={loc.name} />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2 block">{loc.area}</span>
              <h3 className="text-2xl font-bold mb-2">{loc.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{loc.description}</p>
              <div className="flex items-center text-xs text-slate-800 font-bold bg-slate-100 inline-flex px-3 py-1 rounded">
                <MapPin size={12} className="mr-1" /> {loc.mrt} ({loc.distance})
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
