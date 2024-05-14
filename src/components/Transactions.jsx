import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


export default function Transactions() {
  return (
    <>
    <Navbar />
    <Box height={30} />
    <Box sx={{ display: 'flex',marginTop:'80px'}}>
    <Sidebar />
    <h1>Transactions</h1>
    </Box>
    </>
  )
}
