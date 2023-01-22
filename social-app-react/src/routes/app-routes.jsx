import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage";
import RegisterPage from "../pages/register/RegisterPage";

let AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/profile/:username" element={<ProfilePage />}/>
        </Routes>
    )
}
export default AppRoutes;