import React from "react";
import {
  ImgContainer,
  Section1Container,
  Textbox,
  Textsbox,
  Titlebox,
} from "./styles";
import logo from "../../assets/images/Chillmarin -07.png";

const Section1 = () => {
  return (
    <Section1Container>
      <Textsbox>
        <Titlebox>
          <h1>Realizamos tu proyecto digital</h1>
        </Titlebox>
        <Textbox>
          <p>
            Nos adaptamos a tus ideas y las hacemos realidad, nos preocupamos en
            manejar la última tecnología y las mejores estructuras para que tu
            proyecto sea todo un éxito.
          </p>
        </Textbox>
      </Textsbox>
      <ImgContainer>
        <img src={logo} alt="imagen logo chillmarin" />
      </ImgContainer>
    </Section1Container>
  );
};

export default Section1;
