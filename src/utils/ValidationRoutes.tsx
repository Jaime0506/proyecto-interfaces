import { LayoutApp } from '../app/components/LayoutApp'
import { NavBar } from '../app/components/NavBar'
import { Layout } from '../auth/components/Layout'
import { useAppSelector } from '../hooks/useRedux'
import { stateAuth } from '../types'
import { Navigate, Outlet } from 'react-router-dom'

interface ValidationRoutesProps {
    validation: (state: stateAuth) => boolean
    path: string
    app?: boolean
}

export const ValidationRoutes = ({ validation, path, app }: ValidationRoutesProps) => {

    const status = useAppSelector(state => state.auth.status)

    if (validation(status)) {

        if (app) {
            return (
                <div className='flex flex-col h-svh'>
                    <NavBar />
                    <LayoutApp>
                        <Outlet />
                    </LayoutApp>
                </div>
            )
        }

        return (
            <Layout>
                <Outlet />
            </Layout>
        )
    }

    return <Navigate to={path} />
}
