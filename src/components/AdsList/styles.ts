import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const AdsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.75rem;
`

export const AdsListGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem 1rem;
  margin-top: 1rem;
  width: 100%;

  @media ${deviceBreakpoint.tablet} {
    max-width: 75vw;
    min-width: 21rem;
  }
`