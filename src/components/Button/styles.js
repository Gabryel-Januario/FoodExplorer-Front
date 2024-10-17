import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.Tomato_100};
  color: ${({ theme }) => theme.COLORS.Light_100};
  font-family: "Poppins", sans-serif;

  height: 48px;
  width: 316px;

  border: 0;
  border-radius: 5px;

  font-weight: 500;

  padding: 12px 32px;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }
`
