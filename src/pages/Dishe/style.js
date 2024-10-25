import styled from "styled-components"

export const Container = styled.div`
  section {
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  section #back {
    display: flex;
    gap: 6px;

    font-family: "Poppins";
    font-size: 24px;
    font-weight: 400;
  }

  .ingredients {
    background-color: ${({ theme }) => theme.COLORS.Dark_1000};
    width: 65;
    height: 32px;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.Light_100};

    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
  }
`
