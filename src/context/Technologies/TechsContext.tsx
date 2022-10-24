import { createContext, useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const TechsContext = createContext<ITechsContextProps>(
  {} as ITechsContextProps
);

interface ITechsProviderProps {
  children: ReactNode;
}

export interface ITechsDataProps {
  title: string;
  status: string;
  id: string;
}

export type IAddTechsDataProps = Omit<ITechsDataProps, "id">;

interface ITechsContextProps {
  techs: ITechsDataProps[];
  addTech(data: IAddTechsDataProps): Promise<void>;
  deleteTech(techId: string): Promise<void>;
}

const TechsProvider = ({ children }: ITechsProviderProps) => {
  const [techs, setTechs] = useState<ITechsDataProps[]>([]);
  const token = localStorage.getItem("@kenziehub__token");

  const getTechs = async () => {
    try {
      const response = await api.get("/profile");

      setTechs(response.data.techs);
    } catch {
      console.log("errorrrrr");
      return;
    }
  };

  const addTech = async (data: IAddTechsDataProps): Promise<void> => {
    try {
      await api.post("/users/techs", data);
      getTechs();
    } catch (e) {
      toast.error("Ops, algo deu errado. Tente Novamente.");
    }
  };

  const deleteTech = async (techId: string): Promise<void> => {
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
    <TechsContext.Provider value={{ techs, addTech, deleteTech }}>
      {children}
    </TechsContext.Provider>
  );
};

export default TechsProvider;
