
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart } from 'lucide-react';
import { Button } from "@/components/UI/Button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export const ERPDashboard = () => {
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-medium">Energy Resource Planning</h2>
          <p className="text-gray-500">Integrated business management for energy operations</p>
        </div>
        <Button variant="outline">Sync with SAP</Button>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Energy Inventory</CardTitle>
                <CardDescription>Total available kWh</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,450 kWh</div>
                <div className="text-xs text-green-500 mt-1">
                  +12% from last month
                </div>
                <Progress value={68} className="h-1 mt-3" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Production Efficiency</CardTitle>
                <CardDescription>Overall equipment effectiveness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87.3%</div>
                <div className="text-xs text-green-500 mt-1">
                  +2.4% from target
                </div>
                <Progress value={87} className="h-1 mt-3" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Order Fulfillment</CardTitle>
                <CardDescription>Energy contracts delivered</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.1%</div>
                <div className="text-xs text-amber-500 mt-1">
                  -0.4% from last month
                </div>
                <Progress value={98} className="h-1 mt-3" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Business Process Integration</CardTitle>
              <CardDescription>Connected systems and data flow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>SAP S/4HANA Integration</span>
                  </div>
                  <span className="text-sm text-gray-500">Connected</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Energy Grid Management System</span>
                  </div>
                  <span className="text-sm text-gray-500">Live Data</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Accounting & Finance</span>
                  </div>
                  <span className="text-sm text-gray-500">Reconciled</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                    <span>Supplier Management System</span>
                  </div>
                  <span className="text-sm text-gray-500">Syncing</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                    <span>IoT Energy Storage Monitoring</span>
                  </div>
                  <span className="text-sm text-gray-500">Pending</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Energy Inventory Management</CardTitle>
              <CardDescription>Track and optimize energy resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Current Storage Status</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Solar Energy</p>
                      <p className="font-medium">1,250 kWh</p>
                      <Progress value={75} className="h-1 mt-2" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Wind Energy</p>
                      <p className="font-medium">850 kWh</p>
                      <Progress value={62} className="h-1 mt-2" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Battery Storage</p>
                      <p className="font-medium">350 kWh</p>
                      <Progress value={35} className="h-1 mt-2" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Forecasted Production</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Next 24 hours</span>
                      <span className="text-sm font-medium">+320 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Next 7 days</span>
                      <span className="text-sm font-medium">+1,890 kWh</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">Export Data</Button>
                  <Button size="sm">Optimize Storage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="production" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Energy Production Planning</CardTitle>
              <CardDescription>Schedule and monitor energy generation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Production Schedule</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium">Solar Array A</p>
                        <p className="text-sm text-gray-500">Optimal generation 10:00 - 14:00</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">Active</p>
                        <p className="text-sm">Est. 145 kWh today</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium">Wind Turbine Cluster</p>
                        <p className="text-sm text-gray-500">Peak forecast 18:00 - 22:00</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">Active</p>
                        <p className="text-sm">Est. 210 kWh today</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-medium">Micro Hydroelectric</p>
                        <p className="text-sm text-gray-500">Maintenance scheduled</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-amber-600">Limited</p>
                        <p className="text-sm">Est. 75 kWh today</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Maintenance Planning</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span>Solar Inverter Replacement</span>
                      </div>
                      <span className="text-sm">Tomorrow, 09:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span>Wind Turbine Inspection</span>
                      </div>
                      <span className="text-sm">Nov 28, 13:00</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">Schedule Maintenance</Button>
                  <Button size="sm">Optimize Production</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SAP Business Analytics</CardTitle>
              <CardDescription>Integrated performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <BarChart size={14} />
                    Bar Chart
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <LineChart size={14} />
                    Line Chart
                  </Button>
                  <Button variant="outline" size="sm">This Month</Button>
                  <Button variant="outline" size="sm">Export</Button>
                </div>
                
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BarChart size={48} className="mx-auto mb-2 text-gray-400" />
                    <p>Analytics data visualization would appear here</p>
                    <p className="text-sm">Connected to SAP Analytics Cloud</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="text-xl font-medium">$12,840</p>
                    <div className="flex items-center text-green-500 text-xs mt-1">
                      <span>+12.5%</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Operating Costs</p>
                    <p className="text-xl font-medium">$8,320</p>
                    <div className="flex items-center text-red-500 text-xs mt-1">
                      <span>+3.2%</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Profit Margin</p>
                    <p className="text-xl font-medium">35.2%</p>
                    <div className="flex items-center text-green-500 text-xs mt-1">
                      <span>+5.4%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
