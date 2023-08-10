import { faAirbnb, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import booking from '../public/62c82305f058e2b89bce43a7.png'
import { contacto } from '@/data/data'

const ButtonBook = () => {
  return (
    <div className=' grid grid-cols-2 pt-8 gap-2'>
        <h2 className='text-2xl col-span-2 font-bold text-center text-gray-500'>Reserva ahora</h2>
        <ul className='flex flex-row gap-2 place-content-end'>
            <li><a href='#'><FontAwesomeIcon icon={faAirbnb} className='w-12 h-12 text-pink-800'/></a></li>
            <li><a href='#'><Image alt='logo de booking' src={booking} className='w-12 h-12'/></a></li>
            <li><a href={`http://wa.me/${contacto.telefono}`}><FontAwesomeIcon icon={faWhatsapp} className='w-12 h-12 text-green-700' /></a></li>
        </ul>
        <p className='text-xs text-gray-300'>Garantizamos la mejor tarifa en nuestra página web. ¡Si encuentras una mejor tarifa, contacta con nosotros  al <a className='font-bold text-gray-900 hover:text-blue-500' href={`tel:${contacto.telefono}`}>+57 312 4500289</a> y te igualamos el precio!</p>
    </div>
  )
}

export default ButtonBook