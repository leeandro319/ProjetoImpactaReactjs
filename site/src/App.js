import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/popper.js/dist/umd/popper.min";

import { Menu } from "./components/Menu";
import { Rotas } from "./components/rotas";

function App() {
  return (
    <div className="container">
      <Menu />
      <Rotas />
    </div>
  );
}

export default App;
