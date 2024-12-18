import styled from "styled-components"

export const Container = styled.div`
  width: 210px;
  height: 292px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.Dark_200};

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: relative;

  #icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  #dishe {
    margin-top: 24px;
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light_300};
  }

  #price p {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.Cake_200};
  }

  a {
    display: flex;
    flex-direction: column;
    text-align: center;

    gap: 10px;
  
  }

 
`
