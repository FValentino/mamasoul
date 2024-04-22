'use client';

import React from "react";
import { useState } from "react";
import Image from "next/image";

import './shape.css'

import MenuBarSide from "./header-menu-bar-side";

import logo from '@/public/logo/logo-texto-negro.png'
import usuario from '@/public/icons/login.png';
import carrito from '@/public/icons/carrito.png';

export default function MenuBar(){

    // Estado para controlar la visibilidad del menú en dispositivos móviles
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar la visibilidad del menú en dispositivos móviles
    const toggleMenu = () => {
        const menu = document.getElementById("side-menu-bar");
        menu?.classList.toggle('hidden');

    };

    function dropDown(id:string){
        let menu = document.getElementById(id);
        menu?.classList.toggle('hidden');
    }

    return (
        <nav className="mt-4 font-extrabold">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                <Image alt="logo" src={logo} width="150" />
                </div>

                {/* Botón de menú responsive para pantallas pequeñas */}
                <div className="md:hidden lg:hidden">
                    <button onClick={() => toggleMenu()} className="px-4 text-xl focus:outline-none border-2 border-solid border-current rounded-md">
                        ☰
                    </button>
                </div>

                {/* Menú principal */}
                <ul className="hidden md:flex lg:flex space-x-12 items-center">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li className="relative">
                        {/* Dropdown button */}
                        <button onClick={() => dropDown('dropdownMenu')} className="focus:outline-none">Categorias</button>
                        {/* Dropdown content */}
                        <div className="absolute w-36 mt-2 bg-white border rounded-lg shadow-md hidden" id="dropdownMenu">
                            <ul className="py-2 px-4 text-sm leading-6 font-normal">
                                <li><a href="#">Riñoneras</a></li>
                                <li><a href="#">Bolsos y carteras</a></li>
                                <li><a href="#">Mochilas</a></li>
                                <li><a href="#">Billeteras</a></li>
                                <li><a href="#">Cartucheras y neceser</a></li>
                                <li><a href="#">Tarjeteros</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Contacto</a></li>
                </ul>

                {/* Iconos de usuario y carrito */}
                <div className="hidden md:flex space-x-6 items-center">
                    <div>
                        <Image alt="login" src={usuario} width="30" height="30" />
                    </div>
                    <div>
                        <Image alt="carrito" src={carrito} width="30" height="30" />
                    </div>
                </div>

            </div>

            {/* Menu responsive */}

            <div id="side-menu-bar" className=" hidden md:hidden lg:hidden ms-2 mt-4 ps-4 h-full w-1/2 space-y-9">
                    {/* Menú principal */}
                    <ul className="space-y-4">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li className="relative">
                            {/* Dropdown button */}
                            <button onClick={() => dropDown('dropdownMenu-side')} className="focus:outline-none">Categorias</button>
                            {/* Dropdown content */}
                            <div className="absolute w-36 mt-2 bg-white border rounded-lg shadow-md hidden" id="dropdownMenu-side">
                                <ul className="py-2 px-4 text-sm leading-6 font-normal">
                                    <li><a href="#">Riñoneras</a></li>
                                    <li><a href="#">Bolsos y carteras</a></li>
                                    <li><a href="#">Mochilas</a></li>
                                    <li><a href="#">Billeteras</a></li>
                                    <li><a href="#">Cartucheras y neceser</a></li>
                                    <li><a href="#">Tarjeteros</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Contacto</a></li>
                    </ul>

                    {/* Iconos de usuario y carrito */}
                    <div className="flex space-x-6 items-center">
                        <div>
                            <Image alt="login" src={usuario} width="30" height="30" />
                        </div>
                        <div>
                            <Image alt="carrito" src={carrito} width="30" height="30" />
                        </div>
                    </div>

                </div>
        </nav>
    );
}