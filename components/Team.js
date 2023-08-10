import React from 'react'
import { colaboradores } from '../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const Team = () => {
    return (
        <div>

            <div className="p-4">
                <p className="text-3xl font-bold text-center text-gray-800">
                    Nuestro equipo
                </p>
                <p className="mb-32 text-xl font-normal text-center text-gray-500">
                    Conoce a las personas que hacen posible este proyecto
                </p>
                <div className="flex flex-col flex-wrap  items-center space-y-24 md:space-y-0 md:flex-row justify-center">
                {colaboradores.map((colaborador, index) => (<div  key={index}  className="relative p-4">
                        <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                            {colaborador.img &&
                                <div className="relative block">
                                    <Image alt="profile" src={colaborador.img} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white " />
                                </div>
                            }
                        </div>
                        <div className="px-8 py-4 pt-24 bg-white shadow-xl shadow-slate-700 rounded-lg  ">
                            <div className="text-center">
                                <p className="text-2xl text-gray-900 ">
                                    {colaborador.nombre}
                                </p>
                                <p className="text-xl font-light text-gray-700 ">
                                    {colaborador.cargo}
                                </p>
                                <p className="py-4 mx-auto font-light text-gray-600 text-md w-60 ">
                                    {colaborador.descripcion}
                                </p>
                            </div>
                            <div className="flex items-center justify-evenly w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                                {colaborador.redes.map((red, index)=>(<a key={index} href={red.href}>
                                   <FontAwesomeIcon icon={red.icon} className="text-4xl transition-colors duration-200 hover:text-gray-800 "/>
                                </a>))}
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>

        </div>
    )
}

export default Team