import styled from "styled-components";

export const CreateAdContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(max-content - 4rem);

  background-color: ${({ theme }) => theme['gray-100']};

  h2 {
    text-align: center;
    color: ${({ theme }) => theme['classi-azul-800']};
    margin-top: 1.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0.75rem;
    color: ${({ theme }) => theme['classi-azul-800']};
  }

  #submit-button {
    width: 80%;
    height: 2.25rem;
    margin: 1rem auto 0;

    border: 0;
    border-radius: 6px;

    font-size: 1rem;
    color: ${({ theme }) => theme['classi-azul-100']};
    background-color: ${({ theme }) => theme['classi-azul-800']};
    cursor: pointer;
  }

  #images-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme['gray-100']};
    border: 2px solid ${({ theme }) => theme['classi-azul-800']};
    border-radius: 5px;

    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme['classi-azul-800']};

    cursor: pointer;
  }

  #delete-image-button {
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(255, 255, 255, 0.6);
    color: white;
    border: none;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
  }
`

export const CreateAdInputWrapper = styled.div`
  position: relative;

  textarea {
    width: 100%;
    min-height: 4rem;
    height: max-content;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme['gray-200']};
    padding: 1.5rem 0.375rem 0.25rem;
    font-size: 1rem;
    resize: none;
    transition: border 0.2s;

    &:focus-visible {
      outline: 0;
      border: 2px solid ${({ theme }) => theme['classi-azul-400']};
      transition: border 0.3s;
    }
  }
`

export const AdInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme['gray-200']};
  padding: 1.25rem .5rem .75rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme['gray-100']};
  transition: border 0.2s;

  &:focus-visible {
    outline: 0;
    border: 2px solid ${({ theme }) => theme['classi-azul-400']};
    transition: border 0.3s;
  }

  &.with-error {
    border: 2px solid ${({ theme }) => theme['error']};
    transition: border 0.3s;
  }
`

export const AdInputLabel = styled.label`
  position: absolute;
  top: -.55rem;
  left: .5rem;
  padding: 0 .25rem;
  font-size: .875rem;
  
  font-weight: 500;
  background-color: ${({ theme }) => theme['gray-100']};
`

export const ImgPreviewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 2px solid ${({ theme }) => theme['gray-200']};
  border-radius: 6px;
  height: 14.5rem;

  &#grid-version {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0.75rem;

    #done-icon {
      margin: auto;
    }
  }

  .plus-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    margin: auto;
    cursor: pointer;

    span {
      font-size: .75rem;
    }
  }

  .plus-button {
    position: relative;
    display: flex;
    align-items: end;
    justify-content: left;
    height: 2.5rem;
    width: 2.5rem;

    #plus-circle {
      position: absolute;
      right: 0;
      top: 0.125rem;
    }
  }

  .preview-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
    border: 2px solid ${({ theme }) => theme['gray-200']};
    border-radius: 6px;
    background-color: ${({ theme }) => theme['gray-200']};
    overflow: hidden;

    .preview-img {
      width: 100%;
      max-width: 100%;
      height: max-content;
    }
  }

  #preview-counter {
    position: absolute;
    bottom: -1.125rem;
    left: .5rem;
    font-size: .75rem;
  }
`

export const ErrorMsg = styled.p`
  font-size: .875rem;
  color: ${({ theme }) => theme['error']};
  margin-left: .375rem;
`
