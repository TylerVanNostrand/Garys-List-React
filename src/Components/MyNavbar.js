import React from "react";
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

export default function MyNavbar(props) {
    return (
        
        <Navbar className=" myNav myBorder border-bottom border-5 border-danger bg-white p-3 fw-bold  container-fluid" sticky="top">
          <Navbar.Brand > <FontAwesomeIcon icon={faDiceD20} spin style={{color:'red'}} /> Gary's List</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link activeClassName={"active"} as={NavLink} to="/home">
                    Home
              </Nav.Link>
              <Nav.Link activeClassName={"active"} as={NavLink} to="/about">
                    About
                  </Nav.Link>
              <Nav.Link activeClassName={"active"} as={NavLink} to="/forum">
                    Forum
              </Nav.Link>
              <NavDropdown title="Menu" id="navbarScrollingDropdown">
                <NavDropdown.Item activeClassName={"active"} as={NavLink} to="/products">
                    Products
                </NavDropdown.Item>
                <NavDropdown.Item activeClassName={"active"} as={NavLink} to="/cart">
                    Cart
                </NavDropdown.Item>
                <NavDropdown.Item activeClassName={"active"} as={NavLink} to="/wishlist">
                    Wishlist
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item activeClassName={"active"} as={NavLink} to="/login">
                    Login
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark border-2">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
    );
}