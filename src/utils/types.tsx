export type cartProductType = {
  id: string
  name: string
  description: string
  category: string
  brand: string
  selectedImg: selectedImgType
  qty: number
  price: number
}

export type selectedImgType = {
  color: string
  colorCode: string
  image: string
}
