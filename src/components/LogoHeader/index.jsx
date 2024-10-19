import { Container } from "./style"
import logoImg from "../../assets/Polygon 1.png"

export function LogoHeader({ style, ...rest }) {
  return (
    <Container>
      <img src={logoImg} alt="" />
      <h1>Food Explorer</h1>
    </Container>
  )
}
