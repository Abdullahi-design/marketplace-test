import Link from 'next/link';
import marketplaceData from '@/data/marketplace.json';
import type { MarketplaceData } from '@/types/marketplace';
import { ChevronLeft, Eye, Pencil, SquarePen, SquarePenIcon } from 'lucide-react';
import CollapsibleSection from '@/components/CollapsibleSection';
import Image from 'next/image';

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

  // Fallback demo details to match layout (until JSON is expanded)
  const pickupDelivery = {
    createdAt: '25th Aug 2025',
    expiryDate: '25th Aug 2027',
    pickupType: "From Sender's location",
    deliveryType: 'PP, Direct Contact',
    name: 'Adebayo Ojooba',
    address: '24 Akonwonjo Road, Egbeda, Alimoso',
    phone: '+2348037456908',
  };

  const packageDetails = {
    title: listing.adTitle,
    category: 'Electronics',
    productCategory: 'Multi Category (Petroleum/ Liquids/Chemicals/ Agricultural Produce)',
    weight: '5kg',
    worth: '60,000',
    pickupPreference: 'No Vehicle',
    feeRecipient: 'Sender',
  };

  const Section = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => (
    <div className={`h-full bg-white rounded-lg border border-gray-200 p-5 ${className ?? ''}`}>
      <div className="text-sm font-semibold text-gray-700 mb-4">{title}</div>
      {children}
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Collapsible wrapper for the whole details area (Top bar) */}
      <CollapsibleSection
        title={
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Sell Ad:</span>
            <span className="font-semibold text-gray-900">AD–{listing.id}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-green-600 font-medium">Active</span>
          </div>
        }
        defaultOpen
        border={false}
      >
        <div className="border-b border-gray-200 my-3"></div>

        {/* Top grid */}
        <div className="grid grid-cols-12 gap-5">
          {/* Gallery */}
          <div className="col-span-12 md:col-span-4">
            <Section title="">
              <div className="flex border border-gray-200 rounded-lg p-2 -mt-6 items-center gap-2 text-xs text-gray-600">
                <Eye size={16} color='#F97316'/>
                <span>25 Views</span>
              </div>
              <div className="border-b border-gray-200 my-3"></div>
              <div className="aspect-[4/3] bg-gray-50 border border-gray-200 rounded-md relative overflow-hidden">
                <Image
                  src="/assets/box-1.svg"
                  alt="Package image"
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {['/assets/box-2.svg','/assets/box-3.svg','/assets/box-3.svg','/assets/box-4.svg'].map((src, idx) => (
                  <div key={idx} className="aspect-square rounded-md bg-gray-50 border border-gray-200 relative overflow-hidden">
                    <Image
                      src={src}
                      alt={`Package thumbnail ${idx+1}`}
                      fill
                      className="object-contain p-2.5"
                      sizes="(max-width: 768px) 25vw, 8vw"
                    />
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Pick up & Delivery */}
          <div className="col-span-12 md:col-span-4">
            <Section title="Pick up & Delivery Details" className="bg-[#FBFCFE]">
              <div className="border-b border-gray-200 my-3"></div>
              <div className="bg-white p-1.5">
                <div className="space-y-3 text-sm">
                    <Row label="Created at" value={pickupDelivery.createdAt} />
                    <Row label="Ad Expiry date" value={pickupDelivery.expiryDate} />
                    <Row label="Pickup Type" value={pickupDelivery.pickupType} />
                    <Row label="Delivery Type" value={pickupDelivery.deliveryType} />
                </div>
                <div className="my-3 h-px bg-gray-200" />
                <div className="space-y-2 text-sm ">
                    <div className="flex items-start gap-2">
                    <input type="radio" className="mt-1" />
                    <span className="text-gray-700">Pick up Details:</span>
                    </div>
                    <Row label="Name" value={pickupDelivery.name} />
                    <Row label="Address" value={pickupDelivery.address} />
                    <Row label="Phone Number" value={pickupDelivery.phone} />
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                  <SquarePenIcon size={16} className="text-gray-600" />
              </div>
            </Section>
          </div>

          {/* Package Details */}
          <div className="col-span-12 md:col-span-4">
            <Section title="Package Details" className="bg-[#FBFCFE]">
                <div className="my-3 h-px bg-gray-200" />
                <div className="bg-white p-1.5">
                    <div className="text-sm space-y-3">
                    <Row label="Title" value={packageDetails.title} valueClass="font-semibold text-gray-900" />
                    <Row label="Category" value={packageDetails.category} valueClass="font-semibold text-gray-900" />
                    <Row label="Product category" value={packageDetails.productCategory} valueClass="text-right" alignTop />
                    <Row label="Package Weight" value={packageDetails.weight} />
                    <Row label="Monetary Worth of Package" value={packageDetails.worth} />
                    <Row label="Pickup preference" value={packageDetails.pickupPreference} />
                    <Row label="Delivery Fee Invoice Recipient" value={packageDetails.feeRecipient} />
                </div>
                <div className="mt-3 flex justify-end">
                    <SquarePenIcon size={16} className="text-gray-600" />
                </div>
                </div>
            </Section>
          </div>
        </div>
        <div className="border-b border-gray-200 my-8"></div>

        {/* Seller/Buyer */}
        <div className="grid grid-cols-12 gap-5 mt-6">
          <div className="col-span-12 md:col-span-4">
            <Section title="Seller" className="bg-[#FBFCFE]">
                <div className="my-3 h-px bg-gray-200" />
                <div className="bg-white p-1.5">
                    <MiniProfile title={`${listing.sellerName} – Sender`} />
                    <div className="mt-4 text-sm text-gray-700">Dispatch Details</div>
                </div>
            </Section>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Section title="Buyer" className="bg-[#FBFCFE]">
                <div className="my-3 h-px bg-gray-200" />
                <div className="bg-white p-1.5">
              <MiniProfile title={`Bright Azu – Receiver`} />
              <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                <span className="text-gray-600">Purchase Date</span>
                <span className="text-gray-900 text-right">25th Aug 2025</span>
                <span className="text-gray-600">Purchase mode</span>
                <span className="text-gray-900 text-right">Purchase Protection</span>
                <span className="text-gray-600">Linked Delivery Job</span>
                <span className="text-gray-900 text-right">PP–5698</span>
              </div>
                </div>
            </Section>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Section title="" className="bg-[#FBFCFE]">
              <div className="h-[21px] bg-white rounded " />
            </Section>
          </div>
        </div>

        {/* Views */}
      </CollapsibleSection>
        <div className="mt-8">
          <CollapsibleSection title="Views" defaultOpen={false}>
          <div className="border-b border-gray-200 my-3"></div>
            <div className="text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Eye size={16} className="text-gray-500" />
                <span>This listing has 25 views. Analytics coming soon.</span>
              </div>
            </div>
          </CollapsibleSection>
        </div>
    </div>
  );
}

function Row({ label, value, valueClass, alignTop }: { label: string; value: React.ReactNode; valueClass?: string; alignTop?: boolean }) {
  return (
    <div className={`grid grid-cols-2 gap-3 ${alignTop ? 'items-start' : 'items-center'}`}>
      <div className="text-gray-600">{label}</div>
      <div className={`text-gray-800 ${valueClass ?? ''} text-right`}>{value}</div>
    </div>
  );
}

function MiniProfile({ title }: { title: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-200" />
        <div className="flex-1">
          <div className="text-gray-900 font-semibold text-sm">{title}</div>
          <div className="text-xs text-gray-600 mt-1">⭐⭐⭐⭐ 4.6</div>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 text-orange-500 text-xs">
        <span className="w-5 h-5 rounded-full bg-orange-100" />
        <span className="w-5 h-5 rounded-full bg-orange-100" />
        <span className="w-5 h-5 rounded-full bg-orange-100" />
        <span className="w-5 h-5 rounded-full bg-orange-100" />
      </div>
    </div>
  );
}
