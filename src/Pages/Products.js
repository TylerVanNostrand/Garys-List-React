import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                    {
                        props.deleteItem
                            ?
                            <Button onClick={() => props.deleteItem(props.item.id)}className='bg-dark neonText border-light rounded'>Delete</Button>
                    
                            :
                            <>
                            
                                <Link className="text-dark bi bi-bag-plus neonText" onClick={() => props.addToCart(props.item.id)} to='/cart' >Add To Cart</Link >&nbsp;
                                Items Currently in cart: {props.cartNum}
                            </>
                    }
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    );
}