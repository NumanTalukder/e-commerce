import { cartProductType } from '@/utils/types'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-hot-toast'

type CartContextType = {
  cartTotalQty: number
  cartProducts: cartProductType[] | null
  handleAddProductToCart: (product: cartProductType) => void
}

export const CartContext = createContext<CartContextType | null>(null)

interface Props {
  [propName: string]: any
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(1)
  const [cartProducts, setCartProducts] = useState<cartProductType[] | null>(
    null
  )

  useEffect(() => {
    const cartItems: any = localStorage.getItem('ecomCartItems')
    const products: cartProductType[] | null = JSON.parse(cartItems)
    setCartProducts(products)
  }, [])

  const handleAddProductToCart = useCallback((product: cartProductType) => {
    setCartProducts((prev) => {
      let updatedCart
      if (prev) {
        updatedCart = [...prev, product]
      } else {
        updatedCart = [product]
      }

      toast.success('Product added to cart')

      localStorage.setItem('ecomCartItems', JSON.stringify(updatedCart))

      return updatedCart
    })
  }, [])

  const value = { cartTotalQty, cartProducts, handleAddProductToCart }

  return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === null) {
    throw new Error('useCart must be within a CartContextProvider')
  }

  return context
}
