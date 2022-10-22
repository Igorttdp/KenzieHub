import { createContext, ReactNode } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserLoginProps {
  email: string;
  password: string;
}

export interface IUserRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUserContextProps {
  login(data: IUserLoginProps): Promise<void>;
  registerUser(data: IUserRegisterProps): Promise<void>;
}

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const login = async (data: IUserLoginProps): Promise<void> => {
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
    <UserContext.Provider value={{ login, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
