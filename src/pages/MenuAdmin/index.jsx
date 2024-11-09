import { Container } from "./style"
import { FiSearch } from "react-icons/fi"

import { Link } from "react-router-dom"

import { HeaderMenu } from "../../components/HeaderMenu"
import { Input } from "../../components/Input"

export function MenuAdmin() {
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
          <Link to="/new">
            <div className="option">
              <h2>Novo prato</h2>
            </div>
          </Link>
          <div className="option">
            <h2>Sair</h2>
          </div>
        </section>
      </menu>
    </Container>
  )
}
