import Galeria from "@/components/Galeria";
import Image from "next/image";
import fondo from "../../public/defaultservices.jpg";
import Link from "next/link";
import Banner from "@/components/Banner";

export const metadata = {
    title: "Galería",
    description: "En esta seccion encontraras las mejores fotos de nuestro hotel",
};

export default function page() {
    return (
        <div>
            <Banner fondo={'/galeria/galeria9.JPG'} />
            <div className="py-8">
                <Galeria  />
            </div>
        </div>
    )
}
