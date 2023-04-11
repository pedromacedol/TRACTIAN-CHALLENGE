import { createContext, FC, FormEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import IUsers from "../interfaces/users";
import { useTractianData } from "../hooks/useTractianData";
import { getData } from "../utils/requests";

type AuthContextProps = {
  handleLogin: () => void;
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  handleLogout: () => void;
  isLogged: string | null;
};

export const AuthContext = createContext<AuthContextProps>({
  handleLogin: () => {},
  handleChange: () => {},
  handleLogout: () => {},
  isLogged: null,
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const isLogged = localStorage.getItem("isLogged");

  const { data: users } = useTractianData<any>("users", getData("users"));
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  function EmailValidate(): boolean {
    let user: IUsers;
    for (user of users) {
      if (user.email === email) {
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("email", email);
        localStorage.setItem("id", String(user.id));
        return true;
      }
    }
    return false;
  }

  function handleLogin() {
    if (EmailValidate() || isLogged == "true") {
      navigate("/home");
    } else {
      window.alert("Email Inválido");
    }
  }

  function handleLogout() {
    setEmail("");
    localStorage.setItem("isLogged", "false");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
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
