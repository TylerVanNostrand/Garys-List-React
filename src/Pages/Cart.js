import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import "../Cart.css";


function Cart({ products, removeFromCart, addToWishlist, index }) {

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
        <Button variant="danger text-decoration-underline" onClick={() => removeFromCart(index)}>Remove From Cart</Button> {' '}
        <Button variant="dark text-decoration-underline" onClick={() => addToWishlist(index)}>Add to Wishlist</Button>

      </Card>
    </Col>
  )
}
export default Cart;