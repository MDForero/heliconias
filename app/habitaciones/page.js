import Acomodaciones from "@/components/Acomodaciones";
import vista1 from "../../public/habitaciones/IMG_1157.jpg";
import vista2 from "../../public/habitaciones/IMG_1158.jpg";
import vista3 from "../../public/habitaciones/IMG_1161.jpg";
import vista4 from "../../public/habitaciones/IMG_1170.jpg";
import vista5 from "../../public/habitaciones/IMG_1172.jpg";
import heliconia from "../../public/mision.jpg"
import Image from "next/image";
import fondo from "../../public/fondos/alojamiento.jpg";
import Link from "next/link";
import Banner from "@/components/Banner";


const acomodaciones = [
    {
        descripcion: {
            title: "Habitación doble",
            descripcion: "Habitación con cama doble, baño privado, televisión, ventilador, closet, mesa de noche, mesa de trabajo, silla, wifi, vista al jardín."
        },
        acomodacion: [{
            img: vista1,
            alt: "vista1",
            title: "Vista 1"
        },
        {
            img: vista2,
            alt: "vista2",
            title: "Vista 2"
        },
        {
            img: vista3,
            alt: "vista3",
            title: "Vista 3"
        },
        {
            img: vista4,
            alt: "vista4",
            title: "Vista 4"
        },
        {
            img: vista5,
            alt: "vista5",
            title: "Vista 5"
        }]
    },
    {
        descripcion: {
            title: "Habitación triple",
            descripcion: "Habitación con cama doble, cama sencilla, baño privado, televisión, ventilador, closet, mesa de noche, mesa de trabajo, silla, wifi, vista al jardín."
        },
        acomodacion: [{
            img: vista1,
            alt: "vista1",
            title: "Vista 1"
        },
        {
            img: vista2,
            alt: "vista2",
            title: "Vista 2"
        },
        {
            img: vista3,
            alt: "vista3",
            title: "Vista 3"
        },
        {
            img: vista4,
            alt: "vista4",
            title: "Vista 4"
        },
        {
            img: vista5,
            alt: "vista5",
            title: "Vista 5"
        }]
    },
]

export const metadata = {
    title: "alojamientos",
    description: "Habitaciones en el Centro Agroecoturístico Las Heliconias",
    keywords: ['habitaciones', 'alojamiento', 'hotel', 'centro agroecoturístico', 'las heliconias']
}

export default function page() {
    return (
        <div className="bg-white text-black text-justify pb-16">
            <Banner fondo={fondo} />
            <section className="max-w-screen-xl mx-auto md:px-0 px-4 text-lg">
                <h1 className="text-center py-8 text-3xl text-bold">Habitaciones</h1>
                <div className="mx-4 rounded-xl w-3/5 sm:w-2/5 float-right overflow-hidden">
                    <Image src={heliconia} alt="Heliconia" width={0} height={0} className="object-contain" />
                </div>

                <p className="">¡Bienvenido a un remanso de paz y conexión con la naturaleza en nuestro Centro Agroecoturístico Las Heliconias! Descubre una experiencia inolvidable en nuestra encantadora Habitación Doble, donde la biodiversidad y la sostenibilidad se entrelazan para brindarte momentos mágicos.</p>
                <p>Sumérgete en un entorno rodeado de exuberantes heliconias, flores multicolores y el aroma fresco del campo. Nuestra Habitación Doble te brindará la calidez de un hogar y la emoción de una aventura eco-consciente.</p>
                <p>Despierta cada mañana con el canto melodioso de aves autóctonas y la suave brisa acariciando tu piel. Desde la comodidad de tu habitación, serás testigo de vistas panorámicas que te dejarán sin aliento, mientras te empapas de la tranquilidad y serenidad del paisaje.</p>
                <p>El Centro Agroecoturístico Las Heliconias te invita a descubrir la magia del campo y a participar en actividades sostenibles que te conectarán con la naturaleza en su forma más pura. Explora nuestros cultivos orgánicos, aprende sobre técnicas de agricultura responsable y degusta delicias frescas de la tierra en nuestros alimentos preparados con amor.</p>
                <div className="mx-4 rounded-xl w-3/5 sm:w-2/5 float-left overflow-hidden block ">
                    <Image src={heliconia} alt="Heliconia" width={0} height={0} className="object-contain" />
                </div>
                <p>En nuestra Habitación Doble, sentirás el confort de un espacio diseñado para brindarte el máximo bienestar sin comprometer el respeto por el medio ambiente. Cada detalle ha sido cuidadosamente seleccionado para que te sumerjas en una experiencia agroecoturística auténtica y enriquecedora.</p>
                <p>Déjate cautivar por el encanto y la hospitalidad de nuestro personal, quienes te acompañarán en esta travesía inolvidable y te brindarán una experiencia llena de aprendizaje y conexión con la tierra.</p>
                <p>¡Reserva ahora y vive una experiencia única en nuestra Habitación Doble en Centro Agroecoturístico Las Heliconias! Un lugar donde la naturaleza y la sostenibilidad te esperan con los brazos abiertos para brindarte momentos de magia y conexión con la esencia de la vida. ¡Te esperamos con ilusión y entusiasmo para compartir esta experiencia contigo!</p>
            </section>
            <section className="max-w-screen-xl mx-auto my-14 text-lg">
                {acomodaciones.map((item, index) => (<Acomodaciones acomodaciones={item} key={index} />))}
            </section>
        </div>
    )
}