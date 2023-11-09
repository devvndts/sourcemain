import Container from "../../components/Container";
import ProductDetail from "./ProductDetail";
import ListRating from './ListRating';
import { products } from '../../../../utils/products';

interface Iprams{
    productId: string
}
const Product = ({params}: {params: Iprams}) => {
    const product = products.find((item) => item.id === params.productId);
    return ( 
        <div className="p-8">
            <Container>
                <ProductDetail product={product}/>
                <div className='flex flex-col mt-20 gap-4'>
                    <div>Add Rating</div>
                    <ListRating product={product}/>
                </div>
            </Container>
        </div>
     );
}
 
export default Product;