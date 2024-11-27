import { Button } from "@nextui-org/react"
import { useAuth } from "../../hooks/useAuth"
import { AdminPage } from "./AdminPage"

const UID_ADMIN = import.meta.env.VITE_ADMIN_UID

export const HomePage = () => {

    const { onLogout, user } = useAuth()

   if (user?.id === UID_ADMIN) return <AdminPage />

    return (
        <>
            
            <Button
                onClick={onLogout}
            >
                cerrar sesion
            </Button>
        </>
    )
}
