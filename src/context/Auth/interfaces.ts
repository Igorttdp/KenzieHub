import { ReactNode, SetStateAction } from "react";
import ITechProps from "../Technologies/interfaces";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserLoginProps {
  email: string;
  password: string;
}

export interface IUserRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUserProfileProps
  extends Omit<IUserRegisterProps, "confirmPassword" | "password"> {
  id: string;
  updated_at: Date | null;
  techs: [] | ITechProps[];
  works: [];
}

export interface IUserContextProps {
  login(data: IUserLoginProps): Promise<void>;
  registerUser(data: IUserRegisterProps): Promise<void>;
  profile: IUserProfileProps;
  setProfile: React.Dispatch<SetStateAction<IUserProfileProps>>;
  getProfile(): Promise<void>;
}
