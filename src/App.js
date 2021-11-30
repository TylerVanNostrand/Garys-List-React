import * as React from "react";
import "./App.css";
import { Routes, Switch, Route, Link } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Footer from "../src/Components/Footer";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Forum from "./Pages/Forum";
import Products from "../src/Pages/Products";

function App() {
  return (
    <>
    <MyNavbar />
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="lineup" element={<Products />} />
      <Route path="standings" element={<Forum />} />
      <Route path="history" element={<About />} /> */}
    </Routes>
    "Insert Something Here"
    <Footer />
  </>
  );
}
export default App;