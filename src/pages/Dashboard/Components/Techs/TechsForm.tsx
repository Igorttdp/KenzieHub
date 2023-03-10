// React
import { BaseSyntheticEvent, useContext, useEffect } from "react";

// React Hook Form
import { useForm } from "react-hook-form";

// Context
import { TechsContext } from "../../../../context/Technologies/TechsContext";

// Interface
import { IAddTechsDataProps } from "../../../../context/Technologies/interfaces";

// Components
import CustomForm from "../Modal/CustomForm";

export interface iTechsProps {
  handleClose: () => void;
}

const TechsForm = ({ handleClose }: iTechsProps) => {
  const { addTech } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<IAddTechsDataProps>();

  const onFormSubmit = (e: BaseSyntheticEvent) => {
    handleSubmit(addTech)(e);
    handleClose();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        title: "",
        status: "",
      });
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <CustomForm onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Ex: Javascript"
          required
          {...register("title")}
        />
      </div>
      <div>
        <label htmlFor="status">Selecionar status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <button>Cadastrar Tecnologia</button>
    </CustomForm>
  );
};

export default TechsForm;
