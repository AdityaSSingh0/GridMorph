
import React from 'react';
import { 
  LinkIcon, 
  Cpu, 
  Layers, 
  Zap, 
  BarChart3, 
  DollarSign, 
  Trophy, 
  Activity,
  Users, 
  Mic 
} from 'lucide-react';
import { AnimatedCard } from '../UI/AnimatedCard';

const features = [
  {
    icon: <LinkIcon className="h-6 w-6 text-energify-blue" />,
    title: 'Blockchain-Powered',
    description: 'Secure, transparent, and immutable ledger for all energy transactions between consumers and producers.'
  },
  {
    icon: <Layers className="h-6 w-6 text-energify-blue" />,
    title: 'Smart Contracts',
    description: 'Self-executing contracts that automatically manage energy trading and distribution processes.'
  },
  {
    icon: <Zap className="h-6 w-6 text-energify-blue" />,
    title: 'IoT Energy Monitoring',
    description: 'Real-time tracking of energy consumption, production, and grid health status.'
  },
  {
    icon: <Cpu className="h-6 w-6 text-energify-blue" />,
    title: 'AI-Driven Predictions',
    description: 'Machine learning algorithms forecast energy needs and optimize distribution pathways.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-energify-blue" />,
    title: 'Dynamic Pricing',
    description: 'AI-powered pricing model that adjusts rates based on real-time demand and supply metrics.'
  },
  {
    icon: <DollarSign className="h-6 w-6 text-energify-blue" />,
    title: 'Secure Payments',
    description: 'Integrated crypto and fiat payment options for seamless energy transactions.'
  },
  {
    icon: <Trophy className="h-6 w-6 text-energify-blue" />,
    title: 'Gamified Savings',
    description: 'Earn tokens and rewards for efficient energy consumption and sustainable practices.'
  },
  {
    icon: <Activity className="h-6 w-6 text-energify-blue" />,
    title: 'Fault Detection',
    description: 'Predictive analytics to identify and mitigate potential failures in the energy grid.'
  },
  {
    icon: <Users className="h-6 w-6 text-energify-blue" />,
    title: 'P2P Microgrid',
    description: 'Local energy-sharing networks that enable communities to trade excess energy.'
  },
  {
    icon: <Mic className="h-6 w-6 text-energify-blue" />,
    title: 'Voice Control',
    description: 'Integration with smart assistants for voice-activated energy monitoring and management.'
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedCard className="mb-3">
            <h2 className="text-3xl sm:text-4xl mb-4">Cutting-Edge Technology Stack</h2>
          </AnimatedCard>
          <AnimatedCard delay={300}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines blockchain, IoT, and AI technologies to create a comprehensive, efficient, and secure energy management ecosystem.
            </p>
          </AnimatedCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={feature.title}
              animation="fade-in"
              delay={200 + index * 100}
              className="hover-scale"
            >
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 h-full">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
