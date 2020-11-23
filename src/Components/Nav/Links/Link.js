import React from "react";

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
      <a href="/">Connexion</a>
      <a href="/home">Carte</a>
      <a href="/panier">Commande</a>
      <a href="/signup">Deconnexion</a>
    </div>
  );
}

export default Link;
