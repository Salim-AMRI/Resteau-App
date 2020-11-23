import React from "react";
import "./App.css";
import Food from "./Components/food";
import Nav from "./Components/Nav/Nav"
import Foot from "./Components/foot";
import SingIn from "./Components/SingIn";

function App() {
  return (
    <div className="App">
      <Nav />
      <Food />
      <Foot />
      </div>
  );
}

export default App;
