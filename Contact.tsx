
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-8">
      <div className="bg-slate-900 text-white grid lg:grid-cols-2 overflow-hidden shadow-2xl">
        <div className="p-16 lg:p-24 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-serif font-bold mb-8">預約專屬導覽</h2>
            <p className="text-slate-400 mb-12 text-lg">親臨感受 Aeterna Centre 的永恆之美。我們的顧問將為您介紹最合適的辦公解決方案。</p>
            <div className="space-y-6 text-sm tracking-widest uppercase">
              <div className="flex items-center"><span className="w-20 text-slate-500">電話</span> <span>(02) 1234-5678</span></div>
              <div className="flex items-center"><span className="w-20 text-slate-500">電郵</span> <span>service@aeterna.com</span></div>
              <div className="flex items-center"><span className="w-20 text-slate-500">時段</span> <span>MON-FRI 09:00 - 18:00</span></div>
            </div>
          </div>
        </div>
        <div className="p-16 lg:p-24 bg-white text-slate-900">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <CheckCircle size={64} className="text-green-500 mb-6" />
              <h3 className="text-3xl font-bold mb-4">預約已受理</h3>
              <p className="text-slate-500">我們的商務顧問將在 24 小時內與您聯繫。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">您的姓名</label>
                <input required className="w-full border-b-2 border-slate-100 py-3 outline-none focus:border-slate-900 transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">聯繫電話</label>
                <input required className="w-full border-b-2 border-slate-100 py-3 outline-none focus:border-slate-900 transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">感興趣的據點</label>
                <select className="w-full border-b-2 border-slate-100 py-3 outline-none focus:border-slate-900 transition-all">
                  <option>信義旗艦館</option>
                  <option>內湖瑞光館</option>
                  <option>內湖金莊館</option>
                  <option>內湖洲子館</option>
                </select>
              </div>
              <button className="w-full bg-slate-900 text-white py-5 font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center">
                送出預約 <Send size={18} className="ml-3" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
