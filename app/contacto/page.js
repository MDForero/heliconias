import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import fondo from "../../public/fondos/contacto.JPG";
import Link from "next/link";
import Banner from "@/components/Banner";

const ubicacion = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15902.186630998573!2d-72.8911486!3d4.8476125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad325a9b128cb%3A0xcedbfb5b670d0e67!2sLas%20Heliconias%20Centro%20Agroturistico!5e0!3m2!1ses-419!2sco!4v1689447035116!5m2!1ses-419!2sco"

const contacto = [
  { icon: faWhatsapp, href: 'https://wa.me/+57', text: '+57' },
  { icon: faPhone, href: 'tel:+57', text: '+57' },
  { icon: faMapLocationDot, href: 'https://goo.gl/maps/7Z7Z7Z7Z7Z7Z7Z7Z7', text: 'Calle 7 # 7 - 7' },
  { icon: faMailBulk, href: 'mailto:', text: 'contacto@lasheliconiasmonterrey.com' }
]
export default function page() {
  return (
    <div className="bg-white max-w-screen-3xl dark:text-black">
      <Banner fondo={fondo} />

      <div className="max-w-screen-xl shadow mx-auto py-8">
        <section className=" h-[465px]  mx-auto ">
          <h2 className="text-center text-3xl font-semibold">Medios de contacto</h2>


          <div className="flex flex-wrap justify-center items-center gap-4 h-4/5">
            {contacto.map((item, index) => (<a key={index} href={item.href} className=" flex shadow flex-col justify-center h-24 items-center w-[200px] overflow-hidden">
              <FontAwesomeIcon icon={item.icon} className="text-3xl" />
              <p className="text-justify ">{item.text}</p>
            </a>))}
          </div>
        </section>
        <section>
          <h2 className="text-center text-3xl font-semibold py-8">Ubicación</h2>
          <iframe src={ubicacion} className="w-4/5 mx-auto shadow" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </div>
  )
}	