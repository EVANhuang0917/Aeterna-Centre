
import React from 'react';

export const Hero: React.FC = () => (
  <div className="h-screen relative flex items-center bg-slate-900">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="恆序商務中心" />
    </div>
    <div className="container mx-auto px-8 relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-white text-6xl md:text-8xl font-serif leading-tight mb-8">恆久專業<br/><span className="italic text-slate-400">序啟卓越</span></h1>
        <p className="text-slate-300 text-xl md:text-2xl mb-12 font-light leading-relaxed">提供信義區與內湖區頂級商務空間，<br/>為您的事業奠定跨越時代的卓越高度。</p>
        <div className="flex space-x-6">
          <a href="#offices" className="bg-white text-slate-900 px-10 py-5 font-bold uppercase tracking-widest hover:bg-slate-100 transition-all shadow-2xl">查看方案</a>
          <a href="#contact" className="border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white/10 transition-all">即刻進駐</a>
        </div>
      </div>
    </div>
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
    </div>
  </div>
);
