
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-white py-20 border-t border-slate-100">
    <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start">
        <div className="text-2xl font-bold mb-2 tracking-tighter">AETERNA <span className="font-light">CENTRE</span></div>
        <p className="text-slate-400 text-xs tracking-widest">© 2024 恆序商務中心. ALL RIGHTS RESERVED.</p>
      </div>
      <div className="flex space-x-12 text-xs font-bold uppercase tracking-widest text-slate-400">
        <a href="#" className="hover:text-slate-900">隱私條款</a>
        <a href="#" className="hover:text-slate-900">常見問題</a>
        <a href="#" className="hover:text-slate-900">人才招募</a>
      </div>
    </div>
  </footer>
);
