import React from "react";
import "../components/styles/Inicio.css";
import Programmer from "../assets/programmer2.svg"

const Inicio = ()=> {
    return <div className="content">
        <main className="main">
            <div className="mensaje">
                <p>Hola! Soy Eric Parlante</p>
                <p>Front End Web Developer</p>
            </div>
            <img className="imagen-inicio" src={Programmer} alt="Inicio" />
                
        </main> 
    </div>
}

export default Inicio;