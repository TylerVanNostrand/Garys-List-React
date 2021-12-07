import React from 'react'
import { Button, Card, Row, Col, Container } from 'react-bootstrap';



function Cart({product, removeFromCart, index}) {

    return (
    <Container>
        <Row className="justify-content-center g-4">
                <Col>        
                    <Card>
                    <Card.Body>
                        
                    </Card.Body>
                    <Button variant="primary text-decoration-underline" onClick={() => removeFromCart(index)}>Remove From Cart</Button> 
                    </Card>
                </Col>
        </Row>
    </Container>
    )
}
    export default Cart;