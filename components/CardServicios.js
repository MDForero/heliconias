import Image from 'next/image'
import defaultservices from '../public/defaultservices.jpg'
const CardServicios = ({ data, even }) => {
    return (
        <div className='flex flex-row odd:flex-row-reverse py-12 flex-wrap justify-evenly text-justify max-w-screen-2xl mx-auto bg-gray-700 w-full item-center border-b even:bg-gray-900'>
            <div className='lg:w-2/6 place-self-center'>
                <h2 className='font-bold text-center text-gray-100 text-2xl py-4'>{data.title}</h2>
                <p className='text-gray-300'>{data.descripcion}</p>
            </div>
            <Image src={data.img? data.img : defaultservices}  alt={data.alt? data.alt : "pendiente de imagen descriptiva"} width={0} height={0} className={`lg:w-2/6 shadow-2xl ${even%2==0?'shadow-gray-300/50':'shadow-gray-950/90'}`} />
        </div>
    )
}

export default CardServicios