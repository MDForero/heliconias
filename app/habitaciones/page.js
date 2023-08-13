import Acomodaciones from "@/components/Acomodaciones";

import heliconia from "../../public/mision.jpg"
import Image from "next/image";
import fondo from "../../public/fondos/alojamiento.jpg";
import Link from "next/link";
import Banner from "@/components/Banner";
import {acomodaciones} from "@/data/data"
import WhyUs from "@/components/WhyUs";

export const metadata = {
    title: "alojamientos",
    description: "Habitaciones en el Centro Agroecoturístico Las Heliconias",
    keywords: ['habitaciones', 'alojamiento', 'hotel', 'centro agroecoturístico', 'las heliconias']
}

const text = {
    title: 'Las Heliconias tu hogar  en el campo',
    data: [
      {
        title: 'Las Heliconias',
        subtitle: '¡Descubre el Paraíso Natural!',
        text: 'A tan solo 5 km de Monterrey, Casanare, siguiendo la carretera que te lleva a Yopal, te espera un lugar encantador rodeado de naturaleza, un ambiente realmente magnífico y perfecto para toda la familia. En este rincón especial, te brindamos servicios de alojamiento rural que incluyen habitaciones amplias y muy cómodas. Además, podrás disfrutar de una piscina natural para darte un chapuzón en esos soleados días, y contamos con un restaurante campestre que ofrece un menú gourmet exquisito, pensado para satisfacer todos tus gustos culinarios. ¡Estamos ansiosos por recibirte y hacer que tu estadía sea inolvidable!',
      },
      {
        title: 'Misión',
        subtitle: 'Dejanos ser tu mejor experiencia',
        text: 'Garantizar un servicio de alto estándar de calidad y confort, descanso y delite gastronómico enfocados en la satisfacción total de todos nuestros visitantes, creando una experiencia inolvidable mientras disfrutas de nuestro ambiente natural y ecológico de nuestras instalaciones.',
      },
      {
        title: 'Porque elegirnos?',
        subtitle: 'Una experiencia llanera',
        text: 'Descubre el auténtica llano en las Heliconias. Naturaleza que inspira libertad, jardines multicolores que bailan con el viento, aves que pintan el cielo, y senderos que despiertan tu espíritu aventurero. Sumérgete en la cultura, sabores y tradiciones. Siente la calidez de los habitantes, conoce la vida en los llanos y déjate llevar por la magia de lo llanero.',
      },
    ]
  }

export default function page() {
    return (
        <div className=" text-gray-200 text-justify pb-16">
            <Banner fondo={fondo} imgPosition={'bottom'} />
            <WhyUs/>
            <section className="max-w-screen-xl mx-auto my-14 text-lg">
                {acomodaciones.map((item, index) => (<Acomodaciones acomodaciones={item} key={index} />))}
            </section>
        </div>
    )
}