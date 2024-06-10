import styled from "styled-components";

export const AdsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0.75rem;

  width: 15rem;
  max-width: 100%;
  height: 20rem;

  background-color: ${({ theme }) => theme['chale-roxo']};
  border-radius: 6px;
  
  img {
    width: 100%;
  }
`

export const AdsItemPrice = styled.h3`
  margin-top: 1rem;
`
export const AdsItemDescription = styled.span`
  margin-top: 0.5rem;
`
export const AdsItemLocation = styled.span`
  margin-top: auto;
`