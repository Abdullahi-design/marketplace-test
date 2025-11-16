interface OverviewData {
  totalCreated: number;
  totalActive: number;
  totalSoldWithPaymentProtection: number;
  totalSoldWithoutPaymentProtection: number;
}

export default function MarketplaceOverview({ data }: { data: OverviewData }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4 text-gray-900">Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600 mb-2 font-medium">Total created</div>
          <div className="text-3xl font-bold text-gray-900">{data.totalCreated}</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600 mb-2 font-medium">Total active</div>
          <div className="text-3xl font-bold text-gray-900">{data.totalActive}</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600 mb-2 font-medium">Total Sold with Payment Protection</div>
          <div className="text-3xl font-bold text-gray-900">{data.totalSoldWithPaymentProtection}</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600 mb-2 font-medium">Total Sold w/o Payment Protection</div>
          <div className="text-3xl font-bold text-gray-900">{data.totalSoldWithoutPaymentProtection}</div>
        </div>
      </div>
    </div>
  );
}


