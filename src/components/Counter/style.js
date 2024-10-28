import styled from "styled-components"

export const Container = styled.div`
display: flex;
    gap: 15px;

    font-family: "Roboto";

    color: ${({ theme }) => theme.COLORS.Light_100};

    > p {
      color: ${({ theme }) => theme.COLORS.Light_300};
    }
  
`
