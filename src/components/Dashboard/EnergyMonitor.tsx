
import React, { useState } from 'react';
import GlassCard from '../UI/GlassCard';
import { AnimatedCard } from '../UI/AnimatedCard';
import { 
  BarChart3, 
  Zap, 
  CircleDollarSign, 
  Clock, 
  Shield,
  BarChart 
} from 'lucide-react';
import { Button } from '@/components/ui/custom-button'; // Updated import to use the correct path

const mockData = {
  consumption: 28.4,
  production: 16.7,
  balance: 11.7,
  savings: 34,
  predictions: [
    { time: '00:00', value: 0.8 },
    { time: '04:00', value: 0.5 },
    { time: '08:00', value: 1.2 },
    { time: '12:00', value: 2.8 },
    { time: '16:00', value: 2.5 },
    { time: '20:00', value: 1.9 },
  ],
  hourly: [
    { hour: '00', consumed: 0.8, produced: 0.0 },
    { hour: '01', consumed: 0.6, produced: 0.0 },
    { hour: '02', consumed: 0.5, produced: 0.0 },
    { hour: '03', consumed: 0.5, produced: 0.0 },
    { hour: '04', consumed: 0.4, produced: 0.0 },
    { hour: '05', consumed: 0.5, produced: 0.1 },
    { hour: '06', consumed: 0.7, produced: 0.2 },
    { hour: '07', consumed: 1.0, produced: 0.4 },
    { hour: '08', consumed: 1.2, produced: 0.8 },
    { hour: '09', consumed: 1.5, produced: 1.2 },
    { hour: '10', consumed: 1.8, produced: 1.5 },
    { hour: '11', consumed: 2.2, produced: 1.8 },
    { hour: '12', consumed: 2.8, produced: 2.0 },
    { hour: '13', consumed: 2.5, produced: 2.0 },
    { hour: '14', consumed: 2.3, produced: 1.8 },
    { hour: '15', consumed: 2.5, produced: 1.6 },
    { hour: '16', consumed: 2.7, produced: 1.3 },
    { hour: '17', consumed: 2.5, produced: 1.0 },
    { hour: '18', consumed: 2.2, produced: 0.6 },
    { hour: '19', consumed: 2.0, produced: 0.3 },
    { hour: '20', consumed: 1.9, produced: 0.1 },
    { hour: '21', consumed: 1.7, produced: 0.0 },
    { hour: '22', consumed: 1.4, produced: 0.0 },
    { hour: '23', consumed: 1.0, produced: 0.0 },
  ]
};

const timeRanges = ['Day', 'Week', 'Month', 'Year'];

export const EnergyMonitor = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <AnimatedCard animation="fade-in">
          <div className="rounded-xl border border-gray-100 shadow-sm bg-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-medium">Energy Consumption & Production</h2>
                <p className="text-gray-500">Monitor your energy flow in real-time</p>
              </div>
              <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
                {timeRanges.map((range, index) => (
                  <button
                    key={range}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      selectedTimeRange === index
                        ? 'bg-white text-energify-blue shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setSelectedTimeRange(index)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-64 relative">
              {/* Simplified chart visualization */}
              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-52">
                  {mockData.hourly.map((hour, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="relative w-full flex justify-center">
                        {/* Production bar */}
                        <div 
                          className="absolute bottom-0 w-3 rounded-t-sm bg-energify-green"
                          style={{ height: `${hour.produced * 15}px` }}
                        ></div>
                        {/* Consumption bar */}
                        <div 
                          className="w-3 rounded-t-sm bg-energify-blue"
                          style={{ height: `${hour.consumed * 15}px` }}
                        ></div>
                      </div>
                      {index % 4 === 0 && (
                        <div className="mt-2 text-xs text-gray-500">{hour.hour}:00</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-energify-blue rounded-sm mr-2"></div>
                <span className="text-sm text-gray-600">Consumption</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-energify-green rounded-sm mr-2"></div>
                <span className="text-sm text-gray-600">Production</span>
              </div>
            </div>
          </div>
        </AnimatedCard>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <AnimatedCard animation="fade-in" delay={200}>
            <div className="rounded-xl border border-gray-100 shadow-sm bg-white p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-gray-500">Total Consumption</p>
                  <h3 className="text-2xl font-medium">{mockData.consumption} kWh</h3>
                </div>
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <BarChart3 size={20} className="text-energify-blue" />
                </div>
              </div>
              <div className="h-10 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-energify-blue rounded-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">70% of your monthly average</p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard animation="fade-in" delay={300}>
            <div className="rounded-xl border border-gray-100 shadow-sm bg-white p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-gray-500">Total Production</p>
                  <h3 className="text-2xl font-medium">{mockData.production} kWh</h3>
                </div>
                <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <Zap size={20} className="text-energify-green" />
                </div>
              </div>
              <div className="h-10 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-energify-green rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">60% of your capacity</p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard animation="fade-in" delay={400}>
            <div className="rounded-xl border border-gray-100 shadow-sm bg-white p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-gray-500">Estimated Savings</p>
                  <h3 className="text-2xl font-medium">${(mockData.balance * 0.14).toFixed(2)}</h3>
                </div>
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <CircleDollarSign size={20} className="text-energify-blue" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-energify-blue rounded-full" style={{ width: `${mockData.savings}%` }}></div>
                </div>
                <span className="ml-3 text-sm font-medium text-energify-blue">{mockData.savings}%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Compared to traditional providers</p>
            </div>
          </AnimatedCard>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <AnimatedCard animation="fade-in" delay={500}>
          <div className="rounded-xl border border-gray-100 shadow-sm bg-white p-6 h-full">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-medium">Energy Forecast</h3>
              <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <Clock size={16} className="text-energify-blue" />
              </div>
            </div>
            
            <div className="space-y-4">
              {mockData.predictions.map((prediction, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{prediction.time}</span>
                  <div className="flex-1 mx-4">
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-energify-blue rounded-full"
                        style={{ width: `${(prediction.value / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{prediction.value} kWh</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3 flex items-center">
                <Shield size={16} className="text-energify-blue mr-2" />
                Network Status
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Grid Stability</span>
                  <span className="text-sm font-medium text-green-600">Optimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Smart Contract</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Last Block</span>
                  <span className="text-sm font-medium">#78392</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="w-full justify-center">
                <BarChart size={16} className="mr-2" />
                Detailed Analytics
              </Button>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};
