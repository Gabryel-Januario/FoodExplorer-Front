import { Container } from "./style"

import lessIcon from "../../assets/less.svg"
import moreIcon from "../../assets/more.svg"

export function Counter(style, ...rest) {
  return (
    <Container style={style} {...rest} >
      <img src={lessIcon} alt="Simbolo de subtração" />
      <p>01</p>
      <img src={moreIcon} alt="Simbolo de adição" />
    </Container>
  )
}
