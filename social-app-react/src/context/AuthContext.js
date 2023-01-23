import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "63cad159815804be7c7bacef",
    username: "Lyna",
    email: "lyna@email.com",
    password: "$2b$12$ru3hDL5g/NXvXptm/r/pY.p4E8aOS0BaMV53ruJJKl.wKhY9JQhPS",
    profile_picture: "person/1.jpeg",
    cover_picture: "",
    followers: [],
    followings: ["63cad169815804be7c7bacf1", "63cad14f815804be7c7baced"],
    isAdmin: false,
    createdAt: { $date: { $numberLong: "1674236249351" } },
    updatedAt: { $date: { $numberLong: "1674236368277" } },
    __v: { $numberInt: "0" },
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
