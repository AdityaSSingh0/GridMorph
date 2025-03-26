
import React, { useEffect } from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { Hero } from '../components/Home/Hero';
import { Features } from '../components/Home/Features';
import { Stats } from '../components/Home/Stats';

const Index = () => {
  // Initialize scroll reveal effect for animation on scroll
  useEffect(() => {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    scrollRevealElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      scrollRevealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Stats />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
