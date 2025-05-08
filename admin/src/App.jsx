import React from 'react'
import Navbar from './components/Navbar/navbar'
import Sidebar from './components/Sidebar/Sidebar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Add from './views/Add/Add'
import List from './views/List/List'
import Orders from './views/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import ReservationList from './views/Reservation/ReservationList'


const App = () => {


  const url = "http://localhost:4000"
  return (
    <div >
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
          <Route path="/reservations" element={<ReservationList url={url} />} />
        </Routes>
        
      </div>
    </div>
  )
}

export default App
