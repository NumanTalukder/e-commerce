'use client'

import { cartProductType, selectedImgType } from '@/utils/types'

interface SetColorProps {
  images: selectedImgType[]
  cartProduct: cartProductType
  handleColorSelect: (value: selectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div className=''>
      <div className='flex gap-4 items-center'>
        <span className='font-semibold'>Color: </span>
        <div className='flex items-center gap-1'>
          {images.map((image, idx) => {
            return (
              <div
                key={idx}
                onClick={() => handleColorSelect(image)}
                className={`w-7 h-7 rounded-full border-teal-700 flex items-center justify-center ${
                  cartProduct.selectedImg.color === image.color
                    ? 'border-[1.5px]'
                    : 'border-none'
                }`}
              >
                <div
                  style={{ background: image.colorCode }}
                  className='h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer'
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SetColor
