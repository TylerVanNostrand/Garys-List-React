import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function Home() {
    return (
        <div class="d-flex justify-content-center">
           <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <   Card.Body>
                        <Card.Title>Welcome to Gary's List</Card.Title>
                         <Card.Text>
                            Your go to online store for all things Dungeons and Dragons.
                        </Card.Text>
                        <Button as={Link} to='/about' variant="primary">About Us</Button>{' '}
                        <Button as={Link} to='/products' variant="primary">Products</Button>
                        </Card.Body>
                </Card>
        </div>
    )
}