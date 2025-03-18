
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Add animation delay for initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} closeSidebar={toggleSidebar} />
      <div 
        className={`flex flex-col flex-grow overflow-hidden transition-all duration-300 ${
          sidebarOpen && !isMobile ? 'ml-64' : 'ml-0'
        }`}
      >
        <Navbar onMenuClick={toggleSidebar} />
        <main className={`flex-grow overflow-auto p-4 lg:p-6 transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mx-auto w-full max-w-7xl animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
