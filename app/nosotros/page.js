import Image from "next/image";
import vision from "../../public/vision.jpg";
import mision from "../../public/mision.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelevision } from "@fortawesome/free-solid-svg-icons";
import Valores from "@/components/Valores";
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";


export default function page() {
    return (
        <div className="bg-white text-black max-w-screen-2xl text-justify ">
            <main className="relative flex min-h-screen flex-col items-center justify-between ">
                <Image src={fondo} alt="Contacto" width={0} height={0} className="h-[80vh] object-cover" />
                <div className="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-[80vh] bg-black bg-opacity-50">
          <Image src='/logo.png' width={300} height={300} />
          <p className="text-center font-bold text-3xl text-white"><Link href="/">Las Heliconias</Link> | Nosotros</p>
                </div>
            </main>
            <section className="">
                <article className="flex flex-wrap  justify-around content-center py-8 gap-4">
                    <div className="md:w-2/5 place-self-center w-4/5">
                        <h2 className="text-center font-semibold text-2xl py-8">Visión</h2>
                        <p>Consolidándose como una empresa en el sector turismo y una de las mejores de la región, buscando conectar con nuestros visitantes, así mismo generar un servicio con alto estándar de calidad, a gusto del visitante, en un ambiente campestre, natural ecológico y único que logre generar lazos a largo plazo con el cliente. Así mismo aportar al desarrollo de la región y a la activación económica.</p>
                    </div>
                    <Image src={mision} width={0} height={0} className="md:w-2/5 w-4/5 shadow-xl shadow-amber-800 rounded-2xl"/>
                </article>
                <article className="flex flex-wrap flex-row-reverse justify-around content-center py-8 gap-4">
                    <div className="md:w-2/5 place-self-center w-4/5">
                        <h2 className="text-center font-semibold text-2xl py-8">Misión</h2>
                        <p>Garantizar un servicio de alto estándar de calidad y confort, descanso y deleite gastronómico enfocados en la satisfacción total de todos nuestros visitantes, creando una experiencia inolvidable mientras disfrutas de nuestro ambiente natural y ecológico de nuestras instalaciones.</p>
                    </div>
                    <Image src={vision} width={0} height={0} className="md:w-2/5 w-4/5 shadow-xl shadow-amber-800 rounded-2xl"/>
                </article>
            </section>
            <Valores/>
        </div>
    )
}