import styled from "styled-components";

export const SearchBarContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 2rem;
  width: 100vw;
  background-color: ${({ theme }) => theme['chale-roxo']};

  input {
    height: 1.25rem;
    width: 10rem;
    border: none;
    border-radius: 4px;
    padding: 0 0.5rem;
  }
`