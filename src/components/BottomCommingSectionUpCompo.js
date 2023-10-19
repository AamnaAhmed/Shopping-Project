export default function BottomCommingSectionUpCompo ({img,style,title,head}) {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className={`bg-cover bg-center relative p-7 h-64 ${style}`}>
        <div className="absolute top-1/2 -translate-y-1/2">
          <h3 className="text-2xl font-bold text-white mb-2">{head}</h3>
          <p className="text-red-600 font-bold tracking-widest ">{title}</p>
        </div>
      </div>
    )
}