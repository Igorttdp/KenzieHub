import MainRoutes from "./Routes/routes";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <MainRoutes />
    </UserProvider>
  );
}

export default App;
