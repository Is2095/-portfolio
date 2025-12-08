
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cursosCertificaciones } from "../datos/cusosCertificaciones";
import { FaExternalLinkAlt } from "react-icons/fa";

const CursosCertificaciones = () => {
  return (
    <section
      className="py-24 container xl:min-h-[80vh] max-w-2xl md:max-w-2xl xl:max-w-7xl mx-auto px-4"
      aria-labelledby="titulo-cursos"
      id="cursosCertificaciones"
    >
      <h2
        id="titulo-cursos"
        className="text-3xl font-bold mb-12 text-center xl:text-4xl 2xl:text-5xl"
      >
        Cursos & Certificaciones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cursosCertificaciones.map(
          ({ id, titulo, plataforma, anio, imagen, link }) => (
            <article
              key={id}
              className="bg-white dark:bg-dark/100 rounded-lg border border-gray-200 dark:border-dark shadow-xl p-6"
            >
              {/* Imagen */}
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden border border-black/10">
                <Image
                  src={imagen}
                  alt={`Certificado de ${titulo}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Título */}
              <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-primary mb-2">
                {titulo}
              </h3>

              {/* Plataforma + Año */}
              <time
                className="block text-xs sm:text-sm xl:text-base text-gray-500 dark:text-[rgb(174,181,195)] mb-4"
                dateTime={String(anio)}
              >
                {plataforma} · {anio}
              </time>

              {/* Botón PDF */}
              {link && (
                <div className="flex flex-col gap-2 mt-2 text-sm sm:text-base">
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secundary hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Ver certificado (PDF)</span>
                  </Link>
                </div>
              )}
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default CursosCertificaciones;


// import Image from "next/image";
// import { cursosCertificaciones } from "../datos/cusosCertificaciones";

// export default function CursosCertificaciones() {
//   return (
//     <section id="cursosCertificaciones" className="py-20">
//       <h2 className="text-3xl font-bold mb-10">
//         Cursos & Certificaciones
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {cursosCertificaciones.map((curso) => (
//           <article
//             key={curso.id}
//             className="border rounded-xl overflow-hidden shadow-sm"
//           >
//             <Image
//               src={curso.imagen}
//               alt={`Certificado ${curso.titulo}`}
//               width={400}
//               height={250}
//               className="object-cover"
//             />

//             <div className="p-4 space-y-2">
//               <h3 className="font-semibold text-lg">
//                 {curso.titulo}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 {curso.plataforma} · {curso.anio}
//               </p>

//               {curso.link && (
//                 <a
//                   href={curso.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 text-sm inline-block font-medium"
//                 >
//                   Ver certificado (PDF)
//                 </a>
//               )}
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }