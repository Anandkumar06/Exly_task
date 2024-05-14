import React from 'react'
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import DashboardImage from './DashboardImage';





export default function Dashboard() {
  return (
    <>
    <Navbar />
    <Box height={30} />
    <Box sx={{ display: 'flex',marginTop:'80px'}}>
    <Sidebar />
    <h1>Home</h1>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <DashboardImage />
      </Box>
        
    </Box>
    </>
  )
}
