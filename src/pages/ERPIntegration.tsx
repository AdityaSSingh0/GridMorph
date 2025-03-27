
import React from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { ERPDashboard } from '../components/ERP/ERPDashboard';
import { SAPIntegration } from '../components/SAP/SAPIntegration';
import { 
  LayoutDashboard, 
  Database, 
  BarChart3, 
  Zap, 
  Settings, 
  CircleDollarSign,
  ServerCog
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ERPIntegration = () => {
  const handleViewReports = () => {
    toast({
      title: "Reports",
      description: "Financial reports are being generated",
    });
  };

  const handleConfigureSystem = () => {
    toast({
      title: "System Configuration",
      description: "SAP system configuration panel will be available soon",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-medium">Enterprise Resource Planning</h1>
              <p className="text-gray-500">Integrated SAP & ERP solutions for energy management</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handleViewReports}
              >
                <BarChart3 size={16} />
                <span>Financial Reports</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handleConfigureSystem}
              >
                <ServerCog size={16} />
                <span>System Config</span>
              </Button>
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
            <Link to="/erp-integration" className="flex items-center px-4 py-2 bg-energify-blue text-white rounded-lg">
              <Database size={16} className="mr-2" />
              <span>ERP & SAP</span>
            </Link>
            <Link to="/organization" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Settings size={16} className="mr-2" />
              <span>Organization</span>
            </Link>
          </div>
          
          <Tabs defaultValue="erp" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="erp">ERP Dashboard</TabsTrigger>
              <TabsTrigger value="sap">SAP Integration</TabsTrigger>
            </TabsList>
            <TabsContent value="erp">
              <ERPDashboard />
            </TabsContent>
            <TabsContent value="sap">
              <SAPIntegration />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ERPIntegration;
