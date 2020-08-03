import React from "react";
import jujubaFlixLogo from "../../assets/jujubaFlixLogo.png";
import "./style.css";
import Button from "../Button/index";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={jujubaFlixLogo} alt="jujubaFlix Logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo conteúdo
      </Button>
    </nav>
  );
};

export default Menu;
