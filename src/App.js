import * as React from "react";
import { Routes, Route } from "react-router-dom";
//import axios from "axios";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Layout from "./Components/Layout";
import Wishlist from "./Pages/Wishlist";
import About from "./Pages/About";
//import Forum from "./Pages/Forum";
//import Login from "./Pages/Login";


function App() {


    return (
        <>
            {/* <MyNavbar /> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="products" element={<Products />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="/about" element={<About />} /> */}

                    <Route path="*" element={<Home />} />
                    {/* <Route path="/login" element={<Login />} />
                    <Route path="/forum" element={<Forum />} />


                    {/* <Route path="about" element={<About />} /> */}
                    {/* <Route path="dashboard" element={<Dashboard />} /> */}

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Route>
            </Routes>


        </>
    );
}
export default App;