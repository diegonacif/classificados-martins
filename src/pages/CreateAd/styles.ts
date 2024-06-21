import styled from "styled-components";

export const CreateAdContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100dvh - 4rem);

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

  button {
    width: 80%;
    height: 2.25rem;
    margin: 0 auto;

    border: 0;
    border-radius: 6px;

    font-size: 1rem;
    color: ${({ theme }) => theme['classi-azul-100']};
    background-color: ${({ theme }) => theme['classi-azul-800']};
    cursor: pointer;
  }
`

export const CreateAdInputWrapper = styled.div`
  position: relative;

  label {
    position: absolute;
    top: 0.25rem;
    left: 0.375rem;
    font-size: 0.875rem;
    background-color: white;
    font-weight: 500;
    color: ${({ theme }) => theme['gray-800']};
  }

  input {
    width: 100%;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme['gray-200']};
    padding: 1.5rem 0.375rem 0.25rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme['gray-100']};
  }

  textarea {
    width: 100%;
    min-height: 4rem;
    height: max-content;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme['gray-200']};
    padding: 1.5rem 0.375rem 0.25rem;
    font-size: 1rem;
    resize: none;
  }
`