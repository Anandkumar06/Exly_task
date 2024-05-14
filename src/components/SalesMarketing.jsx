import React from 'react'
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';
import Navbar from './Navbar';


export default function SalesMarketing() {
  return (
    <>
    <Navbar />
    <Box height={30} />
    <Box sx={{ display: 'flex',marginTop:'80px'}}>
    <Sidebar />
    <h1>Sales & Marketing</h1>
    </Box>
    </>
  )
}
