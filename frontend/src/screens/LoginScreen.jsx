import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { setCredentials } from '../slices/authSlice';
import { useLoginMutation } from '../slices/usersApiSlice';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const demoLoginHandler = async (demoType) => {
    const demoEmail =
      demoType === 'adminDemo' ? 'admin@email.com' : 'user@email.com';
    const demoPassword = '123456';

    try {
      setEmail(demoEmail);
      setPassword(demoPassword);

      const res = await login({
        email: demoEmail,
        password: demoPassword
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Container className="py-5">
      <FormContainer>
        <h1>Sign In</h1>
        <p>
          Hey there! Ready to explore a world of awesome gadgets? Sign up or log
          in to Gadget Gizmo and find the coolest tech around.
        </p>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email" className="my-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="my-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>

            <Button
              type="submit"
              variant="primary"
              className="mt-3 w-100"
              disabled={isLoading}
            >
              Sign In
            </Button>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <Button
              type="button"
              variant="success"
              className="w-100"
              disabled={isLoading}
              onClick={() => demoLoginHandler('demo')}
            >
              DEMO
            </Button>
            <Button
              type="button"
              variant="info"
              className="mt-3 w-100"
              disabled={isLoading}
              onClick={() => demoLoginHandler('adminDemo')}
            >
              ADMIN DEMO
            </Button>

            {isLoading && <Loader />}
          </Form.Group>
        </Form>

        <Row className="py-3">
          <Col>
            New Customer?{' '}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
            >
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </Container>
  );
};

export default LoginScreen;
