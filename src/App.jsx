import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Business />
      </main>
      <Footer />
    </div>
  );
}

export default App;
