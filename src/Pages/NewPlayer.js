import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col, } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

export default function NewPlayer() {
    return (
    <Container className="d-flex justify-content-center container-fluid" >
        <Row className="justify-content-center mt-5">
            <Col className="pb-5" md={6} >
                <Card border="danger" className="text-center border-5">
                    <Card.Body>
                        <Card.Title className="fs-2">Are you new to Dungeons and Dragons?</Card.Title>
                        <FontAwesomeIcon icon={faDiceD20} size="4x"  style={{color:'black'}}></FontAwesomeIcon>
                            <Card.Text className="p-2">
                                If you answered <b>yes</b> to the above question, then you’re in the right place! Welcome traveller to a website dedicated
                            to all things Dungeons and Dragons. I’m sure you’re full of questions. What is Dnd? Why do we use dice? How do I create
                            a character? Which edition is the best? How can I learn the rules? What do I do if I don’t have any friends who want to
                            play? Where do I even start? Don’t worry, these are all questions even the most experienced players have asked themselves 
                            at one point. We hope that we can answer a few of them for you.
                            <br></br>
                            <br></br>
                                First: What is Dungeons and Dragons? Dungeons & Dragons (commonly abbreviated as D&D or DnD) is a fantasy tabletop 
                            role-playing game (RPG) originally designed by <i>Gary Gygax</i> and <i>Dave Arneson</i>. It was first published in 1974 by 
                            Tactical Studies Rules, Inc. It has been published by Wizards of the Coast (now a subsidiary of Hasbro) since 1997. 
                            The game was derived from miniature wargames, with a variation of the 1971 game Chainmail serving as the initial rule 
                            system. D&D's publication is commonly recognized as the beginning of modern role-playing games and the role-playing game 
                            industry.
                            <br></br>
                            <br></br>
                                Second: Where in the world do I start? This question is more difficult to answer, and everyone you meet will have
                            a different answer. We suggest you start with one of the many podcasts that are available out there. A few of our
                            favorites are: <i>The Adventure Zone, Critical Role, Not Another DnD Podcast, and Dragon Friends</i>. Maybe you don’t want 
                            to listen to a podcast? <i>Critical Role</i> has an excellent series on YouTube that is very highly rated and has a high 
                            production value. Still not what you’re looking for? You can always start with the <b>Players Handbook</b>. 
                            This is a handy (pun intended) guide/rule book for every player. It will break down and explain the rules of the game. 
                            Along with detailed explanations of the race, classes, skills, and many of the common items you will come across in 
                            the game.
                            <br></br>
                            <br></br>
                                Now that you have hopefully picked a place to get started, all of us here at Gary’s List welcome you to the amazing 
                                world of Dungeons and Dragons. We hope you develop a love for the game and all that it encompasses! If you ever have
                                 any questions or need any help,  be sure to visit our forums! Now, our story begins in a homely tavern…
                            </Card.Text>
                            <Button as={Link} to='/products' variant="danger" size="lg">Back to Site</Button>{' '}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}


