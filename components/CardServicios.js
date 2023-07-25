import Image from 'next/image'
import defaultservices from '../public/defaultservices.JPG'
const CardServicios = ({ data }) => {
    return (
        <div className='flex flex-row odd:flex-row-reverse py-12 flex-wrap justify-evenly text-justify  item-center border-b bg-red-500 odd:bg-green-500'>
            <div className='lg:w-2/6 place-self-center'>
                <h2 className='font-bold text-center text-2xl py-4'>{data.title}</h2>
                <p>{data.descripcion}</p>
            </div>
            <Image src={data.img? data.img : defaultservices} alt={data.alt? data.alt : "pendiente de imagen descriptiva"} width={0} height={0} className='lg:w-2/6' />
        </div>
    )
}

export default CardServiciosclassName='rounded-full bg-gray-400/80'