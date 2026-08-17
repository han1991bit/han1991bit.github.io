import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductRemoteAI from './components/ProductRemoteAI';
import Business from './components/Business';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProductRemoteAI />
        <Business />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
