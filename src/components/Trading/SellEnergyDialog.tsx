
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
import { CircleDollarSign, CreditCard, Zap } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface SellEnergyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SellEnergyDialog = ({ isOpen, onClose }: SellEnergyDialogProps) => {
  const [amount, setAmount] = useState(50);
  const [price, setPrice] = useState(0.12);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  
  const totalValue = Number((amount * price).toFixed(2));
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  
  const handleContinue = () => {
    setPaymentStep(2);
  };
  
  const handlePaymentProcess = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Energy Listed Successfully",
        description: `${amount} kWh listed for sale at $${price}/kWh`,
      });
      resetAndClose();
    }, 2000);
  };
  
  const resetAndClose = () => {
    setPaymentStep(1);
    setIsProcessing(false);
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="sm:max-w-[425px]">
        {paymentStep === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle>Sell Energy</DialogTitle>
              <DialogDescription>
                Set the amount and price for the energy you want to sell.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">
                  Amount (kWh)
                </label>
                <div className="relative">
                  <input
                    id="amount"
                    type="number"
                    min="1"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energify-blue"
                    aria-label="Energy amount in kilowatt hours"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Zap size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-medium">
                  Price per kWh ($)
                </label>
                <div className="relative">
                  <input
                    id="price"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={price}
                    onChange={handlePriceChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energify-blue"
                    aria-label="Price per kilowatt hour in dollars"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <CircleDollarSign size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Total Value:</span>
                  <span className="text-lg font-medium text-energify-blue">${totalValue}</span>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleContinue}>Continue</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Payment Gateway</DialogTitle>
              <DialogDescription>
                Complete your transaction to list your energy for sale.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="font-medium mb-2">Transaction Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amount:</span>
                    <span>{amount} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price per kWh:</span>
                    <span>${price}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                    <span className="font-medium">Total Value:</span>
                    <span className="font-medium">${totalValue}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <label htmlFor="cardName" className="text-sm font-medium">Name on Card</label>
                  <input
                    id="cardName"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energify-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
                  <div className="relative">
                    <input
                      id="cardNumber"
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energify-blue"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <CreditCard size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label htmlFor="expiry" className="text-sm font-medium">Expiry Date</label>
                    <input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energify-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cvc" className="text-sm font-medium">CVC</label>
                    <input
                      id="cvc"
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energify-blue"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setPaymentStep(1)}>Back</Button>
              <Button 
                onClick={handlePaymentProcess} 
                isLoading={isProcessing}
              >
                {isProcessing ? "Processing..." : "Complete Listing"}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
