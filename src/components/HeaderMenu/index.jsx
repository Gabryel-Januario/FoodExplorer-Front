import { Container } from "./style"

import closeIcon from "../../assets/close.svg"


export function HeaderMenu({ style, ...rest }) {
  return (
    <Container>
      <div id="line">
        <div>
          <img src={closeIcon} alt="Icone de fechar" />
        </div>
        
        <h1>Menu</h1>
       
      </div>
    </Container>
  )
}
