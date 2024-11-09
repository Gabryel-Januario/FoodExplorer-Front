import styled from "styled-components"

export const Container = styled.div`
  section {
    margin: auto;
    align-items: center;
    text-align: center;

    width: 316px;

    margin-top: 16px;
  }

  section #back {
    display: flex;
    gap: 6px;

    font-family: "Poppins";
    font-size: 24px;
    font-weight: 400;

    margin-top: 20px;
    margin-left: 10px;
  }

  section #picture {
    width: 264px;
    height: 264px;

    margin-top: 16px;
    margin-bottom: 16px;
  }

  section h1 {
    font-family: "Poppins", sans-serif;
    font-size: 27px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  section #description {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    margin-bottom: 24px;
  }

  #SecIngredients {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    margin-bottom: 28px;
    padding: 20px;
    width: 100%;
    gap: 10px;
    row-gap: 20px;
  }

  .ingredients {
    background-color: ${({ theme }) => theme.COLORS.Dark_1000};
    width: auto;
    height: 32px;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.Light_100};

    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 12px;

    padding: 8px;
  }

  #ask {
    margin-bottom: 100px;

    display: flex;
  }

  #counter {
    margin: auto;
  }

  #button {
    margin: auto;
  }

  a{
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.Light_100};
  }
`
