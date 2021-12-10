import React from "react";
import "../Products.css";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

export default function Products({ products, addToCart, index, addToWishlist })  {
    return (
        <Container>
            <Row md={4} className="d-flex flex-row justify-content-center g-4 mt-5">
                {/* {console.log(products)} */}
                {products.map((prod, idx) => ( 
                <Col md={4} className="myProduct d-flex flex-row justify-content-center g-4">
                <Card className="h-100 w-100 border-danger border-bottom border-3 fw-bold">
                    <Card.Img className="myCard-img p-2" variant="top" src={prod.image} />
                        {console.log({prod : prod})}
                    <Card.Body className="myBody">
                    <Card.Title className="fw-bold">{prod.title}</Card.Title>
                    <Card.Text className="py-2 fs-3 fw-bold">
                        ${prod.price.toFixed(2)}
                    </Card.Text>
                    <Button variant="danger" onClick={()=> addToCart(idx)}>Add to Cart</Button>{' '}
                    <Button variant="dark" onClick={()=> addToWishlist(idx)}>Add to Wishlist</Button>
                    </Card.Body>
                </Card>
                </Col>
                ))}
            </Row>
        </Container>    
    );
}