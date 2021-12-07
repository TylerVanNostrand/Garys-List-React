import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Layout from "./Components/Layout";
import Wishlist from "./Pages/Wishlist";
import About from "./Pages/About";
//import Forum from "./Pages/Forum";
//import Login from "./Pages/Login";


function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

  const axiosCall = () => {
    let apiUrl = `https://fakestoreapi.com/products`;
    Axios.get(apiUrl).then((response) => {
      setProducts(response.data)
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(axiosCall, []);

      useEffect(() => {
      let lSCart = window.localStorage.getItem('cart');
      if (lSCart !== cart) {
        setCart(JSON.parse(lSCart));
      }
    }, [])

  const updateCart = (cart) => {
    setCart(cart);
    window.localStorage.setItem('cart', JSON.stringify(cart))
    // console.log(cart);
  }

  const addToCart = (index) => {
    // console.log(cart);
     let temp = [];
    if (cart !== null) {
      temp = [...cart]
    }
    temp.push(products[index])
    console.log(temp);
    updateCart(temp);
    // console.log(cart)
  }

  const removeFromCart = (index) => {
    let temp = [...cart];
    temp.splice(index, 1);
    updateCart(temp);
  }

  const total = () => {
    let num = 0;
    if (cart !== null) {
      for (let i = 0; i < cart.length; i++) {
        num += cart[i].price
      }
      return num.toFixed(2);
    }
  }

    return (
        <>
            {/* <MyNavbar /> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="products" element={<Products />} />

                    <Route path="cart" element={<Cart   
                        key={index}
                        index={index}
                        products={products}
                        removeFromCart={removeFromCart}/>} />

                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="/about" element={<About />} /> 
                    <Route path="*" element={<Home />} />
                    {/* <Route path="/login" element={<Login />} />
                    <Route path="/forum" element={<Forum />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                </Route>
            </Routes>


        </>
    );
}
export default App;