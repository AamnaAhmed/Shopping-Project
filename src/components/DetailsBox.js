export default function DetailsBox ({image,color,text}) {
    return (
        <div className="border-2 drop-shadow-sm flex justify center items-center flex-col py-5">
        <img src={image}/>
        <div className={`${color} px-3 mt-3`}>
            <p className="text-teal-500 font-bold">{text}</p>
        </div>
         </div>
    )
}