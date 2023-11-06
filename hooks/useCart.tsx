import { CartProductType } from "@/app/product/[productId]/ProductDetail";
import { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
    cartTotalQty : number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void
}
interface Props {
    [propName: string] : any; 
}
export const CartContext = createContext<CartContextType | null>(null);
export const CartContextProvider = (props :Props) => {
    const [cartTotalQty,setCartTotalQty] = useState(0)
    const [cartProducts,setCartProducts] = useState<CartProductType[] | null>(null)
    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev)=>{
            let updateCart;
            if(prev){
                updateCart = [...prev,product]
            }else{
                updateCart=[product]
            }
            return updateCart;
        })
    },[])
    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart
    }
    return <CartContext.Provider value={value} {...props}/>
};
export const useCart = () => {
    const context = useContext(CartContext);
    if(context === null){
        throw new Error('UseCart must be used within a cartcontexProvider');
    }
    return context;
} 