import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";

function App() {
  return (
    <ProtectedRoutes>
      <MainLayout />
    </ProtectedRoutes>
  );
}

export default App;
