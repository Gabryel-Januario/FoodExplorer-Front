import { Container } from "./style"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

import arrow from "../../assets/arrow.svg"
import receipt from "../../assets/Receipt.svg"
import saladaRavanello from "../../assets/saladaRavanello.svg"
import { FiAlignJustify } from "react-icons/fi"

const ingredients = [
  "alface",
  "cebola",
  "pão naan",
  "pepino",
  "rabanete",
  "tomate",
  "Cleton",
]



export function DisheAdmin() {
  return (
    <Container>
      <Header isAdmin={true} />
      <section>
        <div id="back">
          <img src={arrow} alt="Seta para Voltar " />
          <p>Voltar</p>
        </div>
        <img
          id="picture"
          src={saladaRavanello}
          alt="Imagem de uma salada Ravenello"
        />
        <h1>Salada Ravanello</h1>
        <div id="description">
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
          </p>
        </div>

        <div id="SecIngredients">
          {ingredients.map((ingredient) => (
            <div key={ingredient} className="ingredients">
              <p>{ingredient}</p>
            </div>
          ))}
        </div>

        <div id="ask">
         
          <div id="button">
            <Button
              title="Editar prato"
              style={{ width: "272px", height: "48px", margin: "auto"}}
            />
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  )
}
