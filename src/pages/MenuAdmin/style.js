import styled from "styled-components"

export const Container = styled.div`
  menu {
    width: 372px;
   

    margin: auto;
    margin-top: 36px;

    

    
  }

  menu #input {
    margin-bottom: 36px;
  }

  menu .option h2 {
    margin-bottom: 10px;

    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 200;

    color: ${({theme}) => theme.COLORS.Light_300};
   
  }

  menu .option {
    border-bottom: 1px solid rgb(211, 211, 211, 10%);
    margin-bottom: 10px;
  }

 
`
