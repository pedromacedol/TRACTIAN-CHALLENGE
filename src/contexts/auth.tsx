import { createContext, FC, FormEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient, QueryCache } from "react-query";
import IUsers from "../interfaces/users";
import { getData } from "../utils/requests";

type AuthContextProps = {
  handleLogin: () => void;
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  handleLogout: () => void;
  isLogged: string;
};

export const AuthContext = createContext<AuthContextProps>({
  handleLogin: () => {},
  handleChange: () => {},
  handleLogout: () => {},
  isLogged: "",
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const { data: users } = useQuery("users", () => getData("users"));
  const queryClient = useQueryClient();
  const login = queryClient.getQueryData("isLogged");
  const isLogged = login === "true" ? "true" : "false";

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  function EmailValidate(): boolean {
    let user: IUsers;
    for (user of users) {
      if (user.email === email) {
        queryClient.setQueryData("isLogged", "true");
        queryClient.setQueryData("email", email);
        queryClient.setQueryData("id", String(user.id));
        return true;
      }
    }
    return false;
  }

  function handleLogin() {
    if (EmailValidate() || isLogged === "true") {
      navigate("/home");
    } else {
      window.alert("Email Inválido");
    }
  }

  function handleLogout() {
    setEmail("");
    queryClient.setQueryData("isLogged", "false");
    queryClient.removeQueries("email");
    queryClient.removeQueries("id");
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleChange,
        handleLogout,
        isLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const queryCache = new QueryCache();
