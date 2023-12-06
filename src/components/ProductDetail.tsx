'use client'

import { cartProductType, selectedImgType } from '@/utils/types'
import { Rating } from '@mui/material'
import { useCallback, useState } from 'react'
import SetColor from './Products/SetColor'
import SetQuantity from './Products/SetQuantity'
import Button from './Products/Button'
import ProductImage from './Products/ProductImage'
import { useCart } from '@/hooks/useCart'

interface ProductDetailProps {
  product: any
}

const Horizontal = () => {
  return <hr className='w-[30%] my-2' />
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart()
  const [cartProduct, setCartProduct] = useState<cartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    qty: 1,
    price: product.price,
  })

  console.log(cartProducts)

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length

  const handleColorSelect = useCallback(
    (value: selectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value }
      })
    },
    [cartProduct.selectedImg]
  )

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.qty <= 1) {
      return
    }

    setCartProduct((prev) => {
      return { ...prev, qty: prev.qty - 1 }
    })
  }, [cartProduct])

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.qty >= 99) {
      return
    }
    setCartProduct((prev) => {
      return { ...prev, qty: prev.qty + 1 }
    })
  }, [cartProduct])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className='flex flex-col gap-1 text-slate-500 text-sm'>
        <h2 className='text-slate-700 text-medium text-3xl'>{product.name}</h2>
        <div className='flex items-center gap-2'>
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className='text-justify'>{product.description}</div>
        <Horizontal />
        <div>
          <span className='font-semibold'>CATEGORY: </span>
          {product.category}
        </div>
        <div>
          <span className='font-semibold'>BRAND: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
          {product.inStock ? 'In Stock' : 'Out of stock'}
        </div>
        <Horizontal />
        <SetColor
          images={product.images}
          cartProduct={cartProduct}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease}
        />
        <Horizontal />
        <div className='max-w-[300px]'>
          <Button
            label='Add To Cart'
            onClick={() => handleAddProductToCart(cartProduct)}
          />
        </div>

        <Horizontal />
      </div>
    </div>
  )
}

export default ProductDetail
