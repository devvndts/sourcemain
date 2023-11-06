'use client'
import {Rating} from "@mui/material"
interface IProductDetail{
    product : any
}
const ProductDetail:React.FC<IProductDetail> = ({product}) => {
    const productRating = product.reviews.reduce((acc: number,item: any)=> item.rating + acc,0)/product.reviews.length;
    const Horizontal = () => {
        return <hr className="w-[30%] my-2"/>
    }
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
              
           </div>
           <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl text-slate-700">{product.name}</h2>
                <Horizontal/>
                <div className="flex items-center gap-5">
                    <Rating value={productRating} readOnly/>
                    <div>
                        {product.reviews.length} Reviews
                    </div>
                </div>
                <Horizontal/>
                <div>
                    <span className="font-semibold">Category {product.category}</span>
                </div>
                <p className="mt-5 text-xl text-justify">{product.description}</p>
           </div>
        </div>
    );
}
 
export default ProductDetail;