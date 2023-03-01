// React
import { createContext, useContext } from "react";

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
  ITechsProviderProps,
} from "./interfaces";

// Toastify
import { toast } from "react-toastify";

export const TechsContext = createContext<ITechsContextProps>(
  {} as ITechsContextProps
);

const TechsProvider = ({ children }: ITechsProviderProps) => {
  const { getProfile } = useContext(UserContext);

  const addTech: SubmitHandler<IAddTechsDataProps> = async (
    data: IAddTechsDataProps
  ): Promise<void> => {
    try {
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
        addTech,
        deleteTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

export default TechsProvider;
