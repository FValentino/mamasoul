'use client';

import React from "react";
import { useState } from "react";

import Image from "next/image"

import logo from '@/public/logo/logo-texto-negro.png'
import usuario from '@/public/icons/login.png';
import carrito from '@/public/icons/carrito.png';

export default function MenuBarSide(){

    function dropDown(){
        let menu = document.getElementById('dropdownMenu');
        menu?.classList.toggle('hidden');
    }

    return(
        <nav className="mt-4 font-extrabold">
            <div className="ps-4 h-full w-1/2 space-y-9">
                {/* Menú principal */}
                <ul className="space-y-4">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li className="relative">
                        {/* Dropdown button */}
                        <button onClick={() => dropDown()} className="focus:outline-none">Categorias</button>
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