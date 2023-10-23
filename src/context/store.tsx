import { PropsWithChildren, createContext, useReducer } from "react";

interface User {
  refresh: string;
  access: string;
  user_id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: any;
  thumbnail: string;
}

interface IStoreContext {
  state: User;
  dispatch: any;
}

const initialState: User = {
  access: "",
  email: "",
  first_name: "",
  last_name: "",
  refresh: "",
  thumbnail: "",
  user_id: 0,
  username: "",
  phone_number: "",
};

export interface ContextAction<T, K> {
  type: T;
  payload?: K;
}

export enum UserActionTypes {
  USER_LOGGED_IN = "USER_LOGGED_IN",
  USER_LOGGED_OUT = "USER_LOGGED_OUT",
}

const reducer = (state: User, action: ContextAction<UserActionTypes, User>) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGGED_IN:
      console.log("action", action.payload);

      return {
        access: action?.payload?.access || "",
        email: action?.payload?.email || "",
        first_name: action?.payload?.email || "",
        last_name: action?.payload?.last_name || "",
        refresh: action?.payload?.refresh || "",
        thumbnail: action?.payload?.thumbnail || "",
        user_id: action?.payload?.user_id || 0,
        username: action?.payload?.username || "",
        phone_number: action?.payload?.phone_number || "",
      };
    case UserActionTypes.USER_LOGGED_OUT:
      return {
        access: "",
        email: "",
        first_name: "",
        last_name: "",
        refresh: "",
        thumbnail: "",
        user_id: 0,
        username: "",
        phone_number: "",
      };
    default:
      return state;
  }
};

interface IStoreProps extends PropsWithChildren {}

export const StoreContext = createContext<IStoreContext>({
  state: initialState,
  dispatch: () => null,
});

const Store: React.FC<IStoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
