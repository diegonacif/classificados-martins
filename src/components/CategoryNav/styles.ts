import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const CategoryNavContainer = styled.section`
  display: flex;
  height: max-content;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
  padding: 1rem .75rem;
  overflow-x: auto;

  background-color: ${({ theme }) => theme['classi-azul-100']};

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

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

  @media ${deviceBreakpoint.tablet} {
    justify-content: center;
  }
`