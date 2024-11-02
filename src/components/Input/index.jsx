import { Container } from "./style"

export function Input({ icon: Icon, style, ...rest }) {
  return (
    <Container style={style}>
      {Icon && <Icon size={20} id="icon" />}
      <input {...rest}  />
    </Container>
  )
}
