import React from "react";
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import dados_iniciais from "../../data/dados_iniciais.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <BannerMain
          videoTitle={dados_iniciais.categorias[0].titulo}
          videoDescription={
            "Bem vindo(a) ao jujubaFlix! Aqui voce encontra o que eu gosto de ver pela interweb"
          }
          url={dados_iniciais.categorias[0].videos[0].url}
        />
        <Carousel category={dados_iniciais.categorias[0]} />
        <Carousel category={dados_iniciais.categorias[1]} />
        <Carousel category={dados_iniciais.categorias[2]} />
        <Carousel category={dados_iniciais.categorias[3]} />
        <Footer />
      </header>
    </div>
  );
}

export default Home;
