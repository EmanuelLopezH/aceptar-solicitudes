"use client";
import Header from "@/components/Header";
import Map from "@/components/Map";
import GeneralButton from "@/components/GeneralButton";
import "./page.css";
import { useState, useEffect } from "react";

export default function Requests() {
 



  return (
    <div>
      <Header></Header>
      <Map></Map>
      <GeneralButton></GeneralButton>

      <div className="">
        <div className="info">
          <div className="bordeazul">
            <h1>SOLICITUD ELIMINAR CUENTA</h1>
          </div>
          <h1>Messi, sentimos mucho que te vayas</h1>
          <p>
            cuando elimines tu cuenta esta se desactivara de manera inmediata y
            dentro del plazo de 30 dias sera eliminada de manera permanente
          </p>
          <p>
            tu opinion es muy importante entonces por eso esperamo que nos dejes
            tu comentario de porque te das de baja
          </p>
          <textarea
            className="comment-input"
            placeholder="Deja tu comentario"
          ></textarea>
          <div className="btns">
            <button id="equis">
              cancelar
            </button>
            <button className="rej-btn2">continuar</button>
          </div>
          <p>¿Estas seguro que quieres eliminar la cuenta?</p>
        </div>
      </div>
    </div>
  );
}
