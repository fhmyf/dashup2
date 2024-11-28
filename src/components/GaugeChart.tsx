import React from 'react';
import GaugeComponent from 'react-gauge-component';

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  label: string;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  min = 0,
  max = 100,
  label
}) => {
  return (
    <div className="w-full h-48">
      <GaugeComponent
        value={value}
        type="semicircle"
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          subArcs: [
            { limit: 40, color: '#FF4646' },
            { limit: 70, color: '#FFC107' },
            { limit: max, color: '#4CAF50' }
          ]
        }}
        pointer={{
          color: '#345243',
          length: 0.8,
          width: 15,
          elastic: true
        }}
      />
      <div className="text-center mt-2 text-gray-700 font-medium">{label}</div>
    </div>
  );
};