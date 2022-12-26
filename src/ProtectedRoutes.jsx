import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const login = localStorage.getItem("user")
    return login 
};

const ProtectedRoutes = () => {

    const isAuth = useAuth();

    return isAuth ? <Outlet/> : <Navigate to={"/"}/>;

};

export default ProtectedRoutes;