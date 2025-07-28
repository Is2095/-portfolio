import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import fotoMia from "@/app/imagenes/foto.webp";

const Inicio = () => {
  return (
    <header
      id="inicio"
      className="scroll-mt-24 py-16t lg:py-24 min-h-[80vh] w-full px-6 lg:px-12 xl:px-30 2xl:px-30 mx-auto max-w-[1920px]"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-14 md:gap-16 2xl:gap-0 w-full 2xl:px-10 h-full lg:justify-center">
        <div className="w-full lg:w-2/3 flex flex-col gap-y-1 md:gap-y-4 lg:gap-y-5 2xl:gap-14">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl 2xl:text-7xl dark:text-gray-300 md:font-bold mb-3">
            <span className="text-primary">Ismael Diaz</span>
          </h1>

          <p className="text-2xl lg:text-3xl 2xl:text-5xl font-bold text-gray-600 dark:text-[rgb(179,189,209)] mb-4">
            Desarrollador Backend
          </p>

          <p className="text-base lg:text-lg 2xl:text-2xl font-light leading-relaxed  dark:text-[rgb(162,164,169)] mb-4">
            Tengo experiencia aplicando tecnologías como Node.js, Java, y base
            de datos SQL y NoSQL. Me especializo en construir APIs robustas,
            soluciones efecientes y arquitecturas escalables, aplicando buenas
            prácticas adquiridas en proyectos reales y formativos;
            complementado, todo esto,con conocimientos en frontend (React,
            Next.js) y fundamentos de UX/UI.
          </p>

          <nav className="flex gap-6 justify-center lg:justify-start mb-4">
            <a
              href="https://www.linkedin.com/in/ismael-diaz-3b440b27a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
              aria-label="Link a Linkedin del desarrollador"
            >
              <FaLinkedin
                className="text-3xl md:text-5xl"
                aria-hidden="true"
                role="presentation"
              />
            </a>
            <a
              href="https://github.com/Is2095"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
              aria-label="Link a github del desarrollador"
            >
              <FaGithub
                className="text-3xl md:text-5xl"
                aria-hidden="true"
                role="presentation"
              />
            </a>
          </nav>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end p-4 lg:self-start xl:pt-0">
          <Image
            src={fotoMia}
            alt="Ismael"
            width={240}
            height={240}
            quality={90}
            aria-hidden="true"
            role="presentation"
            className="rounded-full ring-2 ring-primary object-cover w-40 h-40 md:w-60 md:h-60 2xl:w-78 2xl:h-78"
          />
        </div>
      </div>
    </header>
  );
};

export default Inicio;
