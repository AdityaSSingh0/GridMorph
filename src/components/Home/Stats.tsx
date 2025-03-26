
import React, { useEffect, useState, useRef } from 'react';
import { 
  BarChart, 
  RefreshCw, 
  Lock, 
  Users 
} from 'lucide-react';
import { AnimatedCard } from '../UI/AnimatedCard';
import { GlassCard } from '../UI/GlassCard';

const stats = [
  {
    icon: <BarChart className="h-6 w-6 text-energify-blue" />,
    title: 'Energy Transactions',
    value: 47800,
    suffix: '+',
    description: 'Processed securely through our platform',
  },
  {
    icon: <Lock className="h-6 w-6 text-energify-blue" />,
    title: 'Secure Contracts',
    value: 12950,
    suffix: '+',
    description: 'Smart contracts executed successfully',
  },
  {
    icon: <Users className="h-6 w-6 text-energify-blue" />,
    title: 'Active Users',
    value: 5280,
    suffix: '+',
    description: 'Users actively trading on our platform',
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-energify-blue" />,
    title: 'CO₂ Reduction',
    value: 32,
    suffix: '%',
    description: 'Average carbon footprint reduction',
  },
];

export const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateNumbers();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      const newValues = stats.map((stat, index) => {
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        return Math.floor(easeOutQuart * stat.value);
      });
      
      setAnimatedStats(newValues);
      
      if (frame === totalFrames) {
        clearInterval(timer);
        setAnimatedStats(stats.map(stat => stat.value));
      }
    }, frameDuration);
  };

  return (
    <section className="py-20 bg-energify-neutral" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedCard animation="fade-in" className="mb-3">
            <h2 className="text-3xl sm:text-4xl mb-4">Demonstrable Impact</h2>
          </AnimatedCard>
          <AnimatedCard animation="fade-in" delay={300}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is making measurable differences in energy efficiency, cost reduction, and environmental impact.
            </p>
          </AnimatedCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCard 
              key={stat.title}
              animation="scale-in"
              delay={200 + index * 150}
              className="overflow-hidden"
            >
              <GlassCard className="p-6 h-full">
                <div className="h-14 w-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="mb-3">
                  <h3 className="text-4xl font-light mb-1 flex items-end">
                    <span>{animatedStats[index].toLocaleString()}</span>
                    <span className="text-energify-blue font-medium">{stat.suffix}</span>
                  </h3>
                  <p className="text-xl font-medium text-gray-900">{stat.title}</p>
                </div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center">
            <AnimatedCard 
              animation="scale-in"
              delay={800}
              className="max-w-lg"
            >
              <GlassCard className="py-8 px-10">
                <h3 className="text-2xl font-medium mb-4">Ready to transform your energy ecosystem?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of users leveraging our advanced platform for sustainable energy management.
                </p>
                <button className="bg-energify-blue hover:bg-energify-blue-dark text-white rounded-lg px-6 py-3 font-medium transition-colors">
                  Start Your Journey Today
                </button>
              </GlassCard>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};
