
import Image from "next/image";
import video from "@/assests/3562.jpg";
import rick from "@/assests/fondoPantalla1.jpg";
import nextauth from "@/assests/nextauth_email.png"
import biblioteca from "@/assests/biblioteca.jpg"

export default function Project() {
    return (
        <div className="pt-[40px]" id="project">
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
                            {/* <a href={"https://parcelas.vercel.app/"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1' target='blank'>
                                Pagina
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </a> */}
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
                            {/* <a href={"https://videogames-mongo-frontend.vercel.app"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1' target='blank'>
                                Pagina
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </a> */}
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
                            {/* <a href={"https://rick-and-morty-mongo-front.vercel.app"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1' target='blank'>
                                Pagina
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <Image src={rick} alt="not found" className="h-[80%] w-[90%] rounded-3xl mt-8 lg:mt-0"></Image>
                </div>
                <div className="border"></div>
                <div className='min-h-[50vh] font-serif flex flex-col-reverse mx-3 md:grid md:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden'>
                    <div className='p-10 flex flex-col h-full items-start'>
                        <h3 className='font-semibold font-self text-xl py-4'>
                            NextAuth y envío de email
                        </h3>
                        <p className='text-start py-4 font-self'>
                            En esta aplicación implementé la autenticación por medio de NextAuth, con Google, Github y por medio del email y contraseña; en este último caso se valida el email pidiendo ingresar un código que se envió a dicho email.
                            Luego de registrarse y de ingresar con el usuario, se podrá enviar correos por medio de dos librerías: <b>Resend ó Nodemailer</b>
                            <br />
                            <br />
                            Para los formularios de registro e ingreso utilicé la interfaz web: <b>FormData</b> para el ingreso de datos, utilizando una función validadora de los mismos, así se pueden renderizar los errores y controlar la función del botón de Registrarse y Inicio Sesión.
                            <br />
                            <br />
                            Los formularios de Enviar Email utilicé la librería <b>Formik</b> y <b>Yup</b>, para el manejo del formulario y validaciones respectivamente.
                            <br />
                            <br />
                            El guardado de datos al registrarse se hace en la base de datos <b>Mongodb</b>
                            <br />
                            <br />
                            Tecnologías utilizadas: <b> JavaScript, NextJs, TypeScript, MondoDB, Mongoose, NextAuth, FormData, Formik, Yup, Resend, Nodemailer</b>
                        </p>
                        <div className='flex gap-3 pt-6'>
                            <a href={"https://github.com/Is2095/authentication_email"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1 ' target='blank'>
                                Código
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                    <Image src={nextauth} alt="not found" className="h-[80%] w-[90%] rounded-3xl mt-8 lg:mt-0"></Image>
                </div>
                <div className="border"></div>
                <div className='min-h-[50vh] font-serif flex flex-col-reverse mx-3 md:grid md:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden'>
                    <div className='p-10 flex flex-col h-full items-start'>
                        <h3 className='font-semibold font-self text-xl py-4'>
                            Biblioteca Digital
                        </h3>
                        <p className='text-start py-4 font-self'>
                            Este proyecto fue desarrollado como parte del curso de Desarrollo Full Stack Node.js en CodoACodo, donde trabajamos en equipo para implementar una aplicación de biblioteca digital del lado del Front End.
                            <br />
                            <br />
                            Entre las funcionalidades que tiene, se encuentra la exploración de una amplia variedad de libros organizados por diferentes temáticas, la posibilidad del contacto con los responsables, las novedades de ingreso a la biblioteca, y la información del equipo y la posibilidad de contactar para convertirse en embajador de la biblioteca localmente.
                            <br />
                            <br />
                            Con diseño amigable y fácil de navegar, garantiza una excelente experiencia; completamente adaptable, se puede utilizar en dispositivos móviles, tablet y equipos de escritorio.
                            <br />
                            <br />
                            Tecnologías utilizadas: <b> HTML 5, CSS, BOOTSTRAP, JavaScript</b>
                        </p>
                        <div className='flex gap-3 pt-6'>
                        <a href={"https://is2095.github.io/Biblioteca-Virtual"} className='text-blue-600 font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1' target='blank'>
                                Pagina
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                    <Image src={biblioteca} alt="not found" className="h-[80%] w-[90%] rounded-3xl mt-8 lg:mt-0"></Image>
                </div>
                <div className="border"></div>
                <div className='min-h-[50vh] font-serif flex flex-col-reverse mx-3 md:grid md:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden'>
                    <div className='p-10 flex flex-col h-full items-start'>
                        <h3 className='font-semibold font-self text-xl py-4'>
                            Proyectos de aprendizaje
                        </h3>
                        <p className='text-start py-4 font-self'>
                            Esta iniciativa tiene dos objetivos, el primero es aprender programando e ir dejando apuntes de lo aprendido, y segundo la posibilidad de brindar estos apuntes al que lo quiera.<br />
                            <br />
                            Cada proyecto contendrá un archivo README en el cual habrá una Descripción breve, instrucciones de instalación según corresponda, el contenido del proyecto,  documentación, entre otros detalles.
                            <br />
                            <br />
                            Usaré diferentes tecnologías de acuerdo al camino que me atreveré a recorrer.
                            <br />
                        </p>
                    </div>
                    <div className="h-[80%] w-[90%] rounded-3xl mt-8 lg:mt-0 border border-gray-500 shadow-2xl">
                        <div className='flex'>
                            <div className="flex flex-col w-full">
                                <a href={"https://github.com/Is2095/base_servidor_node"} className='w-full h-8 pl-10 m-4 text-blue-800 text-lg font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1 ' target='blank'>
                                    * Repositorio de: Servidor con Node.
                                    <div className="px-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                            <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
                                        </svg>

                                    </div>
                                </a>
                                <a href={"https://github.com/Is2095/bienvenido_sql"} className='w-full h-8 pl-10 m-4 text-blue-800 text-lg font-semibold hover:text-gray-500 transition-all duration-300 w-[90px] flex items-center gap-1 ' target='blank'>
                                    * Repositorio de: Bienvenido a SQL.
                                    <div className="px-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                            <path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"></path><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"></path><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"></path><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"></path><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filetype-sql" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252c.284.09.411.091.665.091q.507 0 .858-.158.355-.159.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.187-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.325q0 .165-.085.29A.56.56 0 0 1 2 15.31q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zm6.878 1.489-.507-.739q.264-.243.401-.6.138-.358.138-.806v-.501q0-.556-.208-.967a1.5 1.5 0 0 0-.589-.636q-.383-.225-.917-.225-.527 0-.914.225-.384.223-.592.636a2.14 2.14 0 0 0-.205.967v.5q0 .554.205.965.208.41.592.636a1.8 1.8 0 0 0 .914.222 1.8 1.8 0 0 0 .6-.1l.294.422h.788ZM4.262 14.2v-.522q0-.369.114-.63a.9.9 0 0 1 .325-.398.9.9 0 0 1 .495-.138q.288 0 .495.138a.9.9 0 0 1 .325.398q.115.261.115.63v.522q0 .246-.053.445-.053.196-.155.34l-.106-.14-.105-.147h-.733l.451.65a.6.6 0 0 1-.251.047.87.87 0 0 1-.487-.147.9.9 0 0 1-.32-.404 1.7 1.7 0 0 1-.11-.644m3.986 1.057h1.696v.674H7.457v-3.999h.79z" />
                                        </svg>
                                    </div>

                                </a>
                            </div>


                        </div>
                    </div>
                    {/* <Image src={nextauth} alt="not found" className="h-[80%] w-[90%] rounded-3xl mt-8 lg:mt-0"></Image> */}
                </div>
            </div>
        </div>
    )
}
