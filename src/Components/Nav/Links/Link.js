import React from "react";

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
