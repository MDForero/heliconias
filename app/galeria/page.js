import Galeria from "@/components/Galeria";
import Image from "next/image";
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";

export default function page() {
    return (
        <div>
            <main className="relative flex min-h-screen flex-col items-center justify-between ">
                <Image src={fondo} alt="Contacto" width={0} height={0} className="h-[80vh] object-cover" />
                <div className="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-[80vh] bg-black bg-opacity-50">
          <Image src='/logo.png' width={300} height={300} />
          <p className="text-center font-bold text-3xl text-white"><Link href="/">Las Heliconias</Link> | Galeria</p>
                </div>
            </main>
            <Galeria/>
        </div>
    )
}
