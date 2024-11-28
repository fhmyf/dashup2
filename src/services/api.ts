import axios from 'axios';
import { api } from './axios-instance';
import { API_CONFIG } from './config';
import { mockSensorData } from './mock-data';
import type { SensorData } from '../types/sensors';

const IS_DEVELOPMENT = import.meta.env.DEV;

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const fetchSensorData = async (sensorId: keyof typeof API_CONFIG.TOKENS): Promise<SensorData> => {
  // Use mock data in development
  if (IS_DEVELOPMENT) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockSensorData[sensorId]);
      }, 500); // Simulate network delay
    });
  }

  try {
    const token = API_CONFIG.TOKENS[sensorId];
    const response = await api.get(`/${token}/telemetry`);
    
    if (!response.data) {
      throw new ApiError('No data received from sensor');
    }

    // Transform the CSV data into JSON
    const data = transformSensorData(response.data, sensorId);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new ApiError(
        `Failed to fetch sensor ${sensorId} data: ${error.message}`,
        error.response?.status,
        error.response?.data
      );
    }
    throw new ApiError(`Unexpected error fetching sensor ${sensorId} data`);
  }
};

function transformSensorData(csvData: string, sensorId: string): SensorData {
  try {
    // Split CSV into lines and get headers and latest data
    const lines = csvData.trim().split('\n');
    const headers = lines[0].split(',');
    const latestData = lines[lines.length - 1].split(',');
    
    // Create an object from the CSV data
    const data = headers.reduce((obj, header, index) => {
      // Convert string values to appropriate types
      let value = latestData[index];
      if (value === 'true') value = true;
      else if (value === 'false') value = false;
      else if (!isNaN(Number(value))) value = Number(value);
      
      obj[header.trim()] = value;
      return obj;
    }, {} as Record<string, any>);

    return data as SensorData;
  } catch (error) {
    throw new ApiError(`Failed to parse sensor data: ${error.message}`);
  }
}