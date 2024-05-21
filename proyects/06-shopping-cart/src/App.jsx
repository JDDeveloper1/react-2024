import { products } from './mocks/products.json'
import { Products } from "./components/Products"

function App() {


  return (
    <div>
      <Products products={products} />
    </div>
  )
}

export default App
