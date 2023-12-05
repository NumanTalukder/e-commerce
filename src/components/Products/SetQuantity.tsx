'use client'

import { cartProductType } from '@/utils/types'

interface SetQuantityProps {
  cartCounter?: Boolean
  cartProduct: cartProductType
  handleQtyIncrease: () => void
  handleQtyDecrease: () => void
}

const btnStyle = 'border-[1.2px] border-slate-300 rounded px-2'

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className='flex items-center gap-8'>
      {cartCounter ? null : <div>Quantity:</div>}
      <div className='flex gap-4 item-center text-base'>
        <button onClick={handleQtyDecrease} className={btnStyle}>
          -
        </button>
        <div>{cartProduct.qty}</div>
        <button onClick={handleQtyIncrease} className={btnStyle}>
          +
        </button>
      </div>
    </div>
  )
}

export default SetQuantity
