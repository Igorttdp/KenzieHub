import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import FormContainer from "../styles/FormContainer";
import InputContainer from "../styles/InputContainer";
import MainButton from "../styles/MainButton";
import styles from "./styles.module.css";
import api from "../services/api.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/toastCustom.css";
import LinkButton from "./LinkButton";

const Login = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

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

  const showErrors = (errors, promisseError) => {
    console.log(promisseError)
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

  const login = (data) => {
    api.post("/sessions", data).then((res) => handleResolved(res)).catch(() => toast.error("Email ou Senha incorretos"));
  };

  const handleResolved = (res) => {
    if(res.status === 200) {
      setIsloggedIn(true)
    }
  };

  return (
    <div className={styles.MainDiv}>
      {(errors.email || errors.password) && showErrors(errors)}
      {isLoggedIn && (
        <Navigate to={"/Dashboard"} />
      )}
      <h1>Kenziehub</h1>
      <div className={styles.loginContainer}>
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

        <div className={styles.registerField}>
          <span>Ainda não possui uma conta?</span>
          <LinkButton to={"/Register"}>Cadastre-se</LinkButton>
        </div>
      </div>

      <ToastContainer
        className={styles.ToastCustom}
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
    </div>
  );
};

export default Login;
