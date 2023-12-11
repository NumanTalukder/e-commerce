'use client'

import Container from '@/components/Container'
import ProductDetail from '@/components/ProductDetail'
import ListRating from '@/components/Products/ListRating'
import { products } from '@/utils/products'
import { useParams } from 'next/navigation'

const Product = () => {
  const params = useParams()

  const product = products.find((item) => item.id === params.product)

  return (
    <div>
      <Container>
        <ProductDetail product={product} />
        <ListRating product={product} />
      </Container>
    </div>
  )
}

export default Product
