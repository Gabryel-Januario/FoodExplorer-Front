import { Container } from "./style"

import MenuImage from "../../assets/Menu.svg"
import Receipt from "../../assets/Receipt.svg"
import { LogoHeader } from "../LogoHeader"

export function Header({ style, ...rest }) {
  return (
    <Container>
      <div id="line">
        <div className="iconMenu">
          <img src={MenuImage} alt="Icone de Menu" />
        </div>
        <div id="logo">
          <LogoHeader />
        </div>
        <div className="iconReceipt">
          <img src={Receipt} alt="Icone de recibo " />
        </div>
      </div>
    </Container>
  )
}
