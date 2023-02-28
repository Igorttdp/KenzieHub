import { useForm } from "react-hook-form";
import FormContainer from "../Dashboard/components/FormContainer";
import InputContainer from "../../components/InputContainer";
import MainButton from "../../components/MainButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/toastCustom.css";
import LinkButton from "../../components/LinkButton";
import LoginContainer from "./components/login";
import { useContext, useEffect } from "react";
import { IUserLoginProps, UserContext } from "../../context/Auth/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const token = localStorage.getItem("@kenziehub__token");
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup.string().required("Email é obrigatório"),
      password: yup.string().required("Senha é obrigatória"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginProps>({
    resolver: yupResolver(schema),
  });

  const showErrors = (errors: IErrorsProps)  => {
    if (errors.email) {
      toast.error(errors.email.message, {
        toastId: 1,
      });
    }

    if (errors.password) {
      toast.error(errors.password.message, {
        toastId: 2,
      });
    }
  };

  if (errors.email || errors.password) showErrors(errors)

  useEffect(() => {
    if (token) navigate("/Dashboard");
  });

  interface IErrorsProps {
    email?: {
      message?: string;
    };
    password?: {
      message?: string;
    }
  }

  return (
    <LoginContainer>
      <h1>Kenziehub</h1>
      <div className="loginContainer">
        <h2>Login</h2>

        <FormContainer onSubmit={handleSubmit(login)}>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Seu email"
              {...register("email")}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Sua senha"
              {...register("password")}
            />
          </InputContainer>
          <MainButton>Entrar</MainButton>
        </FormContainer>

        <div className="registerField">
          <span>Ainda não possui uma conta?</span>
          <LinkButton to={"/Register"}>Cadastre-se</LinkButton>
        </div>
      </div>

      <ToastContainer
        className="ToastCustom"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </LoginContainer>
  );
};

export default Login;
