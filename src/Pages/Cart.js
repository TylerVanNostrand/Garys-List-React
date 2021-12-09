import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import "../Cart.css";


function Cart({products, removeFromCart, index}) {

    return (
        <Col md={4}>           
            <Card className='h-100 text-center'>
                <Card.Img className="myCart-img" variant="top" src={products?.image} />
                    {/* {console.log({products : products})} */}
                <Card.Body>
                    {products?.title}
                    {/* {console.log(products)} */}
                    <div className="py-3">
                    ${products?.price.toFixed(2)}    
                    </div>  
                </Card.Body>
                    <Button variant="danger text-decoration-underline" onClick={() => removeFromCart(index)}>Remove From Cart</Button> 
            </Card>
        </Col>            
    )
}
export default Cart;