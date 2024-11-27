import { Button } from "@nextui-org/react"
import { useAuth } from "../../hooks/useAuth"

const UID_ADMIN = import.meta.env.VITE_ADMIN_UID

export const HomePage = () => {

    const { onLogout, user } = useAuth()

    const renderTest = () => {
        if (user?.id === UID_ADMIN) {
            return (
                <h1>Soy el admin</h1>
            )
        }

        return (
            <h1>No soy el admin</h1>
        )
    }

    return (
        <>
            {renderTest()}

            <Button
                onClick={onLogout}
            >
                cerrar sesion
            </Button>
        </>
    )
}
