import { useQuery } from '@tanstack/react-query';
import { fetchSensorData } from '../services/api';
import type { SensorData } from '../types/sensors';

export function useSensorData<T extends SensorData>(
  sensorId: string,
  refreshInterval: number
) {
  return useQuery<T>({
    queryKey: ['sensor', sensorId],
    queryFn: () => fetchSensorData(sensorId as any),
    refetchInterval: refreshInterval,
    retry: 3,
    staleTime: 5000,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error('Error fetching sensor data:', error);
    },
  });
}