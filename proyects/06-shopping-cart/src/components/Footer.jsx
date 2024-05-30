// import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilters'
import './Footer.css'

function Footer() {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className="footer">
      {/* // Aquí se muestra el estado de los filtros en formato JSON ( si estamos en desarrollo) con JSON.stringify */}
      {/* {
        JSON.stringify(filters, null, 2)
      } */}
      {/* Aquí se muestra el estado del carrito en formato JSON ( si estamos en desarrollo) con JSON.stringify */}
      {/* {
        JSON.stringify(cart, null, 2)
      } */}

      <h4>
        Prueba técnica para Ecommerce 2024
      </h4>
      <p>Shopping Cart con useContext &
        useReducer
      </p>
      <h5>© 2024 Shopping Cart</h5>

    </footer>
  )

}

export default Footer