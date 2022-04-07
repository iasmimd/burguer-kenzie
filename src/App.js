import logo from './logo.svg';
import './styles/reset.css'
import './styles/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Products from './components/Products';
import CartList from './components/CartList';


function App() {

  const [products, setProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(filteredProducts)

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const handleClick = (productId) => {
    const findId = products.find(({ id }) => id === productId)

    const verification = currentSale.some(({ id }) => id === productId)

    !verification && setCurrentSale([...currentSale, findId])
  }

  useEffect(() => {

  })

  // const filter = (array) => {
  //   const products = products.filter(({name}) => )
  //   const filterProducts = filteredProducts.filter(({name}) => )
  // }

  return (
    <div className="App">
      <div>
        <Header setFilteredProducts={setFilteredProducts}/>
        <ProductsList products={products} handleClick={handleClick} />
        <CartList currentSale={currentSale} />
      </div>
    </div>
  );
}

export default App
