import { Box } from "@mui/material"
import { ImageContainer, TextContainer } from "./styles"
import image from 'assets/images/section2image.svg'

export const Step1 = () => {
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
        Fases para la creación de proyectos sdfsdfsdfd
      </h3>
      <h2>
        Levantamiento 
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
        }}>
          <img src={image} alt="image"/>
        </Box>
      </ImageContainer>
      </Box>
  )
}
