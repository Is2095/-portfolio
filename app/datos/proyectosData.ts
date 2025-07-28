import { ProyectosData } from "@/app/type/interface";
import {imagenesProyectos} from "@/app/imagenes"

export const proyectos: ProyectosData[] = [
  {
    titulo: "Noticias desde RSS (El País)",
    tipo: "",
    descripcion: [
      "Backend para importar, normalizar y almacenar noticias desde múltiples feeds RSS del diario El País.",
      "Convierte noticias de XML a JSON, las valida, filtra y almacena en MongoDB.",
      "Eliminación automática de noticias antiguas.",
      "Filtros por palabras clave y fecha; paginación y rate limiting.",
      "Documentación con Swagger, validación de datos, arquitectura en capas.",
    ],
    tecnologias: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "Swagger",
      "Axios",
      "POO",
    ],
    repositorio: [
      { tipo: "backend", url: "https://github.com/Is2095/noticias" },
    ],
    imagen: imagenesProyectos.elPais,
    fecha: "Junio 2025 - Julio 2025",
  },
  {
    titulo: "Convertidor Word a PDF",
    tipo: "",
    descripcion: [
      "Creé una aplicación para convertir archivos Word a PDF mediante un script de Python integrado con Java Spring Boot.",
      "Automatización de extracción de la primera página del documento y devolución al cliente como respuesta.",
    ],
    tecnologias: ["Java", "Spring Boot", "Python"],
    repositorio: [
      { tipo: "backend", url: "https://github.com/Is2095/convertidorWordAPdf" },
    ],
    imagen: imagenesProyectos.convertido_java_python,
    fecha: "Octublre 2024 - Noviembre 2024)",
  },
  {
    titulo: "Agenda de Links",
    tipo: "",
    descripcion: [
      "App para gestionar enlaces categorizados.",
      "Frontend con React/Redux; backend REST con MongoDB.",
    ],
    tecnologias: ["React.js", "Java", "Spring Boot", "MongoDB"],
    repositorio: [
      { tipo: "proyecto", url: "https://github.com/Is2095/React_Java_Link" },
    ],
    imagen: imagenesProyectos.entorno_desarrollo,
    fecha: "Septiembre 2024",
  },
  {
    titulo: "Autenticación con NextAuth y Email",
    tipo: "",
    descripcion: [
      "Autenticación con Google, GitHub y credenciales utilizando NextAuth.",
      "Login con Google, GitHub, y email. Validación vía correo con Resend/Nodemailer",
    ],
    tecnologias: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "MongoDB",
      "Resend",
      "Nodemailer",
    ],
    repositorio: [
      {
        tipo: "proyecto",
        url: "https://github.com/Is2095/authentication_email",
      },
    ],
    imagen: imagenesProyectos.nextauth_email,
    fecha: "Septiembre 2024 - Octublre 2024",
  },
  {
    titulo: "Biblioteca Virtual – App de libros y favoritos",
    tipo: "Proyecto académico grupal",
    descripcion: [
      "Desarrollo de una Biblioteca virtual",
      "Login, consulta a API de Google Books, gestión de login y usuarios.",
      "API REST, integración con MySQL.",
    ],
    tecnologias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    repositorio: [
      {
        tipo: "backend",
        url: "https://github.com/Is2095/backend_biblioteca_back",
      },
      {
        tipo: "frontend",
        url: "https://github.com/Is2095/frontend_biblioteca_back",
      },
      { tipo: "demo", url: "https://is2095.github.io/Biblioteca-Virtual" },
    ],
    imagen: imagenesProyectos.biblioteca,
    fecha: "Mayo 2024 - Julio 2024",
  },
  {
    titulo: "App de Control de Stock (en desarrollo)",
    tipo: "",
    descripcion: [
      "Sistema para gestionar inventarios, pedidos y autenticación con NextAuth.",
      "Control de stock y consumo de insumos.",
    ],
    tecnologias: [
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    repositorio: [{ tipo: "proyecto", url: "https://github.com/Is2095/stock" }],
    imagen: imagenesProyectos.entorno_desarrollo,
    fecha: "Enero 2024",
  },
  {
    titulo: "Parcels - E-commerce de parcelas en el sur de Chile",
    tipo: "Proyecto académico grupal",
    descripcion: [
      "Proyecto grupal para una plataforma de venta de parcelas en el sur de Chile.",
      "Autenticación de usuarios, rutas protegidas y pagos integrados con Mercado Pago",
      "Integración de mapas con Google Maps API.",
    ],
    tecnologias: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    repositorio: [
      {
        tipo: "proyecto",
        url: "https://github.com/LucasRibotta/Project-Parcels",
      },
    ],
    imagen: imagenesProyectos.logoParcels,
    fecha: "Junio 2023 - Julio 2023",
  },
];
