import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Container class="d-flex justify-content-center">
        <Row className="justify-content-center mt-5 pt-5">
          <Col md={6} >
            <Card className="text-center border-danger border-bottom border-3 fw-bold">
              <Card.Header>Hello Traveller</Card.Header>
              <Card.Body>
                <Card.Title>Welcome to Gary's List</Card.Title>
                <Card.Text>
                  Your go to online store for all things Dungeons and Dragons.
                            <br></br>
                            Roll For Initiative!
                            <br></br>
                  <br></br>
                  <FontAwesomeIcon icon={faDiceD20} size="4x" style={{ color: 'red' }}></FontAwesomeIcon>
                </Card.Text>
                <Button as={Link} to='/products' variant="dark" size="lg">Enter Site</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}