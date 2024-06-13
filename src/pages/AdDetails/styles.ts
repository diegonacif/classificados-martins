import styled from "styled-components";

export const AdDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
  color: ${({ theme }) => theme['gray-800']};
  background-color: ${({ theme }) => theme['gray-100']};

  hr {
    margin: 1rem 0;
    max-width: 30rem;
    color: rgba(255, 255, 255, 0.5);
  }
`

export const AdDetailsCarousel = styled.div`
  max-width: 100vw;
  max-height: 17.5rem;

  img {
    max-width: inherit;
    max-height: inherit;
  }
`

export const AdDetailsMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  h3 {
    font-weight: 500;
  }
  
  span {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0.125rem;
  }
`

export const AdDetailsDescription = styled.div`
  display: inline-flex;
  flex-direction: column;

  h4 {
    font-weight: 500;
  }

  span {
    margin-top: .75rem;
    line-height: 1.45;
  }
`

export const AdDetailsLocation = styled.div`

  .location-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: .75rem;

    &:first-of-type {
      margin-top: 1.5rem;
    }
  }
`

export const AdDetailsAder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 8px;
  padding: 0.75rem;

  .user-name {
    margin-top: 1rem;
  }
  .user-phone {
    margin-top: .75rem;
  }
`
