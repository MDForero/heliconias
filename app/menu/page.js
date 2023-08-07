import Cardmenu from "@/components/Cardmenu";
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/Banner";
import { menu } from '../../data/data'
import { useCart } from "@/context/CartContext";

export const metadata = {
    title: "Menu",
    description: "Menu",
    keywords: ['Menú de carnes', 'Platos de pollo', 'Variedad de pescados', 'Sancocho de Gallina casero', 'Hamburguesas artesanales',]
}

export default function page() {
    return (
        <div>
            <Banner />
            <h1 className="text-4xl font-bold text-center pt-8 bg-gray-950/80 text-gray-100">Menú</h1>
            <section className="flex flex-row flex-wrap justify-evenly max-w-screen-2xl mx-auto">
                {menu.map((item, index) => {
                    const style = {
                        backgroundImage: `url(${item.img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: "fixed"
                    }
                    return item.category != 'bebidas' && item.category != 'adicionales' ?

                        <section key={index} className="border-separate z-50 relative flex md:flex-row  text-gray-100 md:flex-nowrap flex-wrap   justify-center items-center  gap-3 even:flex-row-reverse border-spacing-6  max-w-screen-2xl xl:px-24 min-h-screen mx-auto ">
                            <Image src={item.img} alt={'imagen de la categoria' + item.category} width={0} height={0} className="lg:w-[500px] lg:h-[500px] lg:block hidden rounded-full" />
                            <div className="lg:w-3/5">
                                <h1 className="text-3xl text-center pt-4 mb-4  first-letter:capitalize">{item.category}</h1>
                                <div className="flex flex-row flex-wrap w-full gap-2">
                                    {item.items.map((plate, index) => (<Cardmenu data={plate} key={index} id={item.category.slice(0, 3) + index} />))}
                                </div>
                            </div>
                            <div style={style} className="w-full h-full -z-10 m-0 absolute top-0 right-0">
                                <div className="w-full bg-gray-950/80 h-full">
                                </div>
                            </div>
                        </section>
                        : <div style={style} className="w-full">
                            <div className="w-full bg-gray-950/80 text-gray-100">
                                <section key={index} className=" border-separate border-spacing-6  h-fit max-w-6xl mx-auto  ">
                                    <h1 className="text-3xl text-center pt-4 mb-4 border-t-4 border-black first-letter:capitalize">{item.category}</h1>
                                    <div className="flex flex-row flex-wrap justify-center gap-3">


                                        {item.items.map((item, index) => (<div className="w-2/5 h-full "><Cardmenu data={item} key={index} center /></div>))}

                                    </div>
                                </section>
                            </div>
                        </div>
                })}
            </section>
        </div>
    )
}
