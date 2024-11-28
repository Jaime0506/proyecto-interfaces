import { Button, Navbar } from "@nextui-org/react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  const handleClickIn = () => {
    navigate("");
  };

  const handleClickChat = () => {
    navigate("chatbot");
  };

  return (
    <Navbar className="shadow-lg">
      <div className="flex gap-x-3">
        <Button color="success" onClick={handleClickIn}>
          Inicio
        </Button>
        <Button color="success" onClick={handleClickChat}>
          ChatBot
        </Button>
      </div>
      <Button color="danger" onClick={onLogout}>
        Cerrar sesion
      </Button>
    </Navbar>
  );
};
