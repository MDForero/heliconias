'use client'
import Image from 'next/image'
import React, { useState } from 'react'


const WhyUs = ({data, title}) => {
    const [active, setActive] = useState(data[0])

    return (
        <section className='flex lg:flex-row flex-col gap-8  justify-evenly items-center'>
            <div className='relative imgwhyus ' >

            <Image  src='/fondos/menu.JPG' width={0} height={0} className=' w-full max-w-[600px] max-h-[400px] xl:h-[400px] xl:w-[600px] object-cover z-50' id='img'  />
            </div>
            <div className=' lg:w-2/5  text-justify text-gray-200'>
                <header>
                    <h1 className='text-3xl font-serif font-light text-center  mb-4 p-0 '>{title}</h1>
                    <nav>
                        <ul className='flex flex-row justify-evenly  mb-0 gap-6 w-full'>
                        {data.map((item, index)=><li><button className='button  w-full' onClick={() => setActive(item)}>{item.title}</button></li>
                            )}
                        </ul>
                    </nav>
                </header>
                <div className='mt-6'>
                    <h2 className='text-xl font-serif font-light text-center mb-4 p-0'>{active.subtitle}</h2>
                    <p className='h-[220px]'> {active.text}</p>
                </div>
            </div>
        </section>
    )
}

export default WhyUs