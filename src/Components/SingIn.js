import React, { Component } from "react";

export class SingIn extends Component {
  render() {
    return (
      <div className="Sin">
        <div className="Siin">
        <h1>Connexion</h1>
          <button className="btn">Inscription</button><button className="btn">Authentification</button>
          <form>
          
            <span>Nom d'utilisateur</span>
            <input type="text"
          placeholder="Entrer le nom d'utilisateur"
          name="utilisateur"
          required/>
            <span>Mail</span>
            <input type="text"
          placeholder="Entrer le mail "
          name="mail"
          required/>
            <span>Mot de passe</span>
            <input type="password"
          placeholder="Entrer le mot de passe"
          name="password"
          minlength="8"
          required />
            <button>Envoyer</button>
            
            <span>Nom d'utilisateur</span>
            <input type="text"
          placeholder="Entrer le nom d'utilisateur"
          name="utilisateur"
          required/>
            <span>Mot de passe</span>
            <input type="password"
          placeholder="Entrer le mot de passe"
          name="password"
          minlength="8"
          required />
            <button>Se connecter</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SingIn;
