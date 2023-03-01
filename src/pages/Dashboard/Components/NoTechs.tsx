import styled from "styled-components";

const NoTechsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 2rem;

  img {
    width: 100px;
    animation: reactLoop infinite 10s linear;
  }

  @keyframes reactLoop {
    100% {
      rotate: 360deg;
    }
  }
`;

const NoTechs = () => {
  return (
    <NoTechsContainer>
      <img src="/logo192.png" alt="" />
      <h4>Você não possui tecnologias</h4>
    </NoTechsContainer>
  );
};

export default NoTechs;
