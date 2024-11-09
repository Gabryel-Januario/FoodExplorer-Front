import styled from "styled-components"

export const Container = styled.div`
  main {
    margin: auto;
    margin-top: 10px;
    margin-bottom: 25%;
    width: 85%;
    height: auto;
  }

  #toBack {
    display: flex;
    gap: 10px;

    margin-bottom: 24px;

    > p {
      font-size: 20px;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;

    margin-bottom: 50px;
  }

  .inputWrapper {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    > label {
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.Light_400};
    }
  }

  .inputWrapper label {
    margin-bottom: 8px;
  }

  #select {
    display: flex;
    flex-direction: column;
  }

  select {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    background-color: ${({ theme }) => theme.COLORS.Dark_900};
    color: ${({ theme }) => theme.COLORS.Light_200};

    margin-bottom: 8px;
    border-radius: 10px;
    border: none;
  }

  .ingredients {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  #button {
    width: 100%;
  }

  a{
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.Light_100};
  }
`
