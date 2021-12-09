import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import "../Cart.css";


function Wishlist({products, removeFromWishlist, index}) {

    return (
        <Col className="pt-3" md={4}>           
            <Card className='h-100 text-center shadow'>
                <Card.Img className="myCart-img p-2" variant="top" src={products?.image} />
                    {/* {console.log({products : products})} */}
                <Card.Body>
                    {products?.title}
                    {/* {console.log(products)} */}
                    <div className="py-3">
                   ${products?.price.toFixed(2)}    
                    </div>  
                </Card.Body>
                    <Button variant="dark text-decoration-underline" onClick={() => removeFromWishlist(index)}>Remove From Wishlist</Button> 
            </Card>
        </Col>            
    )
}
    export default Wishlist;