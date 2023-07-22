import Image from 'next/image'
import defaultservices from '../public/defaultservices.JPG'
const CardServicios = ({ data }) => {
    return (
        <div className='flex flex-row odd:flex-row-reverse py-12 flex-wrap justify-around text-   justify  item-center border-b'>
            <div className='lg:w-3/5 place-self-center'>
                <h2 className=''>{data.title}</h2>
                <p>{data.descripcion}</p>
            </div>
            <Image src={data.img? data.img : defaultservices} alt={data.alt? data.alt : "pendiente de imagen descriptiva"} width={0} height={0} className='lg:w-2/6' />
        </div>
    )
}

export default CardServicios