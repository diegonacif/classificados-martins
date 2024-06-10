import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem;
  height: 4rem;
  width: 100vw;
  background-color: ${({ theme }) => theme['chale-rosa']};

  .header-wrapper {
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
`