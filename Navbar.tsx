
import React from 'react';

export const Navbar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'}`}>
    <div className="container mx-auto px-8 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="bg-slate-900 text-white w-10 h-10 flex items-center justify-center font-bold text-xl rounded">恆</div>
        <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>AETERNA <span className="font-light">CENTRE</span></span>
      </div>
      <div className={`hidden md:flex space-x-10 text-sm font-medium tracking-widest uppercase ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
        <a href="#offices" className="hover:text-blue-500 transition-colors">方案</a>
        <a href="#amenities" className="hover:text-blue-500 transition-colors">服務</a>
        <a href="#locations" className="hover:text-blue-500 transition-colors">據點</a>
        <a href="#contact" className="bg-slate-900 text-white px-6 py-2 rounded hover:bg-slate-800">預約參觀</a>
      </div>
    </div>
  </nav>
);
