import React from 'react'
import { Link } from "react-router-dom"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function Login() {
    return (
    <Container className="d-flex justify-content-center container-fluid">
        <Row className="justify-content-center mt-5">
            <Col className="text-center">
                <Card className="text-center border-danger border-bottom border-3 fw-bold">
                    <Card.Body>
                        <Card.Title>Gary's List</Card.Title>
                        <Card.Text>Please Login To Continue</Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Leave Me Signed In" />
                            </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="danger" type="submit">
                                        Sign In
                                    </Button> {' '}
                                    <Button variant="dark" type="submit">
                                        Forgot Password?
                                    </Button>
                                </div>    
                                <Link to='/signup'>Sign Up</Link>
                        </Form>
                    </Card.Body>                
                </Card>           
            </Col>
        </Row>
    </Container>
    )
}
