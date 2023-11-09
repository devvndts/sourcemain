'use client'
import Button from "../../Button"
import ProductImage from "../../components/ProductImage"
import SetQuantity from "../../components/product/SetQuantity"
import SetColor from "../../components/product/Setcolor"
import { Rating } from "@mui/material"
import { type } from "os"
import { useCallback, useEffect, useState } from "react"
import { useCart } from "../../../../hooks/useCart"
import { MdCheckCircle } from "react-icons/md"
import { useRouter } from "next/navigation"
interface IProductDetail {
    product: any
}
export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType
    quantity: number,
    price: number
}
export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}
const ProductDetail: React.FC<IProductDetail> = ({ product }) => {
    const {handleAddProductToCart,cartProducts} = useCart();
    const [isProductInCart,setIsProductInCart] = useState(false)
    const router = useRouter();
    const [cartProduct, setCartProduct] = useState<CartProductType>(
        {
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            brand: product.brand,
            selectedImg: { ...product.images[0] },
            quantity: 1,
            price: product.price,
        }
    );
    useEffect(()=>{
        setIsProductInCart(false);
        if(cartProducts){
            const exitingIndex = cartProducts.findIndex((item) => item.id === product.id);
            if(exitingIndex > -1){
                setIsProductInCart(true);
            }

        }
    },[cartProducts])
    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length;
    const Horizontal = () => {
        return <hr className="w-[30%] my-2" />
    }
    const handleColorSelect = useCallback((value: SelectedImgType) => { 
        setCartProduct((prev) => {
            return {...prev,selectedImg: value}
        })
    }, [
        cartProduct.selectedImg
    ])
    const handleQtyIncrease = useCallback(()=>{
        if(cartProduct.quantity === 99){
            return;
        }
        setCartProduct((prev)=>{
            return {...prev,quantity: prev.quantity+1}
        })
    },[cartProduct])
    const handleQtyDecrease = useCallback(()=>{
        if(cartProduct.quantity === 1){
            return;
        }
        setCartProduct((prev)=>{
            return {...prev,quantity: prev.quantity-1}
        })
    },[cartProduct])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect} />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl text-slate-700">{product.name}</h2>
                <Horizontal />
                <div className="flex items-center gap-5">
                    <Rating value={productRating} readOnly />
                    <div>
                        {product.reviews.length} Reviews
                    </div>
                </div>
                <Horizontal />
                <p className="mt-5 text-xl text-justify">{product.description}</p>
                <Horizontal />
                <div>
                    <span className="font-semibold">Category :</span>
                    {product.category}
                </div>
                <div>
                    <span className="font-semibold">Brand :</span>
                    {product.brand}
                </div>
                <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
                    {product.inStock ? 'In stock' : 'Out of stock'}
                </div>
                <Horizontal />
                {
                    isProductInCart ? <>
                        <p className="mb-2 text-stale-500 flex items-center  gap-1">
                            <MdCheckCircle size={20} className ="text-teal-400"/>
                            <span>Product Added to cart</span>
                        </p>
                        <div className="max-w-[300px]">
                            <Button label="View cart" outline onClick={()=>{
                                router.push('/cart');
                            }}/>
                        </div>
                    </> : <>
                    <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect} />
                    <Horizontal />
                    <SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease}/>
                    <Horizontal />
                    <div className="max-w-[300px]">
                        <Button 
                            label="Add to cart" 
                            onClick={()=>handleAddProductToCart(cartProduct)}
                            
                        />
                    </div>
                    </>
                }
                
            </div>
        </div>
    );
}

export default ProductDetail;