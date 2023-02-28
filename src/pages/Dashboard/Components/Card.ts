import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 12rem;
  padding: 1.2rem;
  background-color: var(--grey4);
  transition: all 0.3s;
  border: 1px solid var(--grey3);
  border-left: none;
  border-right: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  :hover {
    transition: all 0.3s;
    background-color: var(--grey2);

    div.content span {
      color: var(--grey0);
      transition: all 0.3s;
    }
  }

  div.content {
    max-width: 110rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1.8rem;
      margin: 0;
    }

    span {
      font-size: 1.2rem;
      color: var(--grey1);
      transition: all 0.3s;
    }
  }
`;

export default Card;
