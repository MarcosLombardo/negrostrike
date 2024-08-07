"use client";

// Estilos y componentes
import "./NavBar.Styles.css";
import "../../app/globals.css";
import { FaUserAstronaut } from "react-icons/fa";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

// Hooks
import { useState } from "react";

//------------------

const NavBar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavBar = () => {
        setIsClick(!isClick);
    };

    return (
        <nav className="w-full bg-main flex justify-between px-2 py-3 fixed">
            {/* Menú común */}
            <div className="w-2/3 pl-1 lg:w-1/3">
                <a href="" className="font-counter-strike text-2xl md:text-4xl">
                    Negro - Strike
                </a>
            </div>

            <div className="hidden lg:w-1/3 lg:flex lg:justify-center lg:items-center">
                <ul className="flex gap-6">
                    <li>
                        <a className="pb-2 nav-link" href="">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="pb-2 nav-link" href="">
                            Personajes
                        </a>
                    </li>
                    <li>
                        <a className="pb-2 nav-link" href="">
                            Mapas
                        </a>
                    </li>
                    <li>
                        <a className="pb-2 nav-link" href="">
                            Tabla
                        </a>
                    </li>
                    <li>
                        <a className="pb-2 nav-link" href="">
                            Info
                        </a>
                    </li>
                </ul>
            </div>

            <div className="hidden lg:w-1/3 lg:flex lg:justify-end lg:items-center lg:pr-2">
                <button className="hover:text-selectedLetter">
                    <FaUserAstronaut size={25} />
                </button>
            </div>

            {/* Menu hamburguesa */}
            <div className="flex items-center pr-1 lg:hidden">
                <button onClick={toggleNavBar}>
                    {isClick ? (
                        <IoCloseOutline size={30} />
                    ) : (
                        <IoMenuOutline size={30} />
                    )}
                </button>
            </div>
            {isClick && (
                <div className="absolute top-full left-0 w-full backdrop-blur-lg bg-main/40 lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <ul className="flex flex-col pl-4 pb-4 gap-4">
                            <li className="">
                                <a className="pb-2 nav-link " href="">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="pb-2 nav-link" href="">
                                    Personajes
                                </a>
                            </li>
                            <li>
                                <a className="pb-2 nav-link" href="">
                                    Mapas
                                </a>
                            </li>
                            <li>
                                <a className="pb-2 nav-link" href="">
                                    Tabla
                                </a>
                            </li>
                            <li>
                                <a className="pb-2 nav-link" href="">
                                    Info
                                </a>
                            </li>
                        </ul>
                        <button className="pl-4 hover:text-selectedLetter">
                            <FaUserAstronaut size={25} />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
