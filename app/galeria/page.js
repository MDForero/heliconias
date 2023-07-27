import Galeria from "@/components/Galeria";
import Image from "next/image";
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";
import Banner from "@/components/Banner";

export const metadata = {
    title: "Galería",
    description: "En esta seccion encontraras las mejores fotos de nuestro hotel",
};

export default function page() {
    return (
        <div>
            <Banner />
            <div className="py-8">
                <Galeria />
            </div>
        </div>
    )
}
