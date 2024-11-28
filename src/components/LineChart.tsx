import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface LineChartProps {
  data: Array<{ time: number; value: number }>;
  label: string;
  color?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  label,
  color = '#2563eb'
}) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            tickFormatter={(time) => new Date(time * 1000).toLocaleDateString()}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(time) => new Date(time * 1000).toLocaleString()}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            name={label}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};