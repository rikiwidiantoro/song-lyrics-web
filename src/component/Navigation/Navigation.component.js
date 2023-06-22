import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.svg';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#" className='text-white'> <img src={logo} alt='logo' width='50' /> Song-Lyrics</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/allsong">All Song</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;