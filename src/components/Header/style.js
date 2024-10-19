import styled from "styled-components";

export const Container = styled.div`
    height: 114px;
    width: 100%;

    
    
    background-color: ${({theme}) => theme.COLORS.Dark_700};

    
    
   display: block;
   block-size: auto;




    #line {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        margin-top: auto;
        
        align-items: center;
        height: 114px;

       

    }

    #logo img {
        width: 25px;
        height: 25px;
    }

    .icon{
        width: 24px;
        height: 18px;
    }

   
`