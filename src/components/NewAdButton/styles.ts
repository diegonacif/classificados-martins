import styled from "styled-components";

export const NewAdButtonContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  width: max-content;
  height: max-content;
  background-color: ${({ theme }) => theme['classi-azul-200']};
  color: ${({ theme }) => theme['gray-800']};
  padding: .125rem .5rem;
  border-radius: 6px;
  
  cursor: pointer;
  
  h4 {
    font-size: 1rem;
    font-weight: 400;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
`