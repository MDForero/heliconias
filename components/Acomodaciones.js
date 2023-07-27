"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Acomodaciones = ({ acomodaciones }) => {
    const [img, setImg] = useState(acomodaciones.acomodacion[0])
    return (
        <article className='flex flex-wrap mx-auto py-8 justify-evenly md:max-w-screen-2xl w-full border-b-2'>
            <section className='md:w-2/6 w-[95%] place-self-center bg-gray-300 shadow rounded-2xl overflow-hidden p-2   '>
                <figure clas>
                    <Image src={img.img} alt={img.alt} width={0} height={0} className="w-full h-64 object-contain  " />
                    <figcaption className="text-center font-bold text-2xl">{img.title}</figcaption>
                </figure>
                <div className=' flex flex-row gap-2'>
                    {acomodaciones.acomodacion.map((item, index) => (<button className={img.img === item.img ? 'w-1/5 h-16 hover:blur-sm ring ring-black rounded-sm overflow-hidden': "w-1/5 h-16 hover:blur-sm ring rounded-sm overflow-hidden"} key={index} onClick={() => setImg(item)}><Image className=' h-full object-cover' src={item.img} alt={item.alt} width={0} height={0} /> </button>))}
                </div>
            </section>
            <section className='md:w-2/5 w-[95%]  place-self-center'>
                <h2 className='text-center font-bold text-3xl py-8  '>{acomodaciones.descripcion.title}</h2>
                <p>{acomodaciones.descripcion.descripcion}</p>
            </section>
        </article>
    )
}
export default Acomodaciones