"use client"
import { faTelevision } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const valores = [
    {
        title: "Respeto",
        descripcion: " Hacia nuestros visitantes, la naturaleza y medio ambiente, para promover un ambiente en armonía.",
        icon: faTelevision
    },
    {
        title: "Compromiso",
        descripcion: "Brindar el mejor servicio y atención a nuestros visitantes, dar cumplimiento a nuestras normativas legal vigente.",
        icon: faTelevision
    },
    {
        title: "Honestidad",
        descripcion: "Actuamos con sinceridad, mostrando respeto e integridad con nuestros visitantes.",
        icon: faTelevision
    },
    {
        title: "Amabilidad",
        descripcion: "Siempre con una sonrisa al momento de recibir nuestros visitantes.",
        icon: faTelevision
    },
    {
        title: "Humildad",
        descripcion: "Recibimos sugerencias y opiniones que ayuden a mejorar nuestros servicios, reconocemos nuestras debilidades y nos comprometemos a aprender de ellas.",
        icon: faTelevision
    },
    {
        title: "Cooperación",
        descripcion: "Trabajamos en equipo, con disposición y pasión para lograr los objetivos de nuestra empresa.",
        icon: faTelevision
    }]

const Valores = () => {
    return (
        <section className='py-8'>
            <h2 className='text-center font-bold text-3xl '>Nuestros Valores</h2>
            <div className="flex flex-wrap my-12 shadow rounded-xl w-[95%] mx-auto">
                {valores.map((valor, index) => (
                    <article key={index} class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
                        <div class="flex flex-col gap-4 justify-center items-center mb-6">
                            <FontAwesomeIcon  className="w-6 h-6 text-black text-center" icon={valor.icon} />
                            <div class="ml-4 text-xl font-semibold">
                                {valor.title}
                            </div>
                        </div>
                        <p class="leading-loose text-gray-500 dark:text-black text-md">
                            {valor.descripcion}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Valores