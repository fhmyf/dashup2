import React, { useState } from 'react';
import { Battery, BarChart2, Sun, Settings, Bell, Calendar, Network, HelpCircle } from 'lucide-react';
import { NavItem } from './navigation/NavItem';
import { AddSensorModal } from './settings/AddSensorModal';
import { useNavigation, NavigationPage } from '../hooks/useNavigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  isDarkMode
}) => {
  const { currentPage, navigateTo } = useNavigation();
  const [isAddSensorModalOpen, setIsAddSensorModalOpen] = useState(false);

  const handleNavigation = (page: NavigationPage) => {
    navigateTo(page);
    if (page === 'system') {
      setIsAddSensorModalOpen(true);
    }
  };

  const handleAddSensor = (sensorData: { id: string; name: string; type: string }) => {
    console.log('Adding new sensor:', sensorData);
    // Here you would typically make an API call to add the sensor
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-[#0a192f] text-white`}>
      <nav className="bg-[#051428] border-b border-gray-800">
        <div className="px-4 mx-auto">
          <div className="flex items-center h-16 justify-between">
            <div className="flex items-center space-x-4">
              <Battery className="w-8 h-8 text-white" />
              <span className="text-xl font-bold">Energy Monitor</span>
            </div>
            <div className="flex items-center space-x-8">
              <NavItem 
                icon={<BarChart2 />} 
                label="Dashboard" 
                active={currentPage === 'dashboard'} 
                onClick={() => handleNavigation('dashboard')}
              />
              <NavItem 
                icon={<Battery />} 
                label="Battery" 
                active={currentPage === 'battery'}
                onClick={() => handleNavigation('battery')}
              />
              <NavItem 
                icon={<Sun />} 
                label="SLD" 
                active={currentPage === 'sld'}
                onClick={() => handleNavigation('sld')}
              />
              <NavItem 
                icon={<Bell />} 
                label="Alarms" 
                count={11} 
                active={currentPage === 'alarms'}
                onClick={() => handleNavigation('alarms')}
              />
              <NavItem 
                icon={<Calendar />} 
                label="Events" 
                active={currentPage === 'events'}
                onClick={() => handleNavigation('events')}
              />
              <NavItem 
                icon={<BarChart2 />} 
                label="Trends" 
                active={currentPage === 'trends'}
                onClick={() => handleNavigation('trends')}
              />
              <NavItem 
                icon={<Network />} 
                label="Network" 
                active={currentPage === 'network'}
                onClick={() => handleNavigation('network')}
              />
              <NavItem 
                icon={<Settings />} 
                label="System" 
                active={currentPage === 'system'}
                onClick={() => handleNavigation('system')}
              />
              <NavItem 
                icon={<HelpCircle />} 
                label="Help" 
                active={currentPage === 'help'}
                onClick={() => handleNavigation('help')}
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="p-6">
        <div className="grid grid-cols-12 gap-6">
          {children}
        </div>
      </main>

      <AddSensorModal
        isOpen={isAddSensorModalOpen}
        onClose={() => setIsAddSensorModalOpen(false)}
        onAdd={handleAddSensor}
      />
    </div>
  );
};