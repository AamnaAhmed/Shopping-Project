import MainTitle from "./MainTitle";
import {mainProducts1} from "../products/ourProducts";
import ProductCompo from "./ProductCompo"

export default function Products() {
    console.log(mainProducts1);
    return (
        <div className="container py-10">
            <MainTitle textHead="Featured Products" prag="Summer Collection New Morden Design" />
            <div className="grid grid-col  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-7">
                {mainProducts1.map((obj) => (
                     <ProductCompo key={obj.id} Img={obj.img}/> 
                ))}
            </div>
        </div>
    )
}