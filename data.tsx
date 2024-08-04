import { BookText, SquareCode, HomeIcon, UserRound, Linkedin, X, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, BookOpenCheck } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/nicole-meller-8860808b/",
    },
    {
        id: 3,
        logo: <X size={30} strokeWidth={1} />,
        src: "https://x.com/Freyax_",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "https://www.twitch.tv/nicole_freyax",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <SquareCode size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Analista de Tecnologías de la Información",
        subtitle: "Adipa",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario, carga de contenido, manejo de PowerBi, pruebas de calidad a proyectos de backend.",
        date: "Abr 2022 ",
    },
    {
        id: 2,
        title: "Ingeniera en prevención de Riesgos",
        subtitle: "Empresas varias; Elexctrolux, Apryma, Basf, Ecolab.",
        description: "Gestión administrativa en relación a documentación legal requerida para acreditación de sistemas de gestión integrados, manejo de personal y gestión de tiempos",
        date: "Feb 2014",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 15,
        text: "Certificados de estudio en Platzi",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 6,
        text: "Insignias del Bootcamp UDD",
        lineRight: true,
        lineRightMobile: true,
    },
    
];

export const serviceData = [
    {
        image: "/cert-1.png",
    },
    {
        image: "/cert-2.png",
    },
    {
        image: "/cert-3.png",
    },
    {
        image: "/cert-4.png",
    },
    {
        image: "/cert-5.png",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Landing de Venta",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/Nicole-Meller/Proyecto-Landing?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=b1173944-526e-4d0c-800a-02b5b7274062&submissionId=569ee901-b2fc-d9c5-6ff7-dc3e6eb741a7",
        urlDemo: "https://nicole-meller.github.io/Proyecto-Landing/",
    },
    {
        id: 2,
        title: "Aplicación CRUD",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/Nicole-Meller/proyect-crud?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=d09596b9-3855-4692-9be8-1a8156248ba1&submissionId=6490d2d8-ca95-9ed5-fdd2-257e532c3516",
        urlDemo: "https://nicole-meller.github.io/proyect-crud/?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=d09596b9-3855-4692-9be8-1a8156248ba1&submissionId=6490d2d8-ca95-9ed5-fdd2-257e532c3516",
    },
    {
        id: 3,
        title: "Tablero de Datos",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/Nicole-Meller/dashboard?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=52c93875-254f-4f35-a6b3-9f85fa1b5f64&submissionId=36d64dd3-65ad-62da-1b86-9e988e3a03ad",
        urlDemo: "https://nicole-meller.github.io/dashboard/?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=52c93875-254f-4f35-a6b3-9f85fa1b5f64&submissionId=36d64dd3-65ad-62da-1b86-9e988e3a03ad",
    },
    {
        id: 4,
        title: "Restaurant App",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/Nicole-Meller/Proyecto-Restaurant-App?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=bd4c042b-6fe6-4199-9d5e-576ba2b4f16a&submissionId=afdb3f99-2619-7bd2-b817-ea841f859e49",
        urlDemo: "https://proyecto-restaurant-app-six.vercel.app/?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=bd4c042b-6fe6-4199-9d5e-576ba2b4f16a&submissionId=afdb3f99-2619-7bd2-b817-ea841f859e49",
    },
    {
        id: 5,
        title: "Comercio Electrónico",
        image: "/image-5.jpg",
        urlGithub: "https://github.com/Nicole-Meller/ecommerce-proyect?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=9ee483e6-be05-4c50-b1f3-9ac7873fd7ef&submissionId=f7b874a4-54f3-c473-e85b-17865b51821b",
        urlDemo: "https://www.youtube.com/watch?v=42v_FezPKhk&ab_channel=NicoleMeller",
    },
    {
        id: 6,
        title: "Frontend",
        image: "/image-6.jpg",
        urlGithub: "https://adipa.cl/vendedoras/",
        urlDemo: "https://adipa.cl/vendedoras/",
    },
];
