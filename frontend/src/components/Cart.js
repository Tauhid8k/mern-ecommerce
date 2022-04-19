import { Offcanvas } from 'react-bootstrap';

const Cart = ({ show, cartCloseHandler }) => {
  return (
    <Offcanvas placement='end' show={show} onHide={cartCloseHandler}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className='empty-cart'>Cart is Empty</div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
