import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function Products(props)  {
    return (
        <Row xm={4} sm={4} md={4} lg={4} className="justify-content-center g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>{' '}
                    <Button variant="primary">Add to Wishlist</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    );
}