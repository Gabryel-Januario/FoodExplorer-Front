import { Container } from "./style"
import logoImg from "../../assets/Polygon 1.svg"

export function LogoHeader({ style, ClassName, ...rest }) {
  return (
    <Container className={ClassName}>
      <img src={logoImg} alt="" />
      <h1>Food Explorer</h1>
    </Container>
  )
}
