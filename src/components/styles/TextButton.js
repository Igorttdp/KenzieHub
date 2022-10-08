import { Link } from "react-router-dom";
import styled from "styled-components";

const TextButton = styled(Link)`
  min-height: 3.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.15rem 1.6rem;
  background-color: var(--grey3);
  color: var(--grey0);
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  :hover {
    color: var(--grey0);
    background-color: var(--grey2);
  }
`;

export default TextButton;
