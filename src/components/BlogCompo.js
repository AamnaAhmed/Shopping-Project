import React from 'react'


const BlogCompo = ({ text,text2,text3,text4,img }) => {
    return (
        <div className="sm:p-10 mb-20 sm:m-0">
         <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className="relative sm:p-5">
                <p className="text-gray-300 z-[-1] text-6xl translate-y-[-63px] sm:translate-y-[-46px] top-0 mt-5 absolute font-bold">{text}</p>
                <div style={{ backgroundImage: `url(${img})` }} className="h-72 bg-center bg-cover w-full bg-red-500 ">

                </div>
            </div>
            <div className="flex flex-col justify-center sm:pr-10">
                <h3 className="text-2xl font-bold mb-3">{text2}</h3>
                <p className="mb-3">{text3}</p>
                <p className="font-bold text-sm relative cursor-pointer duration-200 group hover:text-teal-500">{text4}<span className="w-10 absolute group-hover:bg-teal-500 top-1/2 -translate-y-1/2 ml-3 h-0.5 black inline-block bg-red-900"></span></p>
            </div>
        </div>
        </div>
    )
}

export default BlogCompo
