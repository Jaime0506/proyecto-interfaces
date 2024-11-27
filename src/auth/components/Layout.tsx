import React from "react"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <main className="flex h-svh items-center justify-center">
            {children}
        </main>
    )
}