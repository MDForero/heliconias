'use client'
import Link from 'next/link'
import './globals.css'
import 'animate.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import CartProvider, { useCart } from '../context/CartContext'
import Nav from '../components/Nav'
import { contacto } from '@/data/data'

const inter = Inter({ subsets: ['latin'] })

const nav1 = [
  { href: '/habitaciones', label: 'Alojamientos' },
  { href: '/menu', label: 'Menú' },
  { href: '/servicios', label: 'Servicios' },
]
const nav2 = [
  {
    href: '/galeria', label: 'Galería'
  },
  {
    href: '/nosotros', label: 'Nosotros'
  },
  {
    href: '/contacto', label: 'Contacto'
  }
]

const politicas = [
  { href: 'derechos', label: 'Derechos y deberes' },
  { href: 'normas', label: 'Normas en la piscina' },
  { href: 'terminos', label: 'Términos y condiciones' },
]

const redes = [
  { icon: faFacebook, href: 'https://www.facebook.com/lasheliconiascentroagroturistico' },
  { icon: faInstagram, href: 'https://www.instagram.com/heliconiasagroturistico/' },
  { icon: faWhatsapp, href: `https://api.whatsapp.com/send?phone=${contacto.telefono}&text=Hola,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios` },
  { icon: faTiktok, href: 'https://www.tiktok.com/@heliconiasmon' },
]



export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  

  return (
    <html lang="es" >
      <body className={inter.className}>
        <CartProvider>
          <Nav nav1={nav1} nav2={nav2}/>
          <section className="bg-gray-900 text-gray-300 pb-12 overflow-hidden relative z-0">
            <a href={`https://api.whatsapp.com/send?phone=${contacto.telefono}&text=Hola vengo de tu pagina web+`} target='_blank' className='fixed text-white bg-green-600 rounded-full px-1 bottom-2 right-2 z-10  hover:animate-[ping_0.3s_ease-in-out_1]'><FontAwesomeIcon icon={faWhatsapp} className='text-green-5001 text-5xl' /></a>
            {children}
          </section>
        </CartProvider>
        <footer className="bg-gray-900 border-t-2 border-gray-100  pt-12 pb-8 xl:pt-8">
          <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-100">
            <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-100 text-md uppercase mb-4">
                    Secciones
                  </h2>
                  <ul>
                    {nav1.concat(nav2).map((link, index) => (<li key={index} className="mb-4 transition-colors duration-200 hover:text-gray-100 dark:hover:text-white">
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </li>))}
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-100 text-md uppercase mb-4">
                    Políticas de servicio
                  </h2>
                  <ul>
                    {politicas.map((item, index) => (<li key={index} className="mb-4 transition-colors duration-200 hover:text-gray-100 dark:hover:text-white">
                      <Link href={`/politicas/${item.href}`}>
                        {item.label}
                      </Link>
                    </li>))}
                  </ul>
                </div>
              </li>
            </ul>
            <div className="pt-8 flex border-t border-gray-800 max-w-xs mx-auto items-center justify-between">
              {redes.map((red, index) => (<a href={red.href} key={index}>
                <FontAwesomeIcon icon={red.icon} className="text-3xl transition-colors duration-200 hover:text-gray-100 dark:hover:text-white" />
              </a>))}

            </div>
            <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            </div>
          </div>
        </footer>

      </body>
    </html >
  )
}
