import { Container } from "./styles"
import { Button } from "../../components/Button"
import { Logo } from "../../components/Logo"
import PolygonImage from "../../assets/Polygon 1.png"
import MacaronImage from "../../assets/pngegg 3.png"

export function WelcomePage() {
  return (
    <Container>
      <header>
        <div id="title">
          <Logo />
        </div>
        <p>seu acesso fácil e rápido ao seu menu favorito</p>
      </header>
      <section>
        <div id="block">
          <p>Escolha o método de entrada</p>
          <Button
            title="Explorar como cliente"
            style={{
              backgroundColor: "rgba(4, 211, 97, 0.3)",
              width: "280px",
              fontSize: "14px",
            }}
          />
          <Button
            title="Acessar como Administrador"
            style={{
              backgroundColor: "rgba(171, 77, 85, 0.75)",
              width: "280px",
              fontSize: "14px",
            }}
          />
        </div>
        <img
          src={MacaronImage}
          alt="Imagem de Macaron e frutas caindo sobre a tela"
        />
      </section>
    </Container>
  )
}
