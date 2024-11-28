import React from 'react';
import { Battery, Building2, Radio } from 'lucide-react';

interface PowerFlowProps {
  batteryPower: number;
  loadPower: number;
  gridPower: number;
}

export const PowerFlow: React.FC<PowerFlowProps> = ({
  batteryPower,
  loadPower,
  gridPower,
}) => {
  return (
    <div className="bg-[#1f2937] rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">POWER FLOW</h2>
      <div className="flex items-center justify-between space-x-8">
        <PowerNode
          icon={<Battery className="w-16 h-16" />}
          label="BATTERY"
          value={batteryPower}
          color="text-blue-400"
        />
        <PowerNode
          icon={<Building2 className="w-16 h-16" />}
          label="AC LOAD"
          value={loadPower}
          color="text-orange-400"
        />
        <PowerNode
          icon={<Radio className="w-16 h-16" />}
          label="GRID"
          value={gridPower}
          color="text-green-400"
        />
      </div>
    </div>
  );
};

interface PowerNodeProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}

const PowerNode: React.FC<PowerNodeProps> = ({ icon, label, value, color }) => (
  <div className="flex flex-col items-center">
    <div className="rounded-full bg-gray-700 p-6 mb-2">
      <div className={color}>{icon}</div>
    </div>
    <span className="text-sm text-gray-400">{label}</span>
    <span className={`text-xl font-bold ${color}`}>{value.toFixed(1)} kW</span>
  </div>
);