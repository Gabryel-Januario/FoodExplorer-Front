import { Container } from "./style"
import { Logo } from "../Logo"
import MenuImage from "../../assets/Menu.png"
import Receipt from "../../assets/Receipt.png"
import { LogoHeader } from "../LogoHeader"

export function Header({ style, ...rest }) {
  return (
    <Container>
      <div id="line">
        <div className="icon">
          <img src={MenuImage} alt="Icone de Menu" />
        </div>
        <div id="logo">
          <LogoHeader />
        </div>
        <div className="icon">
          <img src={Receipt} alt="Icone de recibo " />
        </div>
      </div>
    </Container>
  )
}
