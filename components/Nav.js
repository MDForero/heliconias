'use client'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../public/logo.png'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import ModalCart from './ModalCart'




const Nav = ({ nav1, nav2 }) => {
    const pathname = usePathname()
    const [showMenu, setShowMenu] = useState(false)
    const cart = useCart()
    const [show, setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }

    return (
        <div className=' bg-gray-500 '>

            <nav className="fixed z-50 bg-gray-500 z-50text-xl font-normal flex flex-wrap max-w-screen-2xl w-full mx-auto items-center justify-center p-4">

                <div className=" w-auto  md:order-2 md:w-1/5 md:text-center">
                    <Link className="text-xl font-semibold  font-heading" href="/">
                        <Image src={logo} alt="logo" width={100} className="mx-auto" />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button className="flex items-center px-3 py-2 text-white border border-gray-500 rounded navbar-burger" onClick={() => setShowMenu(!showMenu)}>
                        {showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
                <div className="w-full hidden navbar-menu md:order-1 md:flex md:flex-row md:gap-8 md:justify-end md:w-2/5 md:text-right">
                    {nav1.map((link, index) => {
                        const isActive = pathname.slice(1) === link.href
                        return (<Link key={index} className={(isActive ? "font-bold border-b-4 px-2 border-gray-700 " : "") + "block mt-4  text-gray-100 md:inline-block md:mt-0 hover:text-gray-600"} href={link.href}>
                            {link.label}
                        </Link>)
                    })}
                </div>
                <div className={"w-full hidden navbar-menu md:order-3 md:flex md:flex-row md:gap-8 md:justify-start md:w-2/5 md:text-left"}>
                    {nav2.map((link, index) => {
                        const isActive = pathname.slice(1) === link.href
                        return (<Link key={index} className={(isActive ? "font-bold border-b-4 px-2 border-gray-700 " : "") + "block mt-4  text-gray-100 md:inline-block md:mt-0 hover:text-gray-600"} href={link.href}>
                            {link.label}
                        </Link>)
                    })}
                </div>
                <div className={(showMenu ? "animate__animated animate__slideInDown bg-gray-800 md:hidden " : "hidden ") + "px-4  fixed  top-0 flex flex-col justify-center items-center h-screen  right-0 lg:hidden w-full navbar-menu lg:order-1 lg:w-2/5"}>
                    {nav1.concat(nav2).map((item, index) => (<Link key={index} className="block mt-4 mr-10 text-gray-100 lg:inline-block lg:mt-0 hover:text-gray-600" onClick={() => setShowMenu(!showMenu)} href={item.href}>
                        {item.label}
                    </Link>))}
                </div>
                <div className=' lg:top-6 lg:right-12 mx-auto lg:absolute '>
                    <div className=''>
                        <button className='relative bg-orange-500  text-white rounded-lg px-2 py-1' onClick={handleShow }>
                            <FontAwesomeIcon icon={faCartShopping} className="text-2xl text-gray-100" />
                            {cart.cantidad ? <div className='rounded-full bg-red-600 absolute -top-3 -left-2 w-7 h-7'>{cart.cantidad}</div> : null}
                        </button>

                    </div>
                </div>
            </nav>
            <ModalCart show={show} onHide={handleShow} />
        </div>
    )
}

export default Nav