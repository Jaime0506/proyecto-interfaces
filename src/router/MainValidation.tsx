import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks/useRedux"
import { Loading } from "../components/Loading"

export const MainValidation = () => {

    const status = useAppSelector(state => state.auth.status)

    if (status === "authenticated") {
        return <Navigate to={'/app'}/>
    }

    if (status === "not-authenticated") {
        return <Navigate to={'/auth'} />
    }

    return <Loading />
}
