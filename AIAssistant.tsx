
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<{role: 'ai' | 'me', text: string}[]>([
    { role: 'ai', text: '尊貴的客戶您好，我是恆序商務顧問，請問有什麼可以為您服務的？' }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setChat(prev => [...prev, { role: 'me', text: userMsg }]);
    setIsLoading(true);

    const res = await getGeminiResponse(userMsg);
    setChat(prev => [...prev, { role: 'ai', text: res }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all group">
          <MessageSquare className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
          </span>
        </button>
      ) : (
        <div className="bg-white w-[380px] h-[550px] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8">
          <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Bot size={20} />
              <span className="font-bold tracking-widest text-sm uppercase">恆序商務智助</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
            {chat.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-4 rounded-lg text-sm leading-relaxed max-w-[85%] ${m.role === 'me' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-800 border border-slate-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start space-x-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
              </div>
            )}
          </div>
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex items-center space-x-3">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              className="flex-1 bg-slate-100 px-4 py-3 rounded text-sm outline-none focus:ring-1 focus:ring-slate-400 transition-all" 
              placeholder="請輸入您的問題..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading} className="text-slate-900 p-2 hover:bg-slate-50 rounded transition-colors">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
