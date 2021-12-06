import React from 'react'

import MyNavbar from "./MyNavbar";
import Footer from "./Footer";

import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <MyNavbar />
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
            <Footer />
        </div>
    )
}
