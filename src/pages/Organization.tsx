import React from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Zap, 
  Settings, 
  Bell,
  Building2,
  PowerCircle,
  ClipboardList,
  ShieldCheck,
  CircleDollarSign,
  AreaChart,
  Circle
} from 'lucide-react';
import { AnimatedCard } from '../components/UI/AnimatedCard';
import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Organization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-medium">Organization Dashboard</h1>
              <p className="text-gray-500">Manage your energy production and distribution</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-energify-blue"></span>
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-gray-200">
                      <Users size={14} className="text-gray-500" />
                    </div>
                  ))}
                </div>
                <Button size="sm" variant="outline">Invite</Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/dashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <LayoutDashboard size={16} className="mr-2" />
              <span>Overview</span>
            </Link>
            <Link to="/trading" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Zap size={16} className="mr-2" />
              <span>Trading</span>
            </Link>
            <Link to="/organization" className="flex items-center px-4 py-2 bg-energify-blue text-white rounded-lg">
              <Building2 size={16} className="mr-2" />
              <span>Organization</span>
            </Link>
            <Button variant="ghost" icon={<BarChart3 size={16} />}>Analytics</Button>
            <Button variant="ghost" icon={<Settings size={16} />}>Settings</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <AnimatedCard animation="fade-in" delay={100} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                  <PowerCircle size={18} className="text-energify-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Production</p>
                  <h3 className="text-xl font-medium">25,840 kWh</h3>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-xs text-green-500 flex items-center">
                  +12.5% <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                </span>
                <span className="text-xs text-gray-500 ml-2">vs. last month</span>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={200} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center mr-4">
                  <Users size={18} className="text-energify-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Participating Users</p>
                  <h3 className="text-xl font-medium">1,248</h3>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-xs text-green-500 flex items-center">
                  +5.2% <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                </span>
                <span className="text-xs text-gray-500 ml-2">new users this week</span>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={300} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                  <ClipboardList size={18} className="text-energify-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Contracts</p>
                  <h3 className="text-xl font-medium">384</h3>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-xs text-green-500 flex items-center">98.2%</span>
                <span className="text-xs text-gray-500 ml-2">fulfillment rate</span>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={400} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                  <ShieldCheck size={18} className="text-energify-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">System Health</p>
                  <h3 className="text-xl font-medium">Excellent</h3>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-xs text-green-500 flex items-center">99.9%</span>
                <span className="text-xs text-gray-500 ml-2">uptime this month</span>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <AnimatedCard animation="fade-in" delay={500} className="rounded-xl border border-gray-100 bg-white p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium">Energy Production & Distribution</h3>
                <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
                  <button className="px-3 py-1 rounded-md text-sm font-medium bg-white text-energify-blue shadow-sm">Day</button>
                  <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700">Week</button>
                  <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700">Month</button>
                </div>
              </div>
              
              <div className="h-64 relative">
                {/* Simplified chart visualization */}
                <div className="absolute inset-0">
                  <div className="absolute bottom-0 left-0 right-0 h-56 flex">
                    <div className="flex-1 relative">
                      <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden">
                        {/* Green area (production) */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-energify-green/70 to-energify-green/0 h-56"
                          style={{ clipPath: "polygon(0 65%, 5% 60%, 10% 70%, 15% 65%, 20% 75%, 25% 70%, 30% 80%, 35% 85%, 40% 75%, 45% 80%, 50% 85%, 55% 80%, 60% 90%, 65% 85%, 70% 80%, 75% 85%, 80% 75%, 85% 80%, 90% 75%, 95% 80%, 100% 75%, 100% 100%, 0 100%)" }}
                        ></div>
                        
                        {/* Blue area (distribution) */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-energify-blue/70 to-energify-blue/0 h-56"
                          style={{ clipPath: "polygon(0 75%, 5% 70%, 10% 80%, 15% 75%, 20% 85%, 25% 80%, 30% 90%, 35% 95%, 40% 85%, 45% 90%, 50% 95%, 55% 90%, 60% 100%, 65% 95%, 70% 90%, 75% 95%, 80% 85%, 85% 90%, 90% 85%, 95% 90%, 100% 85%, 100% 100%, 0 100%)" }}
                        ></div>
                      </div>
                      
                      {/* Grid lines */}
                      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200"></div>
                      <div className="absolute bottom-14 left-0 right-0 border-t border-gray-200 border-dashed"></div>
                      <div className="absolute bottom-28 left-0 right-0 border-t border-gray-200 border-dashed"></div>
                      <div className="absolute bottom-42 left-0 right-0 border-t border-gray-200 border-dashed"></div>
                      
                      {/* Time markers */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-2 text-xs text-gray-500">
                        {['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'].map((time, i) => (
                          <span key={i}>{time}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-energify-green rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-600">Production</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-energify-blue rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-600">Distribution</span>
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={600} className="rounded-xl border border-gray-100 bg-white p-6">
              <h3 className="text-xl font-medium mb-6">Energy Sources</h3>
              
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  {/* Solar - 45% */}
                  <Circle size={192} className="absolute inset-0 stroke-energify-blue" strokeWidth={8} strokeDasharray="283" strokeDashoffset="155" />
                  
                  {/* Wind - 30% */}
                  <Circle size={192} className="absolute inset-0 stroke-energify-green" strokeWidth={8} strokeDasharray="283" strokeDashoffset="198" strokeDashoffset="85" />
                  
                  {/* Hydro - 15% */}
                  <Circle size={192} className="absolute inset-0 stroke-energify-teal" strokeWidth={8} strokeDasharray="283" strokeDashoffset="240" strokeDashoffset="55" />
                  
                  {/* Other - 10% */}
                  <Circle size={192} className="absolute inset-0 stroke-gray-300" strokeWidth={8} strokeDasharray="283" strokeDashoffset="255" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="text-2xl font-medium">25.8 MWh</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-energify-blue rounded-sm mr-2"></div>
                    <span className="text-sm">Solar</span>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-energify-green rounded-sm mr-2"></div>
                    <span className="text-sm">Wind</span>
                  </div>
                  <span className="text-sm font-medium">30%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-energify-teal rounded-sm mr-2"></div>
                    <span className="text-sm">Hydro</span>
                  </div>
                  <span className="text-sm font-medium">15%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-sm mr-2"></div>
                    <span className="text-sm">Other</span>
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AnimatedCard animation="fade-in" delay={700} className="rounded-xl border border-gray-100 bg-white p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-medium">Financial Overview</h3>
                  <p className="text-sm text-gray-500">Current Month</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <CircleDollarSign size={20} className="text-energify-blue" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Revenue</span>
                  <span className="text-lg font-medium">$128,450</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Operational Costs</span>
                  <span className="text-lg font-medium">$42,380</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Smart Contract Fees</span>
                  <span className="text-lg font-medium">$2,845</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium">Net Profit</span>
                  <span className="text-xl font-medium text-energify-blue">$83,225</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full" icon={<AreaChart size={16} />}>
                  Financial Report
                </Button>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={800} className="rounded-xl border border-gray-100 bg-white p-6 lg:col-span-2">
              <h3 className="text-xl font-medium mb-6">Recent Activities</h3>
              
              <div className="space-y-4">
                {[
                  { 
                    title: 'Smart Grid Optimization', 
                    desc: 'AI adjusted energy distribution patterns based on predicted demand', 
                    time: '10 minutes ago',
                    icon: <Zap size={16} className="text-white" />,
                    color: 'bg-energify-blue' 
                  },
                  { 
                    title: 'New Producer Joined', 
                    desc: 'SolarStream Inc. added 50kW capacity to the network', 
                    time: '2 hours ago',
                    icon: <Users size={16} className="text-white" />,
                    color: 'bg-energify-green' 
                  },
                  { 
                    title: 'Contract Auto-Renewal', 
                    desc: 'DistribuTech agreement renewed for another month', 
                    time: '5 hours ago',
                    icon: <ClipboardList size={16} className="text-white" />,
                    color: 'bg-energify-blue' 
                  },
                  { 
                    title: 'Security Update', 
                    desc: 'Blockchain security protocol upgraded to v3.2', 
                    time: '1 day ago',
                    icon: <ShieldCheck size={16} className="text-white" />,
                    color: 'bg-energify-blue' 
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`h-8 w-8 rounded-lg ${activity.color} flex items-center justify-center mr-4 mt-0.5 flex-shrink-0`}>
                      {activity.icon}
                    </div>
                    <div className="flex-grow border-b border-gray-100 pb-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{activity.title}</h4>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{activity.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button variant="ghost" className="text-energify-blue">
                  View All Activities
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Organization;
