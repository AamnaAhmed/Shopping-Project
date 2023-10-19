import { ReactComponent as Star } from "../Icons/star-solid.svg"
import { ReactComponent as Cart } from "../Icons/cart-shopping-solid.svg"

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import AlarmIcon from '@mui/icons-material/Alarm';

export default function ProductCompo({ Img }) {
    return (
        <div className="border border-red-lg p-3 rounded-3xl group cursor-pointer hover:drop-shadow-lg duration-200">
            <div className="">
                <img className="rounded-3xl" src={Img} />
            </div>
            <div>
                <p className="mt-2">adidas</p>
                <p className="text-lg font-bold mb-3 group-hover:text-teal-500 duration-200">Cartoon Astronaut T-Shirts</p>
                <div className="flex w-20">
                    <Star className="fill-yellow-500" />
                    <Star className="fill-yellow-500" />
                    <Star className="fill-yellow-500" />
                    <Star className="fill-yellow-500" />
                    <Star className="fill-yellow-500" />
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-teal-500 font-bold">$78</p>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}