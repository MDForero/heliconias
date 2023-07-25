import Galeria from "@/components/Galeria";
import Image from "next/image";
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";
import Banner from "@/components/Banner";

export default function page() {
    return (
        <div>
            <Banner/>
            <Galeria/>
        </div>
    )
}
