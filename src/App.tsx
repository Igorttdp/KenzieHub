import MainRoutes from "./Routes/routes";
import Providers from "./context";
function App() {
  return (
    <Providers>
      <MainRoutes />
    </Providers>
  );
}

export default App;
