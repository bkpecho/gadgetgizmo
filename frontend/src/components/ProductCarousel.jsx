import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import formatCurrency from '../../../backend/utils/currency';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import Message from './Message';
import Rating from './Rating';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel
      pause="hover"
      className="bg-light mb-4"
      controls={false}
      indicators={false}
    >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt={product.name}
              className="d-block mx-auto"
            />
            <Carousel.Caption className="carousel-caption p-3 text-primary">
              <h3>
                {product.name}{' '}
                <span className="text-success">
                  ({formatCurrency(product.price)})
                </span>
              </h3>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
