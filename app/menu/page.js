import Cardmenu from "@/components/Cardmenu";
import fondo from "../../public/defaultservices.jpg";
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
            <Banner fondo={'/fondos/menu.JPG'} />
            <section className="flex flex-row  flex-wrap md:justify-evenly justify-center items-center max-w-screen-2xl w-full mx-auto">
                {menu.map((item, index) => {
                    const style = {
                        backgroundImage: `url(${item.img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: "fixed"
                    }
                    return item.category != 'bebidas' && item.category != 'adicionales' ?

                        <section key={index} style={style} className="border-separate  text-gray-100 border-spacing-6  max-w-screen-2xl  mx-auto  ">
                            <div className="bg-gray-800/80 xl:px-24 md:py-32 flex md:flex-row  md:flex-nowrap flex-wrap   justify-center items-center  gap-3 even:flex-row-reverse ">
                                <Image loading='lazy' src={item.img} alt={'imagen de la categoria' + item.category} width={0} height={0} className="lg:w-[500px] lg:h-[500px] lg:block hidden rounded-full" />
                                <div className="lg:w-3/5 px-1">
                                    <h1 className="text-3xl text-center pt-4 mb-4  first-letter:capitalize">{item.category}</h1>
                                    <div className="flex flex-row mx-auto flex-wrap w-full gap-2">
                                        {item.items.map((plate, index) => (<Cardmenu data={plate} key={index} id={item.category.slice(0, 3) + index} />))}
                                    </div>
                                </div>
                                <div style={style} className="w-full h-full -z-10 m-0 absolute top-0 right-0">
                                    <div className="w-full bg-gray-950/70 h-full">
                                    </div>
                                </div>
                            </div>
                        </section>
                        : <div style={style} className="w-full">
                            <div className="w-full bg-gray-950/70 text-gray-100">
                                <section key={index} className=" border-separate border-spacing-6  h-fit max-w-6xl mx-auto py-12 ">
                                    <h1 className="text-3xl text-center pt-4 mb-4 border-t-4 border-black first-letter:capitalize">{item.category}</h1>
                                    <div className="flex flex-row flex-wrap justify-center gap-3">


                                        {item.items.map((plate, index) => (<div key={index} className="w-full mx-2 md:w-2/5 h-full "><Cardmenu data={plate} id={item.category.slice(0, 3) + index} center /></div>))}

                                    </div>
                                </section>
                            </div>
                        </div>
                })}
            </section>
        </div>
    )
}
