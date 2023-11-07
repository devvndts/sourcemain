'use client'
import { useRouter } from "next/navigation";
import {CiShoppingCart} from 'react-icons/ci'
import { useCart } from "../../../../hooks/useCart";

const CountCart = () => {
    const router = useRouter();
    const {cartTotalQty} = useCart();
    return ( 
        <div className="cursor-pointer relative" onClick={()=> router.push('/cart')}>
            <CiShoppingCart size={27}/>
            <span className="absolute top-[-10px] right-[-10px] bg-slate-700 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">{cartTotalQty}</span>
        </div>
     );
}
 
export default CountCart;