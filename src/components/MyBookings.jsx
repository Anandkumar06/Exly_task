import React from 'react'
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import BookingForm from './BookingForm';
import Navbar from './Navbar';



export default function MyBookings() {
  return (
    <>
    <Navbar />
    <Box height={30} />
    <Box sx={{display: 'flex', marginTop:'80px'}}>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>My Bookings</h1>
    
    <Divider />
    <BookingForm />
    </Box>
    </Box>
    </>
  )
}
