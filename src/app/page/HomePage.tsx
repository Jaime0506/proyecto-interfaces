import { Button } from "@nextui-org/react"
import { useAuth } from "../../hooks/useAuth"

export const HomePage = () => {
    const { onLogout } = useAuth()
    return (
        <Button
            onClick={onLogout}
        >
            cerrar sesion
        </Button>
    )
}
