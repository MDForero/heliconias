import Image from 'next/image'
import defaultservices from '../public/defaultservices.jpg'
const CardServicios = ({ data }) => {
    return (
        <div className='flex flex-row odd:flex-row-reverse py-12 flex-wrap justify-evenly text-justify max-w-screen-2xl mx-auto bg-white w-full item-center border-b even:bg-gray-400'>
            <div className='lg:w-2/6 place-self-center'>
                <h2 className='font-bold text-center text-2xl py-4'>{data.title}</h2>
                <p>{data.descripcion}</p>
            </div>
            <Image src={data.img? data.img : defaultservices}  alt={data.alt? data.alt : "pendiente de imagen descriptiva"} width={0} height={0} className='lg:w-2/6 drop-shadow-2xl shadow-2xl shadow-black' />
        </div>
    )
}

export default CardServicios