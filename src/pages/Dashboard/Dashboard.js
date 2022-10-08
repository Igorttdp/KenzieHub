import styled from "styled-components";

const Home = styled.div`
  color: #fff;
  width: 100%;
  min-height: 100vh;
  background-color: var(--grey4);

  > div.content {
    padding: 0 1rem;
    max-width: 110rem;
    width: 100%;
    margin: 4rem auto 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;

    h4 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

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
    }

    span {
      font-size: 1.2rem;
      color: var(--grey1);
      transition: all 0.3s;
    }
  }
`;

export default Home;
