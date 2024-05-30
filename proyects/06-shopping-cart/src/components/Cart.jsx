// CSS
import './Cart.css'
// custom hooks
import { useCart } from '../hooks/useCart'
// hooks
import { useId } from 'react'
// Icons
import { CartIcon, ClearCartIcon, } from "./Icons"


function CartItem({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - <span>${price}</span>
      </div>
      <footer>
        <small>
          quantity: {quantity}
        </small>
      </footer>
      <button onClick={addToCart}>➕</button>
    </li>
  )
}

function Cart() {
  const cartCheckBox = useId()

  const { cart, clearCart, addToCart } = useCart()

  return (
    <>

      <label className="cart-button" htmlFor={cartCheckBox}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBox} hidden />

      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart