import { Container } from "./style"
import { Link } from "react-router-dom"

import closeIcon from "../../assets/close.svg"

export function HeaderMenu({ style, ...rest }) {
  return (
    <Container>
      <div id="line">
        <Link to="/">
          <div>
            <img src={closeIcon} alt="Icone de fechar" />
          </div>
        </Link>

        <h1>Menu</h1>
      </div>
    </Container>
  )
}
