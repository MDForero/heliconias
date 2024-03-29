'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import imgMuestra from '../public/defaultservices.jpg'
import { imgs } from '@/data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowCircleLeft, faClose } from '@fortawesome/free-solid-svg-icons'
import { ImageList, ImageListItem } from '@mui/material'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

const Galeria = ({galeria}) => {
  const [img, setImg] = useState()
  const handleClickLeft = () => {
    const index = imgs.findIndex(item => item.src === img.src)
    if (index === 0) {
      setImg(imgs[imgs.length - 1])
    } else {
      setImg(imgs[index - 1])
    }
  }
  const handleClickRight = () => {
    const index = imgs.findIndex(item => item.src === img.src)
    if (index === imgs.length - 1) {
      setImg(imgs[0])
    } else {
      setImg(imgs[index + 1])
    }
  }
  

  return (
    <div className='w-[95%] mx-auto '>
      {img &&
        <section className='fixed z-50 h-90hv w-full  left-0 top-0 bg-gray-800/80'>
          <div className='flex justify-around  h-screen items-center relative'>
            <button onClick={() => handleClickLeft()} className='place-self-center  rounded-full h-12 w-12'>
              <FontAwesomeIcon icon={faArrowCircleLeft} size='xl' className='text-white'/>
            </button>
            <Image loading='lazy'src={img.src} width={0} height={0} alt={img.alt} className='max-w-4xl  w-full object-cover' />
            <button onClick={() => handleClickRight()} className='place-self-center  object-cover rounded-full h-12 w-12'>
              <FontAwesomeIcon icon={faArrowAltCircleRight} size='2xl' className='text-white'/>
            </button>
            <button onClick={() => setImg()} className='absolute top-0 right-2 ring ring-black rounded-full h-12 w-12'>
              <FontAwesomeIcon icon={faClose} size='2xl' className='text-white'/>
            </button>
          </div>
        </section>}
      <div>
        <section className='grid md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-6 grid-flow-dense gap-2'>
          {imgs.map((item, index) => (
            <button onClick={() => setImg(item)} key={index}>
              
                <Image loading='lazy'src={item.src} width={0} height={0} alt={item.alt} className='rounded-xl w-full h-full object-cover'/>
              
            </button>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Galeria