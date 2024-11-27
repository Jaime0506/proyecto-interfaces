import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import { UserFormType } from "../../types";
import { useAuth } from "../../hooks/useAuth";

const initialStateForm: UserFormType = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { onLogin } = useAuth()
    const [isVisible, setIsVisible] = useState(false);
    const [form, setForm] = useState(initialStateForm);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onLogin(form)
    }

    const toogleVisible = () => setIsVisible(state => !state)

    const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="bg-white p-8 rounded flex flex-col gap-8 border-2 border-green-400">
            <section>
                <h2>Inicia sesión</h2>
            </section>

            <section>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
                    <Input
                        autoComplete="."
                        name="email"
                        variant="bordered"
                        radius="none"
                        label="Correo electronico"
                        type="email"
                        endContent={
                            <div className="h-full flex items-center">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                        }
                        value={form.email}
                        onChange={handleOnChangeInput}
                    />
                    <Input
                        autoComplete="."
                        name="password"
                        variant="bordered"
                        radius="none"
                        label="Contraseña"
                        type={isVisible ? "text" : "password"}
                        endContent={
                            <button className="h-full w-4 flex items-center" onClick={toogleVisible} type="button" >
                                {
                                    isVisible ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>
                                }
                            </button>
                        }
                        value={form.password}
                        onChange={handleOnChangeInput}
                    />
                    <Button
                        type="submit"
                        radius="none"
                        className="bg-green-400"
                    >
                        Iniciar
                    </Button>
                </form>
            </section>
        </div>
    )
}
