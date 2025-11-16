import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MarketplaceOverview from '@/components/MarketplaceOverview';
import MarketplaceFilters from '@/components/MarketplaceFilters';
import MarketplaceTable from '@/components/MarketplaceTable';
import marketplaceData from '@/data/marketplace.json';
import { Upload } from 'lucide-react';
import type { MarketplaceData } from '@/types/marketplace';

export default function Home() {
  const data = marketplaceData as MarketplaceData;
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        <Header />
        <div className='flex'>
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto bg-[#F9F9FA]">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
              <button className="px-4 py-2.5 flex items-center gap-2 transition-colors font-medium text-sm">
                <Upload size={16} />
                Export
              </button>
            </div>
            
            <div className='bg-white rounded-lg p-6'>
              <MarketplaceOverview data={data.overview} />
              <MarketplaceFilters />
              <MarketplaceTable listings={data.listings} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

