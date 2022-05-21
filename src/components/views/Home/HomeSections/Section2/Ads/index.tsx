import { Box } from "@mui/material"
import { AdContainer, ImageContainer, TextContainer } from "./styles"

import image from "assets/images/adPhone.svg"

export const Ad = () => {
  return (
    <Box
    sx = {{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "4rem 0",
    }}
    >
      <AdContainer>
        <TextContainer>
          <h3>Apps...</h3>
          <p>Desarrollo de páginas web, apps…</p>
        </TextContainer>
        <ImageContainer>
          <img src={image} alt="ad" />
        </ImageContainer>
      </AdContainer>
    </Box>
  )
}
