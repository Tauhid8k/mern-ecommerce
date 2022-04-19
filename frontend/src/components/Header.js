import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { cartActions } from '../redux/cartSlice';
import Cart from './Cart';

const Header = () => {
  const dispatch = useDispatch();
  const { totalQuantity, showCart } = useSelector((state) => state.cart);

  const cartCloseHandler = () => {
    dispatch(cartActions.setShowCart(false));
  };

  return (
    <header>
      <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>MERN SHOP</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse>
            <Nav className='ms-auto my-2 my-lg-0'>
              <Nav.Link onClick={() => dispatch(cartActions.setShowCart(true))}>
                <i className='fa-solid fa-cart-shopping'></i>
                Cart
                <Badge pill bg='info' style={{ marginTop: '-11px' }}>
                  {totalQuantity}
                </Badge>
              </Nav.Link>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fa-solid fa-user'></i>
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* OffCanvas */}
      <Cart show={showCart} cartCloseHandler={cartCloseHandler} />
    </header>
  );
};

export default Header;
