import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "../src/CounterApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp valueInitial={20}/>
    {/* <FirstApp title="Hola, soy App"/> */}
  </React.StrictMode>
);
