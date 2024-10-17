import { Container } from "./styles"

export function Button({ title, style, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} style={style} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  )
}
