import React from "react";
import Menu from "../../../assets/menu.svg";
import "./button.css";

const ButtonMenu = ()=> {
    return <button className="button">
        <img className="img" src={Menu} alt="menu" />
    </button> 

}

export default ButtonMenu;