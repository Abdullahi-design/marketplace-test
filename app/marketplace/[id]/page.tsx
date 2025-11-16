import marketplaceData from '@/data/marketplace.json';
import type { MarketplaceData } from '@/types/marketplace';
import ListingDetailClient from '@/components/ListingDetailClient';

interface PageProps {
  params: { id: string };
}

export default function ListingDetailPage({ params }: PageProps) {
  const data = marketplaceData as MarketplaceData;
  const idNum = Number(params.id);
  const listing = data.listings.find(l => l.id === idNum);

  if (!listing) {
    return (
      <div className="p-6">
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <div className="text-xl font-semibold text-gray-900 mb-2">Listing not found</div>
          <div className="text-gray-600">We couldn’t find a listing with ID {params.id}.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <ListingDetailClient listing={listing} />
    </div>
  );
}
