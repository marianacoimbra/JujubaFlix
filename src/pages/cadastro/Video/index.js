import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function CadastroVideo() {
  return (
    <PageDefault>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
