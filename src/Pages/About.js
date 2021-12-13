import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <Container className="d-flex justify-content-center container-fluid" >
      <Row className="justify-content-center mt-5">
        <Col className="pb-5" md={6} >
          <Card border="danger" className="text-center border-5">
            <Card.Body>
              <Card.Title className="fs-2">Welcome to Gary's List</Card.Title>
              <FontAwesomeIcon icon={faDiceD20} size="4x" style={{ color: 'red' }}></FontAwesomeIcon>
              <Card.Text className="p-2">
                We’re sure your first question is: “What is Gary’s List and why is it called that?”.
                Gary’s List is your go to website for all items Dungeons and Dragons. We have everything
                a new or experienced player could ever need.  From homemade dice, miniatures, paints, maps,
                books, and adventure paths, to those hard to find early edition comics or books. We
                welcome new players, old players, casual, hardcore, Dungeon Masters, party members,
                and even those that don’t play but love the game anyway! If we don’t have it then we
                will do our best to search it out and find it.
                                   <br></br>
                <br></br>
	                            Now your second question: “Why is it called Gary’s List?”. Well as you’ll find out
                            in our New Players section, the main founder of Dungeons and Dragons name is
                            Gary Gygax (now <b>THAT</b> is a fantasy name). We here at Gary’s List are nerds to our core
                            and welcome any and all who wish to visit our site. Stay a while and see all that we
                            have to offer.
                            </Card.Text>
              <Button as={Link} to='/products' variant="dark" size="lg">Enter Site</Button>{' '}
              {/* <Button as={Link} to='/signup' variant="dark" size="lg">Sign Up</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}


