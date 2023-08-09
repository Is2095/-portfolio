import Image from "next/image"
import sobremi from '@/assests/th.jpg'

export default function About() {
  return (
    <div className="pt-[40px]"  id="about">   
      <div className='min-h-[50vh] font-serif flex flex-col-reverse mx-3 md:grid md:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden mt-[100px] shadow-lg shadow-slate-900'>
          <div className='p-10 flex flex-col h-full items-start'>
              <h2 className='font-extrabold font-self py-4 underline underline-offset-2 decoration-2 decoration-orange-600'>ACERCA DE MI</h2>
              <h3 className='font-semibold font-self text-xl py-4'>Un desarrollador web de Argentina</h3>
              <p className='text-start py-4 font-self'>
              Con mucho entusiasmo en este hermoso mundo del desarrollo, me permití cumplir un antiguo sueño, y hoy puedo decir que mi experiencia incluye dominio en <b>React, Redux, JavaScript, TypeScript, Express, Sequelize, PostgreSQL, MongoDB, CSS, HTML, Git y Node.Js</b>, todo esto gracias a mi educación, proyectos, comunidad, y trabajo en equipo. Me considero una persona rápida en aprender, en busca permanente de crecer y expandir mis conocimientos y habilidades. He buscado, en este camino, desarrollar aplicaciones de un optimo rendimiento, buscando resolver en forma amplia los problemas técnico que se van presentando.
              ¡Si deseas saber más de mí, no dudes en contactarme!</p>
          </div>
          <Image src={sobremi} alt="no found" className="h-[80%] w-[90%] rounded-3xl mt-8 lg:mt-0"></Image>
      </div>
    </div>
  )

}
