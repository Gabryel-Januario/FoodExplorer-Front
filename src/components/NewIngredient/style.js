import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.Light_600};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.Light_600}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  width: auto;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: red;
  }

  .button-add {
    color: orange;
  }

  > input {
    height: 56px;
    min-width: 100px; /* Largura mínima */
    width: ${({ value }) => `${(value ? value.length : 1) + 1}ch`};

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.Light_100};

    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light_600};
    }
  }
`
