import { Container } from "./style"

import { FiPlus, FiX } from "react-icons/fi"

export function NewIngredients({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew} value={value}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
