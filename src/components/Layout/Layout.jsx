import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../Footer/Footer';


export default function Layout() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
    </div>
  )
}
