import React from 'react';

interface BatteryLevelProps {
  percentage: number;
  label: string;
}

export const BatteryLevel: React.FC<BatteryLevelProps> = ({ percentage, label }) => {
  const getColor = (value: number) => {
    if (value <= 20) return 'bg-red-500';
    if (value <= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-32 border-2 border-gray-300 rounded-lg overflow-hidden">
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${getColor(percentage)}`}
          style={{ height: `${percentage}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
          {percentage}%
        </div>
      </div>
      <span className="mt-2 text-sm text-gray-600">{label}</span>
    </div>
  );
};