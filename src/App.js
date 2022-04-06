import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const handleClick = (productId) => {

  }

  return (
    <div className="App">
      <div>
        {products.map((obj) => (
          <img src={obj.img} alt=''></img>
        ))}
      </div>

    </div>
  );
}

export default App;
