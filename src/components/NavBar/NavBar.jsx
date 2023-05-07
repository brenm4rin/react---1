import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>Veterinaria Huellitas</h1>

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Tienda</li>
                    <li>Contacto</li>
                </ul>
            </nav>

<CartWidget />

        </header>
    )
}

export default NavBar
