import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./localstorage";
import { User } from "../../models/user";
const defaultUser: User = {
  username: undefined,
}
const AuthContext = createContext({
  user: defaultUser,
  login:  (token: string)=>{},
  logout: ()=>{},
});

export const AuthProvider = ({ children }: {children: any}) => {
  const {storedValue: user, setValue: setUser} = useLocalStorage();
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (token: string) => {
    setUser(token);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user: user as User,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};