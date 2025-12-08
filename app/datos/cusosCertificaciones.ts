import { imagenesCursosCertificaciones } from "../imagenes";
import { CursosCertificados } from "../type/interface";

export const cursosCertificaciones: CursosCertificados[] = [
  {
    id: 1,
    titulo: "Proyecto 4.0: Automatización e Industria 4.0",
    plataforma: "Ingelearn",
    tipoCursado: "OnLine",
    anio: 2025,
    imagen: imagenesCursosCertificaciones.proyecto40,
    link: "https://drive.google.com/file/d/1V8qjTCz6YXf2gihzeBdQC2YyjevPT5Pb/view?usp=sharing",
  },
  {
    id: 2,
    titulo: "Armado y Reparación de Computadoras",
    plataforma: "UTn.BA",
    tipoCursado: "OnLine",
    anio: 2025,
    imagen: imagenesCursosCertificaciones.armadoReparacionPC,
    link: "https://drive.google.com/file/d/1SvtzvNpMuDum69lBsLTtcR1gHv3rlALm/view?usp=sharing",
  },
  {
    id: 3,
    titulo: "Diseño UX/UI",
    plataforma: "Escuela de Programación Gody Cruz y UTN-Mendoza",
    tipoCursado: "Presencial",
    anio: 2025,
    imagen: imagenesCursosCertificaciones.disenoUX_UI,
    link: "https://drive.google.com/file/d/1GDwDjqEICv4S1H-KrjBHFO7AP2ZXYe2-/view?usp=sharing",
  },
  {
    id: 4,
    titulo: "Desarrollador Web (JavaScript/Node.Js",
    plataforma: "Agencia de Habilidades para el Futuro",
    tipoCursado: "OnLine",
    anio: 2024,
    imagen: imagenesCursosCertificaciones.CAC,
    link: "https://drive.google.com/file/d/1l7EFEEsMWNe3NecJ-eEN0cTTvEyLmJ70/view?usp=sharing",
  },
  {
    id: 5,
    titulo: "Scrum Foundation Professional Certification",
    plataforma: "CertiProf - Professional Knowledge",
    tipoCursado: "OnLine",
    anio: 2024,
    imagen: imagenesCursosCertificaciones.certificadoScrum,
    link: "https://drive.google.com/file/d/1UIVOKfrKQakseAf7kM8u7RX_2BcNEWVl/view?usp=sharing",
  }
];
