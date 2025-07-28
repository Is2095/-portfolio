import type { FC } from "react";
import { StaticImageData } from "next/image";

export interface Tecnologias {
  titulo: string;
  Icono:  FC<React.SVGProps<SVGSVGElement>>;
}

export interface ExperienciaData {
  titulo: string;
  fecha: string;
  tipo?: string;
  link?: string;
  descripcionLink?: string;
  tareas: string[]
}

type repositorio = {
  tipo?: "frontend" | "backend" | "proyecto" | "demo",
  url: string
}

export interface ProyectosData {
  titulo: string;
  tipo?: string;
  descripcion: string[];
  tecnologias: string[];
  repositorio: repositorio[];
  imagen: StaticImageData;
  fecha: string;
}
