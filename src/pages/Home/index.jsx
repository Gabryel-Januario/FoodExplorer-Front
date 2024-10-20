import { Container } from "./style"
import { Header } from "../../components/Header"
import Macarom from "../../assets/macaromhome.png"

export function Home() {
  return (
    <Container>
      <Header />
      <div id="block">
        <img id="macarom" src={Macarom} alt="" />

        <div id="text">
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
    </Container>
  )
}
