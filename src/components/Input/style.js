import styled from "styled-components"

export const Container = styled.div`
  width: 321px;
  height: 48px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.Dark_900};
  color: ${({ theme }) => theme.COLORS.Light_500};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.Light_100};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.Light_500};
    }
  }
  > svg {
    margin-left: 16px;
  }
`
