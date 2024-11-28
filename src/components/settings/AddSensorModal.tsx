import React from 'react';
import { X } from 'lucide-react';

interface AddSensorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (sensorData: { id: string; name: string; type: string }) => void;
}

export const AddSensorModal: React.FC<AddSensorModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [sensorData, setSensorData] = React.useState({
    id: '',
    name: '',
    type: 'temperature'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(sensorData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1f2937] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Sensor</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Sensor ID
            </label>
            <input
              type="text"
              value={sensorData.id}
              onChange={(e) => setSensorData({ ...sensorData, id: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Sensor Name
            </label>
            <input
              type="text"
              value={sensorData.name}
              onChange={(e) => setSensorData({ ...sensorData, name: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Sensor Type
            </label>
            <select
              value={sensorData.type}
              onChange={(e) => setSensorData({ ...sensorData, type: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="temperature">Temperature</option>
              <option value="voltage">Voltage</option>
              <option value="current">Current</option>
              <option value="power">Power</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Sensor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};