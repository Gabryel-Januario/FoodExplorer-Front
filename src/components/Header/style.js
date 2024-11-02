import styled from "styled-components"

export const Container = styled.div`
  height: 114px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  display: block;

  block-size: auto;

  #logo img {
    width: 25px;
    height: 25px;
  }

  .iconMenu {
    width: 24px;
    height: 18px;
  }

  &.admin {
    p {
      color: ${({ theme }) => theme.COLORS.Cake_200};

      

      font-family: "Roboto", sans-serif;

     
    }

    #line {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 56px 28px 24px 28px;

      height: 114px;
    }
  }

  &.user {
    #line {
      display: flex;
      justify-content: space-between;
      padding: 56px 28px 24px 28px;

      align-items: center;

      height: 114px;
    }

    .iconReceipt {
      width: 32px;
      height: 32px;
    }
  }
`
