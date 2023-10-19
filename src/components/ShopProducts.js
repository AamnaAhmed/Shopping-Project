import {shopProducts} from "../products/ourProducts"
import {type} from "../products/ourProducts"
import ProductCompo from "./ProductCompo"
import Button from '@mui/material/Button';
import { useState } from "react"



export default function ShopProducts () {
    const [fonudTitle, setTitle] = useState("")
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
    return (
        <div className="container">
         <h3 className="text-lg my-5">We found <span className="text-teal-500 font-bold">{shopProducts.length}</span> items for you!</h3>
            <div className="flex justify-center gap-lg items-center pb-10 pt-5 flex-wrap">
                <ul className="text-center">
                <Button onClick={() => setTitle("")}  variant="outlined" sx={{margin: '10px'}}>All</Button> 
                    {type.map((tit) => (
                        <Button onClick={() => setTitle(tit)}  variant="outlined" sx={{margin: '10px'}}>{tit}</Button> 
                    ))}
                </ul>
            </div>
            <div className="grid grid-col  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-7">
            {
                fonudTitle ? (
                    shopProducts.map((obj) => {
                        if (obj.type == `${fonudTitle}`) {
                            return (
                                  <ProductCompo key={obj.id} Img={obj.img}/>   
                            )
                        }
                    })
                ) : (
                    <>
                        {shopProducts.map((obj) => (
                            <ProductCompo key={obj.id} Img={obj.img}/> 
                    ))} 
                   </>
                )
            }
            </div>
        </div>
    )
} 