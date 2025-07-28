import React from "react";
import { experiencias } from "@/app/datos/experienciasDatos";

const Experiencia = () => {
  return (
    <section
      className="py-24 container min-h-[95vh] max-w-2xl md:max-w-2xl xl:max-w-7xl mx-auto px-4"
      id="experiencia"
      aria-labelledby="titulo-experiencia"
    >
      <h2
        id="titulo-experiencia"
        className="text-3xl font-bold mb-12 text-center"
      >
        Experiencia
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experiencias.map(
          ({ titulo, fecha, tipo, link, descripcionLink, tareas }, index) => (
            <article
              key={titulo + index}
              className="bg-white dark:bg-dark/100 rounded-lg border border-gray-200 dark:border-dark shadow-xl p-6"
            >
              <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-primary mb-2">
                {titulo}
              </h3>

              <time
                className="block text-xs sm:text-sm xl:text-base text-gray-500 dark:text-[rgb(174,181,195)] mb-1"
                dateTime={fecha.split("–")[0].trim() || ""}
              >
                {fecha}
              </time>

              {tipo && (
                <p className="text-xs sm:text-sm xl:text-base italic text-gray-500 dark:text-[rgb(174,181,195)] mb-2">
                  {tipo}
                </p>
              )}

              {link && descripcionLink && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm sm:text-base xl:text-lg text-blue-600 dark:text-blue-400 underline inline-block mt-4`}
                >
                  {descripcionLink}
                </a>
              )}

              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed mt-6">
                {tareas.map((tarea, index) => (
                  <li key={index}>{tarea}</li>
                ))}
              </ul>
            </article>
          )
        )}
      </div>
    </section>
  );
};
export default Experiencia;
