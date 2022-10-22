import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)`
  text-align: center;
  width: 100%;
  background-color: var(--grey1);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.5rem 2.3rem;
  border-radius: 4px;
  transition: all 0.3s;

  :hover {
    color: var(--grey0);
    background-color: var(--color-primary-focus);
    transition: all 0.3s;
  }

  :active {
    background-color: var(--grey2);
}
`;

export default LinkButton