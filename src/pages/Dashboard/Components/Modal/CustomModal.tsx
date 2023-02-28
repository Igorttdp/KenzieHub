import { Modal } from "react-bootstrap";
import styled from "styled-components";
import TechsForm, { iTechsProps } from "../Techs/TechsForm";
import CustomModalBody from "./CustomModalBody";
import CustomModalHeader from "./CustomModalHeader";

const CustomModalStyled = styled(Modal)`
  .modal-content {
    color: #fff !important;
    background-color: #343b41 !important;
    max-width: 36.9rem;
    width: 100%;
    min-height: 30rem;
    margin: 0 auto;
  }
`;

interface iCustomModalProps extends iTechsProps {
  show: boolean;
}

const CustomModal = ({ show, handleClose }: iCustomModalProps) => {
  return (
    <CustomModalStyled show={show} onHide={handleClose}>
      <CustomModalHeader closeButton>
        <Modal.Title>Cadastrar Tecnologia</Modal.Title>
      </CustomModalHeader>
      <CustomModalBody>
        <TechsForm handleClose={handleClose} />
      </CustomModalBody>
    </CustomModalStyled>
  );
};

export default CustomModal;
