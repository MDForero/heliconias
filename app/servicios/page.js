import CardServicios from "@/components/CardServicios"
import Image from "next/image"
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";
import Banner from "@/components/Banner";
import {servicios} from "@/data/data"


export const metadata = {
    title: "Servicios",
    description: "",
    keywords: ['Piscina natural','Compromiso medioambiental','Libre de cloro y químicos','Alojamiento rural','Habitaciones cómodas','Tarifas competitivas','Restaurante campestre','Menú delicioso y variado','Wifi gratis','Estacionamiento gratuito','Cancha de tejo','Camping bajo las estrellas','Sendero ecológico','Productos naturales y orgánicos','Eventos especiales','Rutas en bicicleta','Cabalgatas en la naturaleza',]
}
export default function page() {
    return (
        <div className="bg-gray-900">
            <Banner fondo={'/fondos/contacto.JPG'} />
            {servicios.map((item, index) => (<CardServicios  data={item} key={index} even={index}/>))}
        </div>
    )
}
