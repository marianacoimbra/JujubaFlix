import React from "react";
import jujubaFlixLogo from "../../assets/jujubaFlixLogo.png";
import "./style.css";
import Button from "../Button/index";
const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={jujubaFlixLogo} alt="jujubaFlix Logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo conteúdo
      </Button>
    </nav>
  );
};

export default Menu;
