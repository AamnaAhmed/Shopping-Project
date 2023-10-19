import React from 'react'


const ContactPerson = ({img,title,dis,phone,email}) => {
    return (
        <div className="flex mb-6">
            <div className="w-16 h-16 mr-5">
                <img className="w-full h-full" src={img}/>
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500">{dis}</p>
                <p className="text-gray-500">{phone}</p>
                <p className="text-gray-500">{email}</p>
            </div>
        </div>
    )
}

export default ContactPerson
