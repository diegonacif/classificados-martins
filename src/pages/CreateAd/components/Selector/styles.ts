import styled from "styled-components";

// Wrapper para o FormControl
export const SelectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  padding: 1.25rem .5rem .75rem;
  background-color: ${({ theme }) => theme['gray-100']};
  border: 2px solid ${({ theme }) => theme['gray-200']};
  border-radius: 6px;
  transition: border 0.2s;
  font-size: 1rem;

  &:focus {
    outline: 0;
    border: 2px solid ${({ theme }) => theme['classi-azul-400']};
    transition: border 0.3s;
  }

  &#no-value-selected {
    color: ${({ theme }) => theme['gray-500']};
  }
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: -.55rem;
  left: .5rem;
  padding: 0 .25rem;
  background-color: ${({ theme }) => theme['gray-100']};
  
  font-size: .875rem;
  font-weight: 500;
`;

export const MenuItem = styled.option`
  color: blue;
`;