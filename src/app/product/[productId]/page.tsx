import Container from '@/app/components/Container' ;
import { product } from "../../../../utils/product";
import ProductDetail from "./ProductDetail";

interface Iprams{
    productId: string
}
const Product = ({params}: {params: Iprams}) => {

    return ( 
        <div className="p-8">
            <Container>
                <ProductDetail product={product}/>
            </Container>
        </div>
     );
}
 
export default Product;