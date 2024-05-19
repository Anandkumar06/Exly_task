import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import AddBookingForm from '../components/AddBookingForm';
import BookingTable from '../components/BookingTable';

const MyBookings = () => {
  const [show, setShow] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
    setFilteredBookings(storedBookings);
  }, []);

  const handleSave = (data) => {
    const updatedBookings = [...bookings, data];
    setBookings(updatedBookings);
    setFilteredBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = bookings.filter(
      (booking) =>
        booking.product.toLowerCase().includes(value) ||
        booking.customerName.toLowerCase().includes(value)
    );
    setFilteredBookings(filtered);
    setCurrentPage(1);
  };

  return (
    <Container>
      <h1 className="mt-5">My Bookings</h1>
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by customer name or product name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={handleShow}>
            Add Booking
          </Button>
        </Col>
      </Row>
      <AddBookingForm show={show} handleClose={handleClose} handleSave={handleSave} />
      <BookingTable bookings={filteredBookings} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Container>
  );
};

export default MyBookings;
