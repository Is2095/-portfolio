
import Image from 'next/image'
import Html from "@/assests/html (1).png"
import Css from "@/assests/css.png"
import JavaScript from "@/assests/js.png"
import Typescript from "@/assests/Typescript_logo_2020.svg"
import ReactImage from "@/assests/react.png"
import MongoDb from "@/assests/MongoDB_Logo_FullColorBlack_RGB.svg"
import NodeJs from "@/assests/Node.js_logo.svg"

export default function HomeSection() {
    return (
        <div className="pt-[40%] font-mono flex flex-col min-h-screen box-border justify-around items-start text-gray-500 md:pt-[12%]" id="home">
            <div className="items-start pl-5">
                <div className="col-span-2 flex flex-col justify-around h-full">
                    <div className="w-[100%]">
                        <h2 className="text-start my-3 font-bold sm:text-[25px] text-gray-900">Hola :</h2>
                        <h1 className='ml-4 my-10 sm:text-[35px] text-orange-500'>Mi nombre es Ismael Diaz, un apacionado del...</h1>
                        <h1 className="shadow-2xl rounded-full text-[24px] sm:text-[80px] font-extrabold px-10 md:px-20 mb-5 underline decoration-orange-500">Desarrollo Web</h1>
                    </div>
                    <div className="flex mt-10 gap-5 text-blue-400">
                        <h1 className='text-[16px] text-gray-500 font-bold'>Contactos:</h1>
                        <a href="https://www.linkedin.com/in/ismael-diaz-3b440b27a" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" hover:text-slate-500 transition-all duration-300" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        <a href="https://github.com/Is2095" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" hover:text-slate-500 transition-all duration-300" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href="mailto:ismael@gmail.com" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" hover:text-slate-500 transition-all duration-300" viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col pl-5'>
                <h2 className="font-bold mb-4 mt-10">Tecnologias:</h2>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
                    <Image src={Html} alt="Html" title="html" className="h-[65px] w-[65px] object-scale-down mx-[5%] " />
                    <Image src={Css} alt="Css" title="css" className="h-[65px] w-[65px] object-scale-down mx-[5%]" />
                    <Image src={JavaScript} alt="Javascript" title="javascript" className="h-[65px] w-[65px] object-scale-down mx-[5%]" />
                    <Image src={Typescript} alt="Typescript" title="Typescript" className="h-[65px] w-[65px] object-scale-down mx-[5%]" />
                    <Image src={ReactImage} alt="React" title="react" className="h-[65px] w-[65px] object-scale-down mx-[5%]" />
                    <Image src={MongoDb} alt="Tailwind" title="mongodb" className="h-[65px] w-[65px] object-scale-down mx-[5%]" />
                    <Image src={NodeJs} alt="Tailwind" title="node" className="h-[65px] w-[65px] object-scale-down mx-[5%]" />
                </div>
            </div>
        </div>
         
    )
}