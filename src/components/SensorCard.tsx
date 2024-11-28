import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { SensorData } from '../types/sensors';

interface SensorCardProps {
  data: SensorData;
  title: string;
  status: 'normal' | 'warning' | 'error';
  children: React.ReactNode;
}

const statusColors = {
  normal: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800'
};

const StatusIcon = ({ status }: { status: 'normal' | 'warning' | 'error' }) => {
  switch (status) {
    case 'normal':
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    case 'error':
      return <XCircle className="w-5 h-5 text-red-600" />;
  }
};

export const SensorCard: React.FC<SensorCardProps> = ({
  data,
  title,
  status,
  children
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className={`rounded-full p-2 ${statusColors[status]}`}>
          <StatusIcon status={status} />
        </div>
      </div>
      <div className="space-y-4">{children}</div>
      <div className="mt-4 text-sm text-gray-500">
        Sensor ID: {data.sensor_identifier}
      </div>
    </div>
  );
};