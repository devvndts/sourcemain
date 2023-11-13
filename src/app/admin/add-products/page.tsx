import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../../components/Container";
import FormWrap from "../../components/FormWrap";
import AddProductForm from "./AddProductForm";

const AddProducts = async() => {
    const currentUser = await getCurrentUser();
    if(!currentUser || currentUser.role !== 'ADMIN'){
        return 
    }
    return ( 
        <div className="p-8">
            <Container>
                <FormWrap>
                    <AddProductForm/>
                </FormWrap>
            </Container>
        </div>
     );
}
 
export default AddProducts;