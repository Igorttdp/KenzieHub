import Home, { Header, Card } from "./Dashboard";
import TextButton from "../../components/styles/TextButton";

const Dashboard = () => {
  return (
    <Home>
        <Header>
          <h2>Kenziehub</h2>
          <TextButton to={"/"}>Sair</TextButton>
        </Header>
        <Card>
            <div className="content">
                <h3>Olá, Samuel Leão</h3>
                <span>Primeiro Módulo (Introdução ao front-end)</span>
            </div>
        </Card>
        <div className="content">
            <h4>Que pena! Estamos em desenvolvimento :(</h4>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
    </Home>
  );
};

export default Dashboard;
