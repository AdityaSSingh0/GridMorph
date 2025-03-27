
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/UI/Button";
import { 
  Settings, 
  FileText, 
  Code2, 
  DollarSign,
  ShieldCheck
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export const SAPIntegration = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-medium">SAP Integration</h2>
          <p className="text-gray-500">Connect and manage SAP systems for energy operations</p>
        </div>
        <Button variant="outline">Connect SAP System</Button>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">SAP Connection Status</CardTitle>
                <CardDescription>System availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">Connected</div>
                <div className="text-xs text-gray-500 mt-1">
                  Last sync: 10 minutes ago
                </div>
                <Progress value={100} className="h-1 mt-3 bg-green-100" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Data Exchange</CardTitle>
                <CardDescription>Total transactions today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <div className="text-xs text-green-500 mt-1">
                  +34 from yesterday
                </div>
                <Progress value={78} className="h-1 mt-3" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Integration Health</CardTitle>
                <CardDescription>System performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.7%</div>
                <div className="text-xs text-green-500 mt-1">
                  +1.2% from last week
                </div>
                <Progress value={98} className="h-1 mt-3" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Connected SAP Systems</CardTitle>
              <CardDescription>Integrated business components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>SAP S/4HANA Core</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-3">Version 2023</span>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>SAP BW/4HANA</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-3">Version 2.0</span>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>SAP EWM</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-3">Version 9.5</span>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                    <span>SAP IBP</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-3">Version 2105</span>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                    <span>SAP Analytics Cloud</span>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Integration</CardTitle>
              <CardDescription>SAP financial system connections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FileText className="text-energify-blue mr-2" size={20} />
                    <h3 className="font-medium">Financial Flow Status</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Accounts Receivable</p>
                      <p className="font-medium">Connected to ERP</p>
                      <Progress value={100} className="h-1 mt-2 bg-green-100" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Accounts Payable</p>
                      <p className="font-medium">Connected to ERP</p>
                      <Progress value={100} className="h-1 mt-2 bg-green-100" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">General Ledger</p>
                      <p className="font-medium">Connected to ERP</p>
                      <Progress value={100} className="h-1 mt-2 bg-green-100" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Asset Management</p>
                      <p className="font-medium">Partially Connected</p>
                      <Progress value={65} className="h-1 mt-2" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-4">
                    <DollarSign className="text-energify-blue mr-2" size={20} />
                    <h3 className="font-medium">Latest Financial Transactions</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-sm">Renewable Energy Credits</span>
                      <span className="text-sm font-medium text-green-600">+$12,840.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-sm">Equipment Maintenance</span>
                      <span className="text-sm font-medium text-red-600">-$4,230.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-sm">Grid Connection Fees</span>
                      <span className="text-sm font-medium text-red-600">-$1,850.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm">Energy Sales</span>
                      <span className="text-sm font-medium text-green-600">+$8,675.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">Financial Reports</Button>
                  <Button size="sm">Reconcile Data</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Technical Integration</CardTitle>
              <CardDescription>SAP API connections and data flow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Code2 className="text-energify-blue mr-2" size={20} />
                    <h3 className="font-medium">API Connections</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium">OData Services</p>
                        <p className="text-sm text-gray-500">SAP S/4HANA connectivity</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">Active</p>
                        <p className="text-xs">15 endpoints</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium">SAP Gateway</p>
                        <p className="text-sm text-gray-500">REST API services</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">Active</p>
                        <p className="text-xs">8 endpoints</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-medium">RFC Connections</p>
                        <p className="text-sm text-gray-500">Legacy system integration</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-amber-600">Limited</p>
                        <p className="text-xs">3 active</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Settings className="text-energify-blue mr-2" size={20} />
                    <h3 className="font-medium">System Monitoring</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CPU Usage</span>
                      <div className="flex items-center">
                        <Progress value={42} className="h-1 w-32 mr-2" />
                        <span className="text-xs">42%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Memory Usage</span>
                      <div className="flex items-center">
                        <Progress value={61} className="h-1 w-32 mr-2" />
                        <span className="text-xs">61%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Network Latency</span>
                      <div className="flex items-center">
                        <Progress value={18} className="h-1 w-32 mr-2" />
                        <span className="text-xs">18ms</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">API Documentation</Button>
                  <Button size="sm">Test Connections</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance & Security</CardTitle>
              <CardDescription>SAP security and regulatory compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="text-energify-blue mr-2" size={20} />
                    <h3 className="font-medium">Security Status</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Data Encryption</p>
                      <p className="font-medium text-green-600">Enabled (AES-256)</p>
                      <Progress value={100} className="h-1 mt-2 bg-green-100" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Access Control</p>
                      <p className="font-medium text-green-600">Role-Based (RBAC)</p>
                      <Progress value={100} className="h-1 mt-2 bg-green-100" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Audit Logs</p>
                      <p className="font-medium text-green-600">Active</p>
                      <Progress value={100} className="h-1 mt-2 bg-green-100" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Vulnerability Scan</p>
                      <p className="font-medium">Last run: 2 days ago</p>
                      <Progress value={90} className="h-1 mt-2" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FileText className="text-energify-blue mr-2" size={20} />
                    <h3 className="font-medium">Regulatory Compliance</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-sm">GDPR Compliance</span>
                      <span className="text-sm font-medium text-green-600">Compliant</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-sm">ISO 27001</span>
                      <span className="text-sm font-medium text-green-600">Certified</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-sm">SOC 2 Type II</span>
                      <span className="text-sm font-medium text-green-600">Compliant</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm">Energy Regulatory Standards</span>
                      <span className="text-sm font-medium text-amber-600">In Progress</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">Compliance Reports</Button>
                  <Button size="sm">Security Scan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
