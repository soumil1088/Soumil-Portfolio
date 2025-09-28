import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* AI Computing Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-2] opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxBSSUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzU5MDM1NTAwfDA&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)'
        }}
      />
      
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;
