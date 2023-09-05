import Valores from '@/components/Valores'
import Image from 'next/image'
import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Team from '../components/Team'
import Script from 'next/script'
import WhyUs from '@/components/WhyUs'
import { cardservices, contacto } from '@/data/data'
import Card from '@/components/Card'
import Booking from '../components/Booking'

export const metadata = {
  title: 'Las Heliconias',
  description: 'Centro Agroecoturístico Las Heliconias',
}

const text = {
  title: 'Las Heliconias tu hogar  en el campo',
  data: [
    {
      title: 'Las Heliconias',
      subtitle: '¡Descubre el Paraíso Natural!',
      text: 'A tan solo 5 km de Monterrey, Casanare, siguiendo la carretera que te lleva a Yopal, te espera un lugar encantador rodeado de naturaleza, un ambiente realmente magnífico y perfecto para toda la familia. En este rincón especial, te brindamos servicios de alojamiento rural que incluyen habitaciones amplias y muy cómodas. Además, podrás disfrutar de una piscina natural para darte un chapuzón en esos soleados días, y contamos con un restaurante campestre que ofrece un menú gourmet exquisito, pensado para satisfacer todos tus gustos culinarios. ¡Estamos ansiosos por recibirte y hacer que tu estadía sea inolvidable!',
      img: '/fondos/contacto.JPG',

    },
    {
      title: 'Misión',
      subtitle: 'Seremos tu mejor experiencia',
      text: 'Garantizar un servicio de alto estándar de calidad y confort, descanso y deleite gastronómico enfocados en la satisfacción total de todos nuestros visitantes, creando una experiencia inolvidable mientras disfrutas de nuestro ambiente natural y ecológico de nuestras instalaciones.',
      img: '/servicios/restaurante.jpg',
    },
    {
      title: '¿Por qué elegirnos?',
      subtitle: 'Una experiencia llanera',
      text: 'Descubre el auténtico llano en las Heliconias. Naturaleza que inspira libertad, jardines multicolores que bailan con el viento, aves que pintan el cielo, y senderos que despiertan tu espíritu aventurero. Sumérgete en la cultura, sabores y tradiciones. Siente la calidez de los habitantes, conoce la vida en los llanos y déjate llevar por la magia de lo llanero.',
      img: '/fondos/nosotros.JPG',
    },
  ]
}

export default function Home() {
  return (<>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XV6KLVV3HH" />
    <Script id='google-analytics'>
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-XV6KLVV3HH');
  `}
    </Script>
    <main className=" relative min-h-screen w-full mb-32 mdÑmb-0 h-[450px] bg-inicio">
      <div className='absolute top-0 right-0 w-full flex flex-col justify-center h-full items-center bg-gray-400/60'>
        <Image src='/logo.png' alt='logo' width={300} height={300} className=' ' />
        <div className='max-w-3xl flex text-white  flex-col justify-center items-center text-center gap-2 text-xl'>
          <p className=' font-bold text-3xl'>¡Descubre el Paraíso Natural en Centro Agroecoturístico Las Heliconias!</p>
          <p className=' font-bold '>¡¡Reserva Ahora y Vive una Experiencia Única!!</p>
        </div>
      </div>
      <Booking />
    </main>
    <div className='flex flex-col gap-20 justify-center place-items-center pb-8 lg:px-2 px-4 pt-20'>
      <section id='servicios'>
        <h2 className='text-4xl font-bold text-center pt-8 pb-16 first-letter:capitalize text-gray-300'>nuestros servicios</h2>
        <div className='flex flex-row text-center flex-wrap gap-12 justify-center'>
          {cardservices.map((item, index) => <Card key={index} data={item} />)}
        </div>
      </section>
      <WhyUs data={text.data} title={text.title} />
      <Valores />
      <div>
        <Team />
      </div>
      <section className=''>
        <h2 className='text-4xl font-bold text-center pt-8 pb-16 first-letter:capitalize text-gray-300'>siguenos en nuestras redes</h2>
        <div className='flex flex-row flex-wrap gap-12'>
          <div className='p-4 pt-12 relative rounded-xl shadow-xl shadow-slate-700 border-2 border-gray-950'>
            <div className='absolute -top-12 left-0 w-full flex justify-center'>
              <FontAwesomeIcon icon={faInstagram} className='text-8xl text-pink-600   bg-transparent' />
            </div>
            <iframe src="https://www.instagram.com/p/CjzCPN-D3jD/embed" className='md:w-[340px] w-full h-[400px] md:h-[500px]' frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          </div>
          <div className='p-4 pt-12 relative rounded-xl shadow-xl shadow-slate-700 border-2 border-gray-950'>
            <div className='absolute -top-12 left-0 w-full flex justify-center'>
              <FontAwesomeIcon icon={faFacebook} className='text-8xl text-blue-600  bg-white rounded-full' />
            </div>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flasheliconiascentroagroturistico&tabs=timeline%2C%20events%2C%20messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1376175039861911" width="340" height="500" className='border overflow-hidden' scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </section>
    </div>
  </>
  )
}
