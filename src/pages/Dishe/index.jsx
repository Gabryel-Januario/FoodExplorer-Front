import { Container } from "./style"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import arrow from "../../assets/arrow.svg"
import saladaRavanello from "../../assets/saladaRavanello.svg"

const ingredients = [
  "alface",
  "cebola",
  "pão naan",
  "pepino",
  "rabanete",
  "tomate",
]

export function Dishe() {
  return (
    <Container>
      <Header />
      <section>
        <div id="back">
          <img src={arrow} alt="" />
          <p>Voltar</p>
        </div>
        <img src={saladaRavanello} alt="Imagem de uma salada Ravenello" />
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>

        {ingredients.map((ingredient) => (
          <div key={ingredient} className="ingredients">
            <p>{ingredient}</p>
          </div>
        ))}
      </section>
      <Footer />
    </Container>
  )
}
