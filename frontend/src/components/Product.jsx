import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import formatCurrency from '../../../backend/utils/currency';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Card.Text as="h3" className="text-success">
          {formatCurrency(product.price)}
        </Card.Text>

        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div" className="text-secondary">
          {product.brand}
        </Card.Text>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
