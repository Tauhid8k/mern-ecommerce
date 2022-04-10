import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <hr />
      <Row>
        {products.map((product) => (
          <Col md={6} lg={4} xxl={3} key={product._id} className='d-flex'>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
