import React from 'react'
import { Card, Form, Col, Row, Button, Container } from 'react-bootstrap';

export default function SignUp() {
  return (
    <Container className="d-flex justify-content-center container-fluid">
      <Row className="d-flex justify-content-center container-fluid">
        <Col md={8} className="mt-5 pb-3 text-center">
          <Card className="text-center border-danger border-bottom border-3 p-2 pb-3 fw-bold">
            <Card.Title className="fw-bold fs-2 py-3">Sign Up</Card.Title>
            <Container className="px-5 py-2">
              <Row className="justify-content-center">
                <Col >
                  <Form>
                    <Row >
                      <Form.Group as={Col} controlId="firstName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter First Name" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lastname" placeholder="Enter Last Name" />
                      </Form.Group>
                    </Row>
                    <Row >
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Agree to terms and conditions" />
                    </Form.Group>

                    <Button variant="danger" type="submit">
                      Submit
                                        </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
