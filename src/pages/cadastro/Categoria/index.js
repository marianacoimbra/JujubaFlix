import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/";

// import { Container } from './styles';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">Voltar pra a Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
