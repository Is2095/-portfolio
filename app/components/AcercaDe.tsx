import React from "react";

const AcercaDe = () => {
  return (
    <section
      className="py-24 container xl:min-h-[80vh] max-w-4xl mx-auto px-4 2xl:min-h-[95vh]"
      id="acercade"
      aria-labelledby="titulo-acercade"
    >
      <h2 id="titulo-acercade" className="text-3xl font-bold mb-12 text-center xl:text-4xl 2xl:text-5xl">
        Acerca de mi
      </h2>

      <div className="grid grid-cols-1 gap-6">
        <article className="bg-white dark:bg-dark/100 rounded-lg border border-gray-200 dark:border-dark shadow-xl p-6">
          <p className="text-base lg:text-lg 2xl:text-2xl font-normal leading-relaxed  dark:text-[rgb(176,179,187)] mb-4">
            Soy{" "}
            <strong className="text-primary dark:text-white">
              desarrollador Full Stack
            </strong>{" "}
            con foco en el backend, especializado en{" "}
            <strong className="text-primary dark:text-white">Node.js</strong>,{" "}
            <strong className="text-primary dark:text-white">Java</strong> y
            bases de datos{" "}
            <strong className="text-primary dark:text-white">SQL/NoSQL</strong>.
            Me apasiona crear soluciones escalables y bien estructuradas.
            Comencé programando en proyectos formativos y luego participé en
            desarrollos reales como{" "}
            <strong className="text-primary dark:text-white">
              Carpeta Digital
            </strong>
            .
          </p>

          <p className="text-base lg:text-lg 2xl:text-2xl font-normal leading-relaxed  dark:text-[rgb(176,179,187)] mb-4">
            Disfruto enfrentar desafíos técnicos, aprender nuevas tecnologías y
            colaborar en equipos. Actualmente, busco oportunidades para crecer
            profesionalmente en entornos donde pueda{" "}
            <strong className="text-primary dark:text-white">
              aportar valor
            </strong>{" "}
            y seguir aprendiendo.
          </p>

          <p className="mt-4 italic text-center text-sm text-gray-600 dark:text-gray-400">
            Siempre abierto a nuevas oportunidades y desafíos.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AcercaDe;
