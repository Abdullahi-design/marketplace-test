'use client';

import { Search, Bell, ChevronDown, ChevronLeft, MoveDown, ArrowLeftToLine } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="flex items-center gap-3">
          <Image src="/assets/flex-delivery-logo.svg" alt="FLEX Delivery" width={140} height={28} priority />
          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
            <ArrowLeftToLine size={20} className="text-gray-600" />
          </button>
        </div>
        <div className="flex-1 max-w-lg ml-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100 text-sm bg-gray-50"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 cursor-pointer hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors">
          <MoveDown size={14} className="text-gray-600" />
          <span className="text-sm text-gray-700">Quick actions</span>
        </div>
        <div className="h-6 w-px bg-gray-300"></div>
        <div className="flex items-center justify-center bg-white">
          <div className="relative flex items-center">
            <Bell size={25} className="text-gray-800" />
            <span
              className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-lg border-2 border-white">
              2
            </span>
          </div>
        </div>
        <div className="flex items-center pl-2 -space-x-2.5">
          <div className="w-7 h-7 rounded-full ring-2 ring-white" style={{background: "linear-gradient(135deg, #8E52F5 0%, #54E8EA 100%)", zIndex: 4}} />
          <div className="w-7 h-7 rounded-full ring-2 ring-white" style={{background: "linear-gradient(135deg, #DD514C 0%, #FCB055 100%)", zIndex: 3}} />
          <div className="w-7 h-7 rounded-full ring-2 ring-white" style={{background: "linear-gradient(135deg, #FF7CAB 0%, #FFD86F 100%)", zIndex: 2}} />
          <div className="w-7 h-7 rounded-full ring-2 ring-white" style={{background: "linear-gradient(135deg, #68DBF2 0%, #5096FF 100%)", zIndex: 1}} />
        </div>
        <div className="h-6 w-px bg-gray-300"></div>
        <div className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-100 px-2 py-1.5 rounded-lg transition-colors ml-2">
          <div className="w-10 h-10 border border-gray-300 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
            BE
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 leading-tight">e6rhrdfbrdsbergeteb</span>
            <span className="text-xs text-gray-500 leading-tight">ADMIN</span>
          </div>
          <ChevronDown size={14} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
}


