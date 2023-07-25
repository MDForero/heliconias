import CardServicios from "@/components/CardServicios"
import Image from "next/image"
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";
import Banner from "@/components/Banner";


const servicios = [
    {
        title: "Piscina natural:",
        descripcion: "Comprometidos con el medio ambiente te ofrecemos un espacio libre de cloro y químico para disfrutar de un chapuzón y un día soleado(9 am a 8 pm",
    },
    {
        title: "Alojamiento rural:",
        descripcion: " contamos con amplias y cómodas habitaciones estándar doble, triple, tenemos las mejores tarifas el mercado.",
    },
    {
        title: "Restaurante campestre:",
        descripcion: "Nuestro restaurante campestre está rodeado con un hermoso y tranquilo paisaje al aire libre, donde encontrarás un delicioso y variado menú para que disfrutes de un momento agradable junto a tu familia o amigos.Desayuno(7am a 10 am) almuerzo(12 am a 3pm) cena(6 pm a 8pm)",
    },
    {
        title: "Wifi gratis:",
        descripcion: "Contamos con wifi para que siempre estés conectado mientras disfrutas de grandes momentos junto a tu familia o amigos.",
    },
    {
        title: "Estacionamiento gratis:",
        descripcion: "Contamos con estacionamiento privado y gratuito ",
    },
    {
        title: "Cancha de tejo:",
        descripcion: "Contamos con cancha de Mini Tejo y poli tejo, para empresas grupo de amigos y familia. (10 am a 6pm)",
    },
    {
        title: "Camping:",
        descripcion: "¡Acampa en familia bajo la luz de las estrellas, acompañados de una fogata!  Llegada 3pm salida 12 am",
    },
    {
        title: "Sendero ecológico:",
        descripcion: "Caminar en medio de la naturaleza, disponemos de un sendero interpretativo, que te invita a disfrutar de todas las bondades de la naturaleza y la vegetación en un ambiente de tranquilidad al aire puro. ",
    },
    {
        title: "Tienda campesina:",
        descripcion: "Productos Naturales, Orgánicos y Artesanales cultivados en nuestro campo ",
    },
    {
        title: "Eventos:",
        descripcion: "Cumpleaños, bautismos, fiestas de quince, cenas navideñas, matrimonios, celebra con nosotros tus fechas especiales.",
    },
    {
        title: "Ruta recreativa y alta montaña en bici:",
        descripcion: "Contamos con dos rutas marcadas en la aplicación strava, ruta recreativa que cuenta con 18 km con terrenos llanos y repechos donde disfrutaras de hermosos paisajes y fuentes hídricas.Ruta de alta montaña 64 km donde disfrutaras de 10 km de alta montaña donde veras paisajes y miradores exóticos de la región.",
    },
    {
        title: "Cabalgatas:",
        descripcion: "Convivir con la naturaleza mientras montas un caballo, una experiencia única con los mejores caballos de la región, disfruta de esta actividad a pocos kilómetros de nuestra ubicación.",
    }
]
export default function page() {
    return (
        <div>
            <Banner/>
            {servicios.map((item, index) => (<CardServicios data={item} key={index} />))}
        </div>
    )
}
