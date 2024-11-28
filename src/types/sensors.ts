export interface SensorData {
  time: number;
  sensor_identifier: string;
  sensor_type: string;
}

export interface StepAlignmentSensor extends SensorData {
  step_alignment_percentage: number;
  misalignments_today: number;
  cycle_count_step23: number;
  estimated_lifespan_remaining_percentage: number;
}

export interface EmergencyStopSensor extends SensorData {
  emergency_stop_active: boolean;
  handrail_entry_clear: boolean;
  comb_plate_normal: boolean;
}

export interface ChainSensor extends SensorData {
  chain_speed_ms: number;
  chain_tension_percentage: number;
  system_status_normal: boolean;
  lubrication_level_percentage: number;
}

export interface PassengerSensor extends SensorData {
  passengers_today: number;
  current_flow_rate_ppm: number;
  object_alerts_today: number;
  light_curtain_active: boolean;
}

export interface GapSensor extends SensorData {
  left_gap_mm: number;
  right_gap_mm: number;
  out_of_spec_alerts_this_week: number;
}

export interface OperationalSensor extends SensorData {
  status_running: boolean;
  direction_up: boolean;
  hours_operated_today: number;
  energy_used_today_kwh: number;
}

export interface MaintenanceSensor extends SensorData {
  days_until_next_maintenance: number;
}