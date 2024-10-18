import { Container } from "./style"
import PolygonImage from "../../assets/Polygon 1.png"



export function Logo({style}) {
    return(
        <Container type="div" style={style}>
            <img src={PolygonImage} alt="Imagem de um polígono azul" />
            <h1>Food explorer</h1>

        </Container>
    )
}