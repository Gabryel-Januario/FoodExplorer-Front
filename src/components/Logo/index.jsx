import { Container } from "./style"
import PolygonImage from "../../assets/Polygon 1.svg"

export function Logo({ style, size, imgSize, fontSize, ...rest }) {
  return (
    <Container type="div" style={style}>
      <img src={PolygonImage} alt="Imagem de um polígono azul" />
      <h1>Food explorer</h1>
    </Container>
  )
}
