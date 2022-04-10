import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <Container>
        <Row>
          <Col>
            <p className='text-white text-center py-3'>
              Copyright &copy; MERN E-Commerce by Tauhid
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
