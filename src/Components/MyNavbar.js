import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MyNavbar(props) {
    return (
        <Navbar sticky="top" className="myNav">
            <Container className="border border-primary border-5 rounded-3 bg-white col-md-4 col-sm-12">
                <Nav className="me-auto">
                    <Nav.Link activeClassName={"active"} as={NavLink} to="/home">
                        Home
          </Nav.Link>
                    <Nav.Link activeClassName={"active"} as={NavLink} to="/products">
                        Products
          </Nav.Link>
                    <Nav.Link activeClassName={"active"} as={NavLink} to="/forum">
                        Forum
          </Nav.Link>
                    <Nav.Link activeClassName={"active"} as={NavLink} to="/about">
                        About Us
          </Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Welcome, <a href="#login">Dungeon Master</a>
                    </Navbar.Text>
                    <span style={{ paddingLeft: 8 }}></span>
                    <Nav>
                        <Nav.Link activeClassName={"active"} as={NavLink} to="/login">
                            Logout
            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}