import hero4 from "../Images/hero4.png"
import buttonImg from "../Images/button.png"
import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <div style={{ height: "100vh ", backgroundImage: `url(${hero4})` }} className="relative bg-cover bg-center p-0 m-0 h-full !w-full">
            <div className="container">
                <div className="absolute top-1/2 -translate-y-1/2">
                    <p className="text-2xl sm:text-3xl mb-2 text-slate-900 font-bold">Trade-in-offer</p>
                    <p className="text-4xl sm:text-6xl mb-2 font-bold">Super value deals</p>
                    <p className="text-5xl sm:text-5xl mb-2 text-teal-500 font-bold">On all products</p>
                    <p className="mt-2 mb-6">Save more with coupons & up to 70% off!</p>
                    <Link>
                        <div className="relative w-fit">
                            <img src={buttonImg} />
                            <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold hover:text-teal-500 duration-200">Shop Now</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}