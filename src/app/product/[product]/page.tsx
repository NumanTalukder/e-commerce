import Container from '@/components/Container'
import { product } from '@/utils/product'
import ProductDetail from '@/components/ProductDetail'
import ListRating from '@/components/Products/ListRating'

interface iParams {
  params: string
}

const Product = ({ params }: { params: iParams }) => {
  console.log(params)

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
