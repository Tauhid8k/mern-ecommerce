import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>MERN SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse>
            <Nav className='ms-auto my-2 my-lg-0'>
              <Nav.Link href='/cart'>
                <i className='fa-solid fa-cart-shopping'></i>
                Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fa-solid fa-user'></i>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
