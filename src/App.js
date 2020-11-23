import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Carte from "./Components/Nav/Carte";
import Commande from "./Components/Nav/Commande";
import Connexion from "./Components/Nav/Connexion";
import Deconnexion from "./Components/Nav/Decnx";
import Auto from "./Components/Auten";

//json-server --watch db.json

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Connexion} />
        <Route exact path="/home" component={Carte} />
        <Route exact path="/panier" component={Commande} />
        <Route exact path="/signup" component={Deconnexion} />
        <Route path="/auto">
          <Auto />
        </Route>
        <Route path="/cxn">
          <Connexion />
        </Route>
        <Route path="/carte">
          <Carte />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
