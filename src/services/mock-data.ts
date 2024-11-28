import type { 
  StepAlignmentSensor, 
  EmergencyStopSensor,
  ChainSensor,
  PassengerSensor,
  GapSensor,
  OperationalSensor,
  MaintenanceSensor 
} from '../types/sensors';

const currentTime = Math.floor(Date.now() / 1000);

export const mockSensorData = {
  sensor01: {
    time: currentTime,
    sensor_identifier: 'sensor01',
    sensor_type: 'step_alignment',
    step_alignment_percentage: 99.8,
    misalignments_today: 3,
    cycle_count_step23: 1245678,
    estimated_lifespan_remaining_percentage: 82
  } as StepAlignmentSensor,
  
  sensor02: {
    time: currentTime,
    sensor_identifier: 'sensor02',
    sensor_type: 'emergency_stop_and_safety',
    emergency_stop_active: false,
    handrail_entry_clear: true,
    comb_plate_normal: true
  } as EmergencyStopSensor,
  
  // Add more mock data for other sensors...
};