// Voy a disenar una tabla para mostrar el listado de los productos que se van a comprar
// este tabla debe ser resposnive y debe tener un boton para eliminar el producto de la lista de compras
// el css lo manejaremos con tailwindcss
// los datos se sustraeran del context useCart
// los datos que se mostraran en la tabla son: nombre, precio, cantidad, subtotal, eliminar
// el boton de eliminar sera un icono de fontawesome fatrash
'use client'
import { useCart } from '@/context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function TableCheckOut() {

    const cart = useCart()
    
    const [total, setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [iva, setIva] = useState(0)
    const [envio, setEnvio] = useState(0)
    const [descuento, setDescuento] = useState(0)
    useEffect(() => {
        setSubtotal(cart.cart.reduce((sum, { precio, cantidad }) => sum + precio * cantidad, 0))
        setIva(subtotal * 0.16)
        setEnvio(subtotal * 0.05)
        setDescuento(subtotal * 0.1)
        setTotal(subtotal + iva + envio - descuento)
    }, [cart.cart])

    return (
        <div className="container max-w-4xl px-4 mx-auto sm:px-8">
            <div className="py-8">
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block max-w-full w-full h-96 overflow-hidden overflow-y-auto rounded-lg shadow m-0 ">
                        <table className="max-w-full w-full  leading-normal">
                            <thead className='sticky top-0'>
                                <tr>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Precios
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Precio</th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Cantidad</th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Subtotal</th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody >
                                {cart.cart.map((item, index) => {
                                    return (<tr key={index}>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {item.nombre}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200"><p className="text-gray-900 whitespace-no-wrap">{item.precio}</p></td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200"><p className="text-gray-900 whitespace-no-wrap">{item.cantidad}</p></td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200"><p className="text-gray-900 whitespace-no-wrap">{item.precio * item.cantidad}</p></td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200"><button onClick={() => dispatch({ type: "REMOVE_ONE", payload: item })}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="m-0 ">
                        <table className=" w-full m-0">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Subtotal</th>

                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200"><p className="text-gray-900 whitespace-no-wrap">{subtotal}</p></td>

                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200"><p className="text-gray-900 whitespace-no-wrap">{total}</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </div >

    )
}



