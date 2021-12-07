import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';

export default function Home() {
    return (
        <Container class="d-flex justify-content-center">
            <Row className="justify-content-center mt-5 pt-5">
            <Col md={6} >
           <Card className="text-center">
                <Card.Header>Hello Traveller</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to Gary's List</Card.Title>
                         <Card.Text>
                            Your go to online store for all things Dungeons and Dragons.
                            <br></br>
                            Roll For Initiative!
                        </Card.Text>
                        <Button as={Link} to='/products' variant="primary" size="lg">Enter Site</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}