import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

export default function Products({ products, addToCart, index })  {
    return (
        <Row xm={4} sm={4} md={4} lg={4} className="justify-content-center g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img variant="top" src={products} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary" onClick={()=> addToCart(index)}>Add to Cart</Button>{' '}
                    <Button variant="primary">Add to Wishlist</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    );
}