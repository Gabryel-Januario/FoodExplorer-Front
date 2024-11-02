import { Container } from "./style"

import MenuImage from "../../assets/Menu.svg"
import Receipt from "../../assets/Receipt.svg"
import { LogoHeader } from "../LogoHeader"

const ReceiptIcon = <img src={Receipt} alt="Icone de recibo " />
const Admin = <p>Admin</p>

export function Header({ style, isAdmin, ...rest }) {
  return (
    <Container className={isAdmin ? "admin" : "user"}>
      <div id="line">
        <div className="iconMenu">
          <img src={MenuImage} alt="Icone de Menu" />
        </div>
        <div id="logo">
          <LogoHeader />
        </div>
        <div className="iconReceipt">{isAdmin ? Admin : ReceiptIcon}</div>
      </div>
    </Container>
  )
}
