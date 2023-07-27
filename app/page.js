import Valores from '@/components/Valores'
import Image from 'next/image'
import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Team from '../components/Team'

export const metadata ={
  title : 'Las Heliconias',
  description: 'Centro Agroecoturístico Las Heliconias', 
}

export default function Home() {
  return (
    <div className='flex flex-col  justify-center place-items-center pb-8'>

      <main className=" relative min-h-screen w-full h-[450px] bg-inicio">
        <div className='absolute top-0 right-0 w-full flex flex-col justify-center h-full items-center bg-gray-400/60'>
          <Image src='/logo.png' width={300} height={300} />
          <div className='max-w-3xl flex flex-col justify-center items-center text-center gap-2 text-xl'>
          <p className=' font-bold text-3xl'>¡Descubre el Paraíso Natural en Centro Agroecoturístico Las Heliconias!</p>
          <p className=' font-bold '>¡¡Reserva Ahora y Vive una Experiencia Única en Las Heliconias!!</p>
          <a className='flex flex-row justify-center items-center text-2xl font-bold bg-indigo-300 w-fit mx-auto p-2 rounded-xl ring-4 hover:ring-red-600 hover:bg-green'><p> Reserva ya!! </p> <FontAwesomeIcon icon={faWhatsapp} className='text-green-600 w-12 h-12'/></a>
          </div>
        </div>

      </main>
      <Valores />
      <div>
        <Team/>
      </div>
      <div className='flex flex-col gap-12 justify-center '>
        <iframe src="https://www.instagram.com/p/CjzCPN-D3jD/embed" width="540" height="600" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flasheliconiascentroagroturistico%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1376175039861911" className="h-[600px] w-[500px] border-none overflow-hidden" allowFullScreen="true"></iframe>
      </div>
    </div>
  )
}
