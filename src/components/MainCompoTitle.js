

export default function MainCompoTitle ({img,headTitel,prag}) {
    return (
     <div style={{backgroundImage: `url(${img})`}} className="h-72 w-full mt-20 bg-cover bg-center">
       <div className="container relative w-full h-full flex justify-center items-center">
             <div className="absolute top-1/2 text-center p-5 -translate-y-1/2">
               <h1 className="text-slate-200 mb-2 font-bold text-4xl tracking-widest">{headTitel}</h1>
               <p className="text-slate-100">{prag}</p>
             </div>
       </div>
     
     </div>
    )
}