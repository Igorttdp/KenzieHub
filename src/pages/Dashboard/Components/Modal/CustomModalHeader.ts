import styled from "styled-components";
import { ModalHeader } from "react-bootstrap";

const CustomModalHeader = styled(ModalHeader)`
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  background-color: #343b41;
  padding-left: 2rem;
  border-bottom: 0;

  .modal-title h4 {
    font-size: 1.4rem;
  }
`;


export default CustomModalHeader