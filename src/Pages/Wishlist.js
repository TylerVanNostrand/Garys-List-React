import React from 'react'
import { Link } from 'react-router-dom';


function Wishlist({product, removeFromWishlist, index}) {

    return (
        <div className="container border p-3">
                <div>
                </div>
                <div className="fs-6 text-muted text-decoration-underline" onClick={() => removeFromWishlist(index)}>
                   No Items in Wishlist
                </div>
                <div>
            </div>
        </div>
    )
}
export default Wishlist;