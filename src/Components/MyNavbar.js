import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

export default function MyNavbar() {
  return (
    <Navbar className=" myNav myBorder border-bottom border-5 border-danger bg-white p-3 fw-bold" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand className={"active"} as={NavLink} to="/home" >
          <FontAwesomeIcon icon={faDiceD20} spin style={{ color: 'red' }} /> Gary's List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link activeClassName={"active"} as={NavLink} to="/products">
              Products
                    </Nav.Link>
            <Nav.Link activeClassName={"active"} as={NavLink} to="/cart">
              Cart
                    </Nav.Link>
            <Nav.Link activeClassName={"active"} as={NavLink} to="/wishlist">
              Wishlist
                    </Nav.Link>
            <NavDropdown className="fw-bold" title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item activeClassName={"active"} as={NavLink} to="/about">
                About
                    </NavDropdown.Item>
              <NavDropdown.Item activeClassName={"active"} as={NavLink} to="/newplayer">
                New to DnD
                    </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item activeClassName={"active"} as={NavLink} to="/login">
                Login
                    </NavDropdown.Item>
              <NavDropdown.Item activeClassName={"active"} as={NavLink} to="/signup">
                Sign Up
                    </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-dark border-2">Search</Button>
                    </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}