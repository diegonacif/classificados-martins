import styled from "styled-components";

export const MenuButtonContainer = styled.div`
  position: relative;

  svg {
    cursor: pointer;
  }

  .menu-modal {
    position: absolute;
    top: 2.75rem;
    right: 2.75rem;
    z-index: 2;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    width: 12rem;
    height: max-content;
    padding: 1rem 0.5rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme['classi-azul-800']};
    filter: drop-shadow(-2px 2px 3px ${({ theme }) => theme['classi-azul-200']});
    color: ${({ theme }) => theme['classi-azul-200']};
    font-weight: bold;

    hr {
      width: 90%;
      margin: 0.5rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.6);
      border-bottom: 0;
      border-left: 0;
      border-right: 0;
    }
    
    .menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      cursor: pointer;
      line-height: 1.75rem;
      border-radius: 4px;
      transition: background-color 0.1s;

      & + .menu-item {
        margin-top: 0.75rem;
      }

      /* a {
        width: 100%;
        height: 100%;
        border-radius: 4px;

        &:active {
          background-color: ${({ theme }) => theme['chale-rosa']};
          transition: background-color 0.1s;
        }
      } */
    }
  }
`