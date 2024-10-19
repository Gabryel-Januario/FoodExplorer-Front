import styled from "styled-components"

export const Container = styled.div`
  width: ${({ size }) => size || "285px"};
  height: ${({ size }) => size || "44px"};

  margin: auto;

  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: ${({ imgSize }) => imgSize || "auto"};
    height: ${({ imgSize }) => imgSize || "auto"};
    margin: 0;
  }

  h1 {
    margin: 0;

    font-size: ${({ fontSize }) => fontSize || "37px"};
    font-family: "Roboto", sans-serif;
    font-weight: 800;
  }
`
