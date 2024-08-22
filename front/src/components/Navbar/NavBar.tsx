"use client";

// Estilos y componentes
import "./NavBar.Styles.css";
import "../../app/globals.css";
import { FaUserAstronaut } from "react-icons/fa";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

// Hooks
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

//------------------

const NavBar = () => {
  const [isClick, setIsClick] = useState(false);
  const pathname = usePathname();

  const toggleNavBar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  const isActive = (path: string): boolean => pathname === path;
  return (
    <nav className="w-full bg-main flex justify-between px-2 py-3 fixed z-50">
      {/* Menú común */}
      <div className="w-2/3 pl-1 lg:w-1/3">
        <Link href="/" className="font-counter-strike text-2xl md:text-4xl">
          Negro - Strike
        </Link>
      </div>

      <div className="hidden lg:w-1/3 lg:flex lg:justify-center lg:items-center">
        <ul className="flex gap-6">
          <li>
            <Link
              className={`pb-2 nav-link ${isActive("/") ? "active" : ""}`}
              href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`pb-2 nav-link ${
                isActive("/characters") ? "active" : ""
              }`}
              href="/characters">
              Personajes
            </Link>
          </li>
          <li>
            <Link
              className={`pb-2 nav-link ${isActive("/maps") ? "active" : ""}`}
              href="/maps">
              Mapas
            </Link>
          </li>
          <li>
            <Link
              className={`pb-2 nav-link ${isActive("/table") ? "active" : ""}`}
              href="/table">
              Tabla
            </Link>
          </li>
          <li>
            <Link
              className={`pb-2 nav-link ${isActive("/info") ? "active" : ""}`}
              href="/info">
              Info
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:w-1/3 lg:flex lg:justify-end lg:items-center lg:pr-2">
        <Link className="hover:text-selectedLetter" href="/login">
          <FaUserAstronaut size={25} />
        </Link>
      </div>

      {/* Menu hamburguesa */}
      <div className="flex items-center pr-1 lg:hidden">
        <button onClick={toggleNavBar}>
          {isClick ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
        </button>
      </div>
      <div
        className={`absolute top-full left-0 w-full backdrop-blur-lg bg-main/40 lg:hidden transition-all duration-300 ${
          isClick
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}>
        {" "}
        <div className="px-2 pt-2 pb-3 space-y-1">
          <ul className="flex flex-col pl-4 pb-4 gap-4">
            <li>
              <Link
                className={`pb-2 nav-link ${isActive("/") ? "active" : ""}`}
                href="/"
                onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`pb-2 nav-link ${
                  isActive("/characters") ? "active" : ""
                }`}
                href="/characters"
                onClick={closeNavbar}>
                Personajes
              </Link>
            </li>
            <li>
              <Link
                className={`pb-2 nav-link ${isActive("/maps") ? "active" : ""}`}
                href="/maps"
                onClick={closeNavbar}>
                Mapas
              </Link>
            </li>
            <li>
              <Link
                className={`pb-2 nav-link ${
                  isActive("/table") ? "active" : ""
                }`}
                href="/table"
                onClick={closeNavbar}>
                Tabla
              </Link>
            </li>
            <li>
              <Link
                className={`pb-2 nav-link ${isActive("/info") ? "active" : ""}`}
                href="/info"
                onClick={closeNavbar}>
                Info
              </Link>
            </li>
          </ul>
          <button
            className="pl-4 hover:text-selectedLetter"
            onClick={closeNavbar}>
            <FaUserAstronaut size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
