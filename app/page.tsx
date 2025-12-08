import AcercaDe from "@/app/components/AcercaDe"
import Experiencia from "@/app/components/Experiencia"
import Inicio from "@/app/components/Inicio"
import Proyectos from "@/app/components/Proyectos"
import Tecnologias from "@/app/components/Tecnologias"
import CursosCertificaciones from "./components/CursosCertificaciones"

export default function Home() {
  return (
    <>
      <Inicio />
      <Experiencia/>
      <Proyectos/>
      <AcercaDe/>
      <Tecnologias/>
      <CursosCertificaciones/>
    </>
  );
}
