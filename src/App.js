import * as React from "react";
import { Routes, Switch, Route, Link } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Footer from "../src/Components/Footer";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Forum from "./Pages/Forum";
import Products from "../src/Pages/Products";
import Cart from "../src/Pages/Cart";
import Login from "../src/Pages/Login";

function App() {
  return (
    <>
    <MyNavbar />
    <Routes>
       <Route path="/*" element={<Home />} />
       <Route path="/products" element={<Products />} />
     {/* <Route path="/login" element={<Login />} />
      <Route path="/fourm" element={<Forum />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/cart" element={<Cart />} /> */}
    </Routes>
    
    <Footer />
  </>
  );
}
export default App;