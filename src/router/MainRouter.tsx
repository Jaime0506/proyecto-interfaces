import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"
import { MainRoutes } from "./MainRoutes"
import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"

const router = createBrowserRouter(MainRoutes)

export const MainRouter = () => {

    const { onChecking } = useAuth()

    useEffect(() => {
        onChecking()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    )
}
