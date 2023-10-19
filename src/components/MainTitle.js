export default function MainTitle ({textHead,prag}) {
    return (
        <div className="container py-10 text-center">
           <div>
               <h1 className="text-3xl sm:text-4xl font-bold tracking-widest mb-2">{textHead}</h1>
               <p className="tracking-wide">{prag}</p>
           </div>
        </div>
    )
}