
import React from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { EnergyMonitor } from '../components/Dashboard/EnergyMonitor';
import { 
  LayoutDashboard, 
  Sparkles, 
  BarChart3, 
  Zap, 
  Settings, 
  CircleDollarSign,
  Bell
} from 'lucide-react';
import { AnimatedCard } from '../components/UI/AnimatedCard';
import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-medium">My Energy Dashboard</h1>
              <p className="text-gray-500">Monitor and manage your energy consumption</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-energify-blue"></span>
                </button>
              </div>
              
              <div className="flex items-center bg-white rounded-lg border border-gray-200 divide-x">
                <div className="px-4 py-2">
                  <div className="text-sm text-gray-500">Balance</div>
                  <div className="font-medium">250 kWh</div>
                </div>
                <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-r-lg text-energify-blue">
                  <CircleDollarSign size={16} className="mr-1" />
                  <span className="text-sm font-medium">Trade</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/dashboard" className="flex items-center px-4 py-2 bg-energify-blue text-white rounded-lg">
              <LayoutDashboard size={16} className="mr-2" />
              <span>Overview</span>
            </Link>
            <Link to="/trading" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Zap size={16} className="mr-2" />
              <span>Trading</span>
            </Link>
            <Button variant="ghost" icon={<BarChart3 size={16} />}>Analytics</Button>
            <Button variant="ghost" icon={<Sparkles size={16} />}>Smart Contracts</Button>
            <Button variant="ghost" icon={<Settings size={16} />}>Settings</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {['Daily Usage', 'Peak Hours', 'Efficiency', 'Carbon Offset'].map((title, index) => (
              <AnimatedCard 
                key={title} 
                animation="fade-in" 
                delay={index * 100}
                className="rounded-xl border border-gray-100 bg-white p-5 flex items-center"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                  <Zap size={18} className="text-energify-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{title}</p>
                  <h3 className="text-xl font-medium">{Math.floor(Math.random() * 100)}.{Math.floor(Math.random() * 10)} kWh</h3>
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          <AnimatedCard animation="fade-in" delay={300}>
            <EnergyMonitor />
          </AnimatedCard>
          
          <div className="mt-10">
            <AnimatedCard animation="fade-in" delay={600}>
              <div className="rounded-xl border border-gray-100 shadow-sm bg-white p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-medium">Smart Contract Activity</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="px-2 py-1 bg-blue-50 text-energify-blue text-xs font-medium rounded">
                          {['Active', 'Completed', 'Pending'][index]}
                        </div>
                        <span className="text-xs text-gray-500">{['10m', '2h', '1d'][index]} ago</span>
                      </div>
                      <h4 className="font-medium mb-2">{['Energy Purchase', 'Grid Contribution', 'Demand Response'][index]}</h4>
                      <p className="text-sm text-gray-500 mb-3">Contract ID: #38{index}92{index}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Amount:</span>
                        <span className="font-medium">{[18, 25, 10][index]} kWh</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Value:</span>
                        <span className="font-medium">${[2.16, 3.00, 1.20][index]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
