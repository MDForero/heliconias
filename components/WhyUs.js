'use client'
import Image from 'next/image'
import React, { useState } from 'react'


const WhyUs = ({data, title}) => {
    const [active, setActive] = useState(data[0])

    return (<>
                    <h1 className='lg:text-4xl uppercase font-serif font-light text-center  mb-4 p-0 '>{title}</h1>
        <section className='flex lg:flex-row w-full px-4 flex-col gap-8 justify-evenly items-center'>
            <div className='relative imgwhyus ' >

            <Image loading='lazy' src={active.img} width={0} height={0} className=' w-full max-w-[600px] max-h-[400px] xl:h-[400px] xl:w-[600px] object-cover z-50' id='img'  />
            </div>
            <div className=' lg:w-2/5 w-full px-4  text-justify text-gray-200'>
                <header>
                    <nav>
                        <ul className='flex flex-row wrap md:flex-nowrap justify-evenly  mb-0 gap-6 w-full'>
                        {data.map((item, index)=><li key={index}><button className='button px-2 w-full' onClick={() => setActive(item)}>{item.title}</button></li>
                            )}
                        </ul>
                    </nav>
                </header>
                <div className='mt-6'>
                    <h2 className='text-xl font-serif font-light text-center mb-4 p-0'>{active.subtitle}</h2>
                    <p className='min-h-[220px]'> {active.text}</p>
                </div>
            </div>
        </section>
    </>
    )
}

export default WhyUs