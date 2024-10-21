import { Container } from "./style"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

import Macarom from "../../assets/macaromhome.svg"
import spaguettiGambe from "../../assets/spaguettiGambe.svg"
import saladaRavanello from "../../assets/saladaRavanello.svg"

export function Home() {
  return (
    <Container>
      <Header />
      <div id="block">
        <img id="macarom" src={Macarom} alt="" />

        <div id="text">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
      <section id="meals">
        <h2>Refeições</h2>

        <div id="cards">
          <Card
            disheImg={spaguettiGambe}
            name={"Spaguetti Gambe"}
            price={"79,97"}
          />

          <Card
            disheImg={saladaRavanello}
            name={"Salada Ravanello"}
            price={"49,99"}
          />

          <Card
            disheImg={spaguettiGambe}
            name={"Spaguetti Gambe"}
            price={"79,97"}
          />

          <Card
            disheImg={saladaRavanello}
            name={"Salada Ravanello"}
            price={"49,99"}
          />
        </div>
      </section>
    </Container>
  )
}
