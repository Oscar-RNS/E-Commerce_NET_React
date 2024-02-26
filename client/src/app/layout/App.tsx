import { useState, useEffect } from 'react'
import { Product } from '../../models/product';
import Header from './Header';
import Catalog from '../../components/catalog/Catalog';
import { Container } from '@mui/material';

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:7244/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <>    
      <Header/>
      <Container>
        <Catalog products={products}/>
      </Container>
    </>
  )
}

export default App
