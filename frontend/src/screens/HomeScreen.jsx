import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import Paginate from '../components/Paginate';
import Product from '../components/Product';
import ProductCarousel from '../components/ProductCarousel';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <>
          <Link to="/" className="btn btn-link mb-3">
            Go Back
          </Link>
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {keyword ? <Meta title={`${keyword} | Gadget Gizmo`} /> : <Meta />}
          {!keyword ? (
            <h1>Latest Products</h1>
          ) : (
            <h1>Results for &quot;{keyword}&quot;</h1>
          )}
          {data.products.length === 0 && (
            <Message variant="info">No results</Message>
          )}
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
