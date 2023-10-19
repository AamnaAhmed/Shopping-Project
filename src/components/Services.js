import serv from "../Images/banner/b2.jpg"
import Button from '@mui/material/Button';

export default function Services() {
    return (
        <div style={{ backgroundImage: `url(${serv})` }} className=" w-full h-72 bg-center bg-cover my-5">
            <div className="container flex justify-center items-center h-full">
               <div className="text-center">
                    <p className="text-slate-200 font-bold tracking-widest mb-4">Repair Services</p>
                        <p className="text-4xl text-slate-200 mb-6">Up to <span className="text-red-500">70% Off</span> - All-Shirts & Accessories</p>
                        <Button variant="contained" size="medium">
                        Explore More
                        </Button>
               </div>
            </div>
        </div>
    )
}