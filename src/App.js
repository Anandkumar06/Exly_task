
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MyOfferings from './components/MyOfferings';
import SalesMarketing from './components/SalesMarketing';
import Transactions from './components/Transactions';
import MyBookings from './components/MyBookings';
import Contact from './components/Contact';


function App() {
  
  return (
    <> 
     <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard />}></Route>
        <Route path="/myofferings" exact element={<MyOfferings />}></Route>
        <Route path="/salesmarketing" exact element={<SalesMarketing />}></Route>
        <Route path="/transaction" exact element={<Transactions />}></Route>
        <Route path="/mybookings" exact element={<MyBookings />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
      </Routes>
     </BrowserRouter>
   </>

  )
}

export default App;
