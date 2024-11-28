import React from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { StateOfCharge } from './components/StateOfCharge';
import { PowerFlow } from './components/PowerFlow';
import { useSensorData } from './hooks/useSensorData';
import type { StepAlignmentSensor } from './types/sensors';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const { data: sensorData, isLoading, error } = useSensorData<StepAlignmentSensor>(
    'sensor01',
    30000
  );

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DashboardLayout onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}>
      <div className="col-span-3">
        <StateOfCharge percentage={40.45} />
      </div>
      <div className="col-span-9">
        <PowerFlow
          batteryPower={1300.4}
          loadPower={8348.6}
          gridPower={7157.0}
        />
      </div>
      {/* Add more dashboard components here */}
    </DashboardLayout>
  );
}

export default App;