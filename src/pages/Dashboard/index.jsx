import Home, { Header, Card } from "./Dashboard";
import TextButton from "../../styles/TextButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const token = localStorage.getItem("@kenziehub__token");
  const user = JSON.parse(localStorage.getItem("@kenziehub__user"));

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  return (
    <Home>
      <Header>
        <h2>Kenziehub</h2>
        <TextButton to={"/"} onClick={() => localStorage.clear()}>Sair</TextButton>
      </Header>
      <Card>
        <div className="content">
          <h3>Olá, {user.name}</h3>
          <span>{user.course_module}</span>
        </div>
      </Card>
      <div className="content">
        <h4>Que pena! Estamos em desenvolvimento :(</h4>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </Home>
  );
};

export default Dashboard;
