import { Button, Input, Textarea } from "@nextui-org/react"
import { ClassroomFormType } from "../../../types"
import { useState } from "react"
import { CreateClassroom } from "../../../utils/CreateClassroom"

const INITIAL_STATE_FORM: ClassroomFormType = {
    name: '',
    description: '',
    capacity: 0
}

export const ClassroomsForms = () => {

    const [form, setForm] = useState({...INITIAL_STATE_FORM});
    const [isLoading, setIsLoading] = useState(false);

    const toggleIsLoading = () => {
        setIsLoading(state => !state)
        resetForm()
    }

    const resetForm = () => {
        setForm({
            name: '',
            description: '',
            capacity: 0
        })
    }

    const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsLoading(true)

        CreateClassroom(form, toggleIsLoading)
    }

    const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container shadow-2xl rounded p-6 flex flex-col gap-4">
            <section>
                Crea un espacio de trabajo
            </section>

            <section className="bg-green-500 p-8 rounded">
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
                    <Input
                        name="name"
                        type="text"
                        onChange={handleOnChangeInput}
                        value={form.name}
                        placeholder="Nombre del aula"
                    />

                    <Textarea
                        name="description"
                        type="text"
                        onChange={handleOnChangeInput}
                        value={form.description}
                        placeholder="Descripccion"
                    />

                    <Input
                        name="capacity"
                        type="number"
                        onChange={handleOnChangeInput}
                        value={form.capacity.toString()}
                        placeholder="Capacidad"
                    />

                    <Button
                        type="submit"
                        isLoading={isLoading}
                    >
                        Crear
                    </Button>
                </form>
            </section>
        </div>
    )
}