import Image from 'next/image'
import React, { useState } from 'react'

const Modal = ({data}) => {
    const [img, setImg] = useState(false)
    console.log(data)
  return (
    <>
    <button onClick={()=>setImg(!img)}>
        <Image loading='lazy'src={data} width={0} height={0} alt='imagen de muestra' className='w-20 h-20 object-cover rounded-full' />
    </button>
    <button onClick={()=>setImg(!img)} className={(img ? '' : 'hidden ') + 'fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-800/90'}>
        <Image loading='lazy'src={data} width={0} height={0} alt='imagen de muestra' className='max-w-4xl w-full  object-cover' />
    </button>

    </>
  )
}

export default Modal