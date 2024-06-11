import styled from "styled-components";

export const CategoryNavContainer = styled.section`
  display: flex;
  height: max-content;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  overflow-x: auto;

  background-color: ${({ theme }) => theme['classi-azul-100']};

  button {
    /* height: 1.75rem;
    width: 4.5rem; */
    border: none;
    border-radius: 3px;
    background-color: ${({ theme }) => theme['classi-azul-800']};
    color: ${({ theme }) => theme['classi-azul-200']};

    font-size: .875rem;
    font-weight: 500;
    padding: .375rem .5rem;

    cursor: pointer;
  }
`