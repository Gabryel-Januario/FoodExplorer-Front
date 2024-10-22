import { Container } from "./style"
import { Button } from "../Button"

import heartIcon from "../../assets/heartIcon.svg"
import moreIcon from "../../assets/more.svg"
import lessIcon from "../../assets/less.svg"

export function Card({ disheImg, name, price, style, ...rest }) {
  return (
    <Container>
      <div id="heart">
        <img src={heartIcon} alt="" />
      </div>
      <div id="dishe">
        <img
          src={disheImg ? disheImg : ""}
          alt={"img de " + name}
          style={style}
        />
      </div>
      <div id="name">
        <h3>{name ? name + " >" : "Nome não definido >"} </h3>
      </div>
      <div id="price">
        <p> {price ? "R$ " + price : "Preço não definido"}</p>
      </div>
      <div id="counter">
        <img src={lessIcon} alt="" />
        <p>01</p>
        <img src={moreIcon} alt="" />
      </div>
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
    </Container>
  )
}
