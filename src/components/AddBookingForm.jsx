import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddBookingForm = ({ show, handleClose, handleSave }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    handleSave(data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Booking</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group as={Col} controlId="formProduct">
            <Form.Label>Select a Product</Form.Label>
            <Form.Control as="select" {...register('product', { required: true })}>
              <option value="">Choose...</option>
              <option value="Product1">Product 1</option>
              <option value="Product2">Product 2</option>
              <option value="Product3">Product 3</option>
            </Form.Control>
            {errors.product && <span className="text-danger">This field is required</span>}
          </Form.Group>

          <Form.Group as={Col} controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" {...register('price', { required: true })} />
            {errors.price && <span className="text-danger">This field is required</span>}
          </Form.Group>

          <Form.Group as={Col} controlId="formCustomerName">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control type="text" {...register('customerName', { required: true })} />
            {errors.customerName && <span className="text-danger">This field is required</span>}
          </Form.Group>

          <Form.Group as={Col} controlId="formCustomerEmail">
            <Form.Label>Customer Email</Form.Label>
            <Form.Control type="email" {...register('customerEmail', { required: true })} />
            {errors.customerEmail && <span className="text-danger">This field is required</span>}
          </Form.Group>

          <Form.Group as={Col} controlId="formCustomerPhone">
            <Form.Label>Customer Phone Number</Form.Label>
            <Form.Control type="tel" {...register('customerPhone', { required: true })} />
            {errors.customerPhone && <span className="text-danger">This field is required</span>}
          </Form.Group>

          <Form.Group as={Col} controlId="formCustomerAddress">
            <Form.Label>Customer Address</Form.Label>
            <Form.Control type="text" {...register('customerAddress', { required: true })} />
            {errors.customerAddress && <span className="text-danger">This field is required</span>}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" type="submit">Add Bookings</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddBookingForm;
