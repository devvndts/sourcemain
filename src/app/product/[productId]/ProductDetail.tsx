'use client'

import Image from "next/image";

interface IProductDetail{
    product : any
}
const ProductDetail:React.FC<IProductDetail> = ({product}) => {
    console.log(product);
    
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
              
           </div>
           <div>
                <h2 className="text-3xl text-slate-700">{product.name}</h2>
                <p className="mt-5 text-xl">{product.description}</p>
           </div>
        </div>
     );
}
 
export default ProductDetail;