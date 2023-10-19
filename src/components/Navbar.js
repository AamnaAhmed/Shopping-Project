import logo from "../Images/logo.png"
import { useState, useEffect } from "react"
import { ReactComponent as Bars } from "../Icons/bars-solid.svg"
import { ReactComponent as Xmark } from "../Icons/xmark-solid.svg"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [value, setValue] = useState(false)
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])
    console.log(screenSize);
    return (
        <nav className="bg-[#e3e6f3] fixed top-0 left-0 right-0 z-20 drop-shadow-md">

            <div className="container py-5 flex justify-between w-full">
                <div className="w-28">
                    <img src={logo} />
                </div>
                <Bars onClick={() => setValue(!value)} className={screenSize.width < 777 ? `w-7 h-7 mr-2` : `md:hidden`} />
                <div className={screenSize.width < 777 && value ? `fixed right-0 h-full top-0 bg-[#e3e6f3] h-screen w-3/4 p-4 drop-shadow-lg z-20  duration-200` : screenSize.width < 777 ? `fixed z-20 right-[-100%] h-full top-0 bg-[#e3e6f3] w-3/4 p-4 h-screen drop-shadow-lg duration-200` : ``}>
                    <Xmark onClick={() => setValue(!value)} className={screenSize.width < 777 ? "w-7 h-7" : "w-0 h-0"} />
                    <div className={screenSize.width < 777 ? `flex flex-col` : ``}>
                        <Link to="/" className="sm:mx-3 text-lg my-3 hover:text-teal-500 duration-200">Home</Link>
                        <Link to="/about" className="sm:mx-3 text-lg my-3 hover:text-teal-500 duration-200">About</Link>
                        <Link to="/shop" className="sm:mx-3 text-lg my-3 hover:text-teal-500 duration-200 ">Shop</Link>
                        <Link to="/blog" className="sm:mx-3 text-lg my-3 hover:text-teal-500 duration-200">Blog</Link>
                        <Link to="/contact" className="sm:mx-3 text-lg my-3 hover:text-teal-500 duration-200">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}