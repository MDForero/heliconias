import Cardmenu from "@/components/Cardmenu";
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/Banner";
import { menu } from '../../data/data'


export const metadata = {
    title: "Menu",
    description: "Menu",
    keywords: ['Menú de carnes', 'Platos de pollo', 'Variedad de pescados', 'Sancocho de Gallina casero', 'Hamburguesas artesanales',]
}

export default function page() {
    return (
        <div>
            <Banner />
            <section className="flex flex-row flex-wrap justify-evenly max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center pt-8">Menú</h1>  
                {menu.map((item, index) => item.category != 'bebidas' && item.category != 'adicionales' ?
                    <table key={index} className="border-separate border-spacing-6  max-w-4xl mx-auto ">
                        <thead>
                            <tr className="">
                                <th colSpan={4} className="text-3xl border-t-4 border-black first-letter:capitalize">{item.category}</th>

                            </tr>
                            <tr className="text-2xl">
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.items.map((item, index) => (<Cardmenu data={item} key={index} />))}
                        </tbody>
                    </table> : <table key={index} className="border-separate border-spacing-6 md:w-[400px] h-fit max-w-6xl mx-auto w-3/4 ">
                        <thead>
                            <tr className="">
                                <th colSpan={4} className="text-3xl border-t-4 border-black first-letter:capitalize">{item.category}</th>

                            </tr>
                            <tr className="text-2xl">
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {item.items.map((item, index) => (<Cardmenu data={item} key={index} center />))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    )
}
