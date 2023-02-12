import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineMenu, } from 'react-icons/ai'
import {faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../public/assets/logo.png';
import Footer from "./Footer";

const BarNavigation = ({setPage}) => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    
        
    return (
     
        <div className="fixed w-full h-20 shadow-lg shadow-[#6b6781] z-[100] bg-[#18181b]"style={{ zIndex: 1}} >
            <div className="flex justify-between items-center h-full px-2 2xl:px-16" >
                <Image src={logo.src} width='125' height='50' alt='logo' />
                <div className="hidden md:flex" >
                    <a className="cursor-pointer p-4 "  href="https://github.com/AmirEddine" 
                        target='_blank' rel="noreferrer noopener"><FontAwesomeIcon color="white" icon={faGithub} size="2x"/>
                        </a>
                        <a className="cursor-pointer p-4 "  href="https://www.linkedin.com/in/amir-eddine-benmachou-a16573231/" 
                        target='_blank'  rel="noreferrer noopener"><FontAwesomeIcon color="white" icon={faLinkedin} size="2x"/>
                        </a>
                        </div>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="#" onClick={() => setPage('Acceuil')}>
                            <li className="p-2 text-base text-gray-200 hover:border-blue-300">Accueil</li>
                        </Link>
                        <Link href="#" onClick={() => setPage('Projet-1')}>
                            <li className="p-2 text-base text-gray-200 hover:border-blue-300">Projet-1</li>
                        </Link>
                        <Link href="#" onClick={() => setPage('Projet-2')}>
                            <li className="p-2 text-base text-gray-200 hover:border-blue-300">Projet-2</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} color="white" />
                    </div>
                </div>
            </div>
            <div className={nav ? " md:hidden fixed right-0 top-0 w-full  bg-black/40" : ""}>
                <div className={nav ? "fixed right-0 top-20  w-[75%] sm:w-[60%] md:[45%] h-96 shadow-lg bg-[#18181b] p-10 ease-in duration-500" :
                    "fixed right-[-100%] top-20  ease-in duration-500"}  >
                    <div className="flex justify-end ">
                        <div className="rounded-full shadow-lg  shadow-gray-400 p-3  bg-gray-800">
                            <AiOutlineArrowRight onClick={handleNav} color="white" />
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul>
                            <Link href="#" onClick={() => setPage('Acceuil')}>
                                <li className="py-4 text-sm text-gray-200 hover:border-blue-300">Accueil</li>
                            </Link>
                            <Link href="#" onClick={() => setPage('Projet-1')}>
                                <li className="py-4 text-sm text-gray-200 hover:border-blue-300">Projet-1</li>
                            </Link>
                            <Link href="#" onClick={() => setPage('Projet-2')}>
                                <li className="py-4 text-sm text-gray-200 hover:border-blue-300">Projet-2</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex items-center justify-start my-4 w-full ">
                    <a className="cursor-pointer p-4 "  href="https://github.com/AmirEddine" 
                        target='_blank' rel="noreferrer noopener"><FontAwesomeIcon color="white" icon={faGithub} />
                        </a>
                        <a className="cursor-pointer p-4 "  href="https://www.linkedin.com/in/amir-eddine-benmachou-a16573231/"  
                        target='_blank' rel="noreferrer noopener" ><FontAwesomeIcon color="white" icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default BarNavigation