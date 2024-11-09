import { Container } from "./style"
import { Link } from "react-router-dom"

import MenuImage from "../../assets/Menu.svg"
import Receipt from "../../assets/Receipt.svg"
import { LogoHeader } from "../LogoHeader"

const ReceiptIcon = <img src={Receipt} alt="Icone de recibo " />
const Admin = <p>Admin</p>

export function Header({ style, isAdmin, ...rest }) {
  return (
    <Container className={isAdmin ? "admin" : "user"}>
      <div id="line">
        <Link to="/menu">
          <div className="iconMenu">
            <img src={MenuImage} alt="Icone de Menu" />
          </div>
        </Link>
        <div id="logo">
          <LogoHeader />
        </div>
        <div className="iconReceipt">{isAdmin ? Admin : ReceiptIcon}</div>
      </div>
    </Container>
  )
}
