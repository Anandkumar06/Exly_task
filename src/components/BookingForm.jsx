import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

function BookingForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    product: '',
    price: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: ''
  });
  const [errors, setErrors] = useState({});
  const [bookings, setBookings] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrors({});
    setFormData({
      product: '',
      price: '',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      customerAddress: ''
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const validationErrors = {};
    if (!formData.product.trim()) {
      validationErrors.product = 'Product is required';
    }
    if (!formData.price.trim()) {
      validationErrors.price = 'Price is required';
    }
    if (!formData.customerName.trim()) {
      validationErrors.customerName = 'Customer name is required';
    }
    if (!formData.customerEmail.trim()) {
      validationErrors.customerEmail = 'Customer email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.customerEmail)) {
      validationErrors.customerEmail = 'Invalid email address';
    }
    if (!formData.customerPhone.trim()) {
      validationErrors.customerPhone = 'Customer phone number is required';
    }
    if (!formData.customerAddress.trim()) {
      validationErrors.customerAddress = 'Customer address is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      const newBooking = { ...formData, id: Date.now() };
      const updatedBookings = [...bookings, newBooking];
      setBookings(updatedBookings);
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      handleClose();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  const filteredBookings = bookings.filter((booking) =>
    booking.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add Booking</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Booking Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="product"
            label="Select a Product"
            type="text"
            fullWidth
            value={formData.product}
            onChange={handleInputChange}
            error={!!errors.product}
            helperText={errors.product}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={formData.price}
            onChange={handleInputChange}
            error={!!errors.price}
            helperText={errors.price}
          />
          <TextField
            margin="dense"
            name="customerName"
            label="Customer Name"
            type="text"
            fullWidth
            value={formData.customerName}
            onChange={handleInputChange}
            error={!!errors.customerName}
            helperText={errors.customerName}
          />
          <TextField
            margin="dense"
            name="customerEmail"
            label="Customer Email"
            type="email"
            fullWidth
            value={formData.customerEmail}
            onChange={handleInputChange}
            error={!!errors.customerEmail}
            helperText={errors.customerEmail}
          />
          <TextField
            margin="dense"
            name="customerPhone"
            label="Customer Phone"
            type="tel"
            fullWidth
            value={formData.customerPhone}
            onChange={handleInputChange}
            error={!!errors.customerPhone}
            helperText={errors.customerPhone}
          />
          <TextField
            margin="dense"
            name="customerAddress"
            label="Customer Address"
            type="text"
            fullWidth
            value={formData.customerAddress}
            onChange={handleInputChange}
            error={!!errors.customerAddress}
            helperText={errors.customerAddress}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <TextField
          variant="outlined"
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          style={{ float: 'right', marginRight: 10, marginTop: 10 }}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Customer Email</TableCell>
              <TableCell>Customer Phone</TableCell>
              <TableCell>Customer Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.product}</TableCell>
                <TableCell>{booking.price}</TableCell>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.customerEmail}</TableCell>
                <TableCell>{booking.customerPhone}</TableCell>
                <TableCell>{booking.customerAddress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredBookings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}

export default BookingForm;
