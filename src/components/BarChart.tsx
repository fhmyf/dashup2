import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface BarChartProps {
  data: Array<{ name: string; value: number }>;
  label: string;
  color?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  label,
  color = '#2563eb'
}) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={color} name={label} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};