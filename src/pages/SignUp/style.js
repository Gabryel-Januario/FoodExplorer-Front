import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;

    margin: auto;
    margin-top: 22px;

    color: ${({theme}) => theme.COLORS.Light_100} 
  }
`

export const Form = styled.div`
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  margin-top: 0;
  margin-bottom: 0;

  .inputWrapper {
    margin-bottom: 32px;
    width: 321px;
  }

  .inputWrapper label {
    font-family: "Roboto", sans-serif;
    font-weight: 300;

    text-decoration: none;
    display: block;

    text-align: left;

    margin-bottom: 8px;
  }
`
