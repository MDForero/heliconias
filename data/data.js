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
    telefono: '+573125663828',
    email: 'atecionalcliente@lasheliconiasmonterey.com',
    ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.8166719464975!2d-72.89120752208973!3d4.845309853485506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad325a9b128cb%3A0xcedbfb5b670d0e67!2sLas%20Heliconias%20Centro%20Agroturistico!5e0!3m2!1ses-419!2sco!4v1691507045878!5m2!1ses-419!2sco',
    facebook: 'https://www.facebook.com/lasheliconiascentroagroturistico',
    instagram: 'https://www.instagram.com/lasheliconiascentroagroturistico/',
    tiktok: 'https://www.tiktok.com/@heliconiasmon?lang=es',
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
        img: '/menu/carneoreada.png',
        items: [
            {
                descripcion: "Churrasco argentino (400g): corte mariposa, acompañado de papa a la francesa, ensalada de aguacate y chimichurri de la casa.",
                precio: 35000,
                img:'/menu/churrasco-argentino.png'

            },
            {
                descripcion: "Carne oreada (400g): de carne oreada al humo, acompañada de yuca blanca, arepa arriera, ensalada de aguacate y ají molido.",
                precio: 26000,
                img:'/menu/carneoreada.png'
            },
            {
                descripcion: "Costillas de cerdo BBQ (400g): bañados en salsa BBQ, acompañado de papa criollas, plátano maduro y ensalada.",
                precio: 28000,
                img:'/menu/Costillas-de-cerdo-bbq.png'
            }]
    },

    {
        category: "Pollo",
        img: '/menu/pechuga-en-salsa-champinones.png',
        items: [
            {
                descripcion: "Pechuga a la plancha (400g): acompañada de papa a la francesa, patacón, arroz blanco y ensalada.",
                precio: 25000,
                img:'/menu/pechuga-a-la-plancha.png'
            },
            {
                descripcion: "Pechuga gratinada (400g): acompañada con queso gratinado, papa a la francesa, patacón, arroz blanco y ensalada.",
                precio: 28000,
                img:'/menu/pechuga-gratinada.png'
            },
            {
                descripcion: "Pechuga salsa champiñones (400g): acompañada con champiñones, papa a la francesa, patacón, arroz blanco y ensalada.",
                precio: 28000,
                img:'/menu/pechuga-en-salsa-champinones.png'
            },
            {
                descripcion: "Pechuga salsa camarones (400g): acompañada con camarones, papa a la francesa, patacón, arroz blanco y ensalada.",
                precio: 35000,
                img:'/defaultmenu.JPG'
            },
        ]
    },
    {
        category: "Pescados",
        img: '/menu/bagre-frito.png',
        items: [
            {
                descripcion: "Cazuela de mariscos: acompañada de patacón, arroz blanco, aguacate y limón              ",
                precio: 45000.,
                img:'/menu/cazuela-de-mariscos.png'
            },
            {
                descripcion: "Cazuela de bagre en salsa (400g): acompañados con yuca en salsa, arroz blanco, patacón y ensalada.",
                precio: 35000,
                img:'/menu/Cazuela-bagre-en-salsa.png'
            },
            {
                descripcion: "Bagre frito (400g): acompañados con papa a la francesa, arroz blanco, patacón y ensalada.",
                precio: 33000,
                img:'/menu/bagre-frito.png'
                
            },
            {
                descripcion: "Cazuela de mojarra en salsa (600g): acompañados con yuca en salsa, arroz blanco, patacón y ensalada.",
                precio: 30000,
                img:'/defaultmenu.JPG'
            },
            {
                descripcion: "Mojarra frita (600g): acompañados con papa a la francesa, arroz blanco, patacón y ensalada.",
                precio: 27000,
                img:'/menu/mojarra-frita.png'
            },
            {
                descripcion: "Trucha saludable (500g): acompañada de fresas, naranja, aguacate, limón, mandarina y espinacas.",
                precio: 30000,
                img:'/menu/trucha-saludable.png'
            },
            {
                descripcion: "Trucha a la plancha (500g): acompañados con papa a la francesa, arroz blanco, patacón y ensalada.",
                precio: 30000,
                img:'/defaultmenu.JPG'
            },
            {
                descripcion: "Trucha en salsa de champiñones (500g): acompañada con champiñones, papa a la francesa, patacón, arroz blanco y ensalada.",
                precio: 33000,
                img:'/defaultmenu.JPG'
            },
            {
                descripcion: "Trucha en salsa de camarones (500g): acompañada con camarones, papa a la francesa, patacón, arroz blanco y ensalada.",
                precio: 35000,
                img:'/menu/Trucha-salsa-camarones.png'
            }]
    },
    {
        category: "Sancocho de Gallina ",
        img: '/defaultmenu.JPG',
        items: [
            {
                descripcion: "Sancocho de Gallina campesina para 6 personas: 6 platos de sancocho, acompañados con una gallina campesina, arroz con menudencias, arepas boyacenses, aguacate, una jarra de limonada. (reservar un día antes).",
                precio: 170000,
                img:'/menu/Sancocho-gallina.png'
            },
            {
                descripcion: "consomé de Gallina campesina para 6 personas: 6 platos de consomé, acompañados con una gallina campesina dorada, arroz con menudencias, guatila, ahuyama, mazorca y una jarra de limonada. (reservar un día antes).",
                precio: 170000,
                img:'/menu/Sancocho-gallina.png'
            }]
    },
    {
        category: "hamburguesas ",
        img: '/menu/Hamburguesa.png',
        items: [
            {
                descripcion: "hamburguesa sencilla (120g): de carne Angus, acompañada de pan artesanal, cebolla caramelizada, jamón ahumado y queso.",
                precio: 14000,
                img:'/menu/Hamburguesa.png'
            },
            {
                descripcion: "hamburguesa en combo (120g): de carne Angus, acompañada de pan artesanal, cebolla caramelizada, jamón ahumado, queso, papa a la francesa gaseosa 350 ml",
                precio: 20000,
                img:'/menu/Hamburguesa.png'
            }]
    },
    {
        category: 'bebidas',
        img: '/defaultmenu.JPG',
        items: [
            {
                descripcion: 'gaseosa 350 ml',
                precio: 3000,
                img:""
            },
            {
                descripcion: 'gaseosa litro ¼',
                precio: 7000,
                img:""
            },
            {
                descripcion: 'gaseosa 3 litros',
                precio: 9000,
                img:""
            },
            {
                descripcion: 'jugo hit 600 ml',
                precio: 3000,
                img:""
            },
            {
                descripcion: 'agua en botella con o sin gas 600ml',
                precio: 3000,
                img:""
            },
            {
                descripcion: 'vive 100',
                precio: 4000,
                img:""
            },
            {
                descripcion: 'soda bretaña',
                precio: 3000,
                img:""
            },
            {
                descripcion: 'jugo natural agua',
                precio: 4000,
                img:""
            },
            {
                descripcion: ' jugo natural leche',
                precio: 6000,
                img:""
            },
            {
                descripcion: 'Jarra limonada:',
                precio: 6000,
                img:""
            },
            {
                descripcion: 'Jarra naranjada o Mandarinada:',
                precio: 10000,
                img:""
            },
            {
                descripcion: 'Águila original, costeña bacana',
                precio: 3000,
                img:""
            },
            {
                descripcion: 'águila ligth',
                precio: 3500,
                img:""
            },
            {
                descripcion: 'Club Colombia',
                precio: 4000,
                img:""
            },
            {
                descripcion: 'Coronita',
                precio: 5000,
                img:""
            },
            {
                descripcion: 'Cerveza en lata águila original – costeña bacana',
                precio: 4000,
                img:""
            },
            {
                descripcion: 'Aguardiente antioqueño ½',
                precio: 45000,
                img:""
            },
        ]
    },
    {
        category: 'adicionales',
        img: '/defaultmenu.JPG',
        items: [
            {
                descripcion: 'Porción de arroz:',
                precio: 3000,
                img:""
            },
            {
                descripcion: 'Porción patacón:',
                precio: 4000,
                img:""
            },
            {
                descripcion: 'Porción papa francesa:',
                precio: 4000,
                img:""
            },
            {
                descripcion: 'Porción papa criolla: ',
                precio: 4000,
                img:""
            },
            {
                descripcion: 'Porción plátano:',
                precio: 4000,
                img:""
            },
            {
                descripcion: 'Arepas arriera: ',
                precio: 3000,
                img:""
            },
            {
                descripcion: 'Porción aguacate: ',
                precio: 5000,
                img:""
            },
        ]
    }
]


export const acomodaciones = [
    {

        title: "Habitación doble",
        descripcion: "Habitación con cama doble, baño privado, televisión, ventilador, closet, mesa de noche, mesa de trabajo, silla, wifi, vista al jardín.",
        acomodacion: [{
            img: '/habitaciones/doble1.JPG',
            alt: "Habitación doble vista general",
            
        },
        {
            img: '/habitaciones/doble2.JPG',
            alt: "vista2",
            
        },
        {
            img: '/habitaciones/banos.JPG',
            alt: "vista4",
            
        },
        {
            img: '/fondos/fondoinicio.JPG',
            alt: "vista3",
            
        },
        {
            img: '/fondos/contacto.JPG',
            alt: "vista5",
            
        }]
    },
    {
        title: "Habitación triple",
        descripcion: "Habitación con cama doble, cama sencilla, baño privado, televisión, ventilador, closet, mesa de noche, mesa de trabajo, silla, wifi, vista al jardín.",
        acomodacion: [{
            img: '/habitaciones/multifamiliar1.JPG',
            alt: "vista1",
            
        },
        {
            img: '/habitaciones/multifamiliar2.JPG',
            alt: "vista2",
            
        },
        {
            img: '/habitaciones/banos.JPG',
            alt: "vista4",
            
        },
        {
            img: '/fondos/fondoinicio.JPG',
            alt: "vista3",
            
        },
        {
            img: '/fondos/contacto.JPG',
            alt: "vista5",
            
        }]
    },
]

export const servicios = [
    {
        title: "Piscina natural:",
        descripcion: "comprometidos con el medio ambiente te ofrecemos un espacio libre de cloro y químico para disfrutar de un chapuzón y un día soleado (9 am a 8 pm ( miércoles y jueves no contamos con servicio de piscina )",
        img:'/servicios/piscina.jpg',
    },
    {
        title: "Alojamiento rural:",
        descripcion: " contamos con amplias y cómodas habitaciones estándar doble, triple, tenemos las mejores tarifas el mercado.",
        img:'/servicios/alojamiento.jpg',
    },
    {
        title: "Restaurante campestre:",
        descripcion: "Nuestro restaurante campestre está rodeado con un hermoso y tranquilo paisaje al aire libre, donde encontrarás un delicioso y variado menú para que disfrutes de un momento agradable junto a tu familia o amigos.Desayuno(7am a 10 am) almuerzo(12 am a 3pm) cena(6 pm a 8pm)",
        img:'/servicios/restaurante.jpg',
    },
    {
        title: "Estacionamiento gratis:",
        descripcion: "Contamos con estacionamiento privado y gratuito ",
        img:'/servicios/parking.jpg',
    },
    {
        title: "Cancha de tejo:",
        descripcion: "Contamos con cancha de Mini Tejo y poli tejo, para empresas grupo de amigos y familia. (10 am a 6pm)",
        img:'/servicios/tejo.jpg',
    },
    {
        title: "Camping:",
        descripcion: "¡Acampa en familia bajo la luz de las estrellas, acompañados de una fogata!  Llegada 3pm salida 12 am",
        img:'/servicios/piscina.JPG',
    },
    {
        title: "Sendero ecológico:",
        descripcion: "Caminar en medio de la naturaleza, disponemos de un sendero interpretativo, que te invita a disfrutar de todas las bondades de la naturaleza y la vegetación en un ambiente de tranquilidad al aire puro. ",
        img:'/servicios/piscina.JPG',
    },
    {
        title: "Tienda campesina:",
        descripcion: "Productos Naturales, Orgánicos y Artesanales cultivados en nuestro campo ",
        img:'/servicios/piscina.JPG',
    },
    {
        title: "Eventos:",
        descripcion: "Cumpleaños, bautismos, fiestas de quince, cenas navideñas, matrimonios, celebra con nosotros tus fechas especiales.",
        img:'/servicios/piscina.JPG',
    },
    {
        title: "Ruta recreativa y alta montaña en bici:",
        descripcion: "Contamos con dos rutas marcadas en la aplicación strava, ruta recreativa que cuenta con 18 km con terrenos llanos y repechos donde disfrutaras de hermosos paisajes y fuentes hídricas.Ruta de alta montaña 64 km donde disfrutaras de 10 km de alta montaña donde veras paisajes y miradores exóticos de la región.",
        img:'/servicios/piscina.JPG',
    },
    {
        title: "Cabalgatas:",
        descripcion: "convivir con la naturaleza mientras montas un caballo, una experiencia única con los mejores caballos de la región, disfruta de esta actividad a pocos kilómetros de nuestra ubicación en rancho equino el morichal.",
        img:'/servicios/piscina.JPG',
    }
]
