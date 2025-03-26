
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from '../UI/Button';
import { Check, Clock, Zap, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface ManageTradesDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockTrades = [
  {
    id: 'TRD-001',
    type: 'Buy',
    counterparty: 'GreenTech Solar',
    amount: 15,
    price: 0.12,
    status: 'Active',
    expires: '24h remaining',
  },
  {
    id: 'TRD-002',
    type: 'Sell',
    counterparty: 'EnergyPool Co.',
    amount: 25,
    price: 0.13,
    status: 'Pending',
    expires: '48h remaining',
  },
  {
    id: 'TRD-003',
    type: 'Sell',
    counterparty: 'CitiPower Network',
    amount: 10,
    price: 0.11,
    status: 'Active',
    expires: '12h remaining',
  }
];

export const ManageTradesDialog = ({ isOpen, onClose }: ManageTradesDialogProps) => {
  const [trades, setTrades] = useState(mockTrades);
  
  const handleCancel = (id: string) => {
    setTrades(trades.filter(trade => trade.id !== id));
    toast({
      title: "Trade Cancelled",
      description: `Trade ${id} has been cancelled successfully`,
    });
  };
  
  const handleComplete = (id: string) => {
    toast({
      title: "Trade Completed",
      description: `Trade ${id} has been marked as complete`,
    });
    
    // Update the trades list
    setTrades(trades.map(trade => 
      trade.id === id 
        ? { ...trade, status: 'Completed' } 
        : trade
    ));
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Manage Your Trades</DialogTitle>
          <DialogDescription>
            View and manage your active and pending energy trades.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          {trades.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {trades.map((trade) => (
                <div key={trade.id} className="py-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-medium text-gray-900">{trade.id}</span>
                      <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                        trade.type === 'Buy' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {trade.type}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      trade.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : trade.status === 'Pending' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {trade.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-2 text-sm">
                    <div>
                      <span className="text-gray-500">With:</span> {trade.counterparty}
                    </div>
                    <div>
                      <span className="text-gray-500">Amount:</span> {trade.amount} kWh
                    </div>
                    <div>
                      <span className="text-gray-500">Price:</span> ${trade.price}/kWh
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-gray-400" />
                      <span className="text-gray-500">{trade.expires}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2 mt-3">
                    {trade.status !== 'Completed' && (
                      <>
                        <Button 
                          variant="outline" 
                          size="sm"
                          icon={<X size={14} />}
                          onClick={() => handleCancel(trade.id)}
                        >
                          Cancel
                        </Button>
                        
                        {trade.status === 'Active' && (
                          <Button 
                            size="sm"
                            icon={<Check size={14} />}
                            onClick={() => handleComplete(trade.id)}
                          >
                            Complete
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Zap size={32} className="mx-auto text-gray-300 mb-2" />
              <p className="text-gray-500">No active trades found.</p>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
