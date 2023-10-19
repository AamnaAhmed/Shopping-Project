import Button from '@mui/material/Button';

export default function UpCommingSectionUpCompo({img,title,head,style,btnTitle}) {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className={`bg-cover bg-center relative p-7 h-64 ${style}`}>
          <div className="absolute top-1/2 -translate-y-1/2">
          <p className="text-white tracking-widest ">{title}</p>
            <h3 className="text-2xl font-bold text-white">{head}</h3>
            <p className="text-white mt-1 mb-3">The best classic dress is on sale at cara</p>
            <Button variant="contained" size="small">
                {btnTitle}
            </Button>
          </div>
        </div>
    )
}