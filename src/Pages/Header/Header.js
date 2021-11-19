import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  // active style for nav
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div>
      {/* navbar section */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Lamp<span className="text-primary">Land</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} activeStyle={activeStyle} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} activeStyle={activeStyle} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} activeStyle={activeStyle} to="/alllamps">
                All Lamps
              </Nav.Link>
              <Nav.Link as={Link} activeStyle={activeStyle} to="/dashboard">
                Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            {user.email && (
              <span style={{ color: "white" }}>{user?.displayName} </span>
            )}
            {user?.email ? (
              <Button onClick={logOut} color="inherit">
                Logout
              </Button>
            ) : (
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
