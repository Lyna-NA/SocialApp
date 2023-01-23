import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage";
import RegisterPage from "../pages/register/RegisterPage";

let AppRoutes = () => {
  const { user } = useContext(AuthContext);
  console.log("user routes", user);
  return (
    <Routes>
      <Route path="/" element={user ? <HomePage /> : <RegisterPage />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <RegisterPage />}
      />
      <Route path="/profile/:username" element={<ProfilePage />} />
    </Routes>
  );
};
export default AppRoutes;
