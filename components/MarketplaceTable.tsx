'use client';

import { RectangleEllipsis } from 'lucide-react';
import Link from 'next/link';

interface Listing {
  id: number;
  sellerName: string;
  askingPrice: number;
  itemLocation: string;
  sellingMode: string;
  adTitle: string;
  creationDate: string;
  status: string;
}

export default function MarketplaceTable({ listings }: { listings: Listing[] }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-orange-500';
      case 'active':
        return 'bg-green-500';
      case 'sold':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3.5 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Ad ID</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Seller Name</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Asking Price</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Item Location</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Selling Mode</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Ad Title</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Creation Date</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {listings.map((listing) => (
              <tr
                key={listing.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => window.location.assign(`/marketplace/${listing.id}`)}
              >
                <td className="px-4 py-3.5">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-3.5 text-sm text-gray-900 font-medium">
                  <Link href={`/marketplace/${listing.id}`} className="hover:underline" onClick={(e) => e.stopPropagation()}>
                    {listing.id}
                  </Link>
                </td>
                <td className="px-4 py-3.5 text-sm text-gray-900">{listing.sellerName}</td>
                <td className="px-4 py-3.5 text-sm text-gray-900">₦{listing.askingPrice.toLocaleString()}</td>
                <td className="px-4 py-3.5 text-sm text-gray-900">{listing.itemLocation}</td>
                <td className="px-4 py-3.5 text-sm text-gray-900">{listing.sellingMode}</td>
                <td className="px-4 py-3.5 text-sm text-gray-900">
                  <Link href={`/marketplace/${listing.id}`} className="hover:underline" onClick={(e) => e.stopPropagation()}>
                    {listing.adTitle}
                  </Link>
                </td>
                <td className="px-4 py-3.5 text-sm text-gray-900">{listing.creationDate}</td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${getStatusColor(listing.status)}`}></span>
                    <span className="text-sm text-gray-900">{listing.status}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <Link href={`/marketplace/${listing.id}`} className="px-3 py-1.5 text-xs border border-gray-300 rounded hover:bg-gray-100 inline-flex items-center gap-1.5 transition-colors font-medium text-gray-700" onClick={(e)=> e.stopPropagation()}>
                    <RectangleEllipsis size={18} />
                    MORE
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


