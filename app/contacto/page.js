import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import fondo from "../../public/fondos/contacto.jpg";
import Link from "next/link";
import Banner from "@/components/Banner";
import CardContact from "@/components/CardContact";
import { contacto } from "@/data/data";

const ubicacion = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15902.186630998573!2d-72.8911486!3d4.8476125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad325a9b128cb%3A0xcedbfb5b670d0e67!2sLas%20Heliconias%20Centro%20Agroturistico!5e0!3m2!1ses-419!2sco!4v1689447035116!5m2!1ses-419!2sco"

export const metadata = {
  title: "Contacto",
  description: "En esta seccion encontraras los medios de contacto de nuestro hotel",
};

const contactCard = [
  { icon: faWhatsapp, href: 'https://wa.me/+57' + contacto.telefono.
  slice(3), text: contacto.telefono.slice(3) },
  { icon: faPhone, href: 'tel:+57'+'3124500289'  , text:'3124500289'  },
  { icon: faMapLocationDot, href: 'https://goo.gl/maps/WLU7yY3crtaeDz9v5', text: 'Bugambiles' },
  { icon: faMailBulk, href: 'mailto:'+ contacto.email , text: 'atencionalcliente@lasheliconiasmonterrey.com' }
]
export default function page() {
  return (
    <div className="bg-gray-900 max-w-screen-3xl text-gray-200">
      <Banner fondo={fondo} />

      <div className="max-w-screen-xl flex flex-col items-center gap-36  w-full shadow mx-auto py-8">
        <section className="mx-auto">
          <h2 className="text-center text-3xl font-semibold mb-8">Medios de contacto</h2>


          <div className="cards flex flex-wrap justify-center items-center gap-4">
            {contactCard.map((item, index)=><CardContact data={item} key={index}/>)}
          </div>
        </section>
        <section className="w-full">
          <h2 className="text-center text-3xl font-semibold pb-8">Ubicación</h2>
          <iframe src={ubicacion} className="w-4/5 mx-auto shadow" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </div>
  )
}	