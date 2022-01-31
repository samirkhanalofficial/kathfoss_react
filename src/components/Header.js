import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Container , Nav ,NavDropdown, Button, } from 'react-bootstrap';
export default function Header() {
  return <div>
      
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to="/"><Navbar.Brand > Samir </Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link to='/' class="nav-link" >  Home </Link>
    <Link to='/example' class="nav-link" >  Example </Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Link to='/login' class="nav-link" ><Button variant="outline-primary"> Login </Button></Link>
    <Link to='/register' class="nav-link" ><Button variant="outline-secondary"> Sign Up </Button></Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
}
