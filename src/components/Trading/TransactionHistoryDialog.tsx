
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from '../UI/Button';
import { ArrowDown, ArrowUp, Calendar, Download, Search, SlidersHorizontal } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from '@/components/ui/use-toast';

interface TransactionHistoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockTransactions = [
  {
    id: 'TXN-78945',
    date: '2023-05-15',
    type: 'Purchase',
    amount: 20,
    price: 0.12,
    total: 2.40,
    counterparty: 'GreenTech Solar',
  },
  {
    id: 'TXN-78934',
    date: '2023-05-12',
    type: 'Sale',
    amount: 15,
    price: 0.13,
    total: 1.95,
    counterparty: 'EnergyPool Co.',
  },
  {
    id: 'TXN-78923',
    date: '2023-05-08',
    type: 'Purchase',
    amount: 30,
    price: 0.11,
    total: 3.30,
    counterparty: 'WindForce Energy',
  },
  {
    id: 'TXN-78912',
    date: '2023-05-05',
    type: 'Sale',
    amount: 25,
    price: 0.12,
    total: 3.00,
    counterparty: 'CitiPower Network',
  },
  {
    id: 'TXN-78901',
    date: '2023-05-01',
    type: 'Purchase',
    amount: 18,
    price: 0.12,
    total: 2.16,
    counterparty: 'SolarStream Inc',
  },
];

export const TransactionHistoryDialog = ({ isOpen, onClose }: TransactionHistoryDialogProps) => {
  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your transaction history is being exported to CSV",
    });
  };
  
  const handleFilter = () => {
    toast({
      title: "Filters",
      description: "Transaction filtering will be available soon",
    });
  };
  
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Transaction History</DialogTitle>
          <DialogDescription>
            Review your past energy trading transactions.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-between items-center py-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energify-blue"
              aria-label="Search transactions"
            />
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              icon={<Calendar size={16} />}
              onClick={handleFilter}
            >
              Date Range
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              icon={<SlidersHorizontal size={16} />}
              onClick={handleFilter}
            >
              Filters
            </Button>
          </div>
        </div>
        
        <div className="overflow-auto max-h-96">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Counterparty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{formatDate(transaction.date)}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {transaction.type === 'Purchase' ? (
                        <ArrowDown size={14} className="mr-1 text-energify-blue" />
                      ) : (
                        <ArrowUp size={14} className="mr-1 text-energify-green" />
                      )}
                      {transaction.type}
                    </div>
                  </TableCell>
                  <TableCell>{transaction.amount} kWh</TableCell>
                  <TableCell>${transaction.price}/kWh</TableCell>
                  <TableCell>${transaction.total.toFixed(2)}</TableCell>
                  <TableCell>{transaction.counterparty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <DialogFooter className="flex justify-between items-center">
          <div className="text-sm text-gray-500">Showing {mockTransactions.length} of 28 transactions</div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              icon={<Download size={16} />}
              onClick={handleExport}
            >
              Export CSV
            </Button>
            <Button onClick={onClose}>Close</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
