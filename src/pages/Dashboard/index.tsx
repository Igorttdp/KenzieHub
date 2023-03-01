// React
import { useEffect, useState } from "react";

// Components
import { Home, Header, Card, TechContainer } from "./components";
import Techs from "./components/Techs";
import TextButton from "../../components/TextButton";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Context
import { useContext } from "react";

// toast
import { ToastContainer } from "react-toastify";

// Images
import add from "../../img/add.svg";
import remove from "../../img/remove.svg";
import CustomModal from "./components/Modal/CustomModal";
import { UserContext } from "../../context/Auth/UserContext";

const Dashboard = () => {
  const token = localStorage.getItem("@kenziehub__token");
  const firstLogin = sessionStorage.getItem("@kenziehub__first_login");
  const { profile, getProfile } = useContext(UserContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTechs = () => {
    if (profile.techs.length !== 0)
      return (
        <div className="Tcontainer">
          <Techs />
        </div>
      );
  };

  const clearStorage = () => localStorage.clear();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      navigate("/");
    }

    if (firstLogin) {
      window.addEventListener("beforeunload", (e: BeforeUnloadEvent) => {
        sessionStorage.clear();
      });
    } else getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Home>
      <Header>
        <h2>Kenziehub</h2>
        <TextButton to={"/"} onClick={clearStorage}>
          Sair
        </TextButton>
      </Header>
      <Card>
        <div className="content">
          <h3>Olá, {profile.name}</h3>
          <span>{profile.course_module}</span>
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
