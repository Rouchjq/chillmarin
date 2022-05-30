import { Box } from "@mui/material"
import { ImageContainer, TextContainer } from "./styles"
import image from 'assets/images/section2image.svg'

export const Step4 = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        width: "100%",
        margin: "0 0 7rem 0"
      }}
    >
      <TextContainer>
      <h3>
        FASE 4 DE CREACION DE UNA APLICACION
      </h3>
      <h2>
        La segunda fase 
      </h2>
      <p>
        Nos reunimos para entender los objetivos de tu proyecto,
        recolectamos la información necesaria, requerimientos y
        tomamos decisiones sobre el desarrollo de la estructura con
        nuestro equipo. Analizamos las mejores herramientas para usar
        y posibles impedimentos para así preparar las contingencias
        necesarias.
      </p>
      </TextContainer>
      <ImageContainer>
        <Box
        sx={{
          width: "100%",
          height: "50%",
          transition: "all 1s ease-in-out",
        }}>
          <img src={image} alt="image"/>
        </Box>
      </ImageContainer>
      </Box>
  )
}