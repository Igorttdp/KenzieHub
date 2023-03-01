import styled from "styled-components";
import { ModalHeader } from "react-bootstrap";

const CustomModalHeader = styled(ModalHeader)`
  padding-top: 1.3rem !important;
  padding-bottom: 1.3rem !important;
  background-color: #343b41 !important;
  padding-left: 2rem !important;
  border-bottom: 0 !important;

  .modal-title h4 {
    font-size: 1.4rem !important;
  }
`;

export default CustomModalHeader;
