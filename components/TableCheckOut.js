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
    console.log(cart)
    const [total, setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [iva, setIva] = useState(0)
    const [envio, setEnvio] = useState(0)
    const [descuento, setDescuento] = useState(0)
    const [totalFinal, setTotalFinal] = useState(0)

    useEffect(() => {
        setSubtotal(cart.cart.reduce((sum, { precio, cantidad }) => sum + precio * cantidad, 0))
        setIva(subtotal * 0.16)
        setEnvio(subtotal * 0.05)
        setDescuento(subtotal * 0.1)
        setTotal(subtotal + iva + envio - descuento)
        setTotalFinal(total)
    }, [cart.cart])

    return (
        <div className="flex flex-wrap max-w-screen-2xl w-full place-contentz-center">
            <table className="border-separate w-5/6">
                <thead>
                    <tr>
                        <th className="p-3 text-left">Producto</th>
                        <th className="p-3 text-left">Precio</th>
                        <th className="p-3 text-left">Cantidad</th>
                        <th className="p-3 text-left">Subtotal</th>
                        <th className="p-3 text-left">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cart.map((item, index) => {
                        return (<tr key={index}>
                            <td className="p-3">{item.nombre}</td>
                            <td className="p-3">{item.precio}</td>
                            <td className="p-3">{item.cantidad}</td>
                            <td className="p-3">{item.precio * item.cantidad}</td>
                            <td className="p-3"><button onClick={() => dispatch({ type: "REMOVE_ONE", payload: item })}><FontAwesomeIcon icon={faTrash} /></button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <div className="">
                <table className="border-separate w-full">
                    <thead>
                        <tr>
                            <th className="p-3 text-left">Subtotal</th>
                            <th className="p-3 text-left">IVA</th>
                            <th className="p-3 text-left">Envio</th>
                            <th className="p-3 text-left">Descuento</th>
                            <th className="p-3 text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3">{subtotal}</td>
                            <td className="p-3">{iva}</td>
                            <td className="p-3">{envio}</td>
                            <td className="p-3">{descuento}</td>
                            <td className="p-3">{total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

    
