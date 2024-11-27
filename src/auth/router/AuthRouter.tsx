import { Navigate, RouteObject } from "react-router-dom";
import { ValidationRoutes } from "../../utils/ValidationRoutes";
import { stateAuth } from "../../types";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

const validation = (state: stateAuth):boolean => {
    if (state === "not-authenticated") {
        // No debo estar aca
        return true
    }

    return false
}

export const AuthRouter: RouteObject = {
    path: 'auth',
    element: <ValidationRoutes validation={validation} path="/" />,
    children: [
        {
            path: '',
            element: <Navigate to={'login'} />
        },
        {
            path: 'login',
            element: <LoginPage />
        },
        {
            path: 'register',
            element: <RegisterPage />
        }
    ]
}