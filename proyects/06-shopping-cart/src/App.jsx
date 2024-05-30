
// Import the Products component and the initial products from the mocks folder. el "as"  initialProducts significa que se importa con un alias
import { products as initialProducts } from './mocks/products.json'
//components
import { Products } from "./components/Products"
import Header from './components/Header'
import Footer from './components/Footer'
// hooks
import { useFilters } from './hooks/useFilters' // Aquí está la importación de tu custom hook
//States hooks
import { useState } from 'react'
//Config
import { IS_DEVELOPMENT } from './config'
import Cart from './components/Cart'
import { CartProvider } from './context/cart'


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {/* // Aquí se muestra el estado de los filtros en formato JSON ( si estamos en desarrollo) con JSON.stringify */}
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
