import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Carousel from './components/Carousel.jsx';
import Footer from './components/Footer.jsx'
import { ProductList } from './components/ProductList';
import Container from 'react-bootstrap/Container';
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';

import './App.css';

function App() {
  /* CARRITO */
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  /* LOGIN */
  const { isLoading } = useAuth0();
  if (isLoading) return (
    <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center', backgroundColor: '#7E6346' }}>
      <div style={{ width: 'fit-content', display: 'flex' }}>
        <Spinner animation="border" variant="warning" />
        <h3 style={{ color: '#fff', marginLeft: '0.5em' }}>Loading...</h3>
      </div>
    </div>
  )
  return (
    <>
      <Navbar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Carousel />
      <div className='container'>
        <h1 style={{ borderBottom: '#000 3px solid' }}>Clothes For Sale</h1>
      </div>
      <Container id='SHIRT' style={{ marginTop: '1em', marginBottom: '1em' }}>
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </Container>
      <Footer />
    </>
  );
}

export default App;
