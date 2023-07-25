import Cardmenu from "@/components/Cardmenu";
import fondo from "../../public/hermosa-foto-lago-skadar-montenegro.jpg";
import Link from "next/link";
import Image from "next/image";


const menu = [

    {
        category: "Carnes",
        items: [
            {
                descripcion: "Churrasco argentino: (400g) corte mariposa, acompañado de papita a la francesa, ensalada de aguacate y chimichurri de la casa.",
                precio: 35000
            },
            {
                descripcion: "Carne oreada: (400g) de carne oreada al humo, acompañada de yuca blanca, arepa arriera, ensalada de aguacate y ají molido.",
                precio: 26000
            },
            {
                descripcion: "Costillas de cerdo BBQ: (400g) bañados en salsa BBQ, acompañado de papitas criollas, plátano maduro y ensalada.",
                precio: 28000
            }]
    },

    {
        category: "Pollo",
        items: [
            {
                descripcion: "Pechuga a la plancha: (400g) acompañada de papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 25000
            },
            {
                descripcion: "Pechuga gratinada: (400g) acompañada con queso gratinado, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 28000
            },
            {
                descripcion: "Pechuga salsa champiñones: (400g) acompañada con champiñones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 28000
            },
            {
                descripcion: "Pechuga salsa camarones: (400g) acompañada con camarones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 35000
            },
        ]
    },
    {
        category: "Pescados",
        items: [
            {
                descripcion: "Cazuela de mariscos: acompañada de patacón, arroz blanco, aguacate y limón              ",
                precio: 45000.
            },
            {
                descripcion: "Cazuela de bagre en salsa: (400g) acompañados con yuca en salsa, arroz blanco, patacón y ensalada.",
                precio: 35000
            },
            {
                descripcion: "Bagre frito: (400g) acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 33000
            },
            {
                descripcion: "Cazuela de mojarra en salsa: (600g) acompañados con yuca en salsa, arroz blanco, patacón y ensalada.",
                precio: 30000
            },
            {
                descripcion: "Mojarra frita: (600g) acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 27000
            },
            {
                descripcion: "Trucha saludable(500g) acompañada de fresas, naranja, aguacate, limón, mandarina y espinacas.",
                precio: 30000
            },
            {
                descripcion: "Trucha a la plancha: (500g) acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 30000
            },
            {
                descripcion: "Trucha en salsa de champiñones: (500g) acompañada con champiñones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 33000
            },
            {
                descripcion: "Trucha en salsa de camarones: (500g) acompañada con camarones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 35000
            }]
    },
    {
        category: "Sancocho de Gallina ",
        items: [
            {
                descripcion: "Sancocho de Gallina campesina para 6 personas: 6 platos de sancocho, acompañados con una gallina campesina, arroz con menudencias, arepas boyacenses, aguacate, una jarra de limonada. (reservar un día antes).",
                precio: 170000
            },
            {
                descripcion: "consomé de Gallina campesina para 6 personas: 6 platos de consomé, acompañados con una gallina campesina dorada, arroz con menudencias, guatila, ahuyama, mazorca y una jarra de limonada. (reservar un día antes).",
                precio: 170000
            }]
    },
    {
        category: "hamburguesas ",
        items: [
            {
                descripcion: "hamburguesa sencilla: (120g) de carne Angus, acompañada de pan artesanal, cebolla caramelizada, jamón ahumado y queso.",
                precio: 14000
            },
            {
                descripcion: "hamburguesa en combo: (120g) de carne Angus, acompañada de pan artesanal, cebolla caramelizada, jamón ahumado, queso, papita a la francesa gaseosa 350 ml",
                precio: 20000
            }]
    },
]


export default function page() {
    return (
        <div>
            <main className="relative flex min-h-screen flex-col items-center justify-between ">
                <Image src={fondo} alt="Contacto" width={0} height={0} className="h-[80vh] object-cover" />
                <div className="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-[80vh] bg-black bg-opacity-50">
          <Image src='/logo.png' width={300} height={300} />
          <p className="text-center font-bold text-3xl text-white"><Link href="/">Las Heliconias</Link> | Menú</p>
                </div>
            </main>
            <table className="border-separate border-spacing-6  max-w-6xl mx-auto ">
                <tbody>
                    {menu.map((item, index) => (<><tr key={index} className="">
                        <th colSpan={4} className="text-3xl border-t-4 border-black ">{item.category}</th>

                    </tr>
                        <tr className="text-2xl">
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Valor</th>
                        </tr>
                        {item.items.map((item) => (<Cardmenu data={item} />))}</>))}
                </tbody>
            </table>
        </div>
    )
}
