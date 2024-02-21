import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div className="container-fluid">

            <div className="header-banner container">
                <Navbar />

                <Header />

            </div>



            {/* "children" i Layout i App.jsx */ }
            <Outlet />


            <Footer />

        </div>
    )
}

export default Layout