import f1 from "../Images/features/f1.png"
import f2 from "../Images/features/f2.png"
import f3 from "../Images/features/f3.png"
import f4 from "../Images/features/f4.png"
import f5 from "../Images/features/f5.png"
import f6 from "../Images/features/f6.png"
import DetailsBox from "./DetailsBox"

export default function Details () {
    return (
        <div className="container">
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-6 py-6">
               <DetailsBox image={f1} color={"bg-red-100"} text={"Free Shipping"}/>
               <DetailsBox image={f2} color={"bg-green-100"} text={"Online Order"}/>
               <DetailsBox image={f3} color={"bg-blue-100"} text={"Save Money"}/>
               <DetailsBox image={f4} color={"bg-purple-100"} text={"Promotions"}/>
               <DetailsBox image={f5} color={"bg-pink-100"} text={"Happy Sell"}/>
               <DetailsBox image={f6} color={"bg-orange-100"} text={"F24/7 Support"}/>
           </div>
        </div>
    )
}