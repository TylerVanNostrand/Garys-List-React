import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import CartPage from "./Components/CartPage";
import Layout from "./Components/Layout";
import WishlistPage from "./Components/WishlistPage";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
//import Forum from "./Pages/Forum";


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
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(axiosCall, []);

    useEffect(() => {
    let lSWishlist = window.localStorage.getItem('wishlist');
    if (lSWishlist !== wishlist) {
      setCart(JSON.parse(lSWishlist));
    }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const updateCart = (cart) => {
    setCart(cart);
    window.localStorage.setItem('cart', JSON.stringify(cart))
    // console.log(cart);
  }

  const updateWishlist = (wishlist) => {
    setWishlist(wishlist);
    window.localStorage.setItem('wishlist', JSON.stringify(wishlist))
    // console.log(wishlist);
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

  const addToWishlist = (index) => {
    // console.log(cart);
     let temp = [];
    if (wishlist !== null) {
      temp = [...wishlist]
    }
    temp.push(products[index])
    console.log(temp);
    updateWishlist(temp);
    // console.log(Wishlist)
  }

  const removeFromCart = (index) => {
    let temp = [...cart];
    temp.splice(index, 1);
    updateCart(temp);
  }

  const removeFromWishlist = (index) => {
    let temp = [...wishlist];
    temp.splice(index, 1);
    updateWishlist(temp);
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

  const totalWishlist = () => {
    let num = 0;
    if (wishlist !== null) {
      for (let i = 0; i < wishlist.length; i++) {
        num += wishlist[i].price
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

                    <Route path="products" element={    
                    <Products
                        products={products}
                        addToCart={addToCart}
                        addToWishlist={addToWishlist} />} />

                    <Route path="cart" element={
                    <CartPage 
                        cart={cart}
                        removeFromCart={removeFromCart}
                        total={total} />} />

                    <Route path="wishlist" element={
                    <WishlistPage
                        wishlist={wishlist}
                        removeFromWishlist={removeFromWishlist}
                        total={totalWishlist} />} />

                    <Route path="/about" element={<About />} /> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<Home />} />
                   {/*  <Route path="/forum" element={<Forum />} />

                    {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
                </Route>
            </Routes>


        </>
    );
}
export default App;