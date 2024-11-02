import styled from "styled-components"

export const Container = styled.div`
  main {
    margin: auto;
    margin-top: 10px;
    margin-bottom: 230px;
    width: 85%;
    height: 923px;

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

  #ingredients {
    width: 100%;
  height: 48px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.Dark_800};
  color: ${({ theme }) => theme.COLORS.Light_500};

  margin-bottom: 8px;
  border-radius: 10px;
  }

  .added {
    width: auto;
    height: 32px;
    border-radius: 8px;
    padding: 10px 16px 10px 16px;
    text-align: center;

    background-color: ${({theme}) => theme.COLORS.Light_600};
  }


  #button {
    width: 100%;
  }
`
