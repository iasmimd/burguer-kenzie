import './styles/reset.css'
import './styles/App.css';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import CartList from './components/CartList';
import CartPrice from './components/CartPrice';


function App() {

  const [products, setProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const handleClick = (productId) => {
    const findId = products.find(({ id }) => id === productId)

    const verification = currentSale.some(({ id }) => id === productId)

    if (verification) {
      return toast.error("Este produto já está no carrinho")
    } else {
      toast.success("Adicionado ao carrinho")
      return setCurrentSale([...currentSale, findId])
    }
  }

  const showProducts = () => {
    const filterInput = products.filter(({ name, category }) => name.toLowerCase().includes(inputValue.toLowerCase()) || category.toLowerCase().includes(inputValue.toLocaleLowerCase()))
    setFilteredProducts(filterInput)
  }

  const removeProduct = (product) => {
    const filterProduct = currentSale.filter((element) => element !== product)
    setCurrentSale(filterProduct)
  }

  const removeAllProducts = (product) => {
    const filterAllProducts = currentSale.filter(({ id }) => id === product)
    setCurrentSale(filterAllProducts)
  }

  return (
    <div className="App">
      <Toaster position='top-center' reverseOrder={false} toastOptions={{ style: { fontFamily: "Inter" } }} />
      <div>
        <Header showProducts={showProducts} inputValue={inputValue} setInputValue={setInputValue} />
        <div className='global'>
          <ProductsList products={products} handleClick={handleClick} inputValue={inputValue} filteredProducts={filteredProducts} />
          <div className='cartContainer'>
            {
              currentSale.length > 0 ?
                <>
                  <CartList currentSale={currentSale} removeProduct={removeProduct} />
                  <CartPrice currentSale={currentSale} removeAllProducts={removeAllProducts} />
                </>
                :
                <CartList currentSale={currentSale} removeProduct={removeProduct} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
