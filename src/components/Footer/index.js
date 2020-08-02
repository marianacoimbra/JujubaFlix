import React from "react";
import { FooterBase } from "./styles";
import jujubaFlixLogo from "../../assets/jujubaFlixLogo.png";

function Footer() {
  return (
    <FooterBase>
      <img src={jujubaFlixLogo} alt="Logo jujubaFlix" />
      <p>Criado para aprender e mostrar o que eu gosto</p>
    </FooterBase>
  );
}

export default Footer;
