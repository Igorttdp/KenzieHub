// Components
import FormContainer from "../../components/FormContainer";
import InputContainer from "../../components/InputContainer";
import MainButton from "../../components/MainButton";
import TextButton from "../../components/TextButton";

// Hook-Form/yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/toastCustom.css";

// Bootstrap
import MyBootstrapBtn from "../../components/MyBootstrapBtn";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/tooltipCustom.css";
import RegisterContainer from "./components/register";

// Context
import { useContext } from "react";
import { UserContext } from "../../context/Auth/UserContext";

// Interface
import { IUserRegisterProps } from "../../context/Auth/interfaces";

// Images
import exclamation from "../../img/exclamation.png";

const Register = () => {
  const { registerUser } = useContext(UserContext);

  const schema = yup
    .object({
      name: yup.string().required("Nome é obrigatório"),
      email: yup
        .string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      password: yup
        .string()
        .min(6, "Deve conter no mínimo 6 caracteres")
        .required("Senha é obrigatória"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Senhas não coincidem")
        .required("Você precisa confirmar sua senha"),
      bio: yup
        .string()
        .max(180, "Máximo de 180 caracteres")
        .required("Biografia é obrigatória"),
      contact: yup.string().required("Contato é obrigatório"),
      course_module: yup.string().required("Módulo do curso obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterProps>({
    resolver: yupResolver(schema),
  });

  return (
    <RegisterContainer>
      <div className="MainDiv__Header">
        <h1>Kenziehub</h1>
        <TextButton to={"/"}>Voltar</TextButton>
      </div>
      <div className="RegisterContainer">
        <div className="RegisterContainer__Header">
          <h2>Cria sua conta</h2>
          <span>Rápido e grátis, vamos nessa</span>
        </div>
        <FormContainer onSubmit={handleSubmit(registerUser)}>
          <InputContainer>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name && (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">{errors.name.message}</Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <MyBootstrapBtn
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                  >
                    <Image ref={ref} roundedCircle src={exclamation} />
                  </MyBootstrapBtn>
                )}
              </OverlayTrigger>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email && (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    {errors.email.message}
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <MyBootstrapBtn
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                  >
                    <Image ref={ref} roundedCircle src={exclamation} />
                  </MyBootstrapBtn>
                )}
              </OverlayTrigger>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password && (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    {errors.password.message}
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <MyBootstrapBtn
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                  >
                    <Image ref={ref} roundedCircle src={exclamation} />
                  </MyBootstrapBtn>
                )}
              </OverlayTrigger>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    {errors.confirmPassword.message}
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <MyBootstrapBtn
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                  >
                    <Image ref={ref} roundedCircle src={exclamation} />
                  </MyBootstrapBtn>
                )}
              </OverlayTrigger>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="name">Bio</label>
            <input
              id="bio"
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio && (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">{errors.bio.message}</Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <MyBootstrapBtn
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                  >
                    <Image ref={ref} roundedCircle src={exclamation} />
                  </MyBootstrapBtn>
                )}
              </OverlayTrigger>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact && (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    {errors.contact.message}
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <MyBootstrapBtn
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                  >
                    <Image ref={ref} roundedCircle src={exclamation} />
                  </MyBootstrapBtn>
                )}
              </OverlayTrigger>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="course_module">Nome</label>
            <select id="course_module" {...register("course_module")}>
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
          </InputContainer>
          <MainButton type="submit">Cadastrar</MainButton>
        </FormContainer>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </RegisterContainer>
  );
};

export default Register;
