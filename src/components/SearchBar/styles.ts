import styled from "styled-components";

export const SearchBarContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 0.75rem ;

  height: max-content;
  width: 100vw;

  background-color: ${({ theme }) => theme['classi-azul-100']};
  color: ${({ theme }) => theme['classi-azul-800']};

  .input-wrapper {
    position: relative;
    width: max-content;

    svg {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

export const SearchBarInput = styled.input`
  height: 2.25rem;
  width: 100%;
  max-width: 25rem;
  border: none;
  border-radius: 16px;
  padding: 0 2.5rem 0 1rem;

  font-size: 1.125rem;

  filter: drop-shadow(0px 3px 4px ${({ theme }) => theme['gray-400']});

  &::placeholder {
    font-weight: 400;
  }
`