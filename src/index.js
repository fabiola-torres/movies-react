import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";


//crear un componente mediante una funcion
//los componentes SIEMPRE deben ir con mayuscula
//children es una palabr reservada para los hijos de mi componente

//se inyectan elementos al index.html, es un elemento de react
//es una sintaxis de react, es jsx
//se pueden renderizar varios elementos
ReactDOM.render(
  <App/>,
document.getElementById("root"));
