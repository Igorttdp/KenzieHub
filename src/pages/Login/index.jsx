import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../styles/FormContainer";
import InputContainer from "../../styles/InputContainer";
import MainButton from "../../styles/MainButton";
import api from "../../services/api.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/toastCustom.css";
import LinkButton from "../../styles/LinkButton";
import LoginContainer from "./login";

const Login = () => {
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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const showErrors = (errors) => {
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

  const login = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      console.log(response)
      localStorage.setItem("@kenziehub__token", response.data.token);
      localStorage.setItem("@kenziehub__user", JSON.stringify(response.data.user));
      navigate("/Dashboard");
    } catch (e) {
      toast.error("Email ou Senha incorretos");
    }
  };

  return (
    <LoginContainer>
      {(errors.email || errors.password) && showErrors(errors)}
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
