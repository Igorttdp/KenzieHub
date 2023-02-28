// React
import { ReactNode } from "react";

// Context
import UserProvider from "./Auth/UserContext";
import TechsProvider from "./Technologies/TechsContext";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <UserProvider>
      <TechsProvider>{children}</TechsProvider>
    </UserProvider>
  );
};

export default Providers;
