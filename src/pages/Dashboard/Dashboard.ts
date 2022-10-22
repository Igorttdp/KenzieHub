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
      margin: 0;
    }

    span {
      font-size: 1.2rem;
      color: var(--grey1);
      transition: all 0.3s;
    }
  }
`;


interface ITechContainerProps {
  img: string;
  remove: string;
}

export const TechContainer = styled.div<ITechContainerProps>`
  width: 100%;
  padding: 1.2rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 2.1rem;

  .header {
    width: 100%;
    max-width: 110rem;
    margin: 0 auto;
    padding: 1.2rem 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 1.6rem;
      margin: 0;
    }

    button {
      background-color: #212529;
      background-image: url(${(props) => props.img});
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 4px;
      width: 32px;
      height: 32px;
      padding: 1.1rem;
    }
  }

  .Tcontainer {
    width: 100%;
    max-width: 110rem;
    margin: 0 auto;
    background-color: #212529;
    border-radius: 4px;

    ul {
      max-width: 73.2rem;
      width: 100%;
      margin: 0 auto;
      padding: 2.3rem 0;
      display: flex;
      flex-flow: column nowrap;
      gap: 1.6rem;

      li {
        width: 100%;
        background-color: #121214;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 1.3rem 1.8rem 1.3rem 2.2rem;
        border-radius: 4px;
        transition: all 0.3s;

        :hover {
          background-color: #343b41;
          transition: all 0.3s;
        }

        h3 {
          font-size: 1.4rem;
          margin: 0;
        }

        > div {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          gap: 2.5rem;

          span {
            color: #868e96;
          }

          button {
            background-color: transparent;
            background-image: url(${(props) => props.remove});
            background-repeat: no-repeat;
            width: 13px;
            height: 12px;
          }
        }
      }
    }
  }
`;

export default Home;
