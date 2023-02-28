import { Dispatch, ReactNode, SetStateAction } from "react";

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

export interface ITechsDataProps {
  title: string;
  status: string;
  id: string;
}

export type IAddTechsDataProps = Omit<ITechsDataProps, "id">;

export interface ITechsContextProps {
  techs: ITechsDataProps[] | [];
  setTechs: Dispatch<SetStateAction<ITechsDataProps[] | []>>;
  addTech(data: IAddTechsDataProps): Promise<void>;
  deleteTech(techId: string): Promise<void>;
}
