
import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChartBig, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '../UI/Button';
import { GlassCard } from '../UI/GlassCard';
import { AnimatedCard } from '../UI/AnimatedCard';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [visibleText, setVisibleText] = useState(0);
  const texts = ['Decentralized', 'Sustainable', 'Intelligent'];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative pt-28 pb-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-energify-blue-light/30 via-transparent to-transparent"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern-bg opacity-70"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full bg-energify-blue/10 animate-float"></div>
      <div className="absolute bottom-1/4 left-[10%] w-20 h-20 rounded-full bg-energify-teal/10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-[20%] w-16 h-16 rounded-full bg-energify-green/10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <AnimatedCard animation="fade-in" className="mb-4">
              <span className="inline-block text-sm font-medium px-3 py-1 bg-blue-50 text-energify-blue rounded-full">
                Revolutionizing Energy Distribution
              </span>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={300} className="relative">
              <h1 className="text-balance font-light mb-6">
                The{' '}
                <span className="relative inline-block">
                  {texts.map((text, index) => (
                    <span
                      key={text}
                      className="absolute left-0 transition-opacity duration-1000 text-energify-blue font-normal"
                      style={{ opacity: visibleText === index ? 1 : 0 }}
                    >
                      {text}
                    </span>
                  ))}
                  <span className="invisible">{texts[0]}</span>
                </span>{' '}
                Solution for<br />Energy Management
              </h1>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={600} className="mb-10">
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Leverage blockchain, IoT, and AI to optimize energy distribution, enable peer-to-peer trading, and create a sustainable energy ecosystem.
              </p>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={900} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" icon={<ArrowRight />} iconPosition="right">
                Get Started
              </Button>
              <Link to="/dashboard" className="inline-flex items-center text-energify-blue hover:text-energify-blue-dark transition-colors">
                Experience Dashboard <ArrowRight size={16} className="ml-1" />
              </Link>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={1200} className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-blue-${i * 100 + 200}`}>
                    <span className="text-xs text-white font-medium">{i + 1}K</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">Join over <span className="text-energify-blue font-medium">5,000+</span> users worldwide</p>
            </AnimatedCard>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <AnimatedCard animation="fade-in" delay={600} className="relative z-10">
                <GlassCard className="p-6 md:p-8 max-w-xl mx-auto">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 pb-0">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Energy Dashboard</h3>
                        <div className="flex space-x-2">
                          <span className="w-3 h-3 rounded-full bg-red-400"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                          <span className="w-3 h-3 rounded-full bg-green-400"></span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <BarChartBig size={18} className="text-energify-blue mb-1" />
                          <p className="text-xs text-gray-500">Consumption</p>
                          <p className="text-lg font-medium">12.4 kWh</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <Zap size={18} className="text-energify-teal mb-1" />
                          <p className="text-xs text-gray-500">Production</p>
                          <p className="text-lg font-medium">8.7 kWh</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <ShieldCheck size={18} className="text-energify-green mb-1" />
                          <p className="text-xs text-gray-500">Savings</p>
                          <p className="text-lg font-medium">+24%</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-48 px-4 relative">
                      {/* Simplified chart visualization */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end">
                        {[35, 60, 40, 70, 55, 80, 65, 90, 75, 100, 85, 60].map((height, i) => (
                          <div 
                            key={i} 
                            className="flex-1 mx-0.5"
                            style={{ height: `${height}%` }}
                          >
                            <div className="h-full w-full bg-energify-blue opacity-70 rounded-t-sm"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedCard>
              
              <AnimatedCard animation="scale-in" delay={900} className="absolute -bottom-10 -right-10 z-0 hidden md:block">
                <GlassCard className="p-4 max-w-[200px]" intensity="light">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-energify-green/20 flex items-center justify-center">
                      <Zap size={18} className="text-energify-green" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Current Status</p>
                      <p className="text-sm font-medium">Optimized Flow</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedCard>
              
              <AnimatedCard animation="scale-in" delay={1200} className="absolute -top-10 -left-10 z-0 hidden md:block">
                <GlassCard className="p-4 max-w-[200px]" intensity="light">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-energify-blue/20 flex items-center justify-center">
                      <ShieldCheck size={18} className="text-energify-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Network</p>
                      <p className="text-sm font-medium">Securely Connected</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
