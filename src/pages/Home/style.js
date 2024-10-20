import styled from "styled-components";

export const Container = styled.div`

#block {
    width:300px ;
    height: 120px;

    margin: 44px 16px auto 36px;
    

    border-radius: 5px;
    background-image: linear-gradient(rgba(9, 30, 38, 1), rgba(0, 19, 28, 1));

    display: flex;
    
}



#macarom {
    position: absolute;
    top: 29%;
    left: 25%;
    transform: translate(-50%, -52%);
    z-index: 1;
    width: 158px;
    height: 149px;
    

   
}

#text {
    margin: 25px 0px 20px auto;
    padding:4px;
    
    text-align: center;

    width: 180px;



}

#text h2{
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    margin-bottom: 4px;
    font-weight: 500;
    text-align: start;
}

#text p{
    font-family: "Poppins", sans-serif;
    font-size: 10.5px;
    font-weight: 300;
    text-align: start;
}
`