import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const HeaderContainer = styled.section`
  display: grid;
  grid-template-columns: 0 auto 4rem;
  grid-template-rows: 100%;
  padding: 0.5rem 0.75rem;
  height: 4rem;
  width: 100vw;
  background-color: ${({ theme }) => theme['classi-azul-800']};
  
  .header-wrapper {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    height: 100%;
    width: max-content;
    margin: 0 auto;

    #classi-logo {
      height: 100%;
    }

    h2 {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .header-menu-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .user-btn {
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
      overflow: hidden;

      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }

    button {
      padding: 0.25rem 0.5rem;
      cursor: pointer;
    }
  }

  svg {
    cursor: pointer;
  }

  @media ${deviceBreakpoint.tablet} {
    grid-template-columns: 4rem auto 4rem;
  }
`