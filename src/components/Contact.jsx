import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


export default function Contact() {
  return (
    <>
    <Navbar />
    <Box height={30} />
    <Box sx={{ display: 'flex',marginTop:'80px'}}>
    <Sidebar />
    <h1>Contact</h1>
    </Box>
    </>
  )
}
