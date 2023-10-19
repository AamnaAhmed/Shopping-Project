import UpCommingSectionUpCompo from "./UpCommingSectionUpCompo"
import BottomCommingSectionUpCompo from "./BottomCommingSectionUpCompo";
import b17 from "../Images/banner/b17.jpg"
import b10 from "../Images/banner/b10.jpg"
import b7 from "../Images/banner/b7.jpg"
import b18 from "../Images/banner/b18.jpg"
import b4 from "../Images/banner/b4.jpg"

export default function UpCommingSection() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:md:grid-cols-6 gap-y-5 md:gap-5">
                <UpCommingSectionUpCompo style={"col-span-1  md:col-span-3"} img={b17} title={"crazy deals"} head={"buy 1 get 1 free"} btnTitle={"Learn More"} />
                <UpCommingSectionUpCompo style={"col-span-1  md:col-span-3"} img={b10} title={"Spring/Summer"} head={"upcomming season"} btnTitle={"Collection"} />
                <BottomCommingSectionUpCompo style={"col-span-1 md:col-span-3 lg:col-span-2"} img={b7} title={"Winter Collection -50% Off"} head={"SEASONAL SALE"} />
                <BottomCommingSectionUpCompo style={"col-span-1 md:col-span-3 lg:col-span-2"} img={b4} title={"Spring/Summer"} head={"NEW FOOTWEAR COLLECTION"} />
                <BottomCommingSectionUpCompo style={"col-span-1 md:col-span-3 lg:col-span-2"} img={b18} title={"New Trendy Prinls"} head={"T-SHIRTS"} />
            </div>
        </div>
    )
}