'use client'

import { CartProductType } from "@/app/product/[productId]/ProductDetail";

interface SetQtyProps{
    cartCouter ?: boolean,
    cartProduct: CartProductType,
    handleQtyDecrease : () => void,
    handleQtyIncrease : () => void,
}
const btnStyles = 'border-[1.2px] border-stale-300 px-2 rounded'
const SetQuantity: React.FC<SetQtyProps> = ({
    cartCouter,cartProduct,
    handleQtyDecrease,
    handleQtyIncrease

}) => {
    return ( 
        <div className="flex gap-8 items-center">
            {cartCouter ? null : <div className="font-semiBold">QUANTITY</div>}
            <div className="flex gap-5 items-center">
                <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
                <div>{cartProduct.quantity}</div>
                <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
            </div>
        </div> 
    );
}
 
export default SetQuantity;