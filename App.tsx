
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Offices } from './components/Offices';
import { Locations } from './components/Locations';
import { Amenities } from './components/Amenities';
import { Contact } from './components/Contact';
import { AIAssistant } from './components/AIAssistant';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <section id="offices" className="py-24 bg-white"><Offices /></section>
      <section id="amenities" className="py-24 bg-slate-50"><Amenities /></section>
      <section id="locations" className="py-24 bg-white"><Locations /></section>
      <section id="contact" className="py-24 bg-slate-50"><Contact /></section>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
