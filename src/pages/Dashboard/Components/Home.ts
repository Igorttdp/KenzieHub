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

export default Home