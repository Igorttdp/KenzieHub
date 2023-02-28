import styled from "styled-components";
import { Form } from "react-bootstrap";

const CustomForm = styled(Form)`
  height: 30rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  div {
    display: flex;
    flex-flow: column nowrap;
    gap: 2.2rem;
    max-width: 33rem;
    width: 100%;

    label {
      font-size: 1.2rem;
      color: #fff;
    }

    input,
    select {
      border: 1px solid transparent;
      border-radius: 4px;
      font-size: 1.6rem;
      width: 100%;
      padding: 1.05rem 1.62rem;
      color: #fff;
      background: #343b41;

      :focus {
        border: 1px solid #fff;
      }
    }
  }

  button {
    max-width: 33rem;
    width: 100%;
    background: #ff577f;
    padding: 1.05rem 0;
    font-size: 1.6rem;
    border-radius: 4px;

    :hover {
      background: #f33f69;
    }
  } 
`;

export default CustomForm;
