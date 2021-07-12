import './App.css';
import { useState } from 'react';
import Product from './components/Product';

const App = () => {
  const [products,setProducts] = useState(null)
  
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))

  return( 
    <div id="app">
      { products 
        ? products.map((product) => {
            return <Product data={product}/>
          })

        : <p>Loading</p>
      }
    </div>
  )
}

export default App;
