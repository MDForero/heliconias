// imagenes para la galeria
import galeria1 from '../public/galeria/galeria1.jpg';
import galeria2 from '../public/galeria/galeria2.jpg';
import galeria3 from '../public/galeria/galeria3.jpg';
import galeria4 from '../public/galeria/galeria4.jpg';
import galeria5 from '../public/galeria/galeria5.jpg';
import galeria6 from '../public/galeria/galeria6.jpg';
import galeria7 from '../public/galeria/galeria7.jpg';
import galeria8 from '../public/galeria/galeria8.jpg';
import galeria9 from '../public/galeria/galeria9.jpg';
import galeria10 from '../public/galeria/galeria10.jpg';
import galeria11 from '../public/galeria/galeria11.jpg';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const contacto = {
    telefono: '+573124500289',
    email: 'atecionalcliente@lasheliconiasmonterey.com',
    
}

export const imgs = [
    {
        src: galeria1,
        alt: 'galeria1'
    },
    {
        src: galeria2,
        alt: 'galeria2'
    },
    {
        src: galeria3,
        alt: 'galeria3'
    },
    {
        src: galeria4,
        alt: 'galeria4'
    },
    {
        src: galeria5,
        alt: 'galeria5'
    },
    {
        src: galeria6,
        alt: 'galeria6'
    },
    {
        src: galeria7,
        alt: 'galeria7'
    },
    {
        src: galeria8,
        alt: 'galeria8'
    },
    {
        src: galeria9,
        alt: 'galeria9'
    },
    {
        src: galeria10,
        alt: 'galeria10'
    },
    {
        src: galeria11,
        alt: 'galeria11'
    },
]

export const colaboradores = [
    {
        nombre: "Eulalia salinas ",
        cargo: "Chef ejecutivo",
        descripcion: "Chef ejecutivo con mas de 40 años de experiencia, es el profesional en jefe dentro de la cocina, responsable de crear el menú y supervisar que los platos cumplan con altos estándares de calidad.diseña los menús de acuerdo con el concepto o tema del restaurante para brindar una experiencia valiosa a nuestros clientes.",
        redes: [
            {
                icon: faFacebook,
                href: "#"
            },
            {
                icon: faInstagram,
                href: '#'
            }
        ]
    },
    {
        nombre: "Armando Martínez",
        cargo: "Recepcionista",
        descripcion: "Recepcionista, organizar y gestionar el área de recepción, dar la acogida, asistir y atender el huésped desde su ingreso hasta su salida del establecimiento.",
        redes: [
            {
                icon: faFacebook,
                href: "#"
            },
            {
                icon: faInstagram,
                href: '#'
            }
        ]
    },
    {
        nombre: "Diego Martínez",
        cargo: "Gerente general",
        descripcion: "Gerente general y marketing responsable del funcionamiento general del hotel y de la calidad del servicio que se está ofreciendo a los huéspedes, esponsable de maximizar los ingresos de un hotel.El gerente lo logra mediante el desarrollo de programas para aumentar la ocupación y hacer un uso rentable de sus instalaciones de alojamiento",
        redes: [
            {
                icon: faFacebook,
                href: "#"
            },
            {
                icon: faInstagram,
                href: '#'
            }
        ]
    },
    {
        nombre: "Jair Vargas",
        cargo: "Mesero",
        descripcion: "una pieza clave en la atención al cliente, con empatía y capacidad de interactuar con nuestros clientes que se encarga de procesar pedidos y servirlos en la mesa, así como de atender a los clientes en la barra del restaurante.",
        redes: [
            {
                icon: faFacebook,
                href: "#"
            },
            {
                icon: faInstagram,
                href: '#'
            }
        ]
    },



    {
        nombre: "Marina Ibáñez ",
        cargo: "Camarera",
        descripcion: "camarera de pisos es la persona encargada de la limpieza y arreglo de las habitaciones, así como de las zonas nobles, pasillos, escaleras, otros departamentos y dependencias del hotel",
        redes: [
            {
                icon: faFacebook,
                href: "#"
            },
            {
                icon: faInstagram,
                href: '#'
            }
        ]
    },
    {
        nombre: "Antonio Díaz ",
        cargo: "Jardinero",
        descripcion: "Nuestro jardinero encargado de embellecer las zonas verdes y darle vida a nuestros cultivos",
        redes: [
            {
                icon: faFacebook,
                href: "#"
            },
            {
                icon: faInstagram,
                href: '#'
            }
        ]
    },

]

export const menu = [

    {
        category: "Carnes",
        items: [
            {
                descripcion: "Churrasco argentino (400g): corte mariposa, acompañado de papita a la francesa, ensalada de aguacate y chimichurri de la casa.",
                precio: 35000
            },
            {
                descripcion: "Carne oreada (400g): de carne oreada al humo, acompañada de yuca blanca, arepa arriera, ensalada de aguacate y ají molido.",
                precio: 26000
            },
            {
                descripcion: "Costillas de cerdo BBQ (400g): bañados en salsa BBQ, acompañado de papitas criollas, plátano maduro y ensalada.",
                precio: 28000
            }]
    },

    {
        category: "Pollo",
        items: [
            {
                descripcion: "Pechuga a la plancha (400g): acompañada de papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 25000
            },
            {
                descripcion: "Pechuga gratinada (400g): acompañada con queso gratinado, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 28000
            },
            {
                descripcion: "Pechuga salsa champiñones (400g): acompañada con champiñones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 28000
            },
            {
                descripcion: "Pechuga salsa camarones (400g): acompañada con camarones, papita a la francesa, patacón, arroz blanco y ensalada.",
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
                descripcion: "Cazuela de bagre en salsa (400g): acompañados con yuca en salsa, arroz blanco, patacón y ensalada.",
                precio: 35000
            },
            {
                descripcion: "Bagre frito (400g): acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 33000
            },
            {
                descripcion: "Cazuela de mojarra en salsa (600g): acompañados con yuca en salsa, arroz blanco, patacón y ensalada.",
                precio: 30000
            },
            {
                descripcion: "Mojarra frita (600g): acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 27000
            },
            {
                descripcion: "Trucha saludable (500g): acompañada de fresas, naranja, aguacate, limón, mandarina y espinacas.",
                precio: 30000
            },
            {
                descripcion: "Trucha a la plancha (500g): acompañados con papita a la francesa, arroz blanco, patacón y ensalada.",
                precio: 30000
            },
            {
                descripcion: "Trucha en salsa de champiñones (500g): acompañada con champiñones, papita a la francesa, patacón, arroz blanco y ensalada.",
                precio: 33000
            },
            {
                descripcion: "Trucha en salsa de camarones (500g): acompañada con camarones, papita a la francesa, patacón, arroz blanco y ensalada.",
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
                descripcion: "hamburguesa sencilla (120g): de carne Angus, acompañada de pan artesanal, cebolla caramelizada, jamón ahumado y queso.",
                precio: 14000
            },
            {
                descripcion: "hamburguesa en combo (120g): de carne Angus, acompañada de pan artesanal, cebolla caramelizada, jamón ahumado, queso, papita a la francesa gaseosa 350 ml",
                precio: 20000
            }]
    },
    {
        category: 'bebidas',
        items: [
            {
                descripcion: 'gaseosa 350 ml',
                precio: 3000
            },
            {
                descripcion: 'gaseosa litro ¼',
                precio: 7000
            },
            {
                descripcion: 'gaseosa 3 litros',
                precio: 9000
            },
            {
                descripcion: 'jugo hit 600 ml',
                precio: 3000
            },
            {
                descripcion: 'agua en botella con o sin gas 600ml',
                precio: 3000
            },
            {
                descripcion: 'vive 100',
                precio: 4000
            },
            {
                descripcion: 'soda bretaña',
                precio: 3000
            },
            {
                descripcion: 'jugo natural agua',
                precio: 4000
            },
            {
                descripcion: ' jugo natural leche',
                precio: 6000
            },
            {
                descripcion: 'Jarra limonada:',
                precio: 6000
            },
            {
                descripcion: 'Jarra naranjada o Mandarinada:',
                precio: 10000
            },
            {
                descripcion: 'Águila original, costeña bacana',
                precio: 3000
            },
            {
                descripcion: 'águila ligth',
                precio: 3500
            },
            {
                descripcion: 'Club Colombia',
                precio: 4000
            },
            {
                descripcion: 'Coronita',
                precio: 5000
            },
            {
                descripcion: 'Cerveza en lata águila original – costeña bacana',
                precio: 4000
            },
            {
                descripcion: 'Aguardiente antioqueño ½',
                precio: 45000
            },
        ]
    }, 
    {
        category: 'adicionales',
        items: [
            {
                descripcion: 'Porción de arroz:',
                precio: 3000
            },
            {
                descripcion: 'Porción patacón:',
                precio: 4000
            },
            {
                descripcion: 'Porción papa francesa:',
                precio: 4000
            },
            {
                descripcion: 'Porción papa criolla: ',
                precio: 4000
            },
            {
                descripcion: 'Porción plátano:',
                precio: 4000
            },
            {
                descripcion: 'Arepas arriera: ',
                precio: 3000
            },
            {
                descripcion: 'Porción aguacate: ',
                precio: 5000
            },
        ]
    }
]