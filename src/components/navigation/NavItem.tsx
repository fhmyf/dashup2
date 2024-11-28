import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  count?: number;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, active, count, onClick }) => (
  <div 
    className={`flex flex-col items-center cursor-pointer group ${active ? 'text-orange-500' : 'text-gray-400'}`}
    onClick={onClick}
  >
    <div className="relative">
      {icon}
      {count && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
    <span className="text-xs mt-1 group-hover:text-orange-500">{label}</span>
  </div>
);