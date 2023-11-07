import SetQuantity from "@/app/components/product/SetQuantity";
import { CartProductType } from "@/app/product/[productId]/ProductDetail";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    handleQtyDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
}
interface Props {
    [propName: string]: any;
}
export const CartContext = createContext<CartContextType | null>(null);
export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    useEffect(() => {
        const cartItems: any = localStorage.getItem('eShop');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);
        setCartProducts(cProducts);
    }, [])

    useEffect(() => {
        const getTotal = () => {
            if (cartProducts) {
                const { total, qty } = cartProducts?.reduce((acc, item) => {
                    const itemTotal = item.price * item.quantity;
                    acc.total += itemTotal;
                    acc.qty += item.quantity;
                    return acc;
                },
                    {
                        total: 0,
                        qty: 0,
                    }
                )
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            }
        }
        getTotal();
    }, [cartProducts]);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updateCart;
            if (prev) {
                updateCart = [...prev, product]
            } else {
                updateCart = [product]
            }
            toast.success('Thêm vào giỏ hàng thành công !')
            localStorage.setItem('eShop', JSON.stringify(updateCart));
            return updateCart;
        })
    }, [cartProducts]);
    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem('eShop', JSON.stringify(null));

    }, [cartProducts])
    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProduct = cartProducts.filter((item) => {
                return item.id !== product.id;
            })

            setCartProducts(filteredProduct);
            toast.success('Đã xoá sản phẩm thành công !')
            localStorage.setItem('eShop', JSON.stringify(filteredProduct));
        }
        else {
            toast.success('Lỗi !')
        }
    }, [cartProducts]);
    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updateCart;
        if (product.quantity === 99) {
            return toast.error('Oppp ! Vượt quá số lượng ')
        }
        if (cartProducts) {
            updateCart = [...cartProducts];
            const exitingIndex = cartProducts.findIndex((item) => item.id === product.id);
            if (exitingIndex > -1) {
                updateCart[exitingIndex].quantity = ++updateCart[exitingIndex].quantity
            }

            setCartProducts(updateCart);
            localStorage.setItem('eShop', JSON.stringify(updateCart));
        }
    }, [cartProducts])
    const handleQtyDecrease = useCallback((product: CartProductType) => {
        let updateCart;
        if (product.quantity === 1) {
            return toast.error('Oppp ! Tối thiểu số lượng >= 1')
        }
        if (cartProducts) {
            updateCart = [...cartProducts];
            const exitingIndex = cartProducts.findIndex((item) => item.id === product.id);
            if (exitingIndex > -1) {
                updateCart[exitingIndex].quantity = --updateCart[exitingIndex].quantity
            }

            setCartProducts(updateCart);
            localStorage.setItem('eShop', JSON.stringify(updateCart));
        }
    }, [cartProducts])

    const value = {
        cartTotalQty,
        cartProducts,
        cartTotalAmount,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleQtyDecrease,
        handleClearCart
    }
    return <CartContext.Provider value={value} {...props} />
};



export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error('UseCart must be used within a cartcontexProvider');
    }

    return context;
} 