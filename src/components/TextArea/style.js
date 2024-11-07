import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    /* color: ${({ theme }) => theme.COLORS.Light_100}; */
    color: black;
  }
`
