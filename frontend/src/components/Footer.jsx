import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-3 mt-4 bg-light border-0">
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            className="d-flex justify-content-center justify-content-md-start align-items-center mb-3 mb-md-0"
          >
            <span className="ms-2 text-primary">
              © {currentYear} Gadget Gizmo
            </span>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center justify-content-md-end align-items-center mb-3 mb-md-0"
          >
            <ul className="nav list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-primary"
                  href="https://github.com/bkpecho/gadgetgizmo"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-primary"
                  href="https://www.linkedin.com/in/bkpecho/"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-primary" href="https://twitter.com/bkpecho">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
