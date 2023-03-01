import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--grey4);

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        width={80}
        height={80}
        color={"#FF427F"}
        secondaryColor={"#59323F"}
      />
    </LoaderContainer>
  );
};

export default Loader;
