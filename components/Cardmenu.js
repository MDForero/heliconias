'use client'
import Image from 'next/image'
import React from 'react'
import defaultImg from '../public/defaultmenu.jpg'
import { useCartDispath } from '@/context/CartContext'

const Cardmenu = ({ data, id }) => {
  const dispatch = useCartDispath()
  const { img, descripcion, precio } = data
  return (
    <div className='flex flex-row gap-8 border-2 w-full border-orange-500 rounded-3xl p-3'>

      {/* {image ? <Image src={image} alt={descripcion} width={0} height={0} className='w-8'/> : <Image src={defaultImg} alt="pendiente" width={0} height={0} />} */}
      <Image src={img} alt={img.name} width={0} height={0} className='w-20 h-20 object-cover place-self-center  rounded-full' />
      <div className='flex flex-col justify-center w-full'>
        <div className='flex justify-end items-center gap-3'>
          <p className='first-letter:capitalize tracking-wider w-full mx-auto'>{descripcion.indexOf(':') != -1 ? <strong>{descripcion.slice(0, descripcion.indexOf(":"))}</strong> : <strong >{descripcion}</strong>}</p>
          <div className='w-full border-b-4 border-dotted border-orange-500 h-0 '></div>
          <p className='font-bold tracking-widest text-xl justify-self-end'>{precio}</p>
        </div>
        {descripcion.indexOf(':')!=-1?<p className='tracking-wide font-medium'>{descripcion.slice(descripcion.indexOf(":") + 1)}</p>:null}
        <div className='flex justify-end w-full'>
          
          <button  className='bg-orange-500 text-black hover:bg-green-700 font-bold  tracking-wide rounded-lg px-2 py-1' onClick={()=>dispatch({type:'ADD', payload:{nombre:descripcion.slice(0,descripcion.indexOf(':')), precio:precio, id}})}>Agregar al carrito</button>
        </div>
        
      </div>

    </div>
  )
}

export default Cardmenu