"use client";
import Header from "@/components/Header";
import Map from "@/components/Map";
import "./page.css";
import { useState, useEffect } from "react";

export default function Requests() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  return (
    <div>
      <Header></Header>
      <Map></Map>
      <div className="">
        <ul className="panel-requests">
          {users?.map((user) => (
            <li key={user.id}>
              <div className="users" onClick={() => handleUserClick(user)}>
                <img
                  src={"/profile-icon.svg"}
                  alt=""
                  width={"60"}
                  height={"60"}
                />
                <p>{user.first_name}</p>
                <button className="acp-btn"></button>
                <button className="rej-btn"></button>
              </div>
            </li>
          ))}
        </ul>
        {selectedUser && (
          <div className="info">
            <h1>$0.00</h1>
            <p>{selectedUser.first_name}</p>
            <h2>Descripción:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              in. Blanditiis, voluptates officiis unde ratione expedita facere,
              temporibus est veritatis praesentium ea labore adipisci dolorum
              qui eaque debitis explicabo asperiores.
            </p>
            <div className="btns">
              <button className="acp-btn2">Aceptar</button>
              <button className="rej-btn2">Rechazar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
<div></div>;
