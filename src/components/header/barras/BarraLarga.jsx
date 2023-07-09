import React from "react";
import { Link } from "react-router-dom"
import "./Large.css"

const BarraLarga = () => {
    return <nav className="nav">
        <ul className="items">
            <li><Link className="item" to="/">Inicio</Link></li>
            <li><Link className="item" to="/SobreMi">Sobre Mi</Link></li>
            <li><Link className="item" to="/Proyectos">Proyectos</Link></li>
            <li><Link className="item" to="/Contacto">Contacto</Link></li>
        </ul>
    </nav>
}

export default BarraLarga;