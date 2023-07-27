"use client"
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faHandHoldingHeart, faPeopleCarryBox, faScaleBalanced, faTelevision } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const valores = [
    {
        title: "Compromiso",
        descripcion: "Brindar el mejor servicio y atención a nuestros visitantes, dar cumplimiento a nuestras normativas legal vigente.",
        icon: faHandshake
    },
    {
        title: "Honestidad",
        descripcion: "Actuamos con sinceridad, mostrando respeto e integridad con nuestros visitantes.",
        icon: faScaleBalanced
    },
    {
        title: "Respeto",
        descripcion: " Hacia nuestros visitantes, la naturaleza y medio ambiente, para promover un ambiente en armonía.",
        icon: faHandHoldingHeart
    },
    {
        title: "Amabilidad",
        descripcion: "Siempre con una sonrisa al momento de recibir nuestros visitantes.",
        icon: faHandHoldingHeart
    },
    {
        title: "Cooperación",
        descripcion: "Trabajamos en equipo, con disposición y pasión para lograr los objetivos de nuestra empresa.",
        icon: faPeopleCarryBox
    },
    {
        title: "Humildad",
        descripcion: "Recibimos sugerencias y opiniones que ayuden a mejorar nuestros servicios, reconocemos nuestras debilidades y nos comprometemos a aprender de ellas.",
        icon: faHandshake
    },
]

const Valores = () => {
    return (
        <section className='py-2 text-justify'>
            <h2 className='text-center font-bold text-3xl '>Nuestros Valores</h2>
            <div className="flex flex-wrap my-12 gap-6  rounded-xl w-[95%] mx-auto justify-center">
                {valores.map((valor, index) => (
                    <article key={index} class="w-full p-8 border-b md:w-1/4 md:border-r shadow-xl ring-1 lg:w-1/4">
                        <div class="flex flex-col gap-4 justify-center items-center mb-6">
                            <FontAwesomeIcon  className="w-14 h-14 text-black text-center" icon={valor.icon} />
                            <div class="ml-4 text-xl font-semibold text-gray-800">
                                {valor.title}
                            </div>
                        </div>
                        <p class="leading-loose text-gray-600 ">
                            {valor.descripcion}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Valores