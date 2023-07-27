import Valores from '@/components/Valores'
import Image from 'next/image'
import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Team from '../components/Team'

export const metadata = {
  title: 'Las Heliconias',
  description: 'Centro Agroecoturístico Las Heliconias',
}

export default function Home() {
  return (
    <div className='flex flex-col gap-20 justify-center place-items-center pb-8'>

      <main className=" relative min-h-screen w-full h-[450px] bg-inicio">
        <div className='absolute top-0 right-0 w-full flex flex-col justify-center h-full items-center bg-gray-400/60'>
          <Image src='/logo.png' width={300} height={300} />
          <div className='max-w-3xl flex flex-col justify-center items-center text-center gap-2 text-xl'>
            <p className=' font-bold text-3xl'>¡Descubre el Paraíso Natural en Centro Agroecoturístico Las Heliconias!</p>
            <p className=' font-bold '>¡¡Reserva Ahora y Vive una Experiencia Única en Las Heliconias!!</p>
            <a className='flex flex-row justify-center items-center text-2xl font-bold bg-indigo-300 w-fit mx-auto p-2 rounded-xl ring-4 hover:ring-red-600 hover:bg-green'><p> Reserva ya!! </p> <FontAwesomeIcon icon={faWhatsapp} className='text-green-600 w-12 h-12' /></a>
          </div>
        </div>

      </main>
      <Valores />
      <div>
        <Team />
      </div>
      <section className=''>
        <h2 className='text-4xl font-bold text-center pt-8 pb-16 first-letter:capitalize text-gray-800'>siguenos en nuestras redes</h2>
        <div className='flex flex-row flex-wrap gap-12'>
          <div className='p-4 pt-12 relative rounded-xl shadow-xl shadow-slate-700 border-2 border-gray-950'>
            <div className='absolute -top-12 left-0 w-full flex justify-center'>
              <FontAwesomeIcon icon={faInstagram} className='text-8xl text-pink-600  bg-white' />
            </div>
            <iframe src="https://www.instagram.com/p/CjzCPN-D3jD/embed" className='md:w-[340px] w-full h-[400px] md:h-[500px]' frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          </div>
          <div className='p-4 pt-12 relative rounded-xl shadow-xl shadow-slate-700 border-2 border-gray-950'>
            <div className='absolute -top-12 left-0 w-full flex justify-center'>
              <FontAwesomeIcon icon={faFacebook} className='text-8xl text-blue-600  bg-white' />
            </div>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flasheliconiascentroagroturistico&tabs=timeline%2C%20events%2C%20messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1376175039861911" width="340" height="500" className='border overflow-hidden' scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
