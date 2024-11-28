import { useState } from 'react';

export type NavigationPage = 'dashboard' | 'battery' | 'sld' | 'alarms' | 'events' | 'trends' | 'network' | 'system' | 'help';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('dashboard');

  const navigateTo = (page: NavigationPage) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    navigateTo
  };
};