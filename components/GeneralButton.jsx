"use client";
import { useState } from "react";
import "./GeneralButton.css";

function GeneralButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="state">
        <h3 className="title">Mi perfil</h3>
        <div className="stateButton">
            <p> Estado: {isActive ? "Activo" : "Inactivo"}</p>
            <label className="switch">
            <input type="checkbox" onChange={toggleActive} checked={isActive} />
            <span className="slider-round"></span>
            </label>
        </div>
        <div className="DeleteAcount">
            <p>Eliminar cuenta</p>
        </div>
      
    </div>
  );
}

export default GeneralButton;
