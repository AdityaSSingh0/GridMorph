
import React from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { MarketplacePreview } from '../components/Trading/MarketplacePreview';
import { 
  LayoutDashboard, 
  Sparkles, 
  BarChart3, 
  Zap, 
  Settings, 
  CircleDollarSign, 
  Bell,
  Wallet,
  BarChart,
  History,
  HandCoins
} from 'lucide-react';
import { AnimatedCard } from '../components/UI/AnimatedCard';
import { Button } from '../components/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Trading = () => {
  const navigate = useNavigate();

  const handleNotification = () => {
    toast({
      title: "Notifications",
      description: "You have 2 new trading opportunities",
    });
  };

  const handleAddFunds = () => {
    toast({
      title: "Add Funds",
      description: "Wallet funding feature will be available soon",
    });
  };

  const handleViewAnalytics = () => {
    toast({
      title: "Analytics",
      description: "Trading analytics will be available soon",
    });
  };

  const handleSmartContracts = () => {
    toast({
      title: "Smart Contracts",
      description: "Smart Contracts module will be available soon",
    });
  };

  const handleSettings = () => {
    toast({
      title: "Settings",
      description: "Trading settings will be available soon",
    });
  };

  const handleSellEnergy = () => {
    toast({
      title: "Sell Energy",
      description: "Creating new energy sell listing...",
    });
  };

  const handleManageTrades = () => {
    toast({
      title: "Manage Trades",
      description: "You have 3 active trades",
    });
  };

  const handleViewHistory = () => {
    toast({
      title: "Transaction History",
      description: "Viewing your past 28 transactions",
    });
  };

  const handleManageContracts = () => {
    toast({
      title: "Smart Contracts",
      description: "Managing your automated trading contracts",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-medium">Energy Trading Platform</h1>
              <p className="text-gray-500">Buy and sell energy directly with other users</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  className="p-2 text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
                  onClick={handleNotification}
                  aria-label="View notifications"
                >
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-energify-blue" aria-hidden="true"></span>
                </button>
              </div>
              
              <div className="flex items-center bg-white rounded-lg border border-gray-200 divide-x">
                <div className="px-4 py-2">
                  <div className="text-sm text-gray-500">Wallet Balance</div>
                  <div className="font-medium">$38.50</div>
                </div>
                <button 
                  onClick={handleAddFunds}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-r-lg text-energify-blue"
                  aria-label="Add funds to wallet"
                >
                  <CircleDollarSign size={16} className="mr-1" />
                  <span className="text-sm font-medium">Add Funds</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/dashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <LayoutDashboard size={16} className="mr-2" />
              <span>Overview</span>
            </Link>
            <Link to="/trading" className="flex items-center px-4 py-2 bg-energify-blue text-white rounded-lg">
              <Zap size={16} className="mr-2" />
              <span>Trading</span>
            </Link>
            <Button variant="ghost" icon={<BarChart3 size={16} />} onClick={handleViewAnalytics}>Analytics</Button>
            <Button variant="ghost" icon={<Sparkles size={16} />} onClick={handleSmartContracts}>Smart Contracts</Button>
            <Button variant="ghost" icon={<Settings size={16} />} onClick={handleSettings}>Settings</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <AnimatedCard animation="fade-in" delay={100} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                  <Wallet size={18} className="text-energify-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available to Trade</p>
                  <h3 className="text-xl font-medium">250 kWh</h3>
                </div>
              </div>
              <div className="mt-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-center" 
                  size="sm"
                  onClick={handleSellEnergy}
                >
                  Sell Energy
                </Button>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={200} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center mr-4">
                  <HandCoins size={18} className="text-energify-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Trades</p>
                  <h3 className="text-xl font-medium">3</h3>
                </div>
              </div>
              <div className="mt-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-center" 
                  size="sm" 
                  onClick={handleManageTrades}
                >
                  Manage Trades
                </Button>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={300} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                  <BarChart size={18} className="text-energify-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Rate</p>
                  <h3 className="text-xl font-medium">$0.12/kWh</h3>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">24h change</span>
                <span className="text-xs text-green-500 flex items-center">
                  +2.5% <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                </span>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={400} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                  <History size={18} className="text-energify-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Transactions</p>
                  <h3 className="text-xl font-medium">28</h3>
                </div>
              </div>
              <div className="mt-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-center" 
                  size="sm"
                  onClick={handleViewHistory}
                >
                  View History
                </Button>
              </div>
            </AnimatedCard>
          </div>
          
          <AnimatedCard animation="fade-in" delay={500}>
            <MarketplacePreview />
          </AnimatedCard>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <AnimatedCard animation="fade-in" delay={700} className="rounded-xl border border-gray-100 bg-white p-6 lg:col-span-2">
              <h3 className="text-xl font-medium mb-4">Market Analytics</h3>
              <div className="h-64 relative">
                {/* Simplified chart visualization */}
                <div className="absolute inset-0">
                  <div className="absolute bottom-0 left-0 right-0 h-52 flex">
                    <div className="flex-1 relative">
                      <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 bg-blue-50 h-32"></div>
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-energify-blue/70 to-energify-blue/0 h-52"
                          style={{ clipPath: "polygon(0 80%, 5% 75%, 10% 85%, 15% 70%, 20% 80%, 25% 65%, 30% 75%, 35% 60%, 40% 70%, 45% 55%, 50% 65%, 55% 50%, 60% 60%, 65% 45%, 70% 55%, 75% 40%, 80% 50%, 85% 35%, 90% 45%, 95% 30%, 100% 40%, 100% 100%, 0 100%)" }}
                        ></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 border-t border-energify-blue/40 border-dashed"></div>
                      <div className="absolute bottom-8 left-0 right-0 border-t border-energify-blue/40 border-dashed"></div>
                      <div className="absolute bottom-16 left-0 right-0 border-t border-energify-blue/40 border-dashed"></div>
                      <div className="absolute bottom-24 left-0 right-0 border-t border-energify-blue/40 border-dashed"></div>
                      <div className="absolute bottom-32 left-0 right-0 border-t border-energify-blue/40 border-dashed"></div>
                      <div className="absolute bottom-40 left-0 right-0 border-t border-energify-blue/40 border-dashed"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 px-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-in" delay={800} className="rounded-xl border border-gray-100 bg-white p-6">
              <h3 className="text-xl font-medium mb-4">Smart Contract Status</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Purchase Agreement</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Active</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Auto-purchase at optimal price</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Max Price: $0.15/kWh</span>
                    <span>Renews in 15h</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Sell Surplus</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Active</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Auto-sell surplus energy</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Min Price: $0.11/kWh</span>
                    <span>Always on</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Grid Support</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">Standby</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Supply during high demand</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Reward: +20% rate</span>
                    <span>Triggers automatically</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleManageContracts}
                >
                  Manage Smart Contracts
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

export default Trading;
