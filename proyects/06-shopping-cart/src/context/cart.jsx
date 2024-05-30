import { createContext, useReducer } from "react"
import { cartReducer, cartInitialState } from '../reducer/cart'

// 1. Crear el contexto 
export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART', //actionType
    payload: product //product
  })

  const removeFromCart = (product) => dispatch({
    type: "REMOVE_FROM_CART",
    payload: { id: product.id }
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return { state, addToCart, removeFromCart, clearCart }
}


// 2. Crear el provider
export const CartProvider = ({ children }) => {
  // con reducer

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()



  // sin reducer, solo con useState 
  // const [cart, setCart] = useState([])

  // const addToCart = (product) => {
  //   // Agregar el producto al carrito de manera inmutable
  //   //// setCart([...cart, product])

  //   // Verificar si el producto ya está en el carrito
  //   const productInCartIndex = cart.findIndex(p => p.id === product.id)

  //   // Una formar de hacerlo seria usando structuredClone para clonar el objeto cart y luego modificarlo sumándole 1 a la cantidad del producto que ya está en el carrito 
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   // Producto no esta en el carrito - el prevState lo que esta indicando es el estado anterior del carrito 
  //   setCart(prevState => ([...prevState, { ...product, quantity: 1 }]))
  // }

  // const removeFromCart = product => {
  //   // Encuentra el producto en el carrito
  //   const productInCartIndex = cart.findIndex(p => p.id === product.id)

  //   if (productInCartIndex >= 0) {
  //     // Clona el carrito
  //     const newCart = [...cart]

  //     // Disminuye la cantidad del producto en 1
  //     newCart[productInCartIndex].quantity -= 1

  //     // Si la cantidad del producto es 0, elimínelo del carrito
  //     if (newCart[productInCartIndex].quantity === 0) {
  //       newCart.splice(productInCartIndex, 1)
  //     }

  //     // Actualiza el estado del carrito
  //     setCart(newCart)
  //   }
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  return (
    <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
