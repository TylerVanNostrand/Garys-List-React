import React from 'react'
//import { Link } from 'react-router-dom';


function Cart({product, removeFromCart, index}) {

    return (
        <div className="container border p-3">
                <div>
                </div>
                <div className="fs-6 text-muted text-decoration-underline" onClick={() => removeFromCart(index)}>
                   No Items in Cart
                </div>
                <div>
            </div>
        </div>
    )
}
export default Cart;