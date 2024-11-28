import React from 'react';
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';

interface RadarChartProps {
  data: Array<{ subject: string; value: number }>;
  label: string;
  color?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  data,
  label,
  color = '#2563eb'
}) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name={label}
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.6}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};