import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { products } from "../../utils/products";
import { truncateText } from "../../utils/truncateText";
import ProductCart from "./components/product/ProductCart";

export default function Home() {
  return (
    <Container>
      <div className="pt-8">
        <HomeBanner/>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {
          products.map((product:any) => {
            return(
              <ProductCart data={product} />
            )
          })
        }
      </div>
    </Container>
  )
}
