import Image from 'next/image'
import defaultservices from '../public/defaultservices.jpg'
const CardServicios = ({ data, even }) => {
    return (
        <div className='flex flex-col  md:flex-row gap-8 justify-center items-center px-4 md:odd:flex-row-reverse py-12 flex-wrap md:justify-evenly text-justify max-w-screen-2xl mx-auto even:bg-gray-700 w-full item-center border-b bg-gray-900'>
                <h2 className='font-bold md:hidden text-center text-gray-100 text-2xl py-4'>{data.title}</h2>
            <div className='md:block hidden md:w-2/6 place-self-center'>
                <h2 className='font-bold text-center text-gray-100 text-2xl py-4'>{data.title}</h2>
                <p className='text-gray-300'>{data.descripcion}</p>
            </div>
            <Image src={data.img? data.img : defaultservices}  alt={data.alt? data.alt : "pendiente de imagen descriptiva"} width={0} height={0} className={`w-4/5 md:w-2/6 shadow-2xl rounded-full md:rounded-none ${even%2==0?'shadow-green-500/90':'shadow-green-500/50'}`} />
            <p className='text-gray-300 md:hidden'>{data.descripcion}</p>
        </div>
    )
}

export default CardServicios