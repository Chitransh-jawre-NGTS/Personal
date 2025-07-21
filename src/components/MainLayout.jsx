import React, { useState } from 'react';
import SideBar from './SideBar';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ minHeight: '100vh' }}>
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: isSidebarOpen ? '220px' : '0',
          background: '#f5f5f5',
          boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          transition: 'width 0.3s'
        }}
      >
        <SideBar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </aside>
      <main
        style={{
          marginLeft: isSidebarOpen ? '220px' : '0',
          transition: 'margin-left 0.3s',
          padding: '24px'
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;