import styled from "styled-components";

interface ILoginContainerProps {
  children: JSX.Element|JSX.Element[];
}

const LoginContainer = styled.div<ILoginContainerProps>`
  width: 100%;
  min-height: 100vh;
  background-color: var(--grey4);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  h1 {
    color: var(--color-primary);
    font-size: 2.5rem;
  }

  .loginContainer {
    max-width: 37rem;
    width: 100%;
    min-height: 50rem;
    background-color: var(--grey3);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    border-radius: 4px;

    h2 {
      font-size: 1.8rem;
    }
  }

  .registerField {
    max-width: 30rem;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2.2rem;

    @media (max-width: 320px) {
      max-width: 31rem;
    }

    span {
      font-size: 1.2rem;
      color: var(--grey1);
    }
  }
`;

export default LoginContainer;
