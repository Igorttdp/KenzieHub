import { ReactNode } from "react";

export default interface ITechProps {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface ITechsProviderProps {
  children: ReactNode;
}

export interface IAddTechsDataProps {
  title: string;
  status: string;
}

export interface ITechsContextProps {
  addTech(data: IAddTechsDataProps): Promise<void>;
  deleteTech(techId: string): Promise<void>;
}
