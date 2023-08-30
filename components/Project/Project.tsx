
import Image from "next/image";
import video from "@/assests/3562.jpg";
import rick from "@/assests/fondoPantalla1.jpg";

export default function Project() {
    return (
        <div className="pt-[40px]"  id="project">
            <div className="'min-h-[50vh] font-serif flex flex-col bg-white rounded-[50px] overflow-hidden mt-[100px] shadow-lg shadow-slate-900'">
                <h2 className='font-extrabold font-self p-14 underline underline-offset-2 decoration-2 decoration-orange-600'>
                    MIS PROYECTOS
                </h2>
                <div className='min-h-[50vh] font-serif flex flex-col-reverse mx-3 md:grid md:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden'>
                    <div className='p-10 flex flex-col h-full items-start'>
                        <h3 className='font-semibold font-self text-xl py-4'>
                            Parcels
                        </h3>
                        <p className='text-start py-4 font-self'>
                        Proyecto Final Henry: proyecto grupal que consiste en una aplicación de e-commerce sobre venta de parcelas del sur de Chile. Brinda al usuario la oportunidad de encontrar el terreno ideal para cumplir sus sueños, proyectos o inversiones. Utilizamos diferentes tecnologías como: <b>NextJs, Redux, Toolkit, Typescript, MongoDB, Mongoose, Cloudinary, NextAuth, Mercado Pago, Api Google Maps</b> 
                        </p>
                        <div className='flex gap-3 pt-6'>
                            <a href={"https://github.com/LucasRibotta/Project-Parcels"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1 ' target='blank'>
                                Código 
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg> 
                            </a>
                            <a href={"https://parcelas.vercel.app/"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1' target='blank'>
                                Pagina 
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <img src="https://parcelas.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhomeLogo.729be7b9.png&w=1920&q=75" alt="not found"></img>
                </div>
<div className="border"></div>
                <div className='min-h-[50vh] font-serif flex flex-col-reverse mx-3 md:grid md:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden'>
                    <div className='p-10 flex flex-col h-full items-start'>
                        <h3 className='font-semibold font-self text-xl py-4'>
                            VideoGames
                        </h3>
                        <p className='text-start py-4 font-self'>
                            Proyecto Individual Henry: proyecto que consiste en una aplicación sobre video juegos, en la cual se podrá buscar por nombre, filtrar, ordenar, crear o ver los detalles de los mismos. Utilice las siguiente tecnologías: <b>: JavaScript, React, Redux, Express, Sequelize, PostgreSQL, Html, Css</b> 
                        </p>
                        <div className='flex gap-3 pt-6'>
                            <a href={"https://github.com/Is2095/PI_VideoGames"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1 ' target='blank'>
                                Código 
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg> 
                             </a>
                             <a href={"https://videogames-mongo-frontend.vercel.app"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1' target='blank'>
                                Pagina 
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                             </a>
                        </div>
                    </div>
                    <Image src={video} alt="not found" className="h-[80%] w-[90%] rounded-3xl mt-8 lg:mt-0"></Image>
                </div>
<div className="border"></div>
<div className='min-h-[50vh] font-serif flex flex-col-reverse mx-3 md:grid md:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden'>
                    <div className='p-10 flex flex-col h-full items-start'>
                        <h3 className='font-semibold font-self text-xl py-4'>
                           Rick and Morty
                        </h3>
                        <p className='text-start py-4 font-self'>
                            Proyecto Integrador Henry: proyecto realizado durante el cursado del bootcamp, en el cual desarrollé una aplicación a partir de los personajes de la serie Rick and Morty, donde se puede buscar por id o en forma aleatoria, seleccionar y guardar personajes como favoritos, filtrar y ver detalles de un personaje específivo. Utilice las siguiente tecnologías: <b>: JavaScript, React, Redux, Express, Sequelize, PostgreSQL, Html, Css</b> 
                        </p>
                        <div className='flex gap-3 pt-6'>
                            <a href={"https://github.com/Is2095/proyecto_rick_and_morty"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1 ' target='blank'>
                                Código 
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg> 
                            </a>
                            <a href={"https://rick-and-morty-mongo-front.vercel.app"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1' target='blank'>
                                Pagina 
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <Image src={rick} alt="not found" className="h-[80%] w-[90%] rounded-3xl mt-8 lg:mt-0"></Image>
                </div>
            </div>
        </div>
    )
}
