import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductRemoteAI from './components/ProductRemoteAI';
import Business from './components/Business';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductRemoteAI />
        <Business />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
