import styled from "styled-components";

const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--grey4);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  padding: 6rem 0;

  .MainDiv__Header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    max-width: 37rem;
    width: 100%;

    h1 {
      font-size: 2.5rem;
      color: var(--color-primary);
    }
  }

  .RegisterContainer {
    padding-top: 10px;
    max-width: 37rem;
    width: 100%;
    min-height: 98rem;
    background-color: var(--grey3);
    border-radius: 4px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
  }

  .RegisterContainer__Header {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2.2rem;

    h2 {
      font-size: 1.8rem;
    }

    span {
      font-size: 1.2rem;
    }

    span {
      color: var(--grey1);
    }
  }

  @media (max-width: 320px) {
    .MainDiv__Header,
    .RegisterContainer {
      max-width: 31rem;
    }
  }
`;

export default RegisterContainer
