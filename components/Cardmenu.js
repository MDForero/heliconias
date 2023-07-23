import Image from 'next/image'
import React from 'react'
import defaultImg from '../public/defaultmenu.JPG'

const Cardmenu = ({data}) => {
const {image, descripcion, precio} = data
  return (
    <tr>
        <td>
            {/* {image ? <Image src={image} alt={descripcion} width={0} height={0} className='w-8'/> : <Image src={defaultImg} alt="pendiente" width={0} height={0} />} */}
        <Image src={image? image.img : defaultImg} alt={image?image.alt : "pendiente"} className='w-20'/>
        </td>
        <td><strong>{descripcion.slice(0, descripcion.indexOf(":"))}</strong><br/> {descripcion.slice(descripcion.indexOf(":")+1)}</td>
        <td>{precio}</td>

    </tr>
  )
}

export default Cardmenu