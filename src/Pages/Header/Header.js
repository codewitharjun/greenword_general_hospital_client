import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const {user, logOut} = useAuth();
  console.log(user);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
          <Container>
              <Navbar.Brand href="#home">Greenworld General Hospital</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#services">Departments</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#docktors">Docktors</Nav.Link>
                  <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                  {user?.email?
                    <Button onClick={logOut} variant="link">LogOut</Button> :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  }
                  <Navbar.Text> Signed in as: <a href="/login">{user?.displayName}</a></Navbar.Text>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  );
}

export default Header;
