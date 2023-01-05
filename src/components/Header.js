import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to='/' className="navbar-brand">Navbar</Link>
          <Nav className="ms-auto">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/login' className="nav-link">Sign In</Link>
            <Link to='/register' className="nav-link">Sign Up</Link>
          
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
