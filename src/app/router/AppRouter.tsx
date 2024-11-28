import { RouteObject } from "react-router-dom";
import { ValidationRoutes } from "../../utils/ValidationRoutes";
import { stateAuth } from "../../types";
import { HomePage } from "../page/HomePage";
import { ChatBot } from "../components/ChatBot";

const validation = (status: stateAuth):boolean => {
    if (status === "authenticated") {
        return true
    }

    return false
}

export const AppRouter: RouteObject = {
    path: 'app',
    element: <ValidationRoutes validation={validation} path="/" app/>,
    children: [
        {
            path: '',
            element: <HomePage />,
        },
        {
            path: 'chatbot',
            element: <ChatBot />,
        },
    ]
}