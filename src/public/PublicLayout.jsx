import React from 'react'
import AllNavbar from './components/AllNavbar'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer'

const PublicLayout = () => {
    return <>
        <AllNavbar />
        <Outlet />
        <Footer />
    </>
}

export default PublicLayout