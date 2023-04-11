import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Workorders } from "./pages/Workorders";
import Login from "./pages/Login";
import { useAuth } from "./hooks/useAuth";

import { Error404 } from "./pages/Erro404";
import { Actives } from "./pages/Actives";
import { Users } from "./pages/Users";
import { Layout } from "./layouts/Layout";

interface PrivateProps {
  Item: React.ComponentType;
}

const Private: React.FC<PrivateProps> = ({ Item }) => {
  const { isLogged } = useAuth();

  return isLogged === "true" ? <Item /> : <Login />;
};

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Private Item={Layout} />}>
        <Route path="/home" element={<Private Item={Home} />} />
        <Route path="/workorders" element={<Private Item={Workorders} />} />
        <Route path="/actives" element={<Private Item={Actives} />} />
        <Route path="/users" element={<Private Item={Users} />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
