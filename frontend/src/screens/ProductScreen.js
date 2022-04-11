import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className='product'>
      <Link to='/' className='btn btn-dark my-3'>
        Go Back
      </Link>

      <Row className='g-4'>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2 className='mb-3'>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <span className='fs-3 fw-bold'>Price: ${product.price}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className='product-stock fs-4 fw-bold'>
                Stock:
                <span
                  className={`${
                    product.countInStock > 0 ? 'text-dark' : 'text-danger'
                  }`}
                >
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </span>
              </span>
            </ListGroup.Item>
            <div
              className={`product-qty-cart mt-4 ${
                product.countInStock === 0 ? 'd-none' : 'd-flex'
              }`}
            >
              <select name='' className='form-select border-secondary'>
                <option value=''>1</option>
                <option value=''>2</option>
              </select>
              <button className='btn btn-dark' type='button'>
                Add To Cart
              </button>
            </div>
            <div>
              <p className='fs-4 my-3'>
                <span className='fw-bold'>Description: </span>
                {product.description}
              </p>
            </div>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
