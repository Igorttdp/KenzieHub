import { Home, Header, Card, TechContainer } from "./components";
import Techs from "./components/Techs";
import TextButton from "../../components/TextButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Context
import { useContext } from "react";
import { TechsContext } from "../../context/Technologies/TechsContext";

// toast
import { ToastContainer } from "react-toastify";

// Images
import add from "../../img/add.svg";
import remove from "../../img/remove.svg";
import CustomModal from "./components/Modal/CustomModal";

const Dashboard = () => {
  const token = localStorage.getItem("@kenziehub__token");
  const info = localStorage.getItem("@kenziehub__user");
  const { techs } = useContext(TechsContext);

  let profile;

  if (info) {
    profile = JSON.parse(info);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTechs = () => {
    if (techs.length !== 0)
      return (
        <div className="Tcontainer">
          <Techs />
        </div>
      );
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      navigate("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Home>
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
        {renderTechs()}
      </TechContainer>

      <CustomModal show={show} handleClose={handleClose} />
      <ToastContainer />
    </Home>
  );
};

export default Dashboard;
