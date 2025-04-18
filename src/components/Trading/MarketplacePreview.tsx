import React, { useState } from 'react';
import { 
  Zap, 
  RefreshCw, 
  ChevronDown, 
  Search, 
  Clock, 
  TrendingUp, 
  ArrowRightLeft 
} from 'lucide-react';
import { AnimatedCard } from '../UI/AnimatedCard';
import { GlassCard } from '../UI/GlassCard';
import { Button } from '../UI/Button';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const mockListings = [
  {
    id: 1,
    seller: 'GreenTech Solar',
    rating: 4.9,
    price: 0.12,
    amount: 25,
    renewable: true,
    type: 'Solar',
    timestamp: '10 mins ago',
    trend: 'up',
  },
  {
    id: 2,
    seller: 'WindPower Co.',
    rating: 4.7,
    price: 0.11,
    amount: 40,
    renewable: true,
    type: 'Wind',
    timestamp: '25 mins ago',
    trend: 'up',
  },
  {
    id: 3,
    seller: 'CityGrid Energy',
    rating: 4.5,
    price: 0.14,
    amount: 100,
    renewable: false,
    type: 'Mixed',
    timestamp: '1 hour ago',
    trend: 'down',
  },
  {
    id: 4,
    seller: 'Eco Homes Network',
    rating: 4.8,
    price: 0.13,
    amount: 15,
    renewable: true,
    type: 'Solar',
    timestamp: '2 hours ago',
    trend: 'up',
  },
  {
    id: 5,
    seller: 'CommunityPower',
    rating: 4.6,
    price: 0.12,
    amount: 30,
    renewable: true,
    type: 'Mixed',
    timestamp: '3 hours ago',
    trend: 'stable',
  },
];

export const MarketplacePreview = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters] = useState(['All Types']);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<typeof mockListings[0] | null>(null);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handleMyTransactions = () => {
    toast({
      title: "My Transactions",
      description: "Viewing your transaction history",
    });
  };

  const handleEnergyTypeFilter = () => {
    toast({
      title: "Filter",
      description: "Energy type filtering will be available soon",
    });
  };

  const handlePriceRangeFilter = () => {
    toast({
      title: "Filter",
      description: "Price range filtering will be available soon",
    });
  };

  const handleBuyNow = (listing: typeof mockListings[0]) => {
    setSelectedListing(listing);
    setIsPurchaseDialogOpen(true);
  };

  const handleViewAllListings = () => {
    toast({
      title: "Marketplace",
      description: "Viewing all available listings",
    });
  };

  const handleCompletePurchase = () => {
    if (!selectedListing) return;
    
    setIsPurchasing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsPurchasing(false);
      toast({
        title: "Purchase Successful",
        description: `You've purchased ${selectedListing.amount} kWh from ${selectedListing.seller}`,
      });
      setIsPurchaseDialogOpen(false);
    }, 2000);
  };

  return (
    <>
      <div className="rounded-xl border border-gray-100 shadow-sm bg-white overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-medium">P2P Energy Marketplace</h2>
              <p className="text-gray-500">Buy and sell energy directly with other users</p>
            </div>
            <Button 
              icon={<ArrowRightLeft size={16} />}
              className="hidden sm:flex"
              onClick={handleMyTransactions}
            >
              My Transactions
            </Button>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by seller, type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-energify-blue focus:border-transparent"
                aria-label="Search listings"
              />
            </div>
            
            <div className="flex gap-2">
              <div className="relative inline-block">
                <button 
                  className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg bg-white min-w-[140px]"
                  onClick={handleEnergyTypeFilter}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="text-sm font-medium text-gray-700">Energy Type</span>
                  <ChevronDown size={16} className="ml-2 text-gray-400" />
                </button>
              </div>
              
              <div className="relative inline-block">
                <button 
                  className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg bg-white min-w-[140px]"
                  onClick={handlePriceRangeFilter}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="text-sm font-medium text-gray-700">Price Range</span>
                  <ChevronDown size={16} className="ml-2 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedFilters.map((filter) => (
              <div key={filter} className="bg-blue-50 text-energify-blue text-xs font-medium px-2.5 py-1 rounded-full">
                {filter}
              </div>
            ))}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/kWh</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listed</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {mockListings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Zap className={`h-5 w-5 ${listing.renewable ? 'text-energify-green' : 'text-energify-blue'}`} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{listing.seller}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <span className="flex items-center">
                            <span className="text-yellow-400 mr-1">★</span> 
                            {listing.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-lg font-medium">${listing.price}</span>
                      {listing.trend === 'up' && <TrendingUp size={14} className="ml-1 text-green-500" />}
                      {listing.trend === 'down' && <TrendingUp size={14} className="ml-1 text-red-500 transform rotate-180" />}
                    </div>
                    <div className="text-sm text-gray-500">per kWh</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-medium">{listing.amount} kWh</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      listing.renewable ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {listing.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {listing.timestamp}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button 
                      size="sm" 
                      onClick={() => handleBuyNow(listing)}
                      aria-label={`Buy ${listing.amount} kWh from ${listing.seller}`}
                    >
                      Buy Now
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <RefreshCw size={14} className="mr-1 animate-spin" />
            Auto-refreshing market data
          </div>
          <Button variant="outline" onClick={handleViewAllListings}>View All Listings</Button>
        </div>
      </div>
      
      {/* Purchase Dialog */}
      {selectedListing && (
        <Dialog open={isPurchaseDialogOpen} onOpenChange={setIsPurchaseDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Confirm Purchase</DialogTitle>
              <DialogDescription>
                You're about to purchase energy from {selectedListing.seller}.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-3">Transaction Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seller:</span>
                    <span className="font-medium">{selectedListing.seller}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Energy Type:</span>
                    <span className="font-medium">{selectedListing.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">{selectedListing.amount} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per kWh:</span>
                    <span className="font-medium">${selectedListing.price}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-blue-100 mt-2">
                    <span className="font-medium">Total Cost:</span>
                    <span className="font-medium text-energify-blue">
                      ${(selectedListing.amount * selectedListing.price).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Payment Method</h4>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-12 bg-blue-900 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <span>•••• 4242</span>
                  <span className="text-xs text-gray-500">Default</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                By clicking "Complete Purchase", you agree to the platform's terms and conditions for energy trading.
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setIsPurchaseDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCompletePurchase}
                isLoading={isPurchasing}
              >
                {isPurchasing ? "Processing..." : "Complete Purchase"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
