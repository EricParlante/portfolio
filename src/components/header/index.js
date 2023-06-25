import React from "react";
import {Link} from "react-router-dom"
import "./Header.css"

const Header = ()=> {
    return (
        <div className="header">
            <div className="barra">
                <h2><Link className="name" to="/">{'<'}Eric<span>Parlante</span>{' />'}</Link></h2>
                <nav className="nav">
                    <ul className="items">
                        <li><Link className="item" to="/">Inicio</Link></li>
                        <li><Link className="item" to="/SobreMi">Sobre Mi</Link></li>
                        <li><Link className="item" to="/Proyectos">Proyectos</Link></li>
                        <li><Link className="item" to="/Contacto">Contacto</Link></li>      
                    </ul>
                    
                </nav>
            </div>
        </div>
    )
}



export default Header;