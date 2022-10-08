import styled from "styled-components";

const MainButton = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  background-color: var(--color-primary);
  padding: 1.5rem 2.3rem;
  border-radius: 4px;

  :hover {
    background-color: var(--color-primary-focus);
  }

  :disabled {
    background-color: var(--color-primary-negative);

    :hover {
      background-color: var(--grey1);
    }

    :active {
      transition: all 0.15s;
      background-color: var(--grey2);
    }
  }
`;

export default MainButton;
