import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ toggleSidebar }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Button variant="primary" onClick={toggleSidebar} className="mr-2">
          <i className="fas fa-bars"></i>
        </Button>
        <Navbar.Brand as={Link} to="/">EXLY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#notifications">
              <i className="fas fa-bell"></i>
              <span className="badge badge-danger">17</span>
            </Nav.Link>
            <Nav.Link href="#messages">
              <i className="fas fa-envelope"></i>
              <span className="badge badge-danger">4</span>
            </Nav.Link>
            <Nav.Link href="#profile">
              <i className="fas fa-user"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
