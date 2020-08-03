import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Home/App";
import CadastroVideo from "./pages/cadastro/Video";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroCategoria from "./pages/cadastro/Categoria";

const page404 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#414141" }}>
        Essa pagina nao existe, bunitinha! Um 404 grande
      </h1>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
