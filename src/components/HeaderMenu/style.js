import styled from "styled-components"

export const Container = styled.div`
  height: 114px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  display: block;

  block-size: auto;

  #line {
    display: flex;
    gap: 16px;
    padding: 56px 28px 24px 28px;

    align-items: center;
    height: 114px;
  }

   img {
    width: 25px;
    height: 25px;
  }

  h1{
    font-family: "Roboto", sans-serif;
    font-weight:400;
  }
`
