'use client'
import Link from 'next/link'
import './globals.css'
import 'animate.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import logo from '../public/logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const redes = [
  { icon: faFacebook, href: 'https://www.facebook.com/lasheliconias' },
  { icon: faInstagram, href: 'https://www.instagram.com/lasheliconias/' },
  { icon: faWhatsapp, href: 'https://api.whatsapp.com/send?phone=573016000000&text=Hola,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios' },
  { icon: faYoutube, href: '#' },
  { icon: faTiktok, href: 'https://www.tiktok.com/@heliconiasmon' },
]



export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className="relative bg-gray-300  z-50 flex flex-wrap items-center justify-between p-4 ">
          <div className="w-auto  md:order-2 md:w-1/5 md:text-center">
            <Link className="text-xl font-semibold text-gray-800 font-heading" href="/">
              <Image src={logo} alt="logo" className="w-40 md:mx-auto" />
            </Link>
          </div>
          <div className="block md:hidden">
            <button className="flex items-center px-3 py-2 text-gray-500 border border-gray-500 rounded navbar-burger" onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <FontAwesomeIcon icon={faTimes} /> :<FontAwesomeIcon icon={faBars} />  }
            </button>
          </div>
          <div className={"w-full hidden navbar-menu md:order-1 md:block md:w-2/5 md:text-right"}>
            <Link className="block mt-4 mr-10 text-gray-800 md:inline-block md:mt-0 hover:text-gray-600" href="habitaciones">
              Alojamientos
            </Link>
            <Link className="block mt-4 mr-10 text-gray-800 md:inline-block md:mt-0 hover:text-gray-600" href="menu">
              Menú
            </Link>
            <Link className="block mt-4 text-gray-800 md:inline-block md:mt-0 hover:text-gray-600" href="servicios">
              Servicios
            </Link>
          </div>
          <div className={"w-full hidden navbar-menu md:order-3 md:block md:w-2/5 md:text-left"}>
            <Link className="block mt-4 mr-10 text-gray-800 md:inline-block md:mt-0 hover:text-gray-600" href="galeria">
              Galería
            </Link>
            <Link className="block mt-4 mr-10 text-gray-800 md:inline-block md:mt-0 hover:text-gray-600" href="nosotros">
              Nosotros
            </Link>
            <Link className="block mt-4 text-gray-800 md:inline-block md:mt-0 hover:text-gray-600" href="contacto">
              Contacto
            </Link>
          </div>
          <div className={(showMenu ? "animate__animated animate__slideInDown bg-gray-800 md:hidden " : "hidden ") + "-z-50 px-4  absolute top-14 right-0 lg:hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5"}>
            <Link className="block mt-4 mr-10 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-600" onClick={() => setShowMenu(!showMenu)} href="habitaciones">
              Alojamientos
            </Link>
            <Link className="block mt-4 mr-10 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-600" onClick={() => setShowMenu(!showMenu)} href="menú">
              Menú
            </Link>
            <Link className="block mt-4 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-600" onClick={() => setShowMenu(!showMenu)} href="servicios">
              Servicios
            </Link>
            <Link className="block mt-4 mr-10 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-600" onClick={() => setShowMenu(!showMenu)} href="galeria">
              Galería
            </Link>
            <Link className="block mt-4 mr-10 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-600" onClick={() => setShowMenu(!showMenu)} href="nosotros">
              Nosotros
            </Link>
            <Link className="block mt-4 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-600" onClick={() => setShowMenu(!showMenu)} href="contacto">
              Contacto
            </Link>
          </div>
        </nav>
        <section className="bg-white text-black overflow-hidden">
          <a href='#' className='fixed  bottom-2 right-2 z-10  hover:animate-[ping_0.3s_ease-in-out_1]'><FontAwesomeIcon icon={faWhatsapp} className='text-green-5001 text-5xl'/></a>
          {children}
        </section>
        <footer className="bg-white  dark:bg-gray-200 pt-4 pb-8 xl:pt-8">
          <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-800">
            <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-800 text-md uppercase mb-4">
                    Components
                  </h2>
                  <ul>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Elements
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Forms
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Commerces
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Navigation
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-800 text-md uppercase mb-4">
                    Contacts
                  </h2>
                  <ul>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Github
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Facebook
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Twitter
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-800 text-md uppercase mb-4">
                    Customization
                  </h2>
                  <ul>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Settings
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Themes
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        Plugins
                      </a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="pt-8 flex border-t border-gray-800 max-w-xs mx-auto items-center justify-between">
              {redes.map((red, index) => (<a href={red.href} key={index}>
                <FontAwesomeIcon icon={red.icon} className="text-3xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
              </a>))}

            </div>
            <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
