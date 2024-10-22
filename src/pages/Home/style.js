import styled from "styled-components"

export const Container = styled.div`
  #block {
    width: auto;
    height: 120px;

    margin: 44px 16px auto 36px;

    border-radius: 5px;
    background-image: linear-gradient(rgba(9, 30, 38, 1), rgba(0, 19, 28, 1));

    display: flex;

    position: relative;
  }

  #macarom {
    width: 191px;
    height: 149px;

    position: relative;
    top: -19px;
    left: -37.5px;

    padding: 10px;
  }

  #text {
    position: absolute;
    width: 180px;
    margin: auto;
    padding: 5px;

    top: 55%;
    left: 71%;
    transform: translate(-50%, -50%);
  }

  #text h1 {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  #text p {
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    font-weight: 300;
    padding: 0px;
  }
  //Dishes //

  #meals {
    margin-top: 30px;
    
  }

  #meals h2 {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light_300};

    margin-left: 24px;

   
  }

  

  .inner {
    display: flex;
    gap: 16px;
  }

  

  .carousel {
    overflow: hidden;
    margin: 24px auto 24px 24px;
   
  }
`
