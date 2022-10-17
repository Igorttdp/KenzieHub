import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [techs, setTechs] = useState([]);
  const token = localStorage.getItem("@kenziehub__token");

  const login = async (data) => {
    try {
      const response = await api.post("/sessions", data, {
        headers: {
          Authorization: null,
        },
      });
      localStorage.setItem("@kenziehub__token", response.data.token);
      localStorage.setItem(
        "@kenziehub__user",
        JSON.stringify(response.data.user)
      );
      navigate("/Dashboard");
    } catch (e) {
      toast.error("Email ou Senha incorretos");
    }
  };

  const registerUser = async (data) => {
    const handleData = {
      name: data.name,
      email: data.email,
      password: data.password,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };

    try {
      await api.post("/users", handleData);

      toast.success("Cadastro efetuado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      toast.info("Redirecionando para o login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (err) {
      toast.error("Ops! Algo deu errado...");
    }
  };

  const getTechs = async () => {
    try {
      const response = await api.get("/profile");

      setTechs(response.data.techs);
    } catch {
      console.log("errorrrrr");
      return;
    }
  };

  const addTech = async (data) => {
    try {
      await api.post("/users/techs", data);
      getTechs();
    } catch (e) {
      toast.error("Ops, algo deu errado. Tente Novamente.");
    }
  };

  const deleteTech = async (techId) => {
    try {
      await api.delete(`/users/techs/${techId}`);
      getTechs();
    } catch {
      toast.error("Erro. Tente novamente.");
    }
  };

  useEffect(() => {
    if (token) getTechs();
  }, [token]);

  return (
    <UserContext.Provider
      value={{ login, registerUser, techs, setTechs, addTech, deleteTech }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
