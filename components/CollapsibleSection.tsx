'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapsibleSectionProps {
  title: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  border?: boolean;
}

export default function CollapsibleSection({ title, defaultOpen = false, children, border = true }: CollapsibleSectionProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <div className={`bg-white rounded-lg border ${border ? 'border-gray-200' : 'border-transparent'}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 select-none"
      >
        <span className="text-gray-800 font-medium">{title}</span>
        <ChevronDown
          size={18}
          className={`text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} px-5`}
      >
        <div className="overflow-hidden">
          <div className="pb-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
