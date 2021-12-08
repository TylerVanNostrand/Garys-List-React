import React from "react";
import "../Products.css";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

export default function Products({ products, addToCart, index, addToWishlist })  {
    return (
        <Container>
            <Row md={4} className="d-flex flex-row justify-content-center g-4 mt-5">
                {/* {console.log(products)} */}
                {products.map((prod, idx) => ( 
                <Col md={4} className="d-flex flex-row justify-content-center g-4">
                <Card className="h-100 w-100">
                    <Card.Img className="myCard-img" variant="top" src={prod.image} />
                        {/* {console.log({prod : prod})} */}
                    <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text className="py-2">
                        ${prod.price.toFixed(2)}
                    </Card.Text>
                    <Button variant="primary" onClick={()=> addToCart(idx)}>Add to Cart</Button>{' '}
                    <Button variant="primary" onClick={()=> addToWishlist(idx)}>Add to Wishlist</Button>
                    </Card.Body>
                </Card>
                </Col>
                ))}
            </Row>
        </Container>    
    );
}