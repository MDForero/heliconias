"use client"
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import defaultFondo from '../public/hermosa-foto-lago-skadar-montenegro.jpg'

const Banner = ({fondo}) => {
    const pathname = usePathname()
  return (
    <main className="relative flex h-[600px]  flex-col items-center justify-between ">
                <Image  src={fondo?fondo:defaultFondo} alt="Contacto" width={0} height={0} className="w-full h-[600px] object-cover" />
                <div className="absolute flex flex-col gap-4 justify-center items-center top-0 left-0 w-full h-[600px] bg-black bg-opacity-50">
                    <div className='rounded-full bg-gray-400/80 w-[300px] h-[300px] flex'><Image src='/logo.png' alt='logo ' width={250} height={100} className='m-auto'/></div>
                    <p className="text-center font-bold text-3xl text-white"><Link href="/">Las Heliconias</Link> | {pathname.slice(1)}</p>
                </div>
            </main>
  )
}

export default Banner