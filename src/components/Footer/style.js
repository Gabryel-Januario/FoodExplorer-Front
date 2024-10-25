import styled from "styled-components"
import { LogoHeader } from "../LogoHeader"

export const Container = styled.div`
  width: 100%;
  height: 77px;

  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  display: flex;
  align-items: center;
  font-size: 12px;

  padding: 0;

  .logo {
    width: 50%;
    margin: auto 10px auto 10px;
  }

  .logo img {
    filter: grayscale(100%);
  }

  .logo h1 {
    color: gray;
  }

  position: fixed;
  bottom: 0;
  left: 0;
  
  z-index: 10;
`
