export type stateAuth = "authenticated" | "not-authenticated" | "checking"

interface UserFormType {
    email: string
    password: string
    rPassword?: string
}

interface UserType {
    name: string | null
    email: string | null
}

interface AuthType {
    status: stateAuth
    errorMessage: string | null
    user: UserType | null
}