import styled from "styled-components";

export const EmblaCarouselContainer = styled.div`
  .embla {
    max-width: 48rem;
    margin: auto;
    --slide-height: 19rem;
    --slide-spacing: 1rem;
    --slide-size: 100%;

    .embla__viewport {
      overflow: hidden;

      .embla__container {
        backface-visibility: hidden;
        display: flex;
        touch-action: pan-y pinch-zoom;
        margin-left: calc(var(--slide-spacing) * -1);

        .embla__slide {
          flex: 0 0 var(--slide-size);
          min-width: 0;
          padding-left: var(--slide-spacing);

          .embla__slide__image {
            /* box-shadow: inset 0 0 0 0.2rem ${({ theme }) => theme['detail-medium-contrast']}; */
            border-radius: 1.8rem;
            font-size: 4rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            /* height: max-content; */
            height: var(--slide-height);
            overflow: hidden;

            background-color: ${({ theme }) => theme['classi-azul-100']};

            img {
              height: auto;
              width: var(--slide-size);
            }
          }

          .embla__slide__number {
            box-shadow: inset 0 0 0 0.2rem ${({ theme }) => theme['detail-medium-contrast']};
            border-radius: 1.8rem;
            font-size: 4rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--slide-height);
          }
        }
      }
    }

    .embla__controls {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      gap: 1.2rem;
      margin-top: 1rem;

      .embla__buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
        align-items: center;

        .embla__button {
          -webkit-tap-highlight-color: rgba(${({ theme }) => theme['text-high-contrast-rgb-value']}, 0.5);
          -webkit-appearance: none;
          appearance: none;
          background-color: transparent;
          touch-action: manipulation;
          display: inline-flex;
          text-decoration: none;
          cursor: pointer;
          border: 0;
          padding: 0;
          margin: 0;
          box-shadow: inset 0 0 0 0.2rem ${({ theme }) => theme['detail-medium-contrast']};
          width: 2.8rem;
          height: 2.8rem;
          z-index: 1;
          border-radius: 50%;
          color: ${({ theme }) => theme['text-body']};
          display: flex;
          align-items: center;
          justify-content: center;

          &:disabled {
            color: ${({ theme }) => theme['detail-high-contrast']};
          }

          .embla__button__svg {
            width: 35%;
            height: 35%;
          }
        }
      }

      .embla__dots {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        margin-right: calc((2.6rem - 1.4rem) / 2 * -1);

        .embla__dot {
          -webkit-tap-highlight-color: rgba(${({ theme }) => theme['text-high-contrast-rgb-value']}, 0.5);
          -webkit-appearance: none;
          appearance: none;
          background-color: transparent;
          touch-action: manipulation;
          display: inline-flex;
          text-decoration: none;
          cursor: pointer;
          border: 0;
          padding: 0;
          margin: 0;
          width: 2.6rem;
          height: 2.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;

          &::after {
            box-shadow: inset 0 0 0 0.2rem ${({ theme }) => theme['detail-medium-contrast']};
            width: 1.4rem;
            height: 1.4rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            content: '';
          }
        }

        .embla__dot--selected:after {
          box-shadow: inset 0 0 0 0.2rem ${({ theme }) => theme['text-body']};
        }
      }
    }
  }
`