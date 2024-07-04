import styled from "styled-components";

export const AdsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0.75rem;

  width: 15rem;
  max-width: 100%;
  height: 20rem;

  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 6px;
  color: ${({ theme }) => theme['classi-azul-800']};
`

export const AdsImageWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: max-content;
  }
`

export const AdsItemPrice = styled.h3`
  margin-top: 1rem;
`
export const AdsItemDescription = styled.span`
  margin-top: 0.5rem;
`
export const AdsItemLocation = styled.span`
  display: inline-flex;
  align-items: center;
  gap: .25rem;
  margin-top: auto;
  font-size: .875rem;
`