export type stateAuth = "authenticated" | "not-authenticated" | "checking"

interface UserFormType {
    email: string
    password: string
    rPassword?: string
}

interface UserType {
    id: string | null
    name: string | null
    email: string | null
}

interface AuthType {
    status: stateAuth
    errorMessage: string | null
    user: UserType | null
}

interface ClassroomFormType {
    name: string
    description: string
    capacity: number
}

interface ClassRoomType {
    id: string
    name: string
    description: string
    capacity: number
}