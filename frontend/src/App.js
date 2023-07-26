import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main classname="py-3">
        <Container>
          <h1>Welcome to PinoyTechShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
