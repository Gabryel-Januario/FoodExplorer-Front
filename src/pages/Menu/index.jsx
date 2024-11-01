import { Container } from "./style"
import { FiSearch } from "react-icons/fi"

import { HeaderMenu } from "../../components/HeaderMenu"
import { Input } from "../../components/Input"

export function Menu() {
  return (
    <Container>
      <HeaderMenu />

      <menu>
        <div id="input">
          <Input
            icon={FiSearch}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <section id="options">
         
          <div className="option">
            <h2>Sair</h2>
          </div>
        </section>
      </menu>
    </Container>
  )
}
