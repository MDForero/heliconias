'use client'

import { useCartDispath, useCart } from "@/context/CartContext"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

const ModalCart = ({ show, onHide }) => {
  const dispatch = useCartDispath()
  const cart = useCart()


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (show && event.target.classList.contains('modal-backdrop')) {
        onHide();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [show, onHide]);

  return (
    <div className={show ? "fixed overflow-hidden overflow-y-auto  w-screen z-50  max-h-screen h-full flex justify-center items-center top-0 left-0 modal-backdrop text-black" : 'hidden'}>
      <div className=" bg-gray-200  my-auto ">
        <header className="bg-gray-400 flex w-full justify-between items-center p-4 ">
          <h1 className="text-2xl font-bold ">Carrito</h1>
          <button onClick={onHide} className="w-12 h-12 text-xl justify-self-end font-extrabold bg-red-600 rounded-full">X</button>
        </header>
        <section className="flex w-screen place-content-center overflow-hidden h-[70vh] overflow-y-auto px-4 ">
                  <table className="w-full leading-normal h-fit border-separate border-spacing-1">
                    <thead className="sticky top-0 bg-gray-100">
                      <tr className="bg-gray-100 text-center">
                        <th scope="col" className="md:px-5 px-1 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">id</th>
                        <th scope="col" className="md:px-5 px-1 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">Producto</th>
                        <th scope="col" className="md:px-5 px-1 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200 hidden sm:block">Cantidad</th>
                        <th scope="col" className="md:px-5 px-1 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200 sm:hidden">Cant.</th>
                        <th scope="col" className="md:px-5 px-1 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200 hidden sm:block">Precio</th>
                        <th scope="col" className="md:px-5 px-1 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">Subtotal</th>
                        <th scope="col" className="md:px-5 px-1 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200 hidden sm:block">eliminar</th>
                        <th scope="col" className="md:px-5 px-1 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200 sm:hidden">X</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.cart.map((item, index) => {
                        console.log(item.id)
                        return (<tr key={index}>
                          <td className="md:px-5 md:py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">{item.id}</p></td>
                          <td className="md:px-5 md:py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">{item.nombre}</p></td>
                          <td className="md:px-5 md:py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">{item.cantidad}</p></td>
                          <td className="md:px-5 md:py-5 text-sm bg-white border-b hidden sm:block border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap ">{item.precio}</p></td>
                          <td className="md:px-5 md:py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">{item.precio * item.cantidad}</p></td>
                          <td className="md:px-5 md:py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap"><button onClick={() => dispatch({ type: "REMOVE_ONE", payload: item })}><FontAwesomeIcon icon={faTrash} size='xl' className='px-1' /></button></p></td>
                          <td className="md:px-5 md:py-5 text-sm bg-white border-b border-gray-200 hidden sm:block">
                                <p className="text-gray-900 whitespace-no-wrap"><button onClick={() => dispatch({ type: "REMOVE", payload: item })}>Eliminar</button></p></td>
                        </tr>)
                      })}
                    </tbody>
                  </table>
        </section>
        <footer className="flex bg-gray-400 w-full justify-end items-center p-4 gap-3 ">
          <h1 className="text-2xl font-bold ">Total: {cart.total}</h1>
          <Link href='/checkout' className="w-fit md:p-2 py-3 md:py-0 h-12 text-md md:text-xl justify-self-end text-center font-extrabold bg-red-600 rounded-full ">Hacer pedido</Link>
        </footer>

      </div>
    </div>
  )
}

export default ModalCart