'use client'

import { useCart } from "@/context/CartContext"
import { contacto } from "@/data/data"

const Form = () => {
    const cart = useCart()
    const reservar = () => {
        const nombre = document.getElementById('name').value
        const telefono = document.getElementById('phone').value
        const mensaje = `${nombre} quiere reservar ${cart.cart.map((item) =>'%0A'+item.cantidad+'%20'+item.nombre)}. `
        const enviar = document.getElementById('enviar')
        enviar.setAttribute('href', `https://api.whatsapp.com/send?phone=${contacto.telefono}&text=${mensaje}`)
        enviar.click()
    }


    return (

        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden h-fit">
            <div className="px-4 py-8 sm:px-10">
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">
                            Reservar                </span>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="w-full space-y-6">
                        <div className="w-full">
                            <div className=" relative ">
                                <input type="text" id="name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nombre" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <input type="text" id="phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Teléfono" />
                            </div>
                        </div>
                        
                        <div>
                            <span className="block w-full rounded-md shadow-sm">
                                <button onClick={()=>reservar()} type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Search
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">
                    Gracias por elegirnos estamos ansiosos por atenderte
                </p>
            </div>
            <a id="enviar" href="/enviar" className="hidden" >enviar</a>
        </div>

    )
}

export default Form