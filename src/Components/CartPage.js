import React from 'react';
import Cart from "../Pages/Cart";
import { Container, Row, Card } from "react-bootstrap";

export default function CartPage({cart, removeFromCart, total}) {
    return (
       <Container>
            <Row className="justify-content-center mt-5">
            <Card border="danger" className="text-center border-5">
        <Container>
            <Row>
            
            { cart !== null ?
                cart?.map((products, index) =>
                <Cart   
                    key={index}
                    index={index}
                    products={products}
                    removeFromCart={removeFromCart}/>)
                    : 'Your cart is empty'}
                    <div className="py-5"> Total: ${total()}</div>

            </Row>
        </Container>                
            </Card>
            </Row>
        </Container>
    )
}
