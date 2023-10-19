import React from 'react'
import { ReactComponent as Map } from "../Icons/map-regular.svg"
import { ReactComponent as Envelope } from "../Icons/envelope-regular.svg"
import { ReactComponent as Phone } from "../Icons/phone-solid.svg"
import { ReactComponent as Clock } from "../Icons/clock-regular.svg"

function TextAndMap({title,title2,title3,map,Envelopetext,phonetext,time,iframe}) {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 gap-10">
            <div className="flex flex-col justify-center items-start">
                <p className="my-3">{title}</p>
                <p className="text-2xl font-bold tracking-widest">{title2.t1}<br/> {title2.t2}</p>
                <p className="my-3 font-bold">{title3}</p>
                <ul className="mt-6">
                    <li className="flex justify-start mb-5 items-center "><span className="w-4 h-4 inline-block mr-3"><Map/></span>{map}</li>
                    <li className="flex justify-start mb-5 items-center "><span className="w-4 h-4 inline-block mr-3"><Envelope/></span>{Envelopetext}</li>
                    <li className="flex justify-start mb-5 items-center "><span className="w-4 h-4 inline-block mr-3"><Phone/></span>{phonetext}</li>
                    <li className="flex justify-start  items-center "><span className="w-4 h-4 inline-block mr-3"><Clock/></span>{time}</li>
                </ul>
            </div>
            <div className="">
            <iframe className="w-full" src={iframe} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default TextAndMap
