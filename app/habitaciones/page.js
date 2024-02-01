import Acomodaciones from "@/components/Acomodaciones";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import { acomodaciones } from "@/data/data"
import WhyUs from "@/components/WhyUs";

export const metadata = {
    title: "alojamientos",
    description: "Habitaciones en el Centro Agroecoturístico Las Heliconias",
    keywords: ['habitaciones', 'alojamiento', 'hotel', 'centro agroecoturístico', 'las heliconias']
}

const text = {
    title: 'Comodidad y confort en un solo lugar',
    data: [
        {
            title: 'Habitaciones',
            subtitle: '¡Descubre el Paraíso Natural!',
            text: 'Sumérgete en comodidad en Centro Agroecoturístico Las Heliconias. Nuestras habitaciones, diseñadas con calidez y estilo llanero, te brindan un refugio acogedor en medio de la naturaleza. Cada espacio está cuidadosamente decorado para ofrecerte una experiencia auténtico y relajante. Además, siéntete bien sabiendo que nuestras instalaciones se mantienen con prácticas medioambientalmente sostenibles.',
            img:'/servicios/alojamiento.jpg'
        },
        {
            title: 'Piscina',
            subtitle: 'Dejanos ser tu mejor experiencia',
            text: 'Suma diversión y frescura en Centro Agroecoturístico Las Heliconias. Nuestra piscina natural es un oasis de alegría en medio de la exuberancia llanera. Al nadar en sus aguas cristalinas, rodeadas de la belleza natural, te revitalizarás cuerpo y espíritu. Aprovecha este espacio para relajarte en un entorno sostenible y en armonía con la naturaleza que nos rodea.',
            img:'/servicios/piscina.jpg'
        },
        {
            title: 'Tranquilidad',
            subtitle: 'Una experiencia llanera',
            text: '            Escapa del ajetreo en Centro Agroecoturístico Las Heliconias.Aquí experimentarás serenidad en su máxima expresión.Conecta con la quietud de los llanos y encuentra tu paz interior mientras te hospedas en nuestras cómodas habitaciones y exploras los vastos terrenos naturales.Nos enorgullece ser medioambientalmente sostenibles, brindándote un descanso que también cuida el entorno.',
            img:'/fondos/contacto.JPG'
        },
    ]
}

export default function page() {
    return (
        <div className=" text-gray-200 text-justify pb-16">
            <Banner fondo={'/fondos/alojamiento.jpg'} imgPosition={'bottom'} />
            <section className="max-w-screen-xl flex flex-col gap-20 mx-auto my-14 text-lg">
                <WhyUs data={text.data} title={text.title} />
                {acomodaciones.map((item, index) => (<Acomodaciones acomodaciones={item} key={index} />))}
            </section>
        </div>
    )
}





