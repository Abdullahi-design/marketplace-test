'use client';

import { Search, ArrowUpDown, Filter, Grid, Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function MarketplaceFilters() {
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(true);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search assets"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            Reset
          </button>
          <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2 transition-colors">
            <ArrowUpDown size={16} />
            Sort
          </button>
          <button
            onClick={() => setShowAdvancedFilter(!showAdvancedFilter)}
            className={`px-4 py-2 text-sm rounded-lg flex items-center gap-2 transition-colors ${
              showAdvancedFilter 
                ? 'bg-gray-500 text-white hover:bg-gray-600' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Filter size={16} />
            Advanced filter
          </button>
          <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2 transition-colors">
            <Grid size={16} />
            Select Columns
          </button>
          <button className="px-4 py-2 border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2 transition-colors">
            <Calendar size={16} />
            Date
          </button>
        </div>
      </div>

      {showAdvancedFilter && (
        <div className="bg-[#FBFCFE] border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-5 text-gray-900">Advanced filter</h3>
          <div className="grid grid-cols-4 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">
                Item Title
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white text-sm">
                  <option>Any</option>
                  <option>Used Iphone 12</option>
                  <option>New Fan Bosch</option>
                  <option>Fairly Used phone</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">
                Location
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white text-sm">
                  <option>Any</option>
                  <option>Egbeda</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">
                Ad Selling Mode
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white text-sm">
                  <option>Any</option>
                  <option>Payment Protection</option>
                  <option>Direct Contact</option>
                  <option>P. Protection, D. Contact</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">
                Status
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white text-sm">
                  <option>Any</option>
                  <option>Pending</option>
                  <option>Active</option>
                  <option>Sold</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">
                Price Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="text"
                    placeholder="From: Minimum Amount"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="To: Maximum Amount"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">
                Creation Date Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="From dd/mm/yyyy:"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10 text-sm"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="To dd/mm/yyyy:"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10 text-sm"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium">
              Reset
            </button>
            <button className="px-4 py-2.5 text-sm text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors font-medium">
              Apply filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


