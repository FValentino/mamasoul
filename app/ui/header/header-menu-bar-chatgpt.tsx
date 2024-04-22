'use client';
import React from 'react';
import { useState } from 'react';

import Image from "next/image";
import '@/app/ui/style/header/menu-bar.css'
import './shape.css'

import logo from '@/public/logo/logo-texto-negro.png'
import usuario from '@/public/icons/login.png';
import carrito from '@/public/icons/carrito.png';

export default function MenuBar(){
    // Estado para controlar la visibilidad del menú en dispositivos móviles
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Función para alternar la visibilidad del menú en dispositivos móviles
   function toggleMenu() {
        setIsMenuOpen(!isMenuOpen); // Cambia el estado a su opuesto (true/false)
        const menu = document.getElementById('mobile-menu');
        menu?.classList.add('mobile-menu')
    };

    function dropDown(){
        let menu = document.getElementById('dropdownMenu');
        menu?.classList.toggle('hidden');
    }

    return(
        <>
            <nav className="mt-4 font-extrabold">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Image alt="logo" src={logo} width="150" />
                    </div>

                    {/* Menú principal */
                        !isMenuOpen && (
                            <>
                                <ul id='mobile-menu' className="hidden md:flex space-x-12 items-center">
                                    <li><a href="#">Inicio</a></li>
                                    <li><a href="#">Nosotros</a></li>
                                    <li className="relative">
                                        {/* Dropdown button */}
                                        <button onClick={() => dropDown()} className="focus:outline-none">Categorias</button>
                                        {/* Dropdown content */}
                                        <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-md hidden" id="dropdownMenu">
                                        <ul className="py-2">
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

                                <div className="hidden md:flex space-x-6 items-center">
                                    <div>
                                        <Image alt="login" src={usuario} width="30" height="30" />
                                    </div>
                                    <div>
                                        <Image alt="carrito" src={carrito} width="30" height="30" />
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {/* Botón de menú responsive para pantallas pequeñas */}
                    <div className="md:hidden">
                        <button onClick={() => toggleMenu()} className="text-xl focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}