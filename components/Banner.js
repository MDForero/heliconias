"use client"
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import defaultFondo from '../public/defaultservices.jpg'

const Banner = ({fondo, imgPosition}) => {
    const pathname = usePathname()
  return (
    <main className="relative flex mt-12 md:mt-0 md:h-[800px]  flex-col items-center justify-between ">
                <Image loading='lazy' src={fondo?fondo:defaultFondo} alt="Contacto" width={0} height={0} className={`w-full h-[400px] md:h-[800px] object-${imgPosition ? imgPosition : 'center' } object-cover`} />
                <div className="absolute z-0 flex flex-col gap-4 justify-center items-center top-0 left-0 w-full h-[400px] md:h-[800px] bg-black bg-opacity-50">
                    <div className='rounded-full bg-gray-200/80 w-[150px] h-[150px] md:w-[300px] md:h-[300px] flex'><Image loading='lazy'src='/logo.png' alt='logo ' width={0} height={0} className='m-auto w-[150px] h-[60px] md:w-[250px] md:h-[100px]'/></div>
                    <p className="text-center font-bold text-3xl text-white"><Link href="/">Las Heliconias</Link> | <span className='capitalize'>{pathname.slice(1,-1)==='menu'? 'menú':pathname.slice(1,-1)} </span></p>
                </div>
            </main>
  )
}

export default Banner