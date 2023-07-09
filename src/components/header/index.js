import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import BarraLarga from "./barras/BarraLarga";
import ButtonMenu from "./Boton Menú/Button";

const Header = ()=> {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize",handleResize);
        };
    }, []);
    return (
        <div className="header">
            <div className="barra">
                <h2><Link className="name" to="/">{'<'}Eric<span>Parlante</span>{'/>'}</Link></h2>
                {isMobile ? <ButtonMenu /> : <BarraLarga /> }
            </div>
        </div>
    )
}

export default Header;