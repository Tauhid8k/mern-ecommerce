import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
