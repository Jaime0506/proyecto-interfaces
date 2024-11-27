import { handleOnChecking, handleOnLogin, handleOnLogout } from "../store/auth/thunk"
import { UserFormType } from "../types"
import { useAppDispatch, useAppSelector } from "./useRedux"

export const useAuth = () => {
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const onLogin = (form: UserFormType) => {
        dispatch(handleOnLogin(form))
    }

    const onLogout = () => {
        dispatch(handleOnLogout())
    }

    const onChecking = () => {
        dispatch(handleOnChecking())
    }

    return {
        user,

        onLogin,
        onLogout,
        onChecking
    }
}