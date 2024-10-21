import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;

  align-items: stretch;

  header {
    margin: auto;
    margin-top: 70px;
  }

  header p {
    font-size: 15px;
    font-weight: 200;
    font-family: "Roboto", sans-serif;

    margin: 16px auto;

    width: 308px;
    height: 54px;

    text-align: center;
  }

  #block {
    width: 330px;
    height: 180px;

    margin: auto;
    margin-top: 166px;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: linear-gradient(rgba(9, 30, 38, 1), rgba(0, 19, 28, 1));

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  #block p {
    text-align: center;
    margin-top: 10px;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  section img {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 400px;
    height: 550px;

    

    z-index: 0;
  }
`
