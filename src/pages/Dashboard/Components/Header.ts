import styled from "styled-components";

export const Header = styled.header`
  padding: 0 1rem;
  max-width: 110rem;
  width: 100%;
  height: 7.2rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--color-primary);
    font-size: 2rem;
  }
`;

export default Header;
