import MainCompoTitle from "./MainCompoTitle"
import ShopProducts from "./ShopProducts"
// import Products from "./Products"
// import Services from "./Services"
// import Arrivals from "./Arrivals"
// import UpCommingSection from "./UpCommingSection"
// import Footer from "./Footer"
import b1 from "../Images/banner/b1.jpg"

export default function Shop () {
    return (
        <div className="my-10">
              <MainCompoTitle img={b1} headTitel="#Stayhome" prag="Save more with coupons & up to 70% off!"/>
              <ShopProducts />
        </div>
    )
}