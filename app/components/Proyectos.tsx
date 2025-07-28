import React from "react";
import { proyectos } from "@/app/datos/proyectosData";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Proyectos = () => {
  return (
    <section
      className="py-24 container min-h-[95vh] max-w-2xl md:max-w-2xl xl:max-w-7xl mx-auto px-4"
      aria-labelledby="titulo-proyectos"
      id="proyectos"
    >
      <h2
        id="titulo-proyectos"
        className="text-3xl font-bold mb-12 text-center"
      >
        Projectos destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {proyectos.map(
          (
            {
              titulo,
              tipo,
              descripcion,
              tecnologias,
              repositorio,
              imagen,
              fecha,
            },
            index
          ) => (
            <article
              key={titulo + index}
              className="bg-white dark:bg-dark/100 rounded-lg border border-gray-200 dark:border-dark shadow-xl p-6"
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden border border-black/10">
                <Image
                  src={imagen}
                  alt={`Captura de ${titulo}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-primary mb-2">
                {titulo}
              </h3>
              <time
                className="block text-xs sm:text-sm xl:text-base text-gray-500 dark:text-[rgb(174,181,195)] mb-1"
                dateTime={fecha.split("-")[0].trim() || ""}
              >
                {fecha}
              </time>
              {tipo && (
                <p className="text-xs sm:text-sm xl:text-base italic text-gray-500 dark:text-[rgb(174,181,195)] mb-2">
                  {tipo}
                </p>
              )}
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 space-y-1">
                {descripcion.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {tecnologias.map((tecnologia, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-2 text-sm sm:text-base">
                {repositorio.map(({ tipo, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secundary hover:text-primary transition-colors"
                  >
                    {tipo === "demo" ? (
                      <FaExternalLinkAlt className="w-4 h-4" />
                    ) : (
                      <FaGithub className="w-5 h-5" />
                    )}
                    <span>{tipo}</span>
                  </Link>
                ))}
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Proyectos;
