"use client";

import tecnologiasBackend from "@/app/datos/tecnologías/backend";
import tecnologiasFrontend from "@/app/datos/tecnologías/frontend";
import tecnologiasOtrasHerramientas from "@/app/datos/tecnologías/otrasHerramientas";
import { useTema } from "@/app/contex/TemaContext";
import lenguajesData from "@/app/data/lenguajes-github.json";
import { colorsGraficoTecnologiasGithub } from "@/app/constantes/index";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type LenguajeData = { language: string; value: number };

const Tecnologias = () => {
  const data: LenguajeData[] = lenguajesData;
  const { tema } = useTema();

  const textoColor = tema === "dark" ? "#ffffff" : "#000000";
  return (
    <section
      className="py-20 container xl:min-h-[80vh] max-w-2xl md:max-w-2xl xl:max-w-7xl mx-auto px4 "
      id="tecnologias"
      aria-labelledby="titulo-tecnologias"
    >
      <h2
        id="titulo-tecnologias"
        className="text-3xl font-bold mb-12 text-center xl:text-4xl 2xl:text-5xl"
      >
        Tecnologías
      </h2>

      <p className="text-base pl-4 pb-1 md:text-xl md:m-4 lg:text-lg 2xl:text-2xl font-light leading-relaxed  dark:text-[rgb(162,164,169)] mb-4">
        Agrupo aquí las tecnologías que fui aprendiendo y usando en distintos
        proyectos:
      </p>
      <div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <article className="flex flex-col items-center bg-white dark:bg-dark/100 rounded-lg border border-gray-200 dark:border-dark shadow-xl p-6">
          <div className="pb-6">
            <h3 className="text-2xl">Frontend</h3>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {tecnologiasFrontend.map(({ titulo, Icono }) => (
              <figure
                key={titulo}
                className="flex flex-col items-center  justify-start"
              >
                <Icono aria-hidden="true" role="presentation" />
                <figcaption className="text-xs sm:text-sm xl:text-base py-2">
                  {titulo}
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
        <article className="flex flex-col items-center bg-white dark:bg-dark/50 rounded-lg border border-gray-200 dark:border-dark shadow-xl p-6">
          <div className="pb-6">
            <h3 className="text-2xl">Backend</h3>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {tecnologiasBackend.map(({ titulo, Icono }) => (
              <figure
                key={titulo}
                className="flex flex-col items-center  justify-start"
              >
                <Icono aria-hidden="true" role="presentation" />
                <figcaption className="text-xs sm:text-sm xl:text-base py-2">
                  {titulo}
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
        <article className="flex flex-col items-center bg-white dark:bg-dark/50 rounded-lg border border-gray-200 dark:border-dark shadow-xl p-6">
          <div className="pb-6">
            <h3 className="text-2xl">Otras Tecnologías</h3>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {tecnologiasOtrasHerramientas.map(({ titulo, Icono }) => (
              <figure
                key={titulo}
                className="flex flex-col items-center justify-center"
              >
                <Icono aria-hidden="true" role="presentation" />
                <figcaption className="text-xs sm:text-sm xl:text-base py-2">
                  {titulo}
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
        <article className="text-center bg-white dark:bg-dark/50 rounded-lg border border-gray-200 dark:border-dark shadow-xl p-6">
          <div className="pb-6">
            <h3 className="text-2xl">Lenguajes en los Repo en Github</h3>
          </div>
          <div className="bg-white dark:bg-dark/80 p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
              >
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fill: textoColor }}
                />
                <YAxis
                  type="category"
                  dataKey="language"
                  width={150}
                  interval={0}
                  tick={{ fill: textoColor }}
                />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Bar dataKey="value" radius={[0, 5, 5, 0]}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        colorsGraficoTecnologiasGithub[
                          index % colorsGraficoTecnologiasGithub.length
                        ]
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tecnologias;
