import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="https://github.com/pkykev">Github</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo">LinkedIn</Nav.Link>
          <Nav.Link href="https://stackoverflow.com/">Stack OverFlow</Nav.Link>
          <Nav.Link href="https://www.reddit.com/">Reddit</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;