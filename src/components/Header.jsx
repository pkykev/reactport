import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

export default function Header(props) {
  const [active, setActive] = useState('')
  const handleSelect = (e) => {
    setActive(e.target)
    
  }
  console.log(active)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Patrick Kevlahan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
            className={active==='AboutMe' ? 'active' : undefined} 
            name='AboutMe' onClick={() => {props.setLocation('AboutMe');handleSelect}}>About Me</Nav.Link>
            <Nav.Link 
            className={active==='Portfolio' ? 'active' : undefined}
            name='Portfolio' onClick={() => {props.setLocation('Portfolio');handleSelect}}>Portfolio</Nav.Link>
            <Nav.Link 
            className={active==='Contact' ? 'active' : undefined}
            name='Contact' onClick={() => {props.setLocation('Contact');handleSelect}}>Contact</Nav.Link>
            <Nav.Link 
            className={active==='Resume' ? 'active' : undefined}
            name='Resume' onClick={() => {props.setLocation('Resume');handleSelect}}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
