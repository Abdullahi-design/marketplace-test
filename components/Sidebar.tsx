'use client';

import {
  LayoutDashboard,
  Users,
  Package,
  Gift,
  MessageSquare,
  Receipt,
  Shield,
  Settings,
  Clock,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
  hasDropdown?: boolean;
  children?: MenuItem[];
}

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['all-listings']);
  const [activeItem, setActiveItem] = useState('marketplace');

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} className="stroke-[1.25]" /> },
    {
      id: 'users',
      label: 'Users',
      icon: <Users size={16} className="stroke-[1.25]" />,
      badge: 5,
      hasDropdown: true
    },
    {
      id: 'all-listings',
      label: 'All Listings',
      icon: <Package size={16} className="stroke-[1.25]" />,
      hasDropdown: true,
      children: [
        { id: 'delivery-jobs', label: 'Delivery Jobs', icon: null, badge: 9 },
        { id: 'delivery-offers', label: 'Delivery Offers', icon: null },
        { id: 'marketplace', label: 'Marketplace', icon: null, badge: 9 }
      ]
    },
    { id: 'flex-reward', label: 'Flex Reward', icon: <Gift size={16} className="stroke-[1.25]" /> },
    { id: 'disputes', label: 'Disputes', icon: <MessageSquare size={16} className="stroke-[1.25]" /> },
    { id: 'transactions', label: 'Transactions', icon: <Receipt size={16} className="stroke-[1.25]" />, hasDropdown: true },
    { id: 'user-support-1', label: 'User Support Ticket', icon: <Shield size={16} className="stroke-[1.25]" /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={16} className="stroke-[1.25]" />, hasDropdown: true },
    { id: 'user-support-2', label: 'User Support Ticket', icon: <Shield size={16} className="stroke-[1.25]" /> },
    { id: 'blog', label: 'Blog & Broadcast', icon: <Clock size={16} className="stroke-[1.25]" /> },
    { id: 'templates', label: 'Templates', icon: <Clock size={16} className="stroke-[1.25]" /> },
    { id: 'audit-logs', label: 'Audit Logs', icon: <Clock size={16} className="stroke-[1.25]" /> }
  ];

  const toggleExpand = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isExpanded = (itemId: string) => expandedItems.includes(itemId);
  const isActive = (itemId: string) =>
    activeItem === itemId ||
    menuItems
      .find(item => item.children)
      ?.children?.some(child => child.id === activeItem);

  // Utility checking if any child is currently active (for highlight)
  const isChildActive = (parent: MenuItem) =>
    parent.children && parent.children.some(child => child.id === activeItem);

  return (
    <div className="w-[242px] min-h-screen bg-[#1E3A8A] text-white flex flex-col relative">
      <div className="flex-1 py-4 px-[10px]">
        <div className="flex flex-col gap-2 bg-[#142F7C] rounded-[8px] p-3">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full">
              <button
                tabIndex={0}
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleExpand(item.id);
                  } else {
                    setActiveItem(item.id);
                  }
                }}
                className={`
                  w-full outline-none
                  flex items-center justify-between
                  rounded-[8px]
                  px-3 py-2.5
                  group
                  transition
                  ${
                    (activeItem === item.id || isChildActive(item))
                      ? 'bg-[#1E3A8A]'
                      : 'bg-[#1E3A8A]'
                  }
                  hover:bg-[#ffffff]/20
                  focus:bg-[#ffffff]/20
                  shadow-none
                `}
                style={{
                  boxShadow:
                    activeItem === item.id || isChildActive(item)
                      ? '0 0 0 2px #1E3A8A'
                      : 'none'
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center">{item.icon}</span>
                  <span className="text-[13px] font-medium">{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.badge != null && (
                    <span className="bg-[#FF8A00] text-white px-[6px] h-[18px] min-w-[18px] flex items-center justify-center rounded-full text-[10px] font-semibold leading-none">
                      {item.badge}
                    </span>
                  )}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`ml-2 transition-transform duration-150 ${isExpanded(item.id) ? 'rotate-180' : ''}`}
                      strokeWidth={2}
                    />
                  )}
                </div>
              </button>
              {/* Dropdown */}
              {item.children && isExpanded(item.id) && (
                <div className="flex flex-col gap-1 my-2 bg-[#1E3A8A] rounded-[8px] p-2">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => setActiveItem(child.id)}
                      tabIndex={0}
                      className={`
                        w-full flex items-center justify-between
                        rounded-[6px] px-2.5 py-2.5
                        text-left pl-8
                        text-[13px] font-normal
                        transition
                        ${
                          activeItem === child.id
                            ? 'bg-[#1E3A8A] text-white'
                            : 'bg-[#1E3A8A] text-white/85'
                        }
                        hover:bg-[#ffffff]/20
                        focus:bg-[#ffffff]/20
                      `}
                      style={{
                        minHeight: 38
                      }}
                    >
                      <span className="flex items-center gap-2">
                        {child.icon}
                        <span>{child.label}</span>
                      </span>
                      {child.badge != null && (
                        <span className="bg-[#FF8A00] text-white px-[6px] h-[18px] min-w-[18px] flex items-center justify-center rounded-full text-[10px] font-semibold leading-none ml-auto">
                          {child.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center pb-7 mt-auto">
        <div className="bg-white text-[#2C1676] text-[11px] px-[13.5px] py-[5px] font-semibold rounded-full mb-[5px] shadow" style={{ letterSpacing: '0.04em' }}>
          Dev
        </div>
        <div className="text-[12px] text-[#f3e8ff] font-medium" style={{letterSpacing: '0.07em'}}>v2.0</div>
      </div>
    </div>
  );
}
