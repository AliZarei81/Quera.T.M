import { PropsWithChildren, createContext, useState } from "react";

interface IAuthProviderProps extends PropsWithChildren {}

interface IAuthContext {
  auth?: any;
  setAuth?: any;
}

const AuthContext = createContext<IAuthContext>({});

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
