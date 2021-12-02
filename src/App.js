import * as React from "react";
import { Routes, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import MyNavbar from "./Components/MyNavbar";
import Footer from "../src/Components/Footer";
import Home from "../src/Pages/Home";
import Products from "../src/Pages/Products";
import About from "../src/Pages/About";
import Forum from "./Pages/Forum";
import Cart from "../src/Pages/Cart";
import Login from "../src/Pages/Login";
import Wishlist from "../src/Pages/Wishlist";


function App() {

    
  return (
    <>
    <MyNavbar />
    <Routes>
       <Route path="/*" element={<Home />} />
       <Route path="/products" element={<Products />} />
       <Route path="/cart" element={<Cart />} /> 
       <Route path="/wishlist" element={<Wishlist />} />
     {/* <Route path="/login" element={<Login />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/about" element={<About />} /> */}
    </Routes>
    
    <Footer />
  </>
  );
}
export default App;