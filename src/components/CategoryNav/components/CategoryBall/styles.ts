import styled from "styled-components";

export const CategoryBallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  min-width: 3.5rem;
  height: 3.5rem;

  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 9999px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: black;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme['classi-azul-800']};
  }
`
