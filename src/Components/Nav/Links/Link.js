import React from "react";
import "./Link.css";

/*
const list = ["Accueil", "Equipe", "A propos", "Contact"];

function Link() {
  return (
    <span className="link">
      {list.map((el) => (
        <a href="#">{el}</a>
      ))}
    </span>
  );
}
*/

function Link() {
  return (
    <div className="link">
    <a href="#">Carte</a>
    <a href="#">Commande</a>
    <a href="#">Connexion</a>
      <a href="#">Deconnexion</a>
    </div>
  );
}

export default Link;
