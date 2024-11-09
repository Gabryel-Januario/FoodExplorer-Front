import { Container } from "./style"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

import { Link } from "react-router-dom"

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

const titleButton = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: "9px",
      gap: "5px",
    }}
  >
    <img
      src={receipt}
      alt="Ícone de pedido"
      style={{ width: "20px", marginLeft: "10px" }}
    />
    <span>Pedir - R$ 00,00</span>
  </div>
)

export function Dishe() {
  return (
    <Container>
      <Header />
      <section>
        <Link to="/">
          <div id="back">
            <img src={arrow} alt="Seta para Voltar " />
            <p>Voltar</p>
          </div>
        </Link>
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
          <div id="counter">
            <Counter style={{ fontSize: "30px" }} />
          </div>
          <div id="button">
            <Button
              title={titleButton}
              style={{ width: "188px", height: "37px", margin: "auto" }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  )
}
