"use client"

import imageProfile from "@/assests/1686271781190.jpg"
import Image from 'next/image'

export default function NavBar() {
    return (
        <nav className="w-[100%] font-mono flex flex-col fixed sm:flex-row items-start sm:items-center justify-around backdrop-blur-sm text-black mt-5">
            <div className="w-[50%] sm:[100%] flex items-center sm:justify-center"> 
                <Image src={imageProfile} alt="imageProfile" className="h-[80px] w-[80px] object-cover m-[0.5rem] rounded-full shadow-xl border border-black-200" />
                <h2 className="w-[50%] font-bold text-[20px] pl-[2%] underline decoration-orange-500">Ismael</h2> 
            </div> 
            <div className="w-[100%] text-sm flex justify-center mt-3 sm:justify-end sm:mt-0 sm:mr-5 ">
                <a href="#home" className="pr-3 pl-3 font-bold">Inicio</a>
                <a href="#about" className="pr-3 pl-3 font-bold">Acerca de mi</a>
                <a href="#project" className="pr-3 pl-3 font-bold">Proyectos</a>
            </div>
       </nav>
      )
}