import { MenuItems } from "@/app/type/type";

export const menuNavbar: MenuItems[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#acercade", label: "Acerca de mí" },
  { href: "#tecnologias", label: "Tecnologías" },
];

export const colorsGraficoTecnologiasGithub = [
  "#2E94BF", // azul 
  "#8884d8", // violeta claro
  "#82ca9d", // verde suave
  "#ffc658", // amarillo suave
  "#ff8042", // naranja
  "#00C49F", // verde azulado
  "#FFBB28", // amarillo intenso
  "#FF6666", // rojo coral
  "#8DD1E1", // celeste claro
  "#A28FD0", // púrpura apagado
  "#C6E377", // verde lima claro
  "#B0BEC5", // gris claro
  "#607D8B", // azul grisáceo oscuro
  "#F48FB1", // rosa suave
  "#4DB6AC", // verde menta
] as const;

export const secciones_para_ver_scroll = [
  "inicio",
  "experiencia",
  "proyectos",
  "acercade",
  "tecnologias",
] as const;