import Cardmenu from "@/components/Cardmenu";

const menu = [

    {
        category: "Carnes",
        items: [
            {
                descripcion: "Churrasco argentino: (400g) corte mariposa, acompañado de papita a la francesa, ensalada de aguacate y chimichurri de la casa.",
                precio: 35.000
            },
            {
                descripcion: "Carne oreada: (400g) de carne oreada al humo, acompañada de yuca blanca, arepa arriera, ensalada de aguacate y ají molido.",
                precio: 26.000
            },
            {
                descripcion: "Costillas de cerdo BBQ: (400g) bañados en salsa BBQ, acompañado de papitas criollas, plátano maduro y ensalada.",
                precio: 28.000
            }]
    },

    {
        category: "Pollo",
        items: [
            {
                descripcion: "Pechuga a la plancha: (400g) acompañada de papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 25.000
            },
            {
                descripcion: "Pechuga gratinada: (400g) acompañada con queso gratinado, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 28.000
            },
            {
                descripcion: "Pechuga salsa champiñones: (400g) acompañada con champiñones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 28.000
            },
            {
                descripcion: "Pechuga salsa camarones: (400g) acompañada con camarones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 35.000
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
                precio: 35.000
            },
            {
                descripcion: "Bagre frito: (400g) acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 33.000
            },
            {
                descripcion: "Cazuela de mojarra en salsa: (600g) acompañados con yuca en salsa, arroz blanco, patacón y ensalada.",
                precio: 30.000
            },
            {
                descripcion: "Mojarra frita: (600g) acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 27.000
            },
            {
                descripcion: "Trucha saludable(500g) acompañada de fresas, naranja, aguacate, limón, mandarina y espinacas.",
                precio: 30.000
            },
            {
                descripcion: "Trucha a la plancha: (500g) acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 30.000
            },
            {
                descripcion: "Trucha en salsa de champiñones: (500g) acompañada con champiñones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 33.000
            },
            {
                descripcion: "Trucha en salsa de camarones: (500g) acompañada con camarones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 35.000
            }]
    },
    {
        category: "Sancocho de Gallina ",
        items: [
            {
                descripcion: "Sancocho de Gallina campesina para 6 personas: 6 platos de sancocho, acompañados con una gallina campesina, arroz con menudencias, arepas boyacenses, aguacate, una jarra de limonada. (reservar un día antes).",
                precio: 170.000
            },
            {
                descripcion: "consomé de Gallina campesina para 6 personas: 6 platos de consomé, acompañados con una gallina campesina dorada, arroz con menudencias, guatila, ahuyama, mazorca y una jarra de limonada. (reservar un día antes).",
                precio: 170.000
            }]
    },
    {
        category: "hamburguesas ",
        items: [
            {
                descripcion: "hamburguesa sencilla: (120g) de carne Angus, acompañada de pan artesanal, cebolla caramelizada, jamón ahumado y queso.",
                precio: 14.000
            },
            {
                descripcion: "hamburguesa en combo: (120g) de carne Angus, acompañada de pan artesanal, cebolla caramelizada, jamón ahumado, queso, papita a la francesa gaseosa 350 ml",
                precio: 20.000
            }]
    },
]


export default function page() {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold py-8">Restaurante</h1>
            <table className="border-separate border-spacing-4  max-w-6xl mx-auto ">
                <tbody>
                    {menu.map((item, index) => (<><tr key={index} className="">
                        <th colSpan={4} className="text-3xl border-t-4 pt-4 rounded-xl">{item.category}</th>

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
