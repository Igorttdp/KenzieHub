// React
import { createContext, useState, useContext } from "react";

// React Hook Form
import { SubmitHandler } from "react-hook-form/dist/types/form";

// Axios
import api from "../../services/api";

// Context
import { UserContext } from "../Auth/UserContext";

// Interfaces
import {
  IAddTechsDataProps,
  ITechsContextProps,
  ITechsDataProps,
  ITechsProviderProps,
} from "./interfaces";

// Toastify
import { toast } from "react-toastify";

export const TechsContext = createContext<ITechsContextProps>(
  {} as ITechsContextProps
);

const TechsProvider = ({ children }: ITechsProviderProps) => {
  const { getProfile } = useContext(UserContext);
  const [techs, setTechs] = useState<ITechsDataProps[] | []>([]);

  const addTech: SubmitHandler<IAddTechsDataProps> = async (
    data: IAddTechsDataProps
  ): Promise<void> => {
    try {
      console.log(data);
      await api.post("/users/techs", data);
      getProfile();
    } catch (e) {
      toast.error("Ops, algo deu errado. Tente Novamente.");
    }
  };

  const deleteTech = async (techId: string): Promise<void> => {
    try {
      await api.delete(`/users/techs/${techId}`);
      getProfile();
    } catch {
      toast.error("Erro. Tente novamente.");
    }
  };

  return (
    <TechsContext.Provider
      value={{
        techs,
        setTechs,
        addTech,
        deleteTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

export default TechsProvider;
