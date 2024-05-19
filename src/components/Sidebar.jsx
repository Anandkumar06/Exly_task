import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/dashboard">
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/offerings">
          <i className="fas fa-box"></i> My Offerings
        </Nav.Link>
        <Nav.Link as={Link} to="/sales">
          <i className="fas fa-dollar-sign"></i> Sale & Marketing
        </Nav.Link>
        <Nav.Link as={Link} to="/transactions">
          <i className="fas fa-shopping-cart"></i> Transactions
        </Nav.Link>
        <Nav.Link as={Link} to="/bookings">
          <i className="fas fa-book"></i> My Bookings
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          <i className="fas fa-address-book"></i> Contact
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
