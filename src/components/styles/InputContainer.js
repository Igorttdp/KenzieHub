import styled from "styled-components";

const InputContainer = styled.div`
  max-width: 33rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 2.2rem;
  color: var(--grey0);
  position: relative;

  label {
    font-size: 1.2rem;
  }

  select {
    cursor: pointer;
  }

  input,
  select {
    min-height: 48px;
    font-size: 1.6rem;
    border: 1.22px solid transparent;
    padding: 1.05rem 1.62rem;
    background-color: var(--grey2);
    color: var(--grey0);
    border-radius: 4px;

    ::placeholder {
      color: var(--grey1);
    }

    :focus {
      border-color: var(--grey0);
      ::placeholder {
        color: var(--grey0);
      }
    }
  }

  span {
    font-size: 1rem;
    color: var(--grey1);
  }
`;

export default InputContainer;
