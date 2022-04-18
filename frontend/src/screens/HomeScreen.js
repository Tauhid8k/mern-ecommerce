import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Spinner } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
import { productActions } from '../redux/productSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.product);

  console.log(error);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        dispatch(productActions.getAllProducts(data));
      } catch (error) {
        dispatch(productActions.error(error.message));
      }
    };

    fetchProducts();
  }, [dispatch]);

  console.log(error);

  return (
    <>
      <h1>Latest Products</h1>
      <hr />
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col md={6} lg={4} xxl={3} key={product._id} className='d-flex'>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
