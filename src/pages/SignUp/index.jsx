import { FiMail, FiLock } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"

import { Container, Form } from "./style"
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Logo style={{ margin: "80px auto 50px auto" }} />
      <Form>
        <div id="inputWrapper">
          <label htmlFor="password">Senha</label>
          <Input
            id="name"
            placeholder="Exemplo: Maria Silva"
            icon={AiOutlineUser}
            type="text"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, ""))
            }
          />
        </div>

        <div id="inputWrapper">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            icon={FiMail}
            type="text"
          />
        </div>

        <div id="inputWrapper">
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            placeholder="No mínimo 6 caracteres"
            icon={FiLock}
            type="password"
          />
        </div>

        <Button title="Entrar" style={{ width: "321px", margin: "10px" }} />
      </Form>

      <p>Já tenho uma conta</p>
    </Container>
  )
}
