import { RouteObject } from "react-router-dom";
import { AppRouter } from "../app/router/AppRouter";
import { AuthRouter } from "../auth/router/AuthRouter";
import { MainValidation } from "./MainValidation";

export const MainRoutes: RouteObject[] = [
    {
        path: '/',
        element: <MainValidation />,
    },
    AuthRouter,
    AppRouter,
]