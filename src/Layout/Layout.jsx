import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout