import styled from "styled-components"

export const Container = styled.div`
  height: 114px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  display: block;

  block-size: auto;

  #line {
    display: flex;
    justify-content: space-between;
    padding: 56px 28px 24px 28px;

    align-items: center;
    height: 114px;
  }

  #logo img {
    width: 25px;
    height: 25px;
  }

  .icon {
    width: 24px;
    height: 18px;
  }
`
