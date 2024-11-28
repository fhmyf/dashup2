import React from 'react';
import { Battery } from 'lucide-react';

interface StateOfChargeProps {
  percentage: number;
}

export const StateOfCharge: React.FC<StateOfChargeProps> = ({ percentage }) => {
  const getColor = (value: number) => {
    if (value > 60) return 'bg-green-500';
    if (value > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-[#1f2937] rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">STATE OF CHARGE</h2>
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-48">
          <Battery className="w-full h-full text-gray-600" />
          <div
            className={`absolute bottom-[10%] left-[10%] right-[10%] ${getColor(percentage)} transition-all duration-300`}
            style={{ height: `${percentage}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{percentage.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};