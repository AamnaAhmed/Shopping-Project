import MainTitle from "./MainTitle";
import {mainProducts2} from "../products/ourProducts";
import ProductCompo from "./ProductCompo"

export default function Arrivals () {
    return (
      <div className="container py-10">
      <MainTitle textHead="New Arrivals" prag="Summer Collection New Morden Design"/>
      <div className="grid grid-col  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-7">
          {mainProducts2.map((obj) => (
               <ProductCompo key={obj.id} Img={obj.img}/> 
          ))}
      </div>
  </div>
    )
}