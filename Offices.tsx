
import React from 'react';
import { OFFICE_TYPES } from '../constants';
import { Check } from 'lucide-react';

export const Offices: React.FC = () => (
  <div className="container mx-auto px-8">
    <div className="text-center mb-20">
      <h2 className="text-4xl font-serif font-bold mb-4">空間方案</h2>
      <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
    </div>
    <div className="grid lg:grid-cols-3 gap-12">
      {OFFICE_TYPES.map(o => (
        <div key={o.id} className="group bg-white border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="relative overflow-hidden">
            <img src={o.image} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" alt={o.title} />
          </div>
          <div className="p-10">
            <h3 className="text-2xl font-bold mb-2">{o.title}</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">{o.description}</p>
            <div className="text-slate-900 text-2xl font-bold mb-8 border-b border-slate-100 pb-6">{o.price}</div>
            <ul className="space-y-4 mb-10">
              {o.features.map((f, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600">
                  <Check size={16} className="text-slate-900 mr-3" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block text-center w-full border border-slate-900 py-4 font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">詳情諮詢</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);
