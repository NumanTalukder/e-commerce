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
  cartTotalAmount: number
  cartProducts: cartProductType[] | null
  handleAddProductToCart: (product: cartProductType) => void
  handleRemoveProductFromCart: (product: cartProductType) => void
  handleCartQtyIncrease: (product: cartProductType) => void
  handleCartQtyDecrease: (product: cartProductType) => void
  handleClearCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null)

interface Props {
  [propName: string]: any
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0)
  const [cartTotalAmount, setCartTotalAmount] = useState(0)
  const [cartProducts, setCartProducts] = useState<cartProductType[] | null>(
    null
  )

  useEffect(() => {
    const cartItems: any = localStorage.getItem('ecomCartItems')
    const cProducts: cartProductType[] | null = JSON.parse(cartItems)
    setCartProducts(cProducts)
  }, [])

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.qty

            acc.total += itemTotal
            acc.qty += item.qty

            return acc
          },
          {
            total: 0,
            qty: 0,
          }
        )
        setCartTotalQty(qty)
        setCartTotalAmount(total)
      }
    }

    getTotals()
  }, [cartProducts])

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

  const handleRemoveProductFromCart = useCallback(
    (product: cartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id
        })

        setCartProducts(filteredProducts)
        toast.success('Product removed')
        localStorage.setItem('ecomCartItems', JSON.stringify(filteredProducts))
      }
    },
    [cartProducts]
  )

  const handleCartQtyIncrease = useCallback(
    (product: cartProductType) => {
      let updatedCart

      if (product.qty === 99) {
        return toast.error('Opps! Maximum reached')
      }

      if (cartProducts) {
        updatedCart = [...cartProducts]

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        )

        if (existingIndex > -1) {
          updatedCart[existingIndex].qty = ++updatedCart[existingIndex].qty
        }

        setCartProducts(updatedCart)
        localStorage.setItem('ecomCartItems', JSON.stringify(updatedCart))
      }
    },
    [cartProducts]
  )
  const handleCartQtyDecrease = useCallback(
    (product: cartProductType) => {
      let updatedCart

      if (product.qty === 1) {
        return toast.error('Opps! Minimum reached')
      }

      if (cartProducts) {
        updatedCart = [...cartProducts]

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        )

        if (existingIndex > -1) {
          updatedCart[existingIndex].qty = --updatedCart[existingIndex].qty
        }

        setCartProducts(updatedCart)
        localStorage.setItem('ecomCartItems', JSON.stringify(updatedCart))
      }
    },
    [cartProducts]
  )

  const handleClearCart = useCallback(() => {
    setCartProducts(null)
    setCartTotalQty(0)
    localStorage.setItem('ecomCartItems', JSON.stringify(null))
  }, [])

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
  }

  return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === null) {
    throw new Error('useCart must be within a CartContextProvider')
  }

  return context
}
