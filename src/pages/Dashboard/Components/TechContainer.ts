import styled from "styled-components";

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

      @media (max-width: 800px) {
        padding-left: 2%;
        padding-right: 2%;
      }

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

export default TechContainer;
