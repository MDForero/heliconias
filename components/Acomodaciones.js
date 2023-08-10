"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ButtonBook from './ButtonBook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSpa } from '@fortawesome/free-solid-svg-icons'

const Acomodaciones = ({ acomodaciones }) => {
    const [img, setImg] = useState(acomodaciones.acomodacion[0])
    return (
        <article className='flex flex-wrap mx-auto py-8 justify-evenly md:max-w-screen-2xl w-full border-b-2'>
            <section className='md:w-2/6 w-[95%] place-self-center shadow rounded-2xl overflow-hidden p-2   '>
                <figure className='pb-8 '>
                    <Image src={img.img} alt={img.alt} width={0} height={0} className="w-fit mx-auto h-64 object-contain border-orange-500 border-2 rounded-md shadow-2xl shadow-orange-700/40 " />
                </figure>
                <div className=' flex flex-row gap-2'>
                    {acomodaciones.acomodacion.map((item, index) => (<button className={img.img === item.img ? 'w-1/5 h-16 hover:blur-sm ring ring-black rounded-sm overflow-hidden': "w-1/5 h-16 hover:blur-sm ring rounded-sm overflow-hidden"} key={index} onClick={() => setImg(item)}><Image className='w-full h-full object-cover' src={item.img} alt={item.alt} width={0} height={0} /> </button>))}
                </div>
            </section>
            <section className='md:w-2/5 w-[95%]  place-self-center'>
                <h2 className='text-center font-bold text-3xl py-8'>{acomodaciones.title}</h2>
                <ul className='flex flex-wrap gap-4 justify-evenly'>
                {acomodaciones.descripcion.split(', ').map((item, index) => (<li key={index} className='text-justify flex gap-1  text-lg first-letter:uppercase'><FontAwesomeIcon icon={faSpa} className='w-6 text-orange-600'/><p className='first-letter:uppercase'>{item}</p></li>))}
                </ul>
                <ButtonBook/>
            </section>
        </article>
    )
}
export default Acomodaciones