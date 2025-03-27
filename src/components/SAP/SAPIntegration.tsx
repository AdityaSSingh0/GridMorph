
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Database, Shield, Workflow } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export const SAPIntegration = () => {
  const { toast } = useToast();
  
  const handleSync = () => {
    toast({
      title: "SAP Synchronization Started",
      description: "Data is now being synchronized with SAP systems",
    });
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-medium">SAP Integration Hub</h2>
          <p className="text-gray-500">Connect your energy trading with enterprise systems</p>
        </div>
        <Button onClick={handleSync}>Synchronize Now</Button>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-8 flex items-center">
        <CheckCircle className="text-green-500 mr-3" />
        <div>
          <p className="font-medium">SAP S/4HANA Connection Active</p>
          <p className="text-sm text-gray-500">Last synchronized: Today at 09:42 AM</p>
        </div>
        <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-100">Connected</Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Financial Integration</CardTitle>
            <CardDescription>SAP Finance & Controlling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Database size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">General Ledger</p>
                    <p className="text-xs text-gray-500">Automated accounting entries</p>
                  </div>
                </div>
                <Badge variant="outline">Connected</Badge>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Database size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Accounts Receivable</p>
                    <p className="text-xs text-gray-500">Customer billing & payments</p>
                  </div>
                </div>
                <Badge variant="outline">Connected</Badge>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                    <Database size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium">Cost Center Accounting</p>
                    <p className="text-xs text-gray-500">Internal cost allocation</p>
                  </div>
                </div>
                <Badge variant="outline">Syncing</Badge>
              </div>
              
              <Separator />
              
              <div className="flex justify-end">
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Supply Chain Integration</CardTitle>
            <CardDescription>SAP Supply Chain Management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <Workflow size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Energy Procurement</p>
                    <p className="text-xs text-gray-500">Sourcing & purchasing</p>
                  </div>
                </div>
                <Badge variant="outline">Connected</Badge>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Workflow size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Distribution</p>
                    <p className="text-xs text-gray-500">Grid & network management</p>
                  </div>
                </div>
                <Badge variant="outline">Connected</Badge>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <AlertCircle size={16} className="text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Resource Forecasting</p>
                    <p className="text-xs text-gray-500">Predictive analytics</p>
                  </div>
                </div>
                <Badge variant="outline">Disconnected</Badge>
              </div>
              
              <Separator />
              
              <div className="flex justify-end">
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Compliance & Security</CardTitle>
          <CardDescription>SAP Governance, Risk & Compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield size={18} className="text-blue-600 mr-2" />
                <h3 className="font-medium">Data Protection</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">SAP Data Privacy & Security</p>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Compliant</Badge>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield size={18} className="text-blue-600 mr-2" />
                <h3 className="font-medium">Energy Regulations</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Market & trading compliance</p>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Compliant</Badge>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield size={18} className="text-blue-600 mr-2" />
                <h3 className="font-medium">Access Controls</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">SAP Identity Management</p>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Review Needed</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
