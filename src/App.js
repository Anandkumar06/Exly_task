import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import MyOfferings from './Pages/MyOfferings.jsx';
import SalesMarketing from './Pages/SalesMarketing.jsx';
import Transactions from './Pages/Transactions.jsx';
import MyBookings from './Pages/MyBookings';
import Contact from './Pages/Contact';
import './App.css';  // Create App.css to style the sidebar

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <CustomNavbar toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className={`content ${isSidebarOpen ? '' : 'shrink'}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/offerings" element={<MyOfferings />} />
              <Route path="/sales" element={<SalesMarketing />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/bookings" element={<MyBookings />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
