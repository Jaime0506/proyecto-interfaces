import { Button, Navbar } from "@nextui-org/react"
import { useAuth } from "../../hooks/useAuth"

export const NavBar = () => {

    const { onLogout } = useAuth()

    return (
        <Navbar className="shadow-lg">
            <Button
                color="danger"
                onClick={onLogout}
            >
                Cerrar sesion
            </Button>
        </Navbar>
    )
}
