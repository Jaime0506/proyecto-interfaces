import { Layout } from '../auth/components/Layout'
import { useAppSelector } from '../hooks/useRedux'
import { stateAuth } from '../types'
import { Navigate, Outlet } from 'react-router-dom'

interface ValidationRoutesProps {
    validation: (state: stateAuth) => boolean
    path: string
}

export const ValidationRoutes = ({ validation, path }: ValidationRoutesProps) => {

    const status = useAppSelector(state => state.auth.status)

    if (validation(status)) {
        return (
            <Layout>
                <Outlet />
            </Layout>
        )
    }

    return <Navigate to={path} />
}
