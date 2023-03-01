import { createContext, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  IUserContextProps,
  IUserLoginProps,
  IUserProfileProps,
  IUserProviderProps,
  IUserRegisterProps,
} from "./interfaces";

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<IUserProfileProps>({
    id: "",
    email: "",
    name: "",
    bio: "",
    contact: "",
    course_module: "",
    updated_at: null,
    techs: [],
    works: [],
  });

  const getProfile = async (): Promise<void> => {
    try {
      const response = await api.get("/profile");

      setProfile(response.data);
    } catch {
      toast.error("Ops... Ocorreu um erro!");
    }
  };

  const login = async (data: IUserLoginProps): Promise<void> => {
    try {
      const response = await api.post("/sessions", data, {
        headers: {
          Authorization: null,
        },
      });
      localStorage.setItem("@kenziehub__token", response.data.token);
      sessionStorage.setItem("@kenziehub__first_login", "true");
      setProfile(response.data.user);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      navigate("/Dashboard");
    } catch (e) {
      toast.error("Email ou Senha incorretos");
    }
  };

  const registerUser = async (data: IUserRegisterProps): Promise<void> => {
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

  return (
    <UserContext.Provider
      value={{ login, registerUser, profile, setProfile, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
