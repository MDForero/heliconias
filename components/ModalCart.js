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
    <div className={show ? "fixed w-screen min-h-screen z-50 flex justify-center top-0 left-0 modal-backdrop text-black" : 'hidden'}>
      <div className=" bg-gray-200 my-auto ">
        <header className="bg-gray-400 flex w-full justify-between items-center px-8 ">
          <h1 className="text-2xl font-bold ">Carrito</h1>
          <button onClick={onHide} className="w-12 h-12 text-xl justify-self-end font-extrabold bg-red-600 rounded-full">X</button>
        </header>
        <section className="flex w-full place-content-center">

          <table className="border-spacing-8 border-separate" >
            <thead>
              <tr>
                <th>id</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.cart.map((item, index) => {
                console.log(item.id)
                return(<tr key={index}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>{item.precio}</td>
                <td>{item.precio*item.cantidad}</td>
                <td><button onClick={()=>dispatch({type:"REMOVE_ONE", payload:item})}><FontAwesomeIcon icon={faTrash} /></button></td>
                <td><button onClick={()=>dispatch({type:"REMOVE", payload:item})}>Eliminar</button></td>
              </tr>)})}
            </tbody>
          </table>
        </section>
        <footer className="flex bg-gray-400 w-full justify-end items-center px-8 gap-3 ">
          <h1 className="text-2xl font-bold ">Total: {cart.total}</h1>
          <Link href='/checkout' className="w-fit px-2 h-12 text-xl justify-self-end font-extrabold bg-red-600 rounded-full">Hacer pedido</Link>
        </footer>

      </div>
    </div>
  )
}

export default ModalCart