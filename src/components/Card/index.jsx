import { Container } from "./style"
import { Button } from "../Button"
import { Counter } from "../Counter"

import heartIcon from "../../assets/heartIcon.svg"
import pencilIcon from "../../assets/pencil.svg"

const heartHTML = <img src={heartIcon} alt="Icone de favorito" />
const pencilHTML = <img src={pencilIcon} alt="Icone de edição" />

export function Card({ disheImg, name, price, style, isAdmin, ...rest }) {
  return (
    <Container>
      <div id="icon">{isAdmin ? pencilHTML : heartHTML}</div>
      <div id="dishe">
        <img
          src={disheImg ? disheImg : ""}
          alt={"img de " + name}
          style={{...style, ...(isAdmin ? {marginTop: "50px"} : {})}}
        />
      </div>
      <div id="name">
        <h3>{name ? name + " >" : "Nome não definido >"} </h3>
      </div>
      <div id="price">
        <p> {price ? "R$ " + price : "Preço não definido"}</p>
      </div>

      {isAdmin ? "" : <Counter />}
      {isAdmin ? (
        ""
      ) : (
        <div id="button">
          <Button
            title="Incluir"
            style={{
              width: "162px",
              height: "32px",
              fontFamily: "Roboto",
              padding: "0px",
            }}
          />
        </div>
      )}
    </Container>
  )
}
