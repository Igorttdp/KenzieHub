import Home, { Header, Card, TechContainer } from "./Dashboard";
import Techs from "../../components/Techs";
import TextButton from "../../styles/TextButton";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Context
import { useContext } from "react";
import {
  IAddTechsDataProps,
  TechsContext,
} from "../../context/Technologies/TechsContext";

// Hook Form
import { useForm } from "react-hook-form";

// toast
import { ToastContainer } from "react-toastify";

// Bootstrap
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./BSModal.css";

// Images
import add from "../../img/add.svg";
import remove from "../../img/remove.svg";

const Dashboard = () => {
  const token = localStorage.getItem("@kenziehub__token");
  const info = localStorage.getItem("@kenziehub__user");
  const { techs, addTech } = useContext(TechsContext);

  const [show, setShow] = useState(false);

  let profile;

  if (info) {
    profile = JSON.parse(info);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<IAddTechsDataProps>();

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      navigate("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        title: "",
        status: "",
      });
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <Home>
      <>
        <Header>
          <h2>Kenziehub</h2>
          <TextButton to={"/"} onClick={() => localStorage.clear()}>
            Sair
          </TextButton>
        </Header>
        <Card>
          <div className="content">
            <h3>Olá, {profile?.name}</h3>
            <span>{profile?.course_module}</span>
          </div>
        </Card>
        <TechContainer img={add} remove={remove}>
          <div className="header">
            <h4>Tecnologias</h4>
            <button onClick={handleShow}></button>
          </div>
          {techs.length !== 0 && (
            <div className="Tcontainer">
              <Techs />
            </div>
          )}
        </TechContainer>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar Tecnologia</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              className="modalForm"
              onSubmit={handleSubmit((data) => {
                addTech(data);
                handleClose();
              })}
            >
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ex: Javascript"
                  required
                  {...register("title")}
                />
              </div>
              <div>
                <label htmlFor="status">Selecionar status</label>
                <select id="status" {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>
              <button>Cadastrar Tecnologia</button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
      <ToastContainer />
    </Home>
  );
};

export default Dashboard;
