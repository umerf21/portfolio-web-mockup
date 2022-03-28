import Product from "../product/Product"
import "./productList.css"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire.</h1>
                <p className="pl-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
            <div className="pl-list">
               {products.map((item)=>(
                   <Product key={item.id} img={item.img} link={item.link} />
               ))}
            </div>
        </div>
    )
}

export default ProductList