import { Container } from "./style"
import { LogoHeader } from "../LogoHeader"

export function Footer() {
  return (
    <Container>
      <LogoHeader ClassName="logo" />
      <p>&copy; 2024 - Todos os direitos reservados.</p>
    </Container>
  )
}
