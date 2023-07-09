import React from "react";
import { Link } from "react-router-dom"
import "./Small.css"

const BarraCorta = () => {
    return <nav className="nav2">
        <ul className="items2">
            <li><Link className="item2" to="/">Inicio</Link></li>
            <li><Link className="item2" to="/SobreMi">Sobre Mi</Link></li>
            <li><Link className="item2" to="/Proyectos">Proyectos</Link></li>
            <li><Link className="item2" to="/Contacto">Contacto</Link></li>
        </ul>
    </nav>
}

export default BarraCorta;